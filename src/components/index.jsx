import {useEffect, useState} from "react";
import User from "./user";
import './style.css'

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Hasnain-Ahmad48");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName('')
    }
  
  }

  function handleSubmit() {
    fetchGithubUserData()
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data please wait</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search my username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={event => setUserName(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {
       userData !== null ? <User user={userData} /> :null
      }
    </div>
  );
}
