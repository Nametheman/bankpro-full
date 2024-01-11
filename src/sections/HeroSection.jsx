import styled from "styled-components";
import landing from "../assets/images/landing.png";
import mockup from "../assets/images/mock.png";
import playCirle from "../assets/icon/play-circle.png";
import scribble from "../assets/images/scribble.png";
import arrow1 from "../assets/images/arrow1.png";
import { motion } from "framer-motion";
import { CgMenuRightAlt } from "react-icons/cg";
import { useState, useContext } from "react";
// import state from "../state/state";
// import { useSnapshot } from "valtio";
import NavContext from "../state/NavContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const main = useRef();

  const workVariants = {
    offscreen: {
      delay: 2,
      y: "10%",
      opacity: 0,
    },
    onscreen: {
      y: "0%",
      delay: 2,
      opacity: 1,
      transition: { type: "spring", duration: 1.2, bounce: 0.3, delay: 0.4 },
    },
  };

  // const snap = useSnapshot(state);
  // console.log(snap.mobileNavOpened);

  const mockupTriggerPoint =
    main.current && document.getElementsByClassName("hero-description");

  useGSAP(
    () => {
      let mockupArray = gsap.utils.toArray(".image-container");
      mockupArray.forEach((mockup) => {
        gsap.to(mockup, {
          xPercent: -100 * (mockupArray.length - 1),
          ease: "sine.out",
          scrollTrigger: {
            trigger: mockupTriggerPoint,
            start: "top top",
            end: "+=500",
            scrub: 3,
            snap: 1 / (mockupArray.length - 1),
            pin: true,
          },
        });
      });
    },
    { scope: main }
  );

  const { toggleNavbar } = useContext(NavContext);
  return (
    <Hero>
      <ContentContainer>
        <nav>
          <div className="nav1">
            <p className="logo">BankPro</p>
            <ul>
              <a href="#">Home</a>
              <a href="#features" className="disabled">
                Features
              </a>
              <a href="#" className="disabled">
                Contact Us
              </a>
            </ul>
          </div>
          <button className="comingSoon">Get Started</button>
          <div className="mobileMenu">
            <CgMenuRightAlt onClick={toggleNavbar} />
          </div>
        </nav>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.4 }}
          className="content"
        >
          <motion.div variants={workVariants} className="heading">
            <h1>
              Empowering Your Digital <br />
              Banking Experience.
            </h1>
          </motion.div>
          <div className="hero-description">
            <motion.p variants={workVariants} className="desktopP">
              BankPro is an enterprise grade mobile-first internet/mobile
              banking platform <br /> that enables financial institutions to
              accelerate time to market. It offers capabilities <br /> for
              omni-channel experiences with highly customizable features.
            </motion.p>
            <motion.p variants={workVariants} className="mobileP">
              BankPro is an enterprise grade mobile-first internet/mobile
              banking platform that enables financial institutions to accelerate
              time to market. It offers capabilities for omni-channel
              experiences with highly customizable features.
            </motion.p>
            <motion.div variants={workVariants} className="comingSoon2">
              <button className="demoBtn">
                {" "}
                <img src={playCirle} alt="" /> Demo
              </button>
              <button className="signUpBtn">Sign Up</button>
            </motion.div>
          </div>

          <div className="mockups-container" ref={main}>
            <div className="image-container">
              <motion.img
                variants={workVariants}
                src={mockup}
                alt=""
                className="mockup"
              />
            </div>

            <div className="image-container">
              <motion.img
                variants={workVariants}
                src={mockup}
                alt=""
                className="mockup"
              />
            </div>

            <div className="image-container">
              <motion.img
                variants={workVariants}
                src={mockup}
                alt=""
                className="mockup"
              />
            </div>
            <div className="image-container">
              <motion.img
                variants={workVariants}
                src={mockup}
                alt=""
                className="mockup"
              />
            </div>
          </div>
        </motion.div>
      </ContentContainer>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}
        className="content"
      >
        <motion.img
          variants={workVariants}
          src={scribble}
          alt="scribble"
          className="scribble"
        />
        <motion.img
          variants={workVariants}
          src={arrow1}
          alt="arrow1"
          className="arrow1"
        />
      </motion.div>
    </Hero>
  );
};

export default HeroSection;

