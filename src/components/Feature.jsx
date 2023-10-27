import React from "react";
import styled from "styled-components";
import check from "../assets/icon/check.svg";
import featured from "../assets/icon/featured.svg";
import comprehensive from "../assets/images/comprehensive.svg";
import convenience from "../assets/images/convenience.svg";
import integration from "../assets/images/integration.svg";
import { motion } from "framer-motion";

const Feature = () => {
  const workVariants = {
    offscreen: {
      y: "10%",
      opacity: 0,
    },
    onscreen: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", duration: 1.2, bounce: 0.3 },
    },
  };
  return (
    <>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Container>
            <div className="left">
              <img src={featured} alt="icon" className="featuredIcon" />
              <h2>Comprehensive Banking Services</h2>
              <p>
                BankPro is designed to suit your banking needs and giving your
                customers the needed flexibility and convenience:
              </p>
              <div className="lists">
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Account management</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Transfers</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Cards</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Digital Services</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Transactions and Statements</p>
                </div>
                {/* <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">
                    Enabling you to manage your finances conveniently from your
                    computer or smartphone.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="right">
              <img src={comprehensive} alt="" className="listIcon" />
            </div>
          </Container>
        </motion.div>
      </motion.div>
      {/* <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Container2>
            <div className="left">
              <img src={featured} alt="icon" className="featuredIcon" />
              <h2>Convenience and Accessibility</h2>
              <p>
                Bank Pro provides convenient access to your banking services
                anytime, anywhere. With a reliable internet connection, you can
                securely log in to your account and perform a wide range of
                banking transactions from the comfort of your home, office, or
                on the go.
              </p>
              <div className="lists">
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Quick access to Account Balances</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">
                    Access to Recent transactions, or favorite features.
                  </p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">
                    Access your accounts and perform transactions seamlessly
                    across different devices, providing flexibility and
                    convenience.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={convenience} alt="" className="listIcon" />
            </div>
          </Container2>
        </motion.div>
      </motion.div> */}

      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.div variants={workVariants}>
          <Container>
            <div className="left">
              <img src={featured} alt="icon" className="featuredIcon" />
              <h2>Integration with Third-Party Services</h2>
              <p>
                BankPro effortlessly integrates with a range of third-party
                services, simplifying your financial management process and
                enabling you to expand your service offerings for a distinctive
                edge in the market
              </p>
              <div className="lists">
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Digital Onboarding</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Identity Verification</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">Lending & Recovery Solution</p>
                </div>
                <div className="list">
                  <img src={check} alt="icon" className="listIcon" />
                  <p className="listItem">
                    Bill Payments, Investment trackinjg, and more.
                  </p>
                </div>
              </div>
            </div>
            <div className="right">
              <img src={integration} alt="" className="listIcon" />
            </div>
          </Container>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Feature;

const Container = styled.section`
  margin: 4rem 2rem 0 13rem;
  display: flex;
  gap: 8rem;

  .right {
    img {
      width: 650px;
    }
  }
  .left {
    .featuredIcon {
      width: 50px;
    }
    h2,
    p {
      text-align: left;
      margin-top: 1rem;
      line-height: 1.7;
      font-size: 16px;
    }
    h2 {
      font-size: 25px;
      font-family: "cabinet-grotesk-bold";
    }
    .lists {
      margin: 1.4rem 0 0 0.7rem;

      .list {
        display: flex;
        align-items: flex-start;
        margin-bottom: 12px;
        gap: 0.8rem;
        .listIcon {
          width: 24px;
        }
        .listItem {
          margin: 0;
          font-size: 15px;
        }
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 1rem;
    margin: 0;
    margin-top: 3rem;
    align-items: center;
    padding: 0 10rem;
  }
  @media only screen and (max-width: 700px) {
    padding: 0 3rem;
    .right {
      .listIcon {
        width: 95vw;
      }
    }
  }
`;
const Container2 = styled.section`
  margin: 4rem 10rem 0 4rem;
  display: flex;
  flex-direction: row-reverse;
  gap: 8rem;

  .right {
    img {
      width: 650px;
    }
  }
  .left {
    .featuredIcon {
      width: 50px;
    }
    h2,
    p {
      text-align: left;
      margin-top: 1rem;
      line-height: 1.7;
      font-size: 16px;
    }
    h2 {
      font-size: 25px;
      font-family: "cabinet-grotesk-bold";
    }
    .lists {
      margin: 1.4rem 0 0 0.7rem;

      .list {
        display: flex;
        align-items: flex-start;
        margin-bottom: 12px;
        gap: 0.8rem;
        .listIcon {
          width: 24px;
        }
        .listItem {
          margin: 0;
          font-size: 15px;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    flex-direction: column-reverse;
    gap: 1rem;
    margin: 0;
    margin-top: 3rem;
    align-items: center;
    padding: 0 10rem;
  }
  /* @media only screen and (max-width: 700px) {
    .right {
      img {
        width: 80vw;
      }
    }
  } */
  @media only screen and (max-width: 700px) {
    padding: 0 3rem;

    .right {
      .listIcon {
        width: 95vw;
      }
    }
  }
`;
