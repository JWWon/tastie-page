import React from 'react';

import { Props } from './Article.type';
import * as s from './Article.style';

const Article: React.FC<Props> = ({ title, message, list }) => (
	<s.Wrapper>
		<s.Title>{title}</s.Title>
		{message && <s.Message>{message}</s.Message>}
		{list &&
			list.map((item, idx) => (
				<s.Content key={idx.toString()}>
					{`${idx + 1}) `}
					{item}
				</s.Content>
			))}
	</s.Wrapper>
);

export default Article;
