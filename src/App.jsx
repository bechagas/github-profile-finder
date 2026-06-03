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
    let isMounted = true;

    const getData = async () => {
      try {
        const [user, repos] = await Promise.all([
          fetchUser(username),
          fetchRepos(username)
        ]);

        if (isMounted){
          setProfile(user);
          setRepos(repos);
        }
      } catch (error) {
        console.error(`Error to fetch data: ${error.message}`);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    if (username) getData();

    return () => { 
      isMounted = false; 
    };

  }, [username]);

  return (
    <div>
      <header className="hero">
        <div className="search-bar">
          <img src="./assets/Search.svg" alt="Search icon" />
          <input onKeyDown={handleUserInput} type="text" placeholder="username" />
        </div>
      </header>
      {!isLoading && profile.name &&
        <Main profile={profile} repos={repos} />
      }
    </div>
  );
};

export default App;