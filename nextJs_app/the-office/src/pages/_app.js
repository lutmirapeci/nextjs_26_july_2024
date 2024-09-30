// global styles
import "../styles/global.css";
// custom components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div style={{ paddingBottom: "2rem" }}>
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
