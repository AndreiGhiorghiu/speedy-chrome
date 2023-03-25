import { get as $get, set as $set, merge } from 'lodash';
import { create } from 'zustand';

const zustand = create(() => ({
  user: null,
}));

export function useStore() {
  zustand();

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

export default store;
