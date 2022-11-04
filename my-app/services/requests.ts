declare let properties: any;
export class Requests {
	api_url: any = 'http://localhost:1337';

	public async getTabs(doc: any) {
		let options = {
			method: 'POST',
			body: JSON.stringify(doc)
		};
		return fetch(`${this.api_url}/post/tabs`, options);
	}

	public async getSkills() {
		let options = {
			method: 'GET'
		};
		return fetch(`${this.api_url}/get/skills`, options);
	}

	public async getLangs() {
		let options = {
			method: 'GET'
		};
		return fetch(`${this.api_url}/get/langs`, options);
	}
}
