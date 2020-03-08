var path = require('path');

module.exports = {
	siteMetadata: {
		title: `Tastie`,
		description: `내가 뭘 먹고싶은지 나도 모르니까, Tastie`,
		author: `Tastie Guys`,
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Tastie 개인정보처리방침`,
				short_name: `Tastie`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#ffffff`,
				display: `minimal-ui`,
				icon: `src/assets/images/tastie-logo-with-background.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@assets': path.resolve(__dirname, 'src/assets'),
					'@components': path.resolve(__dirname, 'src/components'),
					'@pages': path.resolve(__dirname, 'src/pages'),
					'@utils': path.resolve(__dirname, 'src/utils'),
				},
				extensions: ['js', 'jsx', 'ts', 'tsx', 'png', 'jpg', 'jpeg'],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
