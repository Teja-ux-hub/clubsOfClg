import { useRef, useEffect } from "react";
import holipic from './holipic.jpg';
import farhan from './farhan.jpeg';
import intel from './intel.jpg';
import intell from './intell.jpeg';
import lex from './lex.jpg';
import akri from './akri.jpg';
import fap from './fap.jpg';
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../hooks/gsap";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  useEffect(() => {
    // Add CSS for the custom cursor dynamically
    const style = document.createElement("style");
    style.textContent = `
      .custom-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.7);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }
      .custom-cursor img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      .custom-cursor img.visible {
        opacity: 1;
      }
    `;
    document.head.appendChild(style);

    // Custom cursor element
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    const cursorImage = document.createElement("img");
    cursor.appendChild(cursorImage);
    document.body.appendChild(cursor);

    // Mouse move listener
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    // Hover images for the cursor
    const hoverImages = [
      "https://media.licdn.com/dms/image/v2/D5603AQGQsT-3nsgglA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1703436150518?e=1738195200&v=beta&t=Y3f99ByfCLmfLt42aXdTEwCZSWE9kX_oFv_rVHVGv7M",
      intell,
      "https://th.bing.com/th?id=OIP.OBwgecBlkUF_aoB6sp_awQHaHU&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.OBwgecBlkUF_aoB6sp_awQHaHU&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
      "https://th.bing.com/th?id=OIP.OBwgecBlkUF_aoB6sp_awQHaHU&w=251&h=248&c=8&rs=1&qlt=90&o=6&dpr=1.4&pid=3.1&rm=2",
    ];

    // Mouse enter/leave events for images
    photosArr.forEach((photoRef, index) => {
      photoRef.current.addEventListener("mouseenter", () => {
        cursorImage.src = hoverImages[index];
        cursorImage.classList.add("visible");
        gsap.to(cursor, { scale: 5.5, duration: 0.3, });
      });

      photoRef.current.addEventListener("mouseleave", () => {
        cursorImage.classList.remove("visible");
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      });
    });

    // Attach event listener
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cursor.remove(); // Cleanup cursor element
      style.remove(); // Cleanup dynamic style
    };
  }, [photosArr]);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal">
        Ethereal <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas">
        Canvas <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage:
              `url(${holipic})`,
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage:
          `url(${intel})`          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage:
          `url(${fap})`          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage:
            `url(${akri})`           }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage:
            `url(${lex})`           }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
