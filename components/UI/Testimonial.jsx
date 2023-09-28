import React from "react";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import SectionSubtitle from "./SectionSubtitle";
import network from "../../public/images/Connected world.png";
import Slider from "react-slick";
import classes from "../../styles/testimonial.module.css";

const Testimonial = () => {
  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6" className={`${classes.testimonial__img}`}>
            <Image alt="network-img" src={network} width="400" height="400" />
          </Col>

          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Testimonials" />
            <h4 className="mt-4 mb-5">What my client says</h4>

            <Slider {...settings}>
              
              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/ok.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>WORK EXPERIENCE</h6>
                  </div>
                </div>
                <div>
                  <h6>TWOWAITS TECHNOLOGIES PVT. LTD |</h6>
                </div>
                <p>
                  Full-Stack Developer Intern
                  Mar 2022 - April 2022 | Ahmednagar, MH , India
                </p>
                <div>
                  <h6>R.B TECH SERVICES |</h6>
                </div>
                <p>
                  full stack web developer intern
                  May 2019 - June 2019 | Ahmednagar, MH , India
                </p>

              </div>

              <div className={`${classes.testimonial__item}`}>
                <div className={`${classes.testimonial__client}`}>
                  <Image
                    alt="client-img"
                    src="/images/gra.png"
                    width="50"
                    height="50"
                    className=" rounded-2"
                  />

                  <div>
                    <h6>Education</h6>
                  </div>
                </div>
                <div>
                  <h6>AMRUTVAHINI COLLEGE OF ENGINEERING</h6>
                </div>
                <p>
                  Bachelor in Computer Engineering
                  jul 2023 | Ahmednagar, MH , India
                </p>
                <div>
                  <h6>GOVERNMENT POLYTECHNIC AHMEDNAGAR</h6>
                </div>
                <p>
                  Diploma in Computer Technology
                  Jan 2020 | Ahmednagar, MH , India
                </p>

              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
