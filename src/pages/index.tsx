import React from 'react';
import { Link } from 'gatsby';

import BaseView from '@components/templates/BaseView';

const IndexPage: React.FC = () => (
	<BaseView title="Home">
		<Link to="/privacy">개인정보처리방침</Link>
	</BaseView>
);

export default IndexPage;
