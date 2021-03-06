/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface Query {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			author: string;
		};
	};
}

type Meta =
	| { name: string; content: string; property?: undefined }
	| { property: string; content: string; name?: undefined };

interface Props {
	title: string;
	description?: string;
	lang?: string;
	meta?: ConcatArray<Meta>;
}

const SEO: React.FC<Props> = ({ description, lang, meta, title }) => {
	const { site } = useStaticQuery<Query>(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`,
	);

	const metaDescription = description || site.siteMetadata.description;

	return meta ? (
		<Helmet
			htmlAttributes={{ lang }}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	) : null;
};

SEO.defaultProps = {
	lang: `ko`,
	meta: [],
	description: ``,
};

export default SEO;
