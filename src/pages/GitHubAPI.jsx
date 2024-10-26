import React, { useEffect, useState } from 'react';

const GithubApi = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Replace with your GitHub username and API key
  const GITHUB_USERNAME = 'PRoBoT2004'; // replace with your GitHub username
  const GITHUB_API_KEY = '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'; // replace with your GitHub API key

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user profile
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          headers: {
            Authorization: `token ${GITHUB_API_KEY}`,
          },
        });
        if (!userResponse.ok) throw new Error('Error fetching user data');
        const userData = await userResponse.json();
        setUser(userData);

        // Fetch user repos
        const reposResponse = await fetch(userData.repos_url, {
          headers: {
            Authorization: `token ${GITHUB_API_KEY}`,
          },
        });
        if (!reposResponse.ok) throw new Error('Error fetching repos');
        const reposData = await reposResponse.json();
        setRepos(reposData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [GITHUB_USERNAME, GITHUB_API_KEY]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-white">GitHub Profile</h1>
      {user && (
        <div className="bg-white dark:bg-gray-700 p-6 rounded shadow-lg w-full max-w-md text-center mb-6">
          <img src={user.avatar_url} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{user.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View Profile on GitHub
          </a>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
      <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="bg-white dark:bg-gray-700 p-4 rounded shadow hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{repo.name}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {repo.description || 'No description available.'}
            </p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubApi;
