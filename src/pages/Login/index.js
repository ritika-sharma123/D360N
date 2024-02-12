import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React, { useState } from "react";
import Label from "../../components/Label";
import Input from "../../components/Input";
import Button from "../../components/Button";
import styled from "styled-components";
import "./index.css";
import EyeInvisible from "../../images/EyeInvisible.png";
import VisibilityIcon from "@mui/icons-material/Visibility";

const LoginCardDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10%;
  position: relative;
`;

const LoginCard = styled.div`
  width: 460px;
  padding: 15px 30px 15px 30px;
  background-color: #082340;
  color: #ffffff;
  border-radius: 8px;

  ForgotPasswordText {
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    margin: 0px;
  }

  p {
    font-size: 18px;
    margin-bottom: 5px;
  }

  div {
    margin-bottom: 15px;
  }
`;

const ForgotPasswordText = styled.div`
  text-align: center;

  span {
    color: #ff7a45;
    border-bottom: 1px solid #ff7a45;
    cursor: pointer;
  }
`;

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const showPassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <LoginCardDiv>
      <LoginCard>
        <h3 className="login-card">Log In</h3>
        <div>
          <p>Please Select Your Role</p>
          <div>
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              defaultValue="top"
            >
              <FormControlLabel
                value="end"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "blue",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                    }}
                  />
                }
                label="Administrator"
              />

              <FormControlLabel
                value="end1"
                control={
                  <Radio
                    sx={{
                      color: "white",
                      "&.Mui-checked": {
                        color: "blue",
                      },
                      "& .MuiSvgIcon-root": {
                        fontSize: 20,
                      },
                    }}
                  />
                }
                label="Employee"
              />
            </RadioGroup>
          </div>
        </div>
        <Input labelText="UserName" />
        <Input
          type="password"
          labelText="Password"
          suffix={
            isPasswordVisible ? (
              <span>
                <img src={VisibilityIcon} alt="v" onClick={showPassword} />
              </span>
            ) : (
              <span>
                <img src={EyeInvisible} alt="" onClick={showPassword} />
              </span>
            )
          }
        />
        <Button name="Continue" backgroundcolor="#FF7A45" color="#ffffff" />
        <ForgotPasswordText>
          <span>Forgot Password</span>
        </ForgotPasswordText>
        <ForgotPasswordText>
          <p>
            Do you have an account? <span>Sign Up Here.</span>
          </p>
        </ForgotPasswordText>
      </LoginCard>
    </LoginCardDiv>
  );
};

export default LoginPage;
