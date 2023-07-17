import "./App.scss";
import { useState, useEffect } from "react";
import { Navbar } from "./components";
import { Sidebar, Dashboard } from "./containers";

const App = () => {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [userSelection, setUserSelection] = useState("");
  const [userOptions, setUserOptions] = useState([]);
  const [userData, setUserData] = useState([]);
  const [userPage, setUserPage] = useState("DevOps");
  const [ready, setReady] = useState(true);

  // side effects
  useEffect(() => {
    const initialize = () => {
      setUserOptions([
        { name: "Fintech" },
        { name: "Splash" },
        { name: "Sofinmore" },
        { name: "Alcaset" },
        { name: "Exotech" },
      ]);

      if (userOptions?.length > 0) {
        setReady(true);
      }
    };
    initialize();
  }, [ready]);

  useEffect(() => {
    const fetchData = () => {
      if (userSelection !== "") {
        const data = [
          {
            division: "DevOps",
            client: {
              favourite: true,
              name: userSelection,
              HQ: "London",
              business: "Data Analytics",
              centers: 58,
              projects: 496,
              period: ["01/2001", "03/2020"],
              rank: "Primary",
            },
            projects: {
              completed: 209,
              ongoing: 43,
            },
            feedback: {
              loyalty: 10,
              technical: 2.8,
              service: 3.0,
              NPS: -45,
            },
            history: [],
          },
        ];
        setUserData([...data]);
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
        <div className="app text-white">
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
