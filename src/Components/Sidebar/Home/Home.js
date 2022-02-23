import React from "react";
import Shared from "../Shared/Shared";
import "./Home.css";
import { MdLibraryBooks } from "react-icons/md";
import { BiBox } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { FaBoxes } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <h4
        className="text-center"
        style={{ color: "#36414C", fontWeight: "600", margin: "0 0 15px 0" }}
      >
        Start Trading in 5 steps
      </h4>
      <div className="pagination">
        <div>
          <div className="page">1</div>
          <p>Choose Account Type</p>
        </div>
        <div>
          <div className="page">2</div>
          <p>Complete Profile</p>
        </div>
        <div>
          <div className="page">3</div>
          <p>Upload Documents</p>
        </div>
        <div>
          <div className="page">4</div>
          <p>Make Deposit</p>
        </div>
        <div>
          <div className="page">5 </div>
          <p>Start Trading</p>
        </div>
      </div>
      <Shared />

      <div className="research">
        <h3>X-TEN Research</h3>
        <div className="option">
          <div className="option-item">
            <div className="option-icon">
              <MdLibraryBooks />
            </div>
            <div className="option-info">
              <h5>DAILY REPORT</h5>
            </div>
          </div>
          <div className="option-item">
            <div className="option-icon">
              <BiBox />
            </div>
            <div className="option-info">
              <h5>WEEKLY REPORT</h5>
            </div>
          </div>
          <div className="option-item">
            <div className="option-icon">
              <BsBriefcaseFill />
            </div>
            <div className="option-info">
              <h5>
                DAILY ELLIOTT
                <br /> WAVES
              </h5>
            </div>
          </div>
          <div className="option-item">
            <div className="option-icon">
              <FaBoxes />
            </div>
            <div className="option-info">
              <h5>
                UPCOMING <br />
                WEBINAR
              </h5>
            </div>
          </div>
        </div>
      </div>

      <Container className="mt-4">
        <Row>
          <Col sm={6}>
            <div>
              <h5>NEWS</h5>
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <h5>Economic Calendar</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
