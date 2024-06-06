module.exports = {
    siteMetadata: {
        title: "CMSMUN ALIGANJ",
        siteUrl: "https://cmsmunaliganj.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "CMS Model United Nations Aliganj",
                short_name: "CMSMUN",
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
                indentedSyntax: true,
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
