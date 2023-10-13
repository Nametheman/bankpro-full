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
        <img src={discordLeft} alt="icon1" className="icon" />
        <div className="middle">
          <h2>Are you interested in trying out any of our other products?</h2>
          <button>Explore our other Amazing Products</button>
        </div>
        <img src={discordRight} alt="icon1" className="icon" />
      </div>
    </Container>
  );
};

export default Explore;

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
    padding: 0 4rem;

    .icon {
      width: 3vw;
    }

    .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
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
        width: 100%;
        height: 5vh;
        margin: 0 auto;
        font-size: 1.7vw;
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
