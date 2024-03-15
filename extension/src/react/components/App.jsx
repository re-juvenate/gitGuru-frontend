import {useState} from 'react';

const App = () => {
  const [Res, setRes] = useState(null);

  const getRandomUser = async () => {
    // Get users
    const req = await fetch('http://loacalhost:3000/');
    const data = await resp.json();
    const msg = data["results"][0];
    
    // Get active tab
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const activeTab = tabs[0];
    // Get the response
    const tabResp = await chrome.tabs.sendMessage(activeTab.id, msg);
    setScriptResp(tabResp);
  };

  return (
    <></>
  );
};
export default App;