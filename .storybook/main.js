module.exports = {
	webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};

module.exports = {
	addons: [
		'@storybook/addon-actions/register',
		'@storybook/addon-knobs/register',
		'@storybook/preset-create-react-app']
  }
	
module.exports = {
	stories: ['../src/**/*.stories.[tj]s'],
};


