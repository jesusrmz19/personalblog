import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Page from '../../components/Page';
import Article from '../../components/styles/Article';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <Page>
      <Head>
        <meta name="twitter:title" content={postData.title} />
        <meta name="twitter:description" content={postData.description} />
        <meta
          name="twitter:image"
          content={`https://blog.jesusrmz.com/img/${postData.id}.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://blog.jesusrmz.com/" />
        <meta property="og:title" content={postData.title} />
        <meta property="og:description" content={postData.description} />
        <meta
          property="og:image"
          content={`https://blog.jesusrmz.com/img/${postData.id}.jpg`}
        />
        <meta name="description" content={postData.description} />
        <title>{postData.title}</title>
      </Head>
      <Article>
        <div className="article--head">
          <h1>{postData.title}</h1>
          <div className="article--date">
            <Date dateString={postData.date} />
          </div>
        </div>
        <div className="article--img">
          <img src={`/img/${postData.id}.jpg`} alt={`${postData.id}-img`}></img>
        </div>
        <div
          className="article--post"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <button className="article--return">
          <img src="/arrow.png"></img>
          <Link href="/">Go Back</Link>
        </button>
      </Article>
    </Page>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
