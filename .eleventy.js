module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./styles/tailwind.config.js");
  eleventyConfig.addWatchTarget("./styles/tailwind.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addPassthroughCopy("./views/pages/**/**/*.js");
  eleventyConfig.addPassthroughCopy("./views/pages/**/**/*.glb");
  eleventyConfig.addPassthroughCopy("./views/posts/**/**/*.mp4");
  function sortByOrder(values) {
    let vals = [...values]; // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
  }

  eleventyConfig.addFilter("sortByOrder", sortByOrder);

  return {
    dir: {
      input: "views",
      output: "dist",
    },
  };
};
