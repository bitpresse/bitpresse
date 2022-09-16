const config = require(`../../.ghost.json`).production;
module.exports = {
    siteUrl:
        process.env.NODE_ENV === `production`
            ? process.env.SITE_URL || config.siteUrl || `https://bitpresse.com`
            : `https://www.bitpresse.com`, // Site domain. Do not include a trailing slash!

    postsPerPage: 100, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

    siteTitleMeta: `Bitpresse`, // This allows an alternative site title for meta data for pages.
    siteDescriptionMeta: `Bitpresse est le plus grand contenu crypto en français sur le web, allant de l'actualité crypto à la blockchain, bitcoin, portefeuilles, bots et échanges.`, // This allows an alternative site description for meta data for pages.

    shareImageWidth: 1200, // Change to the width of your default share image
    shareImageHeight: 630, // Change to the height of your default share image

    shortTitle: `Bitpresse`, // Used for App manifest e.g. Mobile Home Screen
    siteIcon: `favicon.png`, // Logo in /static dir used for SEO, RSS, and App manifest
    backgroundColor: `#e9e9e9`, // Used for Offline Manifest
    themeColor: `#016EB1`, // Used for Offline Manifest
};
