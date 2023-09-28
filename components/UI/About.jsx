import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img01 from "../../public/images/img-01.png";
import img02 from "../../public/images/img-02.jpg";
import img03 from "../../public/images/img-03.png";
import img04 from "../../public/images/nodejs.jpg";
import img05 from "../../public/images/img-04.gif";


import classes from "../../styles/about.module.css";

const A_CV = '../../public/images/cv/A_CV.pdf'
const About = () => {
  const downloadFileURL = (url) => {
    fetch(url).then(response => response.blob()).then(blob => {
      const blobURL = window.URL.createObjectURL(new Blob([blob]))
      const filename = url.split('/').pop()
      const aTag = document.createElement('a');
      aTag.href = blobURL;
      aTag.setAttribute('Download', filename)
      document.body.append(aTag)
      aTag.click();
      aTag.remove();
    });

  };

  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Hello, I am Avinash Waghmare, a computer engineering student passionate about web development and App development. I have complite my Bachelor's degree in Computer Engineering and completed a diploma in Computer Technology. My educational background and internships have helped me develop a strong foundation in various programming languages such as Java, Python, C/C++, JavaScript, HTML/CSS, SQL (Postgres), and MongoDB.
              During my internships, I worked on developing various web applications using server-side technologies like PHP and Node.js, and client-side technologies such as Reactjs and Bootstrap. I also have experience in utilizing Git for version control and GitHub for collaborative projects.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Problem Solving
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Search A Lot
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  Creative Idea
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  High Quality
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn" onClick={() => { downloadFileURL(A_CV) }}>
                <Link href="https://drive.google.com/file/d/1JZ0Qgf2vPdjunkl2DVPa2MVIdNPoe95Z/view?usp=drive_link" >Download CV</Link>
              </button>
            </div>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div>
              </div>

              <div className=" d-flex flex-column mb-3">
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div>

                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div>
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img05} alt="about-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
