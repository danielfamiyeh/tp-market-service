const axios = require("axios");

class Client {
	constructor(apiKey) {
		this._apiKey = apiKey;
		this.bindMethods();
	}

	bindMethods() {
		const methods = Object.getOwnPropertyNames(Object.getPrototypeOf(this));
		methods
			.filter((method) => method !== "constructor")
			.forEach((method) => (this[method] = this[method].bind(this)));
	}

	URI(suffix = "") {
		return `https://api.finage.co.uk/${suffix}apikey=${this._apiKey}`;
	}

	async getStatus() {
		try {
			const status = await axios.get(this.URI("marketstatus?"));
			const { market, exchanges } = status.data;

			return { market, exchanges };
		} catch (error) {
			console.error(error);

			return {};
		}
	}

	async getSector() {
		try {
			const { data: sector } = await axios.get(
				this.URI("market-information/us/sector-performance?")
			);

			return sector;
		} catch (error) {
			console.error(error);

			return {};
		}
	}

	async getFeed() {
		try {
			const { data: feed } = await axios.get(this.URI("funds/rss-feed?"));

			return feed;
		} catch (error) {
			console.error(error);

			return {};
		}
	}

	async getSearchResults(market = "us", query) {
		try {
			const { data: results } = await axios.get(
				this.URI(`search/market/${market}/${query}?limit=5&`)
			);

			return results;
		} catch (error) {
			console.error(error);

			return {};
		}
	}
}

module.exports = Client;
