function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// Esta función va y busca props y data de cualquier componente dentro de MyApp
// Si alguna otra página tiene getInitialProps on them, entonces vamos a esperar y fetch la información
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query; // get any query variables
  return { pageProps };
};
