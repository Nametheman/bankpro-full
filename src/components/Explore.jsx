import React from "react";
import styled from "styled-components";
import trial from "../assets/images/trial.svg";
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
      width: 70px;
    }

    .middle {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      h2 {
        color: #ffffff;
        /* font-size: 21px; */
        font-family: "cabinet-grotesk-bold";
      }
      button {
        background: #ff8200;
        border: none;
        outline: none;
        color: #ffffff;
        width: 400px;
        height: 50px;
        margin: 0 auto;
        font-size: 20px;
        font-family: "cabinet-grotesk-medium";
        border-radius: 30px;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    .content {
      .icon {
        width: 50px;
      }
      .middle {
        h2 {
          font-size: 16px;
        }
        button {
          width: 300px;
          height: 40px;
          font-size: 14px;
        }
      }
    }
  }
`;
