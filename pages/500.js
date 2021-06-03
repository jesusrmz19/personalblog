import styled from 'styled-components';
import Page from '../components/Page';
import Link from 'next/link';
import GoBack from '../components/styles/GoBack';
import NotFound from '../components/styles/NotFound';

export default function Custom500() {
  return (
    <Page>
      <NotFound>
        <h1>500 - Server Problem</h1>
        <GoBack>
          <img src="/arrow.png"></img>
          <Link href="/">Go Back</Link>
        </GoBack>
      </NotFound>
    </Page>
  );
}
