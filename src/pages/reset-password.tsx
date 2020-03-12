import React from 'react';
import { useFormik, FormikProps } from 'formik';
import * as yup from 'yup';
import { Redirect } from '@reach/router';
import queryString from 'query-string';

import BaseView from '@components/templates/BaseView';
import { passwordValidator } from '@utils/validators';
import * as api from '@services/auth';
import * as s from '@styles/reset-password';

interface Props {
	location: Location;
}

interface Query {
	code?: string;
}

const ResetPassword: React.FC<Props> = ({ location }) => {
	const query: Query = queryString.parse(location.search);
	const formik: FormikProps<{ password: string; confirmPwd: string }> = useFormik({
		initialValues: {
			password: '',
			confirmPwd: '',
		},
		validationSchema: yup.object().shape({
			password: yup
				.string()
				.matches(passwordValidator, '영문, 숫자, 특수문자 조합 8자 이상 입력해주세요.')
				.required('새로운 비밀번호를 꼭 입력해주세요.'),
			confirmPwd: yup
				.string()
				.oneOf([yup.ref('password'), null], '입력하신 비밀번호와 동일하게 입력해주세요.')
				.required('비밀번호를 다시 한 번 입력해주세요.'),
		}),
		validateOnChange: false,
		onSubmit: handleSubmit,
	});

	async function handleSubmit() {
		try {
			if (!query.code) throw new Error('Required parameter not exist');
			await api.resetPassword({ code: query.code, password: formik.values.password });
			alert('비밀번호가 변경되었습니다.');
		} catch (e) {
			console.error(e);
		}
	}

	return query.code ? (
		<BaseView title="비밀번호 변경하기">
			<s.Container>
				<form onSubmit={formik.handleSubmit}>
					<s.InputWrapper>
						<label htmlFor="password">새로운 비밀번호</label>
						<input
							id="password"
							name="password"
							type="password"
							onChange={formik.handleChange}
							value={formik.values.password}
						/>
						{formik.errors.password && <s.ErrorMessage>{formik.errors.password}</s.ErrorMessage>}
					</s.InputWrapper>
					<s.InputWrapper>
						<label htmlFor="confirmPwd">비밀번호 확인</label>
						<input
							id="confirmPwd"
							name="confirmPwd"
							type="password"
							onChange={formik.handleChange}
							value={formik.values.confirmPwd}
						/>
						{formik.errors.confirmPwd && <s.ErrorMessage>{formik.errors.confirmPwd}</s.ErrorMessage>}
					</s.InputWrapper>
					<s.Submit>변경</s.Submit>
				</form>
			</s.Container>
		</BaseView>
	) : (
		<Redirect noThrow={true} to="/404" />
	);
};

export default ResetPassword;
