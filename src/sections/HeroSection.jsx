import styled from "styled-components";
import landing from "../assets/images/landing.png";
import mockup from "../assets/images/mock.png";
import playCirle from "../assets/icon/play-circle.png";
import scribble from "../assets/images/scribble.png";
import arrow1 from "../assets/images/arrow1.png";
import { motion } from "framer-motion";

const HeroSection = () => {
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
  return (
    <Hero>
      <ContentContainer>
        <nav>
          <div className="nav1">
            <p className="logo">TM30 Bank Pro</p>
            <ul>
              <li>Home</li>
              <li className="disabled">Features</li>
              <li className="disabled">Contact Us</li>
            </ul>
          </div>
          <button className="comingSoon">Get Started</button>
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
            <img
              src="./assets/images/scribble.png"
              alt=""
              className="scribble"
            />
          </motion.div>
          <motion.p variants={workVariants}>
            Bank Pro is a leading Internet banking service provider platform
            designed to revolutionize <br />
            the way you manage your finances. With a strong focus on user
            experience, security, <br />
            and cutting-edge technology, Bank Pro offers a comprehensive suite
            of digital banking <br />
            solutions to meet the diverse needs of individuals and businesses.
          </motion.p>
          <motion.div variants={workVariants} className="comingSoon2">
            <button className="demoBtn">
              {" "}
              <img src={playCirle} alt="" /> Demo
            </button>
            <button className="signUpBtn">Sign Up</button>
          </motion.div>
          <motion.img
            variants={workVariants}
            src={mockup}
            alt=""
            className="mockup"
          />
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
`;

const ContentContainer = styled.div`
  nav {
    height: 80px;
    padding: 0.9rem 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

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

        li {
          cursor: pointer;
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
    .heading {
      z-index: 2;
      h1 {
        color: #fff;
        font-size: 70px;
        font-family: "cabinet-grotesk-extra-bold";
        text-align: center;
      }
    }

    .comingSoon2 {
      margin: 40px 0 40px;
      display: flex;
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

    .mockup {
      width: 950px;
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
  }
`;
