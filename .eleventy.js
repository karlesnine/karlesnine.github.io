module.exports = function(eleventyConfig) {

  // Copier les assets bruts vers _site
  eleventyConfig.addPassthroughCopy("src/assets");

  // Custom filter : date en français (ex: "Juillet 2026")
  eleventyConfig.addFilter("dateFr", function(date) {
    if (!date) return "";
    const d = new Date(date);
    const months = [
      "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
      "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    return months[d.getMonth()] + " " + d.getFullYear();
  });

  // Custom filter : limiter un tableau à N éléments
  eleventyConfig.addFilter("limit", function(arr, limit) {
    if (!arr) return [];
    return arr.slice(0, limit);
  });

  // Collections par activité (tag-based)
  eleventyConfig.addCollection("formationFacteursHumains", function(collectionApi) {
    return collectionApi.getFilteredByTag("facteurs-humains").reverse();
  });

  eleventyConfig.addCollection("formationIa", function(collectionApi) {
    return collectionApi.getFilteredByTag("ia").reverse();
  });

  eleventyConfig.addCollection("formationCybersecurite", function(collectionApi) {
    return collectionApi.getFilteredByTag("cybersecurite").reverse();
  });

  // Tous les articles (toutes activités confondues)
  eleventyConfig.addCollection("allArticles", function(collectionApi) {
    const fh = collectionApi.getFilteredByTag("facteurs-humains");
    const ia = collectionApi.getFilteredByTag("ia");
    const cy = collectionApi.getFilteredByTag("cybersecurite");
    return [...fh, ...ia, ...cy].sort((a, b) => {
      if (!a.data.date || !b.data.date) return 0;
      return new Date(b.data.date) - new Date(a.data.date);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_includes/layouts",
      data: "_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
