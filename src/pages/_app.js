import { Fragment } from "react";
import Head from "next/head";
import { Roboto, Poppins } from "@next/font/google";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper } from "../store";
import Preloader from "../components/Preloader";
import Layout from "../components/authLayout";

import "react-slidedown/lib/slidedown.css";
import "animate.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "swiper/swiper-bundle.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/style.scss";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
});

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ['normal'],
  subsets: ['latin'],
  display: "swap",
})

const MyApp = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);

  return (
    <Fragment>
      <Head>
        <title>e-plazacloud</title>
        <meta
          name="description"
          content=""
        />
        <meta
          name="keywords"
          content="ecommerce, electronics store, ethereum, eth, online store, responsive, retail, shopping, ecommerce store"
        />
      </Head>
      <style jsx global>{`
          :root {
            --ff-roboto: ${roboto.style.fontFamily};
            --ff-poppins: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <Provider store={store}>
        <PersistGate persistor={store.__persistor} loading={<Preloader/>}>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </Fragment>
  );
};

export default MyApp;
