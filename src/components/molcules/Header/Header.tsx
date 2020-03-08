import React from 'react';

import Logo from '@components/atoms/Logo';
import * as s from './Header.style';

const Header: React.FC = () => (
	<s.Container>
		<s.ContentWrapper>
			<Logo />
			<s.Divider />
			<h3>Tastie 이용약관</h3>
		</s.ContentWrapper>
	</s.Container>
);

export default Header;
