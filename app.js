import { Github } from './src/github.js';
import { UI } from './src/ui.js';

// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search User
const searchUser = document.getElementById('search-username');

searchUser.addEventListener('keyup', (e) => {
  // Get input text

  const inputText = e.target.value;

  if (inputText !== '') {
    // HTTP Call
    github.getUser(inputText).then((data) => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
    ui.clearRepos();
  }
});
