import React, { useState , FunctionComponent, useRef, useEffect} from 'react';
//@ts-ignore
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Skeleton from '@mui/material/Skeleton';
import '../styles/imageslider.css'


interface Image {
  image: string;
}

interface ImageSliderProps {
  slides: Image[]; // Change the type of the 'slides' prop to be an array of objects with an 'image' property
}

const ImageSlider: FunctionComponent<ImageSliderProps> = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [loaded, setLoaded] = useState(false);
  const image = useRef<HTMLImageElement | null>(null);
  const [height, setHeight] = useState(50);
  const [width, setWidth] = useState(50);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    if (image.current) {
      let newHeight = image.current.naturalHeight;
      let newWidth = image.current.naturalWidth;
      console.log(newHeight);
      console.log(newWidth);
      setHeight(newHeight);
      setWidth(newWidth);
    }
  }, [refresh]);

  const nextSlide = () => {
    setLoaded(false);
    setCurrent(current === length - 1 ? 0 : current + 1);
    // const curBool = {refresh};
    setRefresh(!refresh);
  };

  const prevSlide = () => {
    setLoaded(false);
    setCurrent(current === 0 ? length - 1 : current - 1);
    setRefresh(!refresh);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  // const height = 90;

  return (
    <section className='slider'>
      <div style={{display:'flex', alignContent:'center', alignItems:'center', justifyContent:'center', justifyItems:'center'}}>
        <div style={{height: '15rem'}}>
          {slides.map((slide, index) => {
            return (
              <div
                className={index === current ? 'slide active' : 'slide'}
                key={index}
                style={{position:'relative'}}
              >
                {index === current && (<>
                  <img src={slide.image} alt='travel image' ref={image} className={`image ${loaded ? "" : "trans" }`} style={{maxHeight: '15rem', maxWidth:'20rem'}} onLoad={()=>{setLoaded(true)}}/>
                  {!loaded &&
                  (
                  <div className={`${loaded ? "skeltrans" : "skelnorm"}`} style={{position:'absolute', zIndex:'110000', top: '0', bottom:'0'}}>
                    <Skeleton variant="rectangular" width={'20rem'} height={'15rem'} />
                  </div>
                  )}
                </>)}
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