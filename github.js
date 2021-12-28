class Github {
  constructor() {
    this.client_id = 'e50a495bf70bc664ef27';
    this.client_secret = 'd42ff384e37ab619ee6136e483eeed7fdfe68056';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();

    return {
      profile: profileData,
    };
  }
}