const Hero = styled.section`
  position: relative;
  background-image: url(${landing});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .scribble {
    position: absolute;
    top: 150px;
    right: 300px;
    z-index: 0;
    width: 260px;
  }
  .arrow1 {
    position: absolute;
    top: 460px;
    right: 0;
    z-index: 0;
    width: 160px;
  }

  @media only screen and (max-width: 1366px) {
    .scribble {
      right: 300px;
      width: 200px;
    }
  }
  @media only screen and (max-width: 1280px) {
    .scribble {
      right: 260px;
      width: 200px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .scribble {
      right: 200px;
      width: 200px;
      top: 130px;
      width: 200px;
    }
    .arrow1 {
      top: 360px;
      width: 110px;
    }
  }
  @media only screen and (max-width: 700px) {
    .arrow1,
    .scribble {
      display: none;
    }
  }
`;

const ContentContainer = styled.div`
  nav {
    height: 80px;
    padding: 0.9rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .mobileMenu {
      display: none;
    }
    .nav1 {
      display: flex;
      align-items: center;
      gap: 14rem;

      .logo {
        color: #fff;
        font-family: "cabinet-grotesk-bold", sans-serif;
        font-size: 19px;
      }
      ul {
        display: flex;
        list-style: none;
        gap: 7rem;
        color: #fff;
        font-family: "cabinet-grotesk-thin";
        font-size: 18px;

        a {
          cursor: pointer;
          text-decoration: none;
          color: #fff;
        }
      }
    }

    .comingSoon {
      background-color: #ff8200;
      color: #fff;
      height: 40px;
      padding: 0 30px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 15px;
      border: none;
      outline: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #fff;
        color: #ff8200;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      color: #eeeeee;
      font-size: 18.5px;
      font-family: "cabinet-grotesk-light";
      text-align: center;
      line-height: 1.4;
    }
    .mobileP {
      display: none;
    }
    .heading {
      z-index: 2;
      h1 {
        color: #fff;
        font-size: 4.38rem;
        font-family: "cabinet-grotesk-extra-bold";
        text-align: center;
      }
    }

    .comingSoon2 {
      margin: 40px 0 40px;
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .demoBtn {
      height: 44px;
      width: 140px;
      border: none;
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
    .signUpBtn {
      background: #ff8200;
      height: 44px;
      width: 140px;
      border: none;
      outline: none;
      font-family: "cabinet-grotesk-bold";
      font-size: 17px;
      color: #fff;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background: #fff;
        color: #ff8200;
      }
    }

    .mockups-container {
      display: flex;
      max-width: 100vw;
      overflow-x: hidden;
      ::-webkit-scrollbar {
        width: 0;
      }
      .image-container {
        min-width: 100vw;
        display: flex;
        justify-content: center;
        .mockup {
          width: 950px;
        }
      }
    }
  }

  @media only screen and (max-width: 1280px) {
    nav {
      .nav1 {
        gap: 9rem;
        ul {
          gap: 6rem;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    .content {
      p {
        font-size: 14.5px;
      }
      .heading {
        h1 {
          font-size: 50px;
        }
      }
      .demoBtn,
      .signUpBtn {
        height: 35px;
        width: 120px;
        font-size: 14px;
      }
      .mockup {
        width: 600px;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    nav {
      .mobileMenu {
        display: block;
        svg {
          color: #ffffff;
          font-size: 2rem;
          cursor: pointer;
        }
      }
      .nav1 {
        gap: 9rem;
        ul {
          display: none;
        }
      }
      .comingSoon {
        display: none;
      }
    }
    .content {
      padding: 0 0.5rem;
      p {
        font-size: 11px;
      }
      .heading {
        h1 {
          font-size: 30px;
        }
      }
      .demoBtn,
      .signUpBtn {
        height: 35px;
        width: 120px;
        font-size: 14px;
      }
      .mockup {
        width: 600px;
      }
    }
  }
  @media only screen and (max-width: 700px) {
    .content {
      .mockup {
        width: 95vw;
      }
      .mockups-container {
        display: flex;
        max-width: 100vw;
        overflow-x: scroll;
        .image-container {
          min-width: 100vw;
          display: flex;
          justify-content: center;
          .mockup {
            width: 300px;
          }
        }
      }
    }
    .arrow1 {
      display: none;
    }
  }
  @media only screen and (max-width: 500px) {
    nav {
      height: 20px;
      padding: 2.5rem 1.5rem;
    }
    .content {
      .desktopP {
        margin-top: 1rem;
        font-size: 14px;
        line-height: 1.2;
        text-align: left;
        display: none;
      }
      .mobileP {
        display: block;
        font-size: 14px;
        margin-top: 1rem;
        padding: 0 1.5rem;
      }

      .mockups-container {
        display: flex;
        max-width: 100vw;
        overflow-x: scroll;
        .image-container {
          min-width: 100vw;
          display: flex;
          justify-content: center;
          .mockup {
            width: 250px;
          }
        }
      }
    }
  }
`;
