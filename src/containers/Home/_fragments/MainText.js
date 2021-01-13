import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "components/ContextProvider/ContextProvider";

const MainText = () => {
  const { users, currentUser, logInSuccess } = useContext(Context);

  return (
    <TextContainer>
      <ProfileContainer>
        {logInSuccess ? (
          <>
            <PictureContainer>
              <ProfilePicture
                image={
                  users.find(
                    (user) =>
                      user.id === currentUser.id && user.pw === currentUser.pw
                  ).userPicture
                }
              ></ProfilePicture>
            </PictureContainer>
            <ProfileID>
              {
                users.find(
                  (user) =>
                    user.id === currentUser.id && user.pw === currentUser.pw
                ).id
              }
            </ProfileID>
          </>
        ) : (
          <ProfileText>로그인을 해주세요</ProfileText>
        )}
      </ProfileContainer>
      <Text>더 건강하게, 더 오랫동안 </Text>
      <Text>함께하기 위해</Text>
    </TextContainer>
  );
};
//한글짜식 써지게
export default MainText;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc(100% - 50px);
  margin: 5px 0 30px;
`;

const PictureContainer = styled.div`
  padding: 3px;
  margin: 0 10px;
  border: 2px solid #c9aca9;
  border-radius: 50%;
`;

const ProfilePicture = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
`;

const ProfileID = styled.span`
  margin-right: 10px;
  font-size: 23px;
  color: #493c3b;
`;

const ProfileText = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: #493c3b;
`;

const Text = styled.p`
  margin: 0 0 5px 10px;
  font-size: 23px;
  color: #493c3b;
`;
