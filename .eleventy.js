module.exports = function (eleventyConfig) {
  // Copy assets through unchanged
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",
      output: "docs"
    },
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid"
  };
};