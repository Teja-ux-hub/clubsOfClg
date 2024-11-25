import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadline}>ThankYou</h1>
      <p>
        &copy; {new Date().getFullYear()} Contact for more information <a href="https://www.instagram.com/meh_teja/?__pwa=1">meh_teja</a>
      </p>
    </section>
  );
};

export default Footer;
