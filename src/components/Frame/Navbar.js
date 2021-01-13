import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineShopping,
} from "react-icons/ai";
import { GiCook } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isUser, setIsUser] = useState(false);
  //logInSuccess를 받아와서  isUser대신 사용
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, []);

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setIsUser(false);
  };

  return (
    <>
      <NavbarIcon onClick={() => setShowNav(true)} />
      <NavbarBox showNav={showNav}>
        <NavCloseBtn onClick={() => setShowNav(false)} />
        <div style={{ marginTop: "200px", width: "100%" }}>
          <UrlBbtn to="/">
            <HomeIcon />
            <Text>Home</Text>
          </UrlBbtn>
          <UrlBbtn to="/shop">
            <ShopIcon />
            <Text>Shop</Text>
          </UrlBbtn>
          <UrlBbtn to="/class">
            <ClassIcon />
            <Text>Class</Text>
          </UrlBbtn>
          <div style={{ marginTop: "250px" }}>
            {isUser ? (
              <LogOutBtn onClick={logOut}>
                <Text style={{ marginLeft: "0" }}>Log Out</Text>
              </LogOutBtn>
            ) : (
              <UrlBbtn to="/logIn" style={{ justifyContent: "center" }}>
                <Text style={{ marginLeft: "0" }}>Log In</Text>
              </UrlBbtn>
            )}
          </div>
        </div>
      </NavbarBox>
    </>
  );
};

export default Navbar;

const NavbarIcon = styled(FaBars)`
  position: fixed;
  right: 0;
  padding: 5px;
  font-size: 2rem;
  color: #493c3b;
  cursor: pointer;
`;

const NavbarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: -250px;
  width: 250px;
  height: 100%;
  z-index: 100;
  background-color: #493c3b;
  transition: 0.2s ease;
  ${(props) =>
    props.showNav &&
    css`
      right: 0;
    `}
`;

const NavCloseBtn = styled(AiOutlineClose)`
  align-self: flex-start;
  padding: 5px;
  font-size: 2rem;
  color: #b89995;
  cursor: pointer;
`;

const UrlBbtn = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  padding: 15px 0;
  color: #f3eceb;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #b89995;
  }
`;

const HomeIcon = styled(AiOutlineHome)`
  margin-left: 50px;
  font-size: 2rem;
  color: #e0cfcd;
`;

const ShopIcon = styled(AiOutlineShopping)`
  margin-left: 50px;
  font-size: 2rem;
  color: #e0cfcd;
`;

const ClassIcon = styled(GiCook)`
  margin-left: 50px;
  font-size: 2rem;
  color: #e0cfcd;
`;

const Text = styled.span`
  margin-left: 40px;
  font-size: 1.3rem;
`;

const LogOutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 15px 0;
  color: #f3eceb;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #b89995;
  }
`;
