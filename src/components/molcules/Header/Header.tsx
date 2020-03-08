import React from 'react';

import logo from '@assets/images/tastie-logo.png';
import * as s from './Header.style';

const Header: React.FC = () => (
	<s.Container>
		<s.ContentWrapper>
			<s.Logo src={logo} />
			<s.Divider />
			<h3>Tastie 이용약관</h3>
		</s.ContentWrapper>
	</s.Container>
);

export default Header;
