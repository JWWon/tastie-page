import React from 'react';

import BaseView from '../components/templates/BaseView';
import SEO from '../components/seo';

const IndexPage: React.FC = () => (
	<BaseView>
		<SEO title="개인정보처리방침" />
		<h1>Hello Gatsby!</h1>
	</BaseView>
);

export default IndexPage;
