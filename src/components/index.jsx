import { useEffect, useState } from "react";
import User from "./user";
import Loader from "./Loader";
import "./style.css";

export default function GithubProfileFinder() {
  const [userName, setUserName] = useState("Hasnain-Ahmad48");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchGithubUserData() {
    if (!userName.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${userName}`);
      const data = await res.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching GitHub user:", error);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit() {
    fetchGithubUserData();
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search GitHub Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {loading && <Loader />}

      {!loading && userData !== null ? <User user={userData} /> : null}
    </div>
  );
}

