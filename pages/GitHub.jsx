import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GitHubPage = () => {
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState(null);

  useEffect(() => {
    const accessToken = process.env.REACT_APP_GITHUB_TOKEN; // Use environment variable

    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    axios.get('https://api.github.com/user', { headers })
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));

    axios.get('https://api.github.com/user/followers', { headers })
      .then(response => setFollowers(response.data.length))
      .catch(error => console.error(error));
  }, []);

  if (!profile || followers === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="github-page">
      <div className="profile-section">
        <img src={profile.avatar_url} alt="Profile" className="profile-picture" />
      </div>
      <div className="followers-section">
        <h2>{followers} Followers</h2>
      </div>
    </div>
  );
};

export default GitHubPage;
