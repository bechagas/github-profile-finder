import { useState, useEffect } from "react";
import { fetchUser, fetchRepos } from "./service/api.js";
import Main from "./components/Main.jsx";

const App = () => {
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUserInput = (e) => {
    if (e.key === 'Enter'){
      setIsLoading(true);
      const username = e.target.value.trim();
      if (!username) return;
      setUsername(username);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const user = await fetchUser(username);
      const repos = await fetchRepos(username);
      setProfile(user);
      setRepos(repos);
      setIsLoading(false);
    };
    getData();
  }, [username]);

  return (
    <div>
      <header className="hero">
        <div className="search-bar">
          <img src="../assets/Search.svg" alt="Search icon" />
          <input onKeyDown={handleUserInput} type="text" placeholder="username" value="" />
        </div>
      </header>
      {!isLoading && 
        <Main profile={profile} repos={repos} />
      }
    </div>
  );
};

export default App;