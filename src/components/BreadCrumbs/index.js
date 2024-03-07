import React from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";

const BreadCrumbsDiv = styled.div`
  display: flex;
  gap: 10px;
  a {
    text-decoration: none;
    color: #d9d9d9;
  }
  a:hover {
    color: #000000;
  }
`;

const BreadCrumbs = ({ breadData }) => {
  const CurrentPath = useLocation();
  let breadcrumpath = "";
  let nam = CurrentPath.pathname.split("/").filter((x) => x !== "");
  return (
    <BreadCrumbsDiv>
      {breadData?.map((name) => {
        if (name.path == nam[0]) {
          return <span>/ {name.text}</span>;
        } else if (breadData[0].path == name.path) {
          breadcrumpath += `/${name.path}`;
          return <Link to={breadcrumpath}>{name.text} </Link>;
        } else {
          breadcrumpath += `/${name.path}`;
          return <Link to={breadcrumpath}>/ {name.text} </Link>;
        }
      })}
    </BreadCrumbsDiv>
  );
};

export default BreadCrumbs;
