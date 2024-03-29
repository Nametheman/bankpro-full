/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styled from "styled-components";
import { colors } from "../assets/colors";
import Explore from "../components/Explore";
import Feature from "../components/Feature";
import arrow3 from "../assets/images/arrow3.png";
import arrow4 from "../assets/images/arrow4.png";
import { motion } from "framer-motion";

const Features = () => {
  const workVariants = {
    offscreen: {
      y: "10%",
      opacity: 0,
    },
    onscreen: {
      y: "0%",
      opacity: 1,
      transition: { type: "spring", duration: 1.2, bounce: 0.3, delay: 0.4 },
    },
  };
  return (
    <SectionWrapper>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2 variants={workVariants}>
          <span>Feature-rich BankPro:</span> Omni-channel experiences <br />{" "}
          with highly customizable features
        </motion.h2>
        <motion.p variants={workVariants}>
          There are several compelling reasons to choose <span>"BankPro"</span>{" "}
          as your Internet <br /> banking service provider platform. Here are
          some key reasons:
        </motion.p>
      </motion.div>
      <Feature />
      <Explore />
      <img src={arrow3} alt="arrow3" className="arrow3" />
      <img src={arrow4} alt="arrow4" className="arrow4" />
    </SectionWrapper>
  );
};

export default Features;
const SectionWrapper = styled.section`
  margin-top: 6rem;
  position: relative;

  .arrow3 {
    position: absolute;
    right: 0px;
    top: 700px;
  }
  .arrow4 {
    position: absolute;
    left: 90px;
    bottom: 220px;
    height: 170px;
  }

  h2,
  p {
    text-align: center;
  }
  h2 {
    font-family: "cabinet-grotesk-extra-bold";
    font-size: 2.5rem;

    span {
      font-family: "cabinet-grotesk-extra-bold";
      color: ${colors.primaryColor};
    }
  }
  p {
    margin-top: 1rem;
    color: ${colors.textLight};
    font-family: "cabinet-grotesk-light";
    font-size: 1.5rem;
    span {
      font-family: "cabinet-grotesk-bold";
    }
  }
  @media only screen and (max-width: 700px) {
    .arrow3,
    .arrow4 {
      display: none;
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 700px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
