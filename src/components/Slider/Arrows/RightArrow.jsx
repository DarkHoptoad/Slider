const RightArrow = (proprs) => {
  const { prevSlide = Function.prototype } = proprs;

  return (
    <>
      <svg
        width="14"
        height="25"
        viewBox="0 0 14 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rightArrow"
        onClick={prevSlide}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3822 12.5031L2.10365 1.19098C1.97947 1.0644 1.81209 0.991209 1.63691 0.98761C1.45573 0.98761 1.28176 1.0602 1.15157 1.19098C0.894209 1.43995 0.88161 1.8569 1.12398 2.12206C1.13358 2.13166 1.14258 2.14126 1.15157 2.15026L11.9448 12.983L1.15157 23.8344C0.894209 24.0834 0.88161 24.5009 1.12398 24.7655C1.13358 24.7751 1.14258 24.7847 1.15157 24.7937C1.41974 25.0523 1.83669 25.0523 2.10365 24.7937L13.3822 13.463C13.6335 13.1954 13.6335 12.7707 13.3822 12.5031Z"
          fill="#28A9E0"
        />
      </svg>
    </>
  );
};

export { RightArrow };
