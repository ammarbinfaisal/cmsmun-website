module.exports = {
    siteMetadata: {
        title: "CMS Aliganj Model United Nations",
        siteUrl: "https://cmsmunaliganj.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "CMS Aliganj Model United Nations",
                short_name: "cmsmun",
                start_url: "/",
                background_color: "#0e0e0e",
                theme_color: "#0e0e0e",
                display: "minimal-ui",
                icon: "src/images/logo.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ["src/sass/"],
            },
        },
        "gatsby-plugin-purgecss",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `committees`,
                path: `${__dirname}/src/images/committees`
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `bgs`,
                path: `${__dirname}/src/images/bgs`
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
    ],
};
