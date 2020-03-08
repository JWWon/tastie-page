import { CreatePagesArgs } from 'gatsby';
import path from 'path';

export async function createPages({ actions }: CreatePagesArgs) {
	const { createPage } = actions;
	createPage({ path: '/privacy', context: '', component: path.resolve(__dirname, '../pages/privacy.tsx') });
}
