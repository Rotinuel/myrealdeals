import React from "react";
import "./Main.css";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import CountUp from "react-countup";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'


const Main = () => {
  return (
    <section className="main-wrapper">
      <div className="paddings innerwidth flexCenter main-container">
        {/*left section*/}
        <div className="flexColStart main-left">
          <div className="main-title"> 
            <h1>
              Discover
              <br />
              <span className="dis">Africa's Best Deals in Real Estate;</span>
              <br />
              <span>Services & Products, Properties & Investments</span>
            </h1>
          </div>
          <div className="flexColStart main-des">
            <span className="secondaryText">On Africa's Number 1 integrated Real Estate Ecosystem</span>
          </div>
          <div className="flexCenter search-bar">
            <BiSearch color="var(--primary)" size={25} />
            <input type="text" placeholder="search here" />
            | Professional <IoMdArrowDropdown />
            <button className="button">search deals</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
              <CountUp start={4500} end={5200} duration={3} />
              <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
              <CountUp start={1200} end={2600} duration={3} />
              <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
           </div>
           <div className="flexColCenter stat">
              <span>
              <CountUp end={15}/>
              <span>+</span>
              </span>
              <span className="secondaryText">Award Wins</span>
           </div>
          </div>
          
          
        </div>

        {/*right section*/}
        <div className="flexCenter main-right paddings">
          <div className="image-container">
            <Swiper {...sliderSettings}>
              {
                data.map((card, i) =>(
                  <SwiperSlide key={i}>
                    <div className="r-card">
                      <img src={card.image} alt="slides"/>
                      <span className="secondaryText">
                        <span>{card.name}</span><br/>
                        <span>{card.details}</span>
                      </span>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
