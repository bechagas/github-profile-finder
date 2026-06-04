const Main = ({ profile, repos }) => {
  return (
    <main className="container">
      <div className="profile-header">
        <div className="avatar-wrapper">
          <img src={profile.avatar_url} alt={profile.name} className="avatar" />
        </div>

        <div className="stats">
          <div className="stat-box">
            <span className="stat-label">Followers</span>
            <div className="stat-divider"></div>
            <span className="stat-value">{profile.followers}</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Following</span>
            <div className="stat-divider"></div>
            <span className="stat-value">{profile.following}</span>
          </div>

          <div className="stat-box">
            <span className="stat-label">Location</span>
            <div className="stat-divider"></div>
            <span className="stat-value">{profile.location || "N/A"}</span>
          </div>
        </div>
      </div>

      <section className="profile-info">
        <h1>{profile.name}</h1>
        <p>{profile.bio || ""}</p>
      </section>

      <div className="repos-grid">
        {repos.map(repo => (
          <section className="repo-card" key={repo.id}>
            <h2>{repo.name}</h2>
            <p>{repo.description || "No description available"}</p>
            <div className="repo-meta">
              {repo.language && (
                <div className="meta-item">
                  <img src="/assets/Nesting.svg" alt="Language icon" />
                  <span>{repo.language}</span>
                </div>
              )}
              <div className="meta-item">
                <img src="/assets/Star.svg" alt="Star icon" />
                <span>{repo.stargazers_count}</span>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="view-all-container">
        <a href={`https://github.com/${profile.login}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="view-all">
          View all repositories
        </a>
      </div>
    </main>
  );
};

export default Main;