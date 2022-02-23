import React, { useState, useEffect } from "react";
import "./Footer.css";
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//
import fLogo from "../../Image/logo.png";
import bLogo2 from "../../Image/FooterImage/mena-award-21-en-300x194.png";
import { Col, Row } from "react-bootstrap";
import slider1 from "../../Image/FooterImage/slider/1.PNG";
import slider2 from "../../Image/FooterImage/slider/2.PNG";
import slider3 from "../../Image/FooterImage/slider/3.PNG";
import slider4 from "../../Image/FooterImage/slider/4.PNG";
import slider5 from "../../Image/FooterImage/slider/5.PNG";

const Footer = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <footer>
      <div className="footerContainer">
        <Row id="fHRow">
          <Col md={6}>
            <img src={fLogo} alt="" width={"200px"} />
          </Col>
          <Col md={6}>
            <div className="col2content">
              <img src={bLogo2} alt="" width={"100px"} />
              <img src={bLogo2} alt="" width={"100px"} />
            </div>
          </Col>
        </Row>
        <br />
        <br />
        <hr />
      </div>
      {/* Slider */}
      <div>
        <Slider {...settings}>
          <div>
            <img src={slider1} alt="" width={"120px"} height={"120px"} />
          </div>
          <div>
            <img src={slider2} alt="" width={"120px"} height={"120px"} />
          </div>
          <div>
            <img src={slider3} alt="" width={"120px"} height={"120px"} />
          </div>
          <div>
            <img src={slider4} alt="" width={"120px"} height={"120px"} />
          </div>
          <div>
            <img src={slider5} alt="" width={"120px"} height={"120px"} />
          </div>
          <div>
            <img src={slider1} alt="" width={"120px"} height={"120px"} />
          </div>
        </Slider>
      </div>
      {/*  */}

      <p className="t-center" style={{color:"white"}}>
        Risk and warning CFDs are perplexing instruments and accompany a high
        danger of losing cash quickly because of influence. A high number of
        retail financial traders records losing money while trading CFDs with
        this broker. You ought to consider whether you see how CFDs work and
        regardless of whether you can stand to face the high challenge of losing
        your money.
      </p>
    </footer>
  );
};

export default Footer;
