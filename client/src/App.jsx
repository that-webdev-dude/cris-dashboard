import "./App.scss";
import { useState, useEffect } from "react";
import { Navbar } from "./components";
import { Sidebar, Dashboard } from "./containers";

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [userSelection, setUserSelection] = useState("Alcaset");
  const [userOptions, setUserOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userPage, setUserPage] = useState("DevOps");
  const [ready, setReady] = useState(true);

  // side effects
  useEffect(() => {
    const initialize = async () => {
      try {
        const optionsResponse = await fetch("/clients");
        if (optionsResponse.ok) {
          const opitonsData = await optionsResponse.json();
          setUserOptions(opitonsData);
        } else {
          throw new Error("Error fetching client data");
        }
        setReady(true);
      } catch (error) {
        console.error(error);
      }
    };
    initialize();
  }, [ready]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userSelection !== "") {
          const current = userData.find((item) => item.name === userSelection);
          if (!current) {
            const response = await fetch(`clients/name/${userSelection}`);
            if (response.ok) {
              const data = await response.json();
              setUserData([data]);
            } else {
              throw new Error("Error fetching client data");
            }
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [userSelection]);

  // handlers
  const toggleSidebar = () => {
    setSidebarActive(!sidebarActive);
  };

  const handleUserSelection = (userSelection) => {
    setUserSelection(userSelection);
  };

  return (
    <div>
      {ready ? (
        <div className="app">
          <Sidebar menuActive={sidebarActive} onChange={toggleSidebar} />
          <div className="main">
            <Navbar
              onMenuClick={toggleSidebar}
              menuActive={sidebarActive}
              userOptions={userOptions}
              pageTitle={userPage}
              onUserSelection={handleUserSelection}
            />
            {userData?.length > 0 ? (
              <Dashboard data={userData} />
            ) : (
              <div>no data</div>
            )}
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default App;
