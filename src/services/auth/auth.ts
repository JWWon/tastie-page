import axios from 'axios';

import { ResetPasswordReq } from './auth.type';

const BASE_URL = '/auth';

export const resetPassword = (params: ResetPasswordReq) =>
	axios.patch<ResetPasswordReq, undefined>(`${BASE_URL}/password`, params);
