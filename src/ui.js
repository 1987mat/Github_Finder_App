class UI {
  constructor() {
    this.profile = document.getElementById('user-profile');
    this.repos = document.getElementById('user-repos');
  }

  showProfile(user) {
    // Render profile
    this.profile.innerHTML = `
    <div class="card-body">
      <div class="user-image">
        <img class="image" src="${user.avatar_url}">
      </div>
      <div class="user-info">
        <div class="user-stats">
          <span class="blue">Public Repos: ${user.public_repos}</span>
          <span class="gray">Public Gists: ${user.public_gists}</span>
          <span class="green">Followers: ${user.followers}</span>
          <span class="lightgreen">Following: ${user.following}</span>
        </div>
        <div class="user-data">
          <ul class="user-info-ul">
            <li><strong>Company:</strong> ${user.company} </li>
            <li><strong>Website:</strong> ${user.blog}</li>
            <li><strong>Twitter:</strong> ${user.twitter_username} </li>
            <li><strong>Location:</strong> ${user.location}</li>
            <li><strong>Member Since:</strong> ${user.created_at}</li>
          </ul>
        </div>
        <div class="btn-wrapper">
          <a href="${user.html_url}" target="_blank" class="profile-btn">
            <button>View Profile</button>
          </a>
        </div>
      </div>
      </div>
    </div>
    `;
  }

  showRepos(repos) {
    let output = '';
    repos.forEach((repo) => {
      output += `
      <div class="user-repo-info">
        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        <div class="span-elements">
          <span class="blue">Watchers: ${repo.watchers_count}</span>
          <span class="lightgreen">Forks: ${repo.forks_count}</span>
          <span class="gray">Stars: ${repo.stargazers_count}</span>
        </div>
      </div>
      `;
    });

    this.repos.innerHTML = output;
    document.querySelector('.repos-title').style.display = 'block';
  }

  showAlert(message, className) {
    this.clearAlert();
    const alertDiv = document.createElement('div');
    alertDiv.className = className;
    alertDiv.appendChild(document.createTextNode(message));
    const mainContainer = document.querySelector('.main-container');
    const searchContainer = document.querySelector('.search-container');
    mainContainer.insertBefore(alertDiv, searchContainer);

    // Remove alert after 2 sec
    setTimeout(() => {
      this.clearAlert();
    }, 2000);
  }

  clearAlert() {
    const currentAlert = document.querySelector('.alert-danger');
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = '';
  }

  clearRepos() {
    this.repos.innerHTML = '';
    document.querySelector('.repos-title').style.display = 'none';
  }
}

export { UI };
