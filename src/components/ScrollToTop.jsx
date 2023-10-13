import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HiMiniArrowUturnUp } from "react-icons/hi2";
import { colors } from "../assets/colors";

const ScrollToTop = () => {
  const [showDiv, setShowDiv] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Wrapper $showDiv={showDiv} onClick={handleScrollToTop}>
      <HiMiniArrowUturnUp />
    </Wrapper>
  );
};

export default ScrollToTop;

const Wrapper = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 2rem;
  right: 2rem;
  border: 3px solid #ffffff;
  width: 70px;
  height: 70px;
  display: ${(props) => (props.$showDiv ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: ${colors.primaryColor};
  border-radius: 50%;
  animation: bounce 2s infinite; /* 2s is the duration of the animation */
  cursor: pointer;
  svg {
    color: #ffffff;
    font-size: 1.4rem;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0); /* Starting and ending position */
    }
    40% {
      transform: translateY(-20px); /* Bounce up */
    }
    60% {
      transform: translateY(-15px); /* Bounce back slightly */
    }
  }

  @media only screen and (max-width: 600px) {
    width: 50px;
    height: 50px;
    svg {
      font-size: 1rem;
    }
  }
`;
