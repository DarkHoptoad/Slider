import { useState, useEffect, useRef } from "react";
import { LeftArrow } from "./Arrows/LeftArrow";
import { RightArrow } from "./Arrows/RightArrow";
import { Logo } from "./logo";

const ExSider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayIdRef = useRef(null);

  const items = [
    <div>
      <h3>Header</h3>
      <span>
        Lorem ipsum dolor sit amet, consect etur adipiscing elit. Aenea uismod
        bibendum laoreet. Lorem ipsum dolor sit amet.
      </span>
    </div>,
    <div>
      <h3>Ultra mega long header</h3>
      <span>Lorem ipsum dolor sit amet.</span>
    </div>,
    <div>
      <h3>Heading</h3>
      <span>Lorem ipsum dolor sit amet.</span>
      <Logo />
    </div>,
  ];

  const nextSlide = () => {
    setActiveIndex((current) => {
      const res = current === items.length - 1 ? 0 : current + 1;
      return res;
    });
  };

  const prevSlide = () => {
    setActiveIndex((current) => {
      const res = current === 0 ? items.length - 1 : current - 1;
      return res;
    });
  };

  useEffect(() => {
    autoplayIdRef.current = setInterval(() => {
      setActiveIndex((current) => {
        const res = current === items.length - 1 ? 0 : current + 1;
        return res;
      });
    }, 5000);
    return () => {
      autoplayIdRef.current && clearInterval(autoplayIdRef.current);
      autoplayIdRef.current = null;
    };
    // eslint-disable-next-line
  }, [activeIndex]);

  const prevImgIndex = activeIndex ? activeIndex - 1 : items.length - 1;
  const nextImgIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;

  return (
    <>
      <div className="slider">
        <div className="slider-img prev" key={prevImgIndex}>
          {items[prevImgIndex]}
        </div>
        <div className="slider-img" key={activeIndex}>
          {items[activeIndex]}
        </div>
        <div className="slider-img next" key={nextImgIndex}>
          {items[nextImgIndex]}
        </div>
      </div>
      <RightArrow prevSlide={prevSlide} />
      <LeftArrow nextSlide={nextSlide} />
    </>
  );
};

export { ExSider };
