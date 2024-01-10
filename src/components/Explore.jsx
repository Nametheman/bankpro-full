import React from "react";
import styled from "styled-components";
import trial from "../assets/images/trial.png";
import discordLeft from "../assets/icon/discordLeft.svg";
import discordRight from "../assets/icon/discordRight.svg";

const Explore = () => {
  return (
    <Container>
      <img src={trial} alt="" />
      <div className="content">
        <h2>Talk to us today</h2>
        <button>Request a demo</button>
      </div>
    </Container>
  );
};

export default Explore;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 90%;
  margin: 4rem auto 0 auto;
  img {
    width: 100%;
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;

    h2 {
      color: #ffffff;
      font-family: "cabinet-grotesk-bold";
      font-size: 1.7vw;
    }
    button {
      background: #ff8200;
      border: none;
      outline: none;
      color: #ffffff;
      width: 220px;
      height: 5vh;
      font-size: 1rem;
      font-family: "cabinet-grotesk-medium";
      border-radius: 30px;
      cursor: pointer;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 779px) {
    img {
      width: 100%;
    }
    .content {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;

      h2 {
        color: #ffffff;
        font-family: "cabinet-grotesk-bold";
        font-size: 0.8rem;
      }
      button {
        background: #ff8200;
        border: none;
        outline: none;
        color: #ffffff;
        width: unset;
        padding: 0.3rem 1.5rem;
        font-size: 0.8rem;
        font-family: "cabinet-grotesk-medium";
        border-radius: 30px;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 780px) {
    img {
      width: 90%;
      height: 80px;
    }
    .content {
      width: 97%;
      .middle {
        gap: 0.3rem;

        button {
          width: 70%;
          height: 20px;
        }
        h2 {
          color: #ffffff;
          font-family: "cabinet-grotesk-bold";
          font-size: 12px;
        }
      }
    }
  }
`;
