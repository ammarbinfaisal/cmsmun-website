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
                short_name: "cmsmun aliganj",
                start_url: "/",
                background_color: "#1e1e1e",
                theme_color: "#1e1e1e",
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
        //{
        //    resolve: `gatsby-source-filesystem`,
        //    options: {
        //        name: `images`,
        //        path: `${__dirname}/src/images/`,
        //    },
        //},
        // {
        //     resolve: 'gatsby-plugin-react-svg',
        //     options: {
        //         rule: {
        //             include: /assets/
        //         }
        //     }
        // },
        "gatsby-plugin-sitemap",
        "gatsby-plugin-offline",
    ],
};
