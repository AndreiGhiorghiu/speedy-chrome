import { get as $get, set as $set, merge } from 'lodash';
import { create } from 'zustand';
import { emit } from '$events';

const zustand = create(() => ({
  user: null,
  url: null,
  project: null,
  projects: [],
}));

// reactive store to be used in react
export function useStore() {
  zustand(); // this triggers useState internally

  return store;
}

export const store = {
  get data() {
    return zustand.getState();
  },

  is(key, value) {
    const storeValue = zustand((state) => state[key]);

    return storeValue === value;
  },

  has(key) {
    return this.get(key) !== undefined;
  },

  value(key) {
    return zustand((state) => state[key]);
  },

  get(key) {
    return $get(zustand.getState(), key);
  },

  set(key, value) {
    zustand.setState({ ...$set(zustand.getState(), key, value) });
  },

  update(data) {
    const current = zustand.getState();

    const updated = merge(current, data);

    zustand.setState(updated);
  },
};

chrome?.storage?.local?.get?.('SP_STORE', (res) => {
  console.log('res.SP_STORE', res.SP_STORE);
  store.update(res.SP_STORE);
  emit('SET_PROJECTS', res.SP_STORE.projects);
  emit('SET_PROJECT', res.SP_STORE.project);
});

export default store;
