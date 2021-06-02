import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';
import styled from 'styled-components';
import Date from '../components/date';
import Page from '../components/Page';
import Card from '../components/styles/Card';
import { device } from '../lib/breakpoints';

const ArticlesGrid = styled.section`
  margin: 4rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  @media ${device.mobileM} {
    margin-top: 1.5rem;
  }
  @media ${device.laptop} {
    justify-content: center;
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
        <meta name="twitter:title" content="Blog | Jesus" />
        <meta
          name="twitter:description"
          content="This is my personal blog site where you will find about my journey learning web developemnt, personal opinions, and my life in general."
        />
        <meta
          name="twitter:image"
          content="https://blog.jesusrmz.com/img/profile.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://blog.jesusrmz.com/" />
        <meta property="og:title" content="Blog | Jesus" />
        <meta
          property="og:description"
          content="This is my personal blog site where you will find about my journey learning web developemnt, personal opinions, and my life in general."
        />
        <meta
          property="og:image"
          content="https://blog.jesusrmz.com/img/profile.png"
        />
        <meta
          name="description"
          content="This is my personal blog site where you will find about my journey learning web developemnt, personal opinions, and my life in general."
        />
        <title>Blog | Jesus</title>
        <meta name="description" content="Blog post page" />
        <link rel="icon" href="/signature_no_bg.png" />
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
