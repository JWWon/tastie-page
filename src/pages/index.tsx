import React from 'react';

import BaseView from '@components/templates/BaseView';
import Article from '@components/atoms/Article';
import { privacies } from '@utils/privacy';

const IndexPage: React.FC = () => (
	<BaseView title="개인정보처리방침" lastUpdate="2020.02.18">
		{privacies.map(privacy => (
			<Article key={privacy.title} {...privacy} />
		))}
	</BaseView>
);

export default IndexPage;
