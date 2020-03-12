import React from 'react';

import Logo from '@components/atoms/Logo';
import * as s from './Header.style';

interface Props {
	title?: string;
}

const Header: React.FC<Props> = ({ title }) => (
	<s.Container>
		<s.ContentWrapper>
			<Logo />
			{title && (
				<>
					<s.Divider />
					<h3>{title}</h3>
				</>
			)}
		</s.ContentWrapper>
	</s.Container>
);

export default Header;
