/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { colors } from "../assets/colors";
import personalized from "../assets/icon/personalized.svg";
import goal_based from "../assets/icon/goal_based.svg";
import security from "../assets/icon/security.svg";
import seamless from "../assets/icon/seamless.svg";
import content from "../assets/images/content.png";

const EmpoweringSection = () => {
  return (
    <SectionWrapper>
      <p className="title">Features</p>
      <h2 className="titleHd">
        Empowering Businesses with convenient, secure, and <br /> innovative
        digital banking solutions.
      </h2>
      <p className="intro">
        Bank Pro is committed to providing a comprehensive suite of features
        that empower users to take <br /> control of their finances, achieve
        their goals, and make smarter financial decisions.
      </p>
      <div className="mainContentContainer">
        <div className="left">
          <div className="dialog">
            <img src={personalized} alt="" />
            <h4>Personalized Dashboard</h4>
            <p>
              Bank Pro offers a personalized dashboard that allows users to
              customize their homepage according to their preferences. Whether
              it's quick access to account balances, recent transactions, or
              favorite features, users can arrange their dashboard to suit their
              unique banking needs.
            </p>
          </div>
          <div className="dialog">
            <img src={goal_based} alt="" />
            <h4>Goal-based Savings</h4>
            <p>
              Bank Pro helps users achieve their financial goals with its
              goal-based savings feature. Users can set specific targets, such
              as saving for a vacation or a down payment, and track their
              progress. The platform offers insights and recommendations to help
              users stay on track and reach their goals faster.
            </p>
          </div>
          <div className="dialog">
            <img src={security} alt="" />
            <h4>Enhanced Security Measures</h4>
            <p>
              Bank Pro prioritizes the security of user data by implementing
              advanced security measures. This includes encryption technology,
              secure authentication protocols, and continuous monitoring to
              detect and prevent fraudulent activities.
            </p>
          </div>
          <div className="dialog">
            <img src={seamless} alt="" />
            <h4>
              Seamless Integration with <br /> Third-Party Services
            </h4>
            <p>
              Bank Pro seamlessly integrates with a wide range of third-party
              services, allowing users to connect their accounts, track
              expenses, and manage finances from various platforms.
            </p>
          </div>
        </div>
        <div className="right">
          <img src={content} alt="" />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EmpoweringSection;

const SectionWrapper = styled.section`
  padding-left: 12rem;
  margin-top: 4rem;
  overflow-x: hidden;
  .title {
    color: ${colors.primaryColor};
    font-family: "cabinet-grotesk-bold";
  }
  .titleHd {
    margin-top: 2rem;
    font-family: "cabinet-grotesk-bold";
    font-size: 34px;
  }
  .intro {
    margin-top: 1.5rem;
    color: ${colors.textLight};
    font-size: 18px;
  }
  .mainContentContainer {
    margin-top: 3rem;
    display: flex;

    .left {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      .dialog {
        h4 {
          font-family: "cabinet-grotesk-medium";
          margin-top: 0.7rem;
          font-size: 17px;
        }
        p {
          font-family: "cabinet-grotesk-light";
          font-size: 13px;
          line-height: 1.6;
          margin-top: 0.7rem;
          color: ${colors.textLight};
        }
      }
    }
    .right {
      img {
        width: 600px;
        height: 450px;
      }
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;

    .mainContentContainer {
      flex-direction: column-reverse;
      gap: 4rem;
      align-items: center;
    }
  }
`;
