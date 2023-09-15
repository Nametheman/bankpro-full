import styled from "styled-components";
import rent4less from "../assets/icon/rent4less.svg";
import mastercard from "../assets/icon/mastercard.svg";
import hopebank from "../assets/icon/hopebank.svg";
import payattitude from "../assets/icon/payattitude.svg";
import cit from "../assets/icon/cit.svg";

const Partners = () => {
  return (
    <Wrapper>
      <div className="partners">
        <div className="section1">
          <p>Trusted by 20+ companies</p>
        </div>
        <div className="marquee">
          <div className="exts">
            <div className="flex1">
              <div className="holder">
                <img src={mastercard} alt="" />
              </div>
              <div className="holder">
                <img src={cit} alt="" />
              </div>
              <div className="holder">
                <img src={hopebank} alt="" />
              </div>
              <div className="holder">
                <img src={rent4less} alt="" />
              </div>
              <div className="holder">
                <img src={payattitude} alt="" />
              </div>
            </div>
            <div className="flex1">
              <div className="holder">
                <img src={mastercard} alt="" />
              </div>
              <div className="holder">
                <img src={cit} alt="" />
              </div>
              <div className="holder">
                <img src={hopebank} alt="" />
              </div>
              <div className="holder">
                <img src={rent4less} alt="" />
              </div>
              <div className="holder">
                <img src={payattitude} alt="" />
              </div>
            </div>
            <div className="flex1">
              <div className="holder">
                <img src={mastercard} alt="" />
              </div>
              <div className="holder">
                <img src={cit} alt="" />
              </div>
              <div className="holder">
                <img src={hopebank} alt="" />
              </div>
              <div className="holder">
                <img src={rent4less} alt="" />
              </div>
              <div className="holder">
                <img src={payattitude} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Partners;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  margin-top: 5rem;
  justify-content: center;
  padding: 0 14rem;

  .partners {
    overflow-x: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #f9fafb80;
    flex-shrink: 1 0 auto;
    padding: 3rem 0rem;
    border-radius: 20px;
    gap: 1rem;
    .section1 {
      padding: 1rem 2rem 1rem 0.5rem;
      color: #7e7e7e;
      p {
        font-family: "cabinet-grotesk-bold";
      }
    }
    .marquee {
      width: 90%;
      padding: 0 1rem !important;
      overflow-x: hidden;
      padding-left: 0rem;

      .exts {
        width: 240%;
        display: flex;
        align-items: center;
        gap: 8rem;
        justify-content: space-between;
        padding-left: 1rem;
        animation: 80s marquee infinite linear;

        .flex1 {
          display: flex;
          width: 50%;
          align-items: center;
          gap: 5rem;

          .holder {
            background: #fff;
            padding: 9px 14px;
            border-radius: 30px;
          }
        }
        &:hover {
          animation-play-state: paused;
        }
      }

      @keyframes marquee {
        from {
          transform: translateX(0);
        }
        to {
          transform: translateX(-100%);
        }
      }
    }
  }

  @media only screen and (max-width: 450px) {
    padding: 0 1rem;
    top: -2rem;
    .partners {
      padding: 1.5rem 0.3rem;
      border-radius: 10px;

      .section1 {
        padding: 0.3rem 0.2rem 0.3rem 0.5rem;

        p {
          font-size: 0.5rem;
        }
      }
      .marquee {
        .exts {
          gap: 2rem;
          width: 570%;

          .flex1 {
            gap: 2rem;

            img {
              width: 70px;
              height: 20px;
            }
          }
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 0 4rem;
    .partners {
      padding: 2rem 0rem;
    }
  }
  @media only screen and (max-width: 418px) {
    padding: 0 1rem;
    top: -2rem;
    .partners {
      padding: 1.5rem 0.3rem;
      border-radius: 10px;

      .section1 {
        padding: 0.3rem 0.2rem 0.3rem 0.5rem;

        p {
          font-size: 0.5rem;
        }
      }
      .marquee {
        .exts {
          gap: 5rem;
          width: 640%;

          .flex1 {
            gap: 2rem;

            img {
              width: 70px;
              height: 20px;
            }
          }
        }
      }
    }
  }
`;
