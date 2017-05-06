module.exports = function(kibana) {
	return new kibana.Plugin({
		uiExports: {
			visTypes: ['plugins/plugin-eskid3-exampleBars/plugin-eskid3-bars']
		}
	});
};