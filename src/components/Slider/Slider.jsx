import { useState, useEffect, useRef } from "react";
import { Logo } from "./logo";

// import { ExSliderList } from "./ExSliderList";

const Slider = () => {
  // Индекс текущего слайда
  const [activeIndex, setActiveIndex] = useState(0);
  // const [items, setitems] = useState([]);
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

  // Вычисляем индекс предыдущего слайда
  const prevImgIndex = activeIndex ? activeIndex - 1 : items.length - 1;
  // Вычисляем индекс следующего слайда
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
    </>
  );
};

export { Slider };
