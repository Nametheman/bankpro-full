import styled from "styled-components";
import trial from "../assets/images/trial.svg";

const Trial2 = () => {
  return (
    <Container>
      <img src={trial} alt="" />
      <div className="content">
        <p>
          With its user-centric approach, advanced technology, and personalized{" "}
          <br />
          solutions, Bank Pro is transforming the digital banking experience for{" "}
          <br />
          users worldwide.
        </p>
        <button>Start your Trial now</button>
      </div>
    </Container>
  );
};

export default Trial2;
const Container = styled.div`
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    width: 90%;
  }
  .content {
    width: 90%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6rem;
    p {
      color: #ffffff;
      font-size: 21px;
      font-family: "cabinet-grotesk-regular";
    }
    button {
      background: #ff8200;
      border: none;
      outline: none;
      color: #ffffff;
      width: 240px;
      height: 50px;
      font-size: 20px;
      font-family: "cabinet-grotesk-medium";
      border-radius: 30px;
      cursor: pointer;
    }
  }
`;
