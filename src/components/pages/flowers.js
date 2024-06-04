import React from 'react';
import "./flowers.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const Flowers = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
    {  breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2
      }
    }]
    };

  return (
    <div className='flowers'>
        <h2>
   Flower Page
      </h2>



      {<div  className='Carousel'> <section className="section-carousel">
    <div className="carousel">
      {/* <h2>Recent events</h2> */}

      <Slider {...settings}>
      
      <div className="box">
     
            <img src={"https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="Finlatics"/>
            
          </div>
     

      <div className="box">

        <img src={"https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"} alt="Money Melange"/>
        
      </div>

      <div className="box">
   
          <img src={"https://images.unsplash.com/photo-1476994230281-1448088947db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"} alt="kharche pr charcha"/>
          
      </div>


      <div className="box"> 
      
          <img src={"https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"} alt="speaker"/>
          
      </div>

      <div className="box">
  
        <img src={"https://images.unsplash.com/photo-1613539246066-78db6ec4ff0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"} alt="speaker"/>
        
      </div>

      <div className="box">

          <img src={"https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"} alt="speaker"/>
          
      </div>

      <div className="box">

          <img src={"https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGZsb3dlcnN8ZW58MHx8MHx8fDA%3D"} alt="speaker"/>
          
      </div>
     
      </Slider>
    </div>
  </section> </div>}
    </div>
  );
}


