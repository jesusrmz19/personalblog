import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import styled from 'styled-components';
import Date from '../components/date';
import Page from '../components/Page';
import Card from '../components/styles/Card';

const ArticlesGrid = styled.section`
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  @media (max-width: 375px) {
    margin-top: 1.5rem;
  }
`;

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Page>
      <Head>
        <title>Blog | Jesus</title>
        <meta name="description" content="Blog post page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ArticlesGrid>
          {allPostsData.map(({ id, date, title, description }) => (
            <Link href={`/posts/${id}`} key={id}>
              <Card className="card">
                <div className="card--img">
                  <img src={`/img/${id}.jpg`} alt={`${id}-img`}></img>
                </div>
                <h3 className="card--title">{title}</h3>
                <p className="card--description">{description}</p>
                <div className="card--date">
                  <Date className="card--date" dateString={date} />
                </div>
              </Card>
            </Link>
          ))}
        </ArticlesGrid>
      </main>
    </Page>
  );
}
