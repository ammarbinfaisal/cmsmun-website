module.exports = {
    siteMetadata: {
        title: "CMS Aliganj's Model United Nations",
        siteUrl: "https://cmsmun.netlify.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "CMS Aliganj's Model United Nations",
                short_name: "cms mun",
                start_url: "/",
                background_color: "#2B3A42",
                theme_color: "#2B3A42",
                display: "minimal-ui",
                icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
            },
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                includePaths: ["src/sass/"],
            },
        },
        // {
        //     resolve: 'gatsby-plugin-react-svg',
        //     options: {
        //         rule: {
        //             include: /assets/
        //         }
        //     }
        // },
        // "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
    ],
};
