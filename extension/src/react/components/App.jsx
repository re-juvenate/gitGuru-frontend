import {useState} from 'react';

const App = () => {
  const [Res, setRes] = useState(null);

  const getRandomUser = async (para="default") => {
    // Get users
    const req = await fetch(`http://loacalhost:3000/${para}`);
    const data = await req.json();
    const msg = data["results"][0];
    const tabs = await chrome.tabs.query({active: true, currentWindow: true});
    const activeTab = tabs[0];
    const tabResp = await chrome.tabs.sendMessage(activeTab.id, msg);

    if(tabResp ){
      setRes(tabResp);
      getRandomUser(Res);
    }

  };

  return (
    <></>
  );
};
export default App;