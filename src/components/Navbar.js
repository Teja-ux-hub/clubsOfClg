import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGsapDownStagger, useGsapUpward } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const fav = useRef(null);
  const logo = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [fav];

  useGsapDownStagger(liArr, 1.5);
  useGsapDownStagger(favArr, 2.6);
  useGsapUpward(logo, 2.2);

  return (
    <div className="navbar wrapper">
      <ul className="links">
        <li ref={li1}>
          <Link to="featured"></Link>
        </li>
        <li ref={li2}>
          <Link to="about"></Link>
        </li>
        <li ref={li3}>
          <Link to="gallery"></Link>
        </li>
      </ul>
      <div className="logo" ref={logo}>
        <Link to="/">
          <h1 style={{
            color: "black"
          }}>CMR TECHNICAL CAMPUS</h1>
        </Link>
      </div>
      <div className="favourite-link" ref={fav}>
        <Link to="favourites">Events Conducted</Link>
      </div>
    </div>
  );
};

export default Navbar;
