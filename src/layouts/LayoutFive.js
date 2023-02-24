import { Fragment } from "react";
import { HeaderTwo } from "../components/Header";
import { FooterFive, FooterOne } from "../components/Footer";
import ScrollToTop from "../components/scroll-to-top";

const LayoutFive = ({ children, navPositionClass }) => {
  return (
    <Fragment>
      <HeaderTwo navPositionClass={navPositionClass} />
      {children}
      <FooterOne />
      <ScrollToTop />
    </Fragment>
  );
};

export default LayoutFive;