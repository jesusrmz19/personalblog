import Link from 'next/link';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import Page from '../../components/Page';
import Article from '../../components/styles/Article';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Head from 'next/head';

export default function Post({ postData }) {
  return (
    <Page>
      <Head>
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
          <FontAwesomeIcon icon={faArrowLeft} />
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
