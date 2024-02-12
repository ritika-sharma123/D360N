import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import React, { useState } from 'react';
import Label from '../../components/Label';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styled from 'styled-components';
import './index.css';
import EyeInvisible from '../../images/EyeInvisible.png';
import VisibilityIcon from '@mui/icons-material/Visibility';


  const LoginCardDiv = styled.div`
        width:100%;
        display:flex;
        justify-content:center;
        align-items:center;
        top:10%;
        position:relative;
  `;

  const LoginCard = styled.div`
        width:460px;
        padding:15px 30px 15px 30px;
        background-color:#082340;
        color:#FFFFFF;
        border-radius:8px;

        ForgotPasswordText{
            text-align:center
        }

        h3{
            text-align:center;
            font-weight:500;
            font-size:30px;
            margin:0px;
        }

        p{
            font-size:18px;
            margin-bottom:5px;
        }

        div{
            margin-bottom:15px;
        }
  `;

   const LabelInputDiv = styled.div`
        display:flex;
        flex-direction:column;
        gap:10px;
        margin-bottom:20px !important;

        input{
            padding:8px 12px 8px 12px;
            height:25px;
            border:1px solid transparent;
            border-radius:2px;
        }

        img{
            width: 20px;
            position: relative;
            right: -92%;
            top: -39px;
        }
   `;

   const ForgotPasswordText = styled.div`
        text-align:center;

        span{
            color:#FF7A45;
            border-bottom:1px solid #FF7A45;
            cursor:pointer
        }
   `;

   


const LoginPage = ( ) =>{
    const[isPasswordVisible,setIsPasswordVisible] = useState(false);

    const showPassword = () =>{
        setIsPasswordVisible(!isPasswordVisible);
    }
    return (
      <LoginCardDiv>
           <LoginCard>
            <h3 className='login-card'>Log In</h3>
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
                    control={<Radio sx={{
                            color: 'white',
                            '&.Mui-checked': {
                                color: 'blue'
                            },
                            '& .MuiSvgIcon-root': {
                                fontSize: 20,
                            },
                     }}/>} 
                     label="Administrator" 
                     />
                     
                    <FormControlLabel 
                    value="end1" 
                    control={<Radio  sx={{
                        color: 'white',
                        '&.Mui-checked': {
                            color: 'blue'
                        },
                        '& .MuiSvgIcon-root': {
                            fontSize: 20,
                        },
                    }}/>} 
                    label="Employee" 
                   />
                </RadioGroup>
                </div>
             </div>
             <LabelInputDiv>
              <Label text='Username'/>
              <Input />
             </LabelInputDiv>
             <LabelInputDiv>
             <Label text='Password'/>
             <LabelInputDiv>
             <Input type='password'/>
             {
                isPasswordVisible ? <img src={VisibilityIcon} alt='v' onClick={showPassword}/> :  <img src={EyeInvisible} alt='' onClick={showPassword}/>
             }
             </LabelInputDiv>
             </LabelInputDiv>
             <Button name='Continue' backgroundColor='#FF7A45' color='#ffffff'/>
             <ForgotPasswordText>
                <span>Forgot Password</span>
             </ForgotPasswordText>
             <ForgotPasswordText>
                <p>Do you have an account? <span>Sign Up Here.</span></p>
             </ForgotPasswordText>
            </LoginCard>
      </LoginCardDiv>
     
    )
};

export default LoginPage;