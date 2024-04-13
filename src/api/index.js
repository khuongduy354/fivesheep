const backendUrl = "http://localhost:8000";
export class BEApi {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  // User API
  async getWool() {
    const res = await fetch(`${backendUrl}/me/wool`, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`,
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data.wool;
    }
    return null;
  }

  updateWool(wool) {
    return fetch(`${backendUrl}/me/wool`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.accessToken}`,
      },
      body: JSON.stringify({ wool }),
    });
  }

  // Attack API
  getAttack() {}
  cbAttack() {}
}
