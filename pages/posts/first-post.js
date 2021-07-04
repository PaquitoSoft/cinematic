import React from 'react';
import Head from 'next/head'

import Layout from '../../components/layout/layout';
import Alert from '../../components/alert/alert';

function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First post title</title>
			</Head>
			<h1>First post</h1>
			<Alert>Post yet to be written!</Alert>
		</Layout>
	);
}

export default FirstPost;
