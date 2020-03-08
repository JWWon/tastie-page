import React from 'react';

import Header from '../../molcules/Header';
import './BaseView.css';
import * as s from './BaseView.style';

const BaseView: React.FC = ({ children }) => (
	<>
		<Header />
		<s.ContentWrapper>{children}</s.ContentWrapper>
	</>
);

export default BaseView;
