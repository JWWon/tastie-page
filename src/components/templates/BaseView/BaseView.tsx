import React, { useEffect } from 'react';

import axiosBase from '@services/axios.default';
import Header from '@components/molcules/Header';
import SEO from '@components/SEO';
import LastUpdate from '@components/atoms/LastUpdate';
import './BaseView.css';
import * as s from './BaseView.style';

interface Props {
	title: string;
	header?: string;
	lastUpdate?: string;
}

const BaseView: React.FC<Props> = ({ title, header, lastUpdate, children }) => {
	useEffect(() => {
		axiosBase.config();
	}, []);

	return (
		<>
			<SEO title={title} />
			<Header title={header} />
			<s.ContentWrapper>
				<s.TitleWrapper>
					<h1>{title}</h1>
					{lastUpdate && <LastUpdate>{lastUpdate}</LastUpdate>}
				</s.TitleWrapper>
				{children}
			</s.ContentWrapper>
		</>
	);
};

export default BaseView;
