module.exports = function(kibana) {
	return new kibana.Plugin({
		uiExports: {
			visTypes: ['plugins/plugin-eskid3/plugin-eskid3']
		}
	});
};