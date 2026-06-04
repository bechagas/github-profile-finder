import { useState, useEffect } from "react";
import { fetchUser, fetchRepos } from "./service/api.js";
import Main from "./components/Main.jsx";

const App = () => {
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleUserInput = (e) => {
    if (e.key === 'Enter'){
      const trimmedValue = inputValue.trim();
      if (!trimmedValue) return;
      
      setIsLoading(true);
      setError(null);
      setUsername(trimmedValue);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const getData = async () => {
      try {
        const [user, reposData] = await Promise.all([
          fetchUser(username),
          fetchRepos(username)
        ]);

        if (isMounted){
          setProfile(user);
          setRepos(reposData);
        }
      } catch (error) {
        if (isMounted) {
          setError("User not found or API error. Please try again.");
          console.error(`Error to fetch data: ${error.message}`);
        }
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
          <img src="/assets/Search.svg" alt="Search icon" />
          <input 
            onKeyDown={handleUserInput} 
            type="text" 
            placeholder="username" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
      </header>
      
      <div className="container">
        {isLoading && <div className="loading">Loading...</div>}
        
        {error && <div className="error-message">{error}</div>}
        
        {!isLoading && !error && profile.name &&
          <Main profile={profile} repos={repos} />
        }
      </div>
    </div>
  );
};

export default App;