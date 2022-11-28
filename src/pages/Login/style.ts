import styled from "styled-components";

export const LoginContainer = styled.main`
  margin: 0;
  width: 30vw;
  height: 60vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #FFF;
  border-radius: 20px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }

  img {
    width: 50%;
    margin-top: 30px;
  }

  .input {
    margin: 20px 0;
    width: 300px;
  }

  .submit {
    font-size: 20px;
    display: block;
    margin-top: 40px;
    width: 300px;
    height: 45px;
  }
`;