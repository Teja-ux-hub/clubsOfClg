import { useRef } from "react";
import { useGsapFeaturedLeftShutter, useGsapFeaturedRightShutter } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";
import holicks from './holicks.mp4'
import image from './image.png'

const Featured = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <section
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Featuring codeOholics..." />
      <div className="featured-wrapper">
        <div className="featured-left">
          <span>CMRTC</span>
          <img
          src={image}            alt="POGO LOGO"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>Code Holicks....</span>
          <video
            src={holicks} // Replace with your video URL
            autoPlay
            loop
            muted
            style={{
              width: "100%", // Ensures the video fits horizontally
              height: "100vh", // Maintains aspect ratio
              objectFit: "cover", // Ensures the video covers the area without distortion
            }}
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
