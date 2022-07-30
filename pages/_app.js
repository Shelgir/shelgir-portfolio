import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import spruce from "react95/dist/themes/spruce";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={spruce}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
