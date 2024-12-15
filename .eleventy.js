module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('images-project');
	eleventyConfig.addPassthroughCopy('css');

	return {
		templateFormats: ['njk', 'html', 'md', 'liquid'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk'
	};
};
