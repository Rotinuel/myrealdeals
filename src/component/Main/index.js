import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <section className="main-wrapper">
      <div className="paddings innerwidth flexCenter main-container">
        {/*left section*/}
        <div className="flexColStart main-left">
          <div className="main-title">
          <div className="red-circle"/>
            <h1>
              Discover<br />
              <span className="dis">Africa's Best Deals in Real Estate;</span><br/>
              <span>Services & Products, Properties & Investments</span>
            </h1>
          </div>
          <div className="flexColStart main-des">
            <span>On Africa's Number 1 integrated Real Estate Ecosystem</span>
          </div>
          <div className="search-bar">search bar</div>
        </div>

        {/*right section*/}
        <div className="flexCenter main-right">
          <div className="image-container">
            <img src="./Adamu_Builder.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
