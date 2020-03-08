import styled from 'styled-components';

export const Container = styled.header`
	background: #efefef;
	border-bottom: 1px solid #dadada;
`;

export const ContentWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	height: 4.8rem;
	padding: 1.2rem 1.6rem;
	display: flex;
	align-items: center;
`;

export const Logo = styled.img.attrs({ alt: 'Tastie Logo' })`
	height: 100%;
	object-fit: contain;
`;

export const Divider = styled.div`
	margin: 0 0.8rem;
	width: 1px;
	height: 100%;
	background: #888888;
`;
