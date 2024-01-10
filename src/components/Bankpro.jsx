import React, { useState } from "react";
import styled from "styled-components";
import arrow from "../assets/images/last_arrow.svg";
import phone_mock from "../assets/images/phone_mock.svg";
import corporate_mock from "../assets/images/corporate_mock.png";
import iosStore from "../assets/images/iosStore.svg";
import playStore from "../assets/images/playStore.svg";

const Bankpro = () => {
  const [activeTab, setActiveTab] = useState("individual");
  return (
    <Wrapper>
      <img src={arrow} alt="left_arrow" className="arrow" />
      <div className="content">
        <div className="left">
          <div className="viewSelectContainer">
            <button
              className={`individual ${
                activeTab === "individual" ? "active" : ""
              }`}
              onClick={() => setActiveTab("individual")}
            >
              Individual Internet Banking
            </button>
            <button
              className={`corporate ${
                activeTab === "corporate" ? "active" : ""
              }`}
              onClick={() => setActiveTab("corporate")}
            >
              Corporate Internet Banking
            </button>
          </div>
          <>
            {activeTab === "individual" ? (
              <>
                <h2 className="heading">
                  BankPro for Individual Internet Banking
                </h2>
                <p className="text">
                  BankPro comes with option of mobile app, we can create your
                  app with your logo and your desired colour scheme. The white
                  labeled mobile app is developed for iOS and Android platforms
                  and it replicates the features of the internet banking
                  platform. BankPro team will also manage the preparation and
                  submission of the app to the app stores for approvals.{" "}
                </p>
              </>
            ) : (
              <>
                {" "}
                <h2 className="heading">
                  BankPro for Corporate Internet Banking{" "}
                </h2>
                <p className="text">
                  BankPro can be extended to your corporate customers for
                  seamless day to day transactional activities. With the right
                  set of API’s from your core banking platform, BankPro can
                  facilitate a secure and reliable internet banking access for
                  your corporate customers. Corporate customers will be able to
                  carry out corporate specific activities such as bulk payment,
                  scheduled payments, payment approvals etc.
                </p>
              </>
            )}
          </>
          <div className="downloadSection">
            <a href="#">
              <img src={iosStore} alt="ios_store_img" />
            </a>
            <a href="#">
              <img src={playStore} alt="ios_store_img" />
            </a>
          </div>
        </div>
        <div className="right">
          {activeTab === "individual" ? (
            <img src={phone_mock} alt="phone_mock" className="phone_mock" />
          ) : (
            <img
              src={corporate_mock}
              alt="corporate_mock"
              className="corporate_mock"
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Bankpro;

const Wrapper = styled.section`
  width: 90%;
  margin: 5rem auto;
  position: relative;
  padding: 0 4rem;
  .arrow {
    width: 50px;
    position: absolute;
    left: 0;
    top: 2rem;
  }
  .content {
    background-color: #f2f2f2;
    border-radius: 1rem;
    height: 800px;
    display: flex;
    justify-content: space-between;
    padding: 5rem 0 0 4rem;
    /* gap: 3rem; */

    .left {
      flex: 1;
      .viewSelectContainer {
        background: linear-gradient(180deg, #2496ed 40.1%, #278edc 100%);
        width: 400px;
        display: flex;
        justify-content: space-between;
        padding: 0.4rem;
        border-radius: 30px;
        gap: 0.4rem;
        button {
          width: 100%;
          padding: 0.5rem 0.6rem;
          border-radius: 30px;
          background-color: transparent;
          border: none;
          outline: none;
          color: #f2f2f2;
          cursor: pointer;
          transition: all 0.3s ease-in;
        }
        .individual {
          /* &:hover {
            border: 1px solid #f2f2f2;
          } */
          &.active {
            background-color: #f2f2f2;
            color: #000;
            font-weight: 500;
            font-family: "cabinet-grotesk-bold";
          }
        }
        .corporate {
          /* &:hover {
            border: 1px solid #f2f2f2;
          } */
          &.active {
            background-color: #f2f2f2;
            color: #000;
            font-weight: 500;
            font-family: "cabinet-grotesk-bold";
          }
        }
      }
      .heading {
        margin-top: 3rem;
        font-family: "cabinet-grotesk-medium";
        font-size: 1.65rem;
      }
      .text {
        font-family: "cabinet-grotesk-light";
        color: #000;
        font-size: 0.9rem;
        margin-top: 1.3rem;
        width: 80%;
        line-height: 1.5;
      }
      .downloadSection {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        align-items: center;
      }
    }
    .right {
      flex: 0.8;
      position: relative;
      .phone_mock {
        width: 400px;
        position: absolute;
        bottom: 0;
      }
      .corporate_mock {
        width: 500px;
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
    .arrow {
      top: -10rem;
    }
    .content {
      flex-direction: column;
      padding: 2rem 2rem 0;

      .left {
        .viewSelectContainer {
          gap: 0.6rem;
          width: 100%;

          button {
            padding: 0.3rem 0.3rem;
            font-size: 0.7rem;
          }
        }
        .text {
          width: 100%;
        }
      }
      .right {
        .phone_mock,
        .corporate_mock {
          position: absolute;
          width: 200px;
        }
        .corporate_mock {
          right: -2rem;
          width: 300px;
        }
        .phone_mock {
          transform: translate(-50%, -46%);
          top: 50%;
          left: 50%;
          bottom: 0;
          width: 210px;
        }
      }
    }
  }
  @media only screen and (min-width: 501px) and (max-width: 650px) {
    width: 100%;
    padding: 0 1rem;
    .arrow {
      top: -10rem;
    }
    .content {
      flex-direction: column;
      padding: 2rem 2rem 0;
      .left {
        .viewSelectContainer {
          gap: 0.6rem;
          width: 100%;
          button {
            padding: 0.4rem 0rem;
          }
        }
      }
      .right {
        .phone_mock,
        .corporate_mock {
          position: absolute;
          width: 200px;
        }
        .corporate_mock {
          right: -2rem;
          width: 400px;
        }
        .phone_mock {
          transform: translate(-50%, -50%);
          top: 48%;
          left: 50%;
          bottom: 0;
          width: 280px;
        }
      }
    }
  }
  @media only screen and (min-width: 651px) and (max-width: 950px) {
    width: 90%;
    padding: 0 2rem;
    .arrow {
      top: -1rem;
      left: -1rem;
    }
    .content {
      flex-direction: column;
      padding: 2rem 2rem 0;
      .left {
        .viewSelectContainer {
          gap: 0.6rem;
          width: 100%;
          button {
            padding: 0.4rem 0rem;
          }
        }
      }
      .right {
        .phone_mock,
        .corporate_mock {
          position: absolute;
          width: 200px;
        }
        .corporate_mock {
          right: -2rem;
          width: 400px;
        }
        .phone_mock {
          transform: translate(-50%, -50%);
          top: 48%;
          left: 50%;
          bottom: 0;
          width: 280px;
        }
      }
    }
  }
  @media only screen and (min-width: 1000px) and (max-width: 1250px) {
    .content {
      .right {
        .phone_mock,
        .corporate_mock {
          position: absolute;
          width: 200px;
        }
        .corporate_mock {
          right: 0rem;
          width: 500px;
        }
        .phone_mock {
          bottom: 0;
          width: 320px;
        }
      }
    }
  }
`;
