import React, { useState , FunctionComponent} from 'react';
//@ts-ignore
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';



interface Image {
  image: string;
}

interface ImageSliderProps {
  slides: Image[]; // Change the type of the 'slides' prop to be an array of objects with an 'image' property
}

const ImageSlider: FunctionComponent<ImageSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <div style={{display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center', justifyItems:'center'}}>
        <div style={{height: '15rem'}}>
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
              >
                {index === current && (
                  <img src={slide.image} alt='travel image' className='image' style={{maxHeight: '15rem', maxWidth:'20rem'}}/>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', justifyItems:'center', paddingTop:'1rem'}}>
          <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
          <span style={{paddingLeft:'2rem', paddingRight:'2rem', width:'fit-content'}}>{current + 1} / {length}</span>
          <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
          </div>
    </section>
  )
};

export default ImageSlider