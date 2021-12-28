class UI {
  constructor() {
    this.profile = document.getElementById('user-profile');
  }
  showProfile(user) {
    // Render user profile
    this.profile.innerHTML = `
    <div class="card-body">
      <div class="row-1">
        <img class="image" src="${user.avatar_url}">
        <button class="profile-btn"><a href="${user.html_url}" target="_blank">View Profile</a></button>
        <span>Public Repos: ${user.public_repos}</span>
        <span>Public Gists: ${user.public_gists}</span>
        <span>Followers: ${user.followers}</span>
        <span>Following: ${user.following}</span>
      </div>
      <div class="user-info">
        <ul class="user-info-ul">
          <li>Company:${user.company} </li>
          <li>Website: ${user.blog}</li>
          <li>Location: ${user.location}</li>
          <li>Member Since: ${user.created_at}</li>
          <li>Company:${user.twitter_username} </li>
        </ul>
      </div>

    
    </div>
    `;
  }

  showAlert(message, className) {
    this.clearAlert();
    const alertDiv = document.createElement('div');
    alertDiv.className = className;
    alertDiv.appendChild(document.createTextNode(message));
    console.log(typeof message);
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
}
