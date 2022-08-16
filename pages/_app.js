import "../styles/globals.css";
import { ThemesProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemesProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemesProvider>
    </>
  );
}

export default MyApp;
