import React from 'react';
import Head from 'next/head';
import Link from 'next/link'
import cn from 'classnames';

import { getSortedPostsData } from '../lib/posts';

import Layout, { siteTitle } from '../components/layout/layout';
import Date from '../components/date/date';

import utilStyles from '../styles/utils.module.css';

function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>[Your Self Introduction]</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>

			<section className={cn(utilStyles.headingMd, utilStyles.padding1px)}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date}></Date>
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export default Home;

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: { allPostsData }
	};
}
