import styled from 'styled-components';

import logo from '@assets/images/tastie-logo.png';

export const Logo = styled.img.attrs({
	src: logo,
	alt: 'Tastie Logo',
})`
	height: 100%;
	object-fit: contain;
`;
