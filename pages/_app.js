import BottomHeader from "../Components/BottomHeader/BottomHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="main">
      <Component {...pageProps} />

      <section className="">
        <BottomHeader></BottomHeader>
      </section>
    </div>
  );
}

export default MyApp;
