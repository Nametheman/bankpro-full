import React from "react";
import styled from "styled-components";
import playCirle from "../assets/icon/play-circle.png";

const StartTrial = () => {
  return (
    <Container>
      <div className="container">
        <div className="content">
          <div className="first">
            <h2>See how it works</h2>
            <p>Join the list of growing financial institutions on BankPro</p>
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
          font-size: 1.3rem;
          font-family: "cabinet-grotesk-medium";
        }
        p {
          color: #667085;
          margin-top: 0.8rem;
          font-size: 1rem;
        }
      }
      .second {
        display: flex;
        align-items: center;

        .demoBtn {
          height: 44px;
          width: 12vw;
          border: 1px solid #c5c5c5;
          outline: none;
          background: #fff;
          font-family: "cabinet-grotesk-bold";
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          border-radius: 10px;
          cursor: pointer;

          img {
            width: 1.3rem;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 780px) {
    .container {
      padding: 0 2rem;
      height: 100px;
      .content {
        flex-direction: column;
        gap: 2vw;
        .first {
          h2 {
            font-size: 14px;
            font-family: "cabinet-grotesk-bold";
          }
          p {
            color: #667085;
            font-size: 12px;
          }
        }
        .second {
          .demoBtn {
            width: 18vw;
            height: 6vw;
          }
        }
      }
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 779px) {
    .container {
      padding: 0 1rem;
      height: 100px;
      .content {
        flex-direction: row;
        gap: 2vw;
        .first {
          h2 {
            font-size: 14px;
            font-family: "cabinet-grotesk-bold";
          }
          p {
            color: #667085;
            font-size: 12px;
          }
        }
        .second {
          .demoBtn {
            width: 100%;
            height: 40px;
            padding: 0.3rem 0.4rem;
          }
        }
      }
    }
  }
`;
