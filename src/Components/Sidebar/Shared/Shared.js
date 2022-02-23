import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// images
import sharedImg1 from "../../../Image/New folder/new-account.svg"
import sharedImg2 from "../../../Image/New folder/transfer-fund.svg"
import sharedImg3 from "../../../Image/New folder/deposit-fund.svg"
import sharedImg4 from "../../../Image/New folder/withdraw-fund.svg"
import "./Shared.css";
import { Typography } from "@material-ui/core";

const Shared = () => {
  return (
    <>
      <Container>
        <Row id="sharedRow">
          <Col md={6} className="sharedContent">
            <Link to="www.google.com" className="sharedContentLink">
                <img src={sharedImg1} alt="" />
                <h5>New Account</h5>
            </Link>
          </Col>
          <Col md={6} className="sharedContent">
          <Link to="www.google.com" className="sharedContentLink">
                <img src={sharedImg2} alt="" />
                <h5>Transfer Funds</h5>
            </Link>
          </Col>
          <Col md={6} className="sharedContent">
          <Link to="www.google.com" className="sharedContentLink">
                <img src={sharedImg3} alt="" />
                <h5>Deposit Funds</h5>
            </Link>
          </Col>
          <Col md={6} className="sharedContent">
          <Link to="www.google.com" className="sharedContentLink">
                <img src={sharedImg4} alt="" />
                <h5>Withdraw Funds</h5>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Shared;
