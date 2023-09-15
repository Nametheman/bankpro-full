import React from "react";
import styled from "styled-components";
import playCirle from "../assets/icon/play-circle.png";

const StartTrial = () => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <div className="first">
            <h2>Start your Free trial now</h2>
            <p>
              Join over 20+ companies already growing with our Internet Banking
              Platform.
            </p>
          </div>
          <div className="second">
            <button className="demoBtn">
              {" "}
              <img src={playCirle} alt="" /> Demo
            </button>{" "}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default StartTrial;

const Container = styled.div`
  margin: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: #f9fafb;
    width: 70%;
    height: 170px;
    border-radius: 10px;
    display: flex;
    padding: 0 4rem;
    align-items: center;
    .content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      .first {
        h2 {
          margin-bottom: 20px;
          font-family: "cabinet-grotesk-bold";
        }
        p {
          color: #667085;
          font-size: 14px;
        }
      }
      .second {
        display: flex;
        align-items: center;

        .demoBtn {
          height: 44px;
          width: 140px;
          border: 1px solid #c5c5c5;
          outline: none;
          background: #fff;
          font-family: "cabinet-grotesk-bold";
          font-size: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          border-radius: 10px;
          cursor: pointer;

          img {
            width: 17px;
          }
        }
      }
    }
  }
`;