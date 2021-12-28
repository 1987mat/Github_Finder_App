class Github {
  constructor() {
    this.client_id = 'e50a495bf70bc664ef27';
    this.client_secret = 'd42ff384e37ab619ee6136e483eeed7fdfe68056';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    const reposData = await reposResponse.json();

    return {
      profile: profileData,
      repos: reposData,
    };
  }
}
