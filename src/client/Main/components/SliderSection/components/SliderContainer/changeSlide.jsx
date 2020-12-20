export const changeSlide = (actualSlide,sliderItems,setActualSlide) => {
  actualSlide < sliderItems.length - 1
    ? setActualSlide(actualSlide + 1)
    : setActualSlide(0);
};
