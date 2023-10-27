import React from "react";
import styled from "styled-components";
import trial from "../assets/images/trial.png";

const Trial = () => {
  return (
    <Container>
      <img src={trial} alt="" />
      <div className="content">
        <p>
          With its user-centric approach, advanced technology, and personalized{" "}
          <br />
          solutions, BankPro is transforming the digital banking experience for{" "}
          <br />
          users worldwide.
        </p>
        <button>Request a Demo</button>
      </div>
    </Container>
  );
};

export default Trial;

const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 90%;
  }
  .content {
    width: 90%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    p {
      color: #ffffff;
      font-size: 1.3vw;
      font-family: "cabinet-grotesk-regular";
    }
    button {
      background: #ff8200;
      border: none;
      outline: none;
      color: #ffffff;
      width: 20vw;
      height: 4vw;
      font-size: 1.7vw;
      font-family: "cabinet-grotesk-medium";
      border-radius: 30px;
      cursor: pointer;
    }
  }

  @media only screen and (max-width: 780px) {
    img {
      width: 90%;
      height: 90px;
    }
    .content {
      padding: 1rem 1rem;
      flex-direction: column;
      /* height: 200px; */

      p {
        font-size: 11px;
        font-weight: bold;
      }
      button {
        width: 20vw;
        height: 30px;
      }
      /* button {
        font-size: 15px;
      } */
    }
  }
`;
