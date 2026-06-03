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
            <span className="stat-value">{profile.followers}</span>
          </div>

          <div class="stat-box">
            <span class="stat-label">Following</span>
            <span class="stat-value">{profile.following}</span>
          </div>

          <div class="stat-box">
            <span class="stat-label">Location</span>
            <span class="stat-value">{profile.location || 'N/A'}</span>
          </div>
        </div>
      </div>

      <section className="profile-info">
        <h1>{profile.name}</h1>
        <p>{profile.bio || ''}</p>
      </section>

      <div className="repos-grid">
        {repos.map(repo => (
          <section className="repo-card">
            <h3>{repo.name}</h3>
            <p>{repo.description} || </p>
            {repo.license && <p>License: {repo.license.name}</p>}
          </section>
        ))}
      </div>
    </main>
  );
};

export default Main;