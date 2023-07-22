import React from "react";
import { useState } from "react";
import LoginModal from "../components/auth/LoginModal";
import GeneralLogin from "../components/auth/GeneralLogin";
import GuideLogin from "../components/auth/GuideLogin";
import styled from "styled-components";

const LoginWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 60px 40px;
`;

const LoginMenu = styled.div`
  display: flex;
  height: 40px;
  border-bottom: solid 1px #ccc;
  margin-bottom: 30px;
`;

const LoginLink = styled.div`
  display: block;
  width: 50%;
  color: black;
  font-weight: 700;
`;

function Login() {
  const [isGeneralLoginVisible, setIsGeneralLoginVisible] = useState(true);

  const toggleLoginType = (isGeneral) => {
    if (
      (isGeneral && !isGeneralLoginVisible) ||
      (!isGeneral && isGeneralLoginVisible)
    ) {
      setIsGeneralLoginVisible((prevState) => !prevState);
    }
  };

  return (
    React.createElement(LoginModal, null,
      React.createElement(LoginWrapper, { className: "login-form" },
        React.createElement(LoginMenu, { className: "login-menu" },
          React.createElement(LoginLink, {
            onClick: () => toggleLoginType(true),
            style: {
              borderBottom: isGeneralLoginVisible
                ? "2px solid #7f9dff"
                : "2px solid transparent",
            }
          }, "일반 로그인"),
          React.createElement(LoginLink, {
            onClick: () => toggleLoginType(false),
            style: {
              borderBottom: !isGeneralLoginVisible
                ? "2px solid #FF9090"
                : "2px solid transparent",
            }
          }, "가이드 로그인")
        ),
        React.createElement("div", { className: "login-wrapper" },
          isGeneralLoginVisible ? React.createElement(GeneralLogin, null) : React.createElement(GuideLogin, null)
        )
      )
    )
  );
}

export default Login;
