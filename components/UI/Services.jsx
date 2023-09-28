import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem title="App Development" icon="ri-apps-line" />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>

              <ServicesItem
                title="Full-Stack Development"
                icon="ri-code-s-slash-line"
              />
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
            It is very important for the customer to pay attention to the adipiscing process. I don't care
              We are guilty of the duties of the body, never of desire, for it is expedient
              it will happen to the pains, they do not know anything about the pleasures of that sage!
              The flight of pains, flexibility, and, please, please some of the little accusers!
              Let me come, not a distinction to ease the pain of laborious things
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
