import * as React from 'react';
import './Popup.css';
import BottomMenu from '../../components/StickyBottomNavigation';
import StickyHeader from '../../components/StickyHeader';
import Login from '../../components/LogIn';
import ChatContainer from '../../containers/ChatContainer/ChatContainer';
import SettingsContainer from '../../containers/SettingsContainer/SettingsContainer';
import FeedContainer from '../../containers/FeedContainer/FeedContainer';
import { Toaster } from 'react-hot-toast';
import { useStore } from '$store';
import { on } from '$events';

const Popup = () => {
  // const url = chrome.extension.getURL('options.html');
  const [selected, setSelected] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const store = useStore();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setSelected(newValue);
  };

  on('LOGIN', (data) => {
    setIsLoggedIn(data);
  });

  on('LOGOUT', () => {
    setIsLoggedIn(false);
  });

  React.useEffect(() => {
    chrome?.storage?.local?.get?.('SP_STORE', (res) => {
      setIsLoggedIn(res?.SP_STORE?.user);
    });
  }, [store]);

  return (
    <div className="App">
      <Toaster position="top-right" />
      <StickyHeader title={'SPEEDY'} />
      {(!isLoggedIn && <Login />) || (
        <>
          {selected === 0 && <ChatContainer />}
          {selected === 1 && <FeedContainer />}
          {selected === 2 && <SettingsContainer />}
          <BottomMenu onSelect={handleChange} selectedValue={value} />
        </>
      )}
    </div>
  );
};

export default Popup;
