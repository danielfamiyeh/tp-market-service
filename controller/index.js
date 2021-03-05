const Finage = require("./../lib/finage");
const finageClient = new Finage(process.env.FINAGE_KEY);

module.exports = {
	getStatus: async (req, res) => {
		const status = await finageClient.getStatus();

		res.json(status);
	},

	getSector: async (req, res) => {
		const sectorPerformance = await finageClient.getSector();

		res.json(sectorPerformance);
	},

	getFeed: async (req, res) => {
		const feed = await finageClient.getFeed();

		res.json(feed);
	},

	getSearchResults: async (req, res) => {
		const { market, query } = req.params;
		const results = await finageClient.getSearchResults(market, query);

		res.json(results);
	},
};
