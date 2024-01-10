import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../assets/colors";
import featured from "../assets/icon/featured.svg";
import arrow5 from "../assets/images/arrow5.png";
// import CountUp from "react-countup";
import { CountUp } from "use-count-up";

const Unleash = () => {
  const myRef = useRef();
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementIsVisible(entry.isIntersecting);
    });
    if (elementIsVisible) {
      setIsCounting(true);
    } else {
      setIsCounting(false);
    }
    observer.observe(myRef.current);
  }, [elementIsVisible]);

  return (
    <Container>
      <img src={featured} alt="" />
      <h2>Unleash the full power of Internet Banking</h2>
      <p>Everything you need to build, engage, and retain more customers.</p>
      <div className="numbersContainer" ref={myRef}>
        <div className="child child1">
          <h1>
            <CountUp
              isCounting={isCounting}
              onComplete={() => {
                if (elementIsVisible) {
                  return { shouldRepeat: true, delay: 5 };
                }
              }}
              end={200}
              duration={3}
            />
            +
          </h1>
          <p>Integrations</p>
        </div>
        <div className="child child2">
          <h1>
            {" "}
            <CountUp
              isCounting={isCounting}
              onComplete={() => {
                if (elementIsVisible) {
                  return { shouldRepeat: true, delay: 5 };
                }
              }}
              end={50}
              duration={3}
            />
            k+
          </h1>
          <p>Transactions</p>
        </div>
        <div className="child child3">
          <h1>
            ₦
            <CountUp
              isCounting={isCounting}
              onComplete={() => {
                if (elementIsVisible) {
                  return { shouldRepeat: true, delay: 5 };
                }
              }}
              end={1.5}
              duration={3}
            />
            B+
          </h1>
          <p>Processed</p>
        </div>
      </div>
      <img src={arrow5} alt="arrow5" className="arrow5" />
    </Container>
  );
};

export default Unleash;
const Container = styled.section`
  margin: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .arrow5 {
    position: absolute;
    left: 0;
    bottom: 5px;
    height: 120px;
    width: 160px;
  }

  h2 {
    font-family: "cabinet-grotesk-bold";
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  p {
    font-family: "cabinet-grotesk-light";
    color: ${colors.textLight};
    font-size: 1.1rem;
  }

  .numbersContainer {
    margin-top: 4rem;
    display: flex;

    .child {
      padding: 0.3rem 3rem;
      h1,
      p {
        text-align: center;
      }
      h1 {
        font-size: 5vw;
        font-family: "cabinet-grotesk-extra-bold";
        color: ${colors.primaryColor};
        span {
          font-family: "cabinet-grotesk-extra-bold";
          font-size: 40px;
        }
      }
      p {
        margin-top: 0.7rem;
        font-family: "cabinet-grotesk-regular";
        font-size: 1.3rem;

        color: #000;
      }
    }
    .child1 {
      border-right: 1px solid #eaecf0;
    }
    .child3 {
      border-left: 1px solid #eaecf0;
    }
  }

  @media only screen and (max-width: 900px) {
    .arrow5 {
      position: absolute;
      left: 0;
      bottom: 5px;
      height: 80px;
      width: 100px;
    }
  }
  @media only screen and (max-width: 700px) {
    .arrow5 {
      display: none;
    }
    .numbersContainer {
      .child {
        padding: 0.3rem 1.5rem;
      }
    }
  }
  @media only screen and (min-width: 0px) and (max-width: 500px) {
    h2 {
      font-family: "cabinet-grotesk-bold";
      font-size: 1.2rem;
      margin: 1rem 0;
    }
    p {
      font-family: "cabinet-grotesk-light";
      color: ${colors.textLight};
      font-size: 0.8rem;
      text-align: center;
    }
    .numbersContainer {
      .child {
        p {
          margin-top: 0.7rem;
          font-family: "cabinet-grotesk-regular";
          font-size: 0.8rem;
          color: #000;
        }
      }
    }
  }
`;
