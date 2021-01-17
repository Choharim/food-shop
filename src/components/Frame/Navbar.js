import React, { useState, useContext } from "react";
import styled, { css } from "styled-components";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Context } from "components/ContextProvider/ContextProvider";
import home from "icons/home.png";
import shop from "icons/shop.png";
import foodClass from "icons/foodClass.png";

const Navbar = () => {
  const { logInSuccess, setLogInSuccess, users, currentUser } = useContext(
    Context
  );
  const [showNav, setShowNav] = useState(false);

  const logOut = () => {
    localStorage.removeItem("currentUser");
    setLogInSuccess(false);
  };

  return (
    <>
      <NavbarIcon onClick={() => setShowNav(true)} />
      <NavbarBox showNav={showNav}>
        <HeadContainer>
          <ProfileContainer logInSuccess={logInSuccess}>
            <PictureContainer>
              <ProfilePicture
                image={
                  logInSuccess
                    ? users.find(
                        (user) =>
                          user.id === currentUser.id &&
                          user.pw === currentUser.pw
                      ).userPicture
                    : null
                }
              ></ProfilePicture>
            </PictureContainer>
            <ProfileID>{currentUser.id}</ProfileID>
          </ProfileContainer>
          <NavCloseBtn onClick={() => setShowNav(false)} />
        </HeadContainer>
        <UrlContainer>
          <UrlBbtn to="/">
            <HomeIcon image={home} />
            <Text>Home</Text>
          </UrlBbtn>
          <UrlBbtn to="/shop">
            <ShopIcon image={shop} />
            <Text>Shop</Text>
          </UrlBbtn>
          <UrlBbtn to="/class">
            <ClassIcon image={foodClass} />
            <Text>Class</Text>
          </UrlBbtn>
        </UrlContainer>
        {logInSuccess ? (
          <LogOutBtn onClick={logOut}>
            <Text>Log Out</Text>
          </LogOutBtn>
        ) : (
          <UrlBbtn to="/logIn" style={{ justifyContent: "center" }}>
            <Text>Log In</Text>
          </UrlBbtn>
        )}
      </NavbarBox>
    </>
  );
};

export default Navbar;

const NavbarIcon = styled(FaBars)`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 1.5em;
  color: #493c3b;
  cursor: pointer;
`;

const NavbarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  right: -330px;
  width: 330px;
  height: 100%;
  z-index: 100;
  background-color: white;
  transition: 0.2s ease;
  ${(props) =>
    props.showNav &&
    css`
      right: 0;
    `}
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const NavCloseBtn = styled(AiOutlineClose)`
  margin-right: 20px;
  font-size: 1.5rem;
  color: #493c3b;
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px 0 0 20px;
  ${(props) =>
    !props.logInSuccess &&
    css`
      visibility: hidden;
    `}
`;

const PictureContainer = styled.div`
  margin-right: 10px;
  padding: 2px;
  border: 2px solid #7d6765;
  border-radius: 50%;
`;

const ProfilePicture = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const ProfileID = styled.span`
  font-size: 20px;
  color: #7d6765;
`;

const UrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 150px 0;
`;

const UrlBbtn = styled(Link)`
  display: flex;
  align-items: flex-end;
  margin: 20px;
  color: #f3eceb;
  text-decoration: none;
  cursor: pointer;
`;

const HomeIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const ShopIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  font-size: 2rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const ClassIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  font-size: 2rem;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const Text = styled.span`
  font-size: 20px;
  color: #7d6765;
`;

const LogOutBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  padding: 15px 0;
  color: #7d6765;
  text-decoration: none;
  cursor: pointer;
`;
