import styled from 'styled-components';
import Page from '../components/Page';

const NotFound = styledyled.div`
  min-height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Custom404() {
  return (
    <Page>
      <NotFound>
        <h1>404 - Blog not found</h1>
      </NotFound>
    </Page>
  );
}
