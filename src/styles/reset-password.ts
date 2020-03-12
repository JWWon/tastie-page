import styled from 'styled-components';

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 1.6rem;

	@media screen and (max-width: 600px) {
		width: 100%;
		padding: 0;
	}

	@media screen and (min-width: 601px) {
		max-width: 20rem;
	}
`;

export const InputWrapper = styled.div`
	padding: 0.5rem 0 1.2rem;
`;

export const ErrorMessage = styled.p`
	color: #f66363;
`;

export const Submit = styled.button.attrs({
	type: 'submit',
})`
	width: 100%;
	background-color: #1972f8;
	padding: 0.8rem 1.2rem;
	margin: 0.4rem 0 0;
	border: none;
	border-radius: 0.4rem;
	cursor: pointer;
	font-size: 1rem;
	color: white;
`;
