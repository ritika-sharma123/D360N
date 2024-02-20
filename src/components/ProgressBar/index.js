import React, { useEffect } from "react";
import styled from "styled-components";

const DefaultProgressBarDiv = styled.div`
  max-width: 400px;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div:last-child {
    text-align: center;
  }
`;

const DefaultProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 5px;
`;

const Progress = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--grey);
  border-radius: 100px;
`;

const ScalingDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  background-color: ${(props) => (props.background ? props.background : "")};
  height: 10px;
  border-radius: 100px;
`;

const ProgressBar = ({ scale = "0" }) => {
  useEffect(() => {
    progressScalingBackground(scale);
  }, [scale]);

  const progressScalingBackground = (value) => {
    switch (value) {
      case "30":
        return "#1890FF";
      case "60":
        return "#FFFF00";
      case "100":
        return "#00FF00";
      default:
        break;
    }
  };
  return (
    <DefaultProgressBarDiv>
      <DefaultProgressBar>
        <Progress>
          <ScalingDiv
            background={progressScalingBackground(scale)}
            width={`${scale}%`}
          ></ScalingDiv>
        </Progress>
        <div>{scale}%</div>
      </DefaultProgressBar>
      <div>{scale}/100 Files Transferred</div>
    </DefaultProgressBarDiv>
  );
};

export default ProgressBar;
