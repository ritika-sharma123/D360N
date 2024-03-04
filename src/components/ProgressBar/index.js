import React, { useEffect } from "react";
import styled from "styled-components";

const DefaultProgressBarDiv = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  div:last-child {
    text-align: center;
  }
  .progrsstext {
    width: 100%;
  }
`;

const DefaultProgressBar = styled.div`
  width: 100%;
  height: 10px;
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`;

const Progress = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--grey);
`;

const ScalingDiv = styled.div`
  width: ${(props) => (props.width ? props.width : "")};
  background-color: ${(props) => (props.background ? props.background : "")};
  transition: background-color 2000ms linear;

  height: 10px;
`;

const ProgressBar = ({ scale, status, Text }) => {
  useEffect(() => {
    progressScalingBackground(status);
  }, [status]);

  const progressScalingBackground = (value) => {
    let backgroundColor = "";
    if (value == "Queued") {
      backgroundColor = "#1890FF";
    } else if (value == "InProgress") {
      backgroundColor = "#FFFF00";
    } else if (value == "Succeeded") {
      backgroundColor = "#52C41A";
    }
    return backgroundColor;
  };

  return (
    <DefaultProgressBarDiv>
      <DefaultProgressBar>
        <Progress>
          <ScalingDiv
            background={progressScalingBackground(status)}
            width={`${scale}%`}
          ></ScalingDiv>
        </Progress>
        <div>
          {scale !== 100 ? (
            ``
          ) : (
            <i
              style={{ color: "#52C41A", fontSize: 20, height: 14 }}
              class="fa fa-check-circle"
            ></i>
          )}
        </div>
      </DefaultProgressBar>
      <div className="progrsstext">
        {Text}
        {status}
      </div>
    </DefaultProgressBarDiv>
  );
};

export default ProgressBar;
