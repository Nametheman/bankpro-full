import { useContext } from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";
import { colors } from "../assets/colors";

import { motion, AnimatePresence } from "framer-motion";
import NavContext from "../state/NavContext";
// import { slideAnimation } from "../config/motion";

const MobileNav = () => {
  const { isNavbarOpen, toggleNavbar } = useContext(NavContext);
  console.log(isNavbarOpen);

  return (
    <>
      {isNavbarOpen && (
        <Navbody>
          <AnimatePresence>
            <motion.div
              initial={
                isNavbarOpen === true
                  ? { x: 300, opacity: 0 }
                  : { x: 0, opacity: 1 }
              }
              animate={
                isNavbarOpen === true
                  ? { x: 0, opacity: 1 }
                  : { x: 300, opacity: 0 }
              }
              exit={
                isNavbarOpen === true
                  ? { x: 300, opacity: 0 }
                  : { x: 0, opacity: 1 }
              }
              transition={{ duration: 0.5 }}
              className="realNav"
            >
              <div className="closeNav">
                <CgClose onClick={toggleNavbar} />
              </div>
              <div className="menuLinks">
                <a href="#" onClick={toggleNavbar}>
                  Home
                </a>
                <a href="#features" onClick={toggleNavbar}>
                  Features
                </a>
                <a href="#" onClick={toggleNavbar}>
                  Contact us
                </a>
                <button className="comingSoon" onClick={toggleNavbar}>
                  Get Started
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </Navbody>
      )}
    </>
  );
};

export default MobileNav;

const Navbody = styled.nav`
  position: fixed;
  z-index: 500;
  right: 0;
  width: 300px;
  /* border: 1px solid red; */
  height: 100vh;

  .realNav {
    background: #ffffff;
    border-top-left-radius: 3rem;
    border-bottom-left-radius: 3rem;
    box-shadow: -3px 0px 9px 1px rgba(0, 0, 0, 0.26);
    -webkit-box-shadow: -3px 0px 9px 1px rgba(0, 0, 0, 0.26);
    -moz-box-shadow: -3px 0px 9px 1px rgba(0, 0, 0, 0.26);
    height: 100vh;

    .closeNav {
      padding: 1.7rem 2rem;
      display: flex;
      justify-content: flex-end;

      svg {
        color: ${colors.primaryColor};
        font-size: 1.5rem;
        cursor: pointer;
      }
    }
    .menuLinks {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
      gap: 4rem;

      a {
        text-align: left;
        text-decoration: none;
        color: ${colors.primaryColor};
        font-weight: bold;
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
  }
`;
