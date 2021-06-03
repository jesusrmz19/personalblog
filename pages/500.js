import styled from 'styled-components';
import Page from '../components/Page';

const NotFound = styled.div`
  height: calc(100vh - 100px - 47px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-top: -3rem;
  }
`;

export default function Custom500() {
  return (
    <Page>
      <NotFound>
        <h1>500 - Server Problem</h1>
      </NotFound>
    </Page>
  );
}
