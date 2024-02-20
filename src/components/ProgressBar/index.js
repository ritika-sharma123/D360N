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

const ProgressBar = ({ scale = 100 }) => {
  useEffect(() => {
    progressScalingBackground(scale);
  }, [scale]);

  const progressScalingBackground = (value) => {
    let backgroundColor = "";
    if (value <= 30) {
      backgroundColor = "#1890FF";
    } else if (value > 30 && value <= 60) {
      backgroundColor = "#FFFF00";
    } else if (value > 60) {
      backgroundColor = "#52C41A";
    }
    return backgroundColor;
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
        <div>
          {scale !== 100 ? (
            `${scale}%`
          ) : (
            <i
              style={{ color: "#52C41A", fontSize: 20, height: 14 }}
              class="fa fa-check-circle"
            ></i>
          )}
        </div>
      </DefaultProgressBar>
      <div>{scale}/100 Files Transferred</div>
    </DefaultProgressBarDiv>
  );
};

export default ProgressBar;
