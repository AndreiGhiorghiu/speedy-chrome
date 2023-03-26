import * as React from 'react';
import './Popup.css';
import BottomMenu from "../../components/StickyBottomNavigation";
import StickyHeader from "../../components/StickyHeader";
import Login from "../../components/LogIn";
import ChatContainer from "../../containers/ChatContainer/ChatContainer";
import SettingsContainer from "../../containers/SettingsContainer/SettingsContainer";
import FeedContainer from "../../containers/FeedContainer/FeedContainer";
import { Toaster } from 'react-hot-toast';

const Popup = () => {
  // const url = chrome.extension.getURL('options.html');
    const [selected, setSelected] = React.useState(0);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setSelected(newValue);
    };

  return (
    <div className="App">
        <Toaster position='top-right' />
        <StickyHeader title={'SPEEDY'}/>
        <Login />
            {/* {selected === 0 && <ChatContainer/>}
            {selected === 1 && <FeedContainer/>}
            {selected === 2 && <SettingsContainer/>}
      <BottomMenu onSelect={handleChange} selectedValue={value} /> */}
    </div>
  );
};

export default Popup;
