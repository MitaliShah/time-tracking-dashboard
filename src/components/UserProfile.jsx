import userImage from "../../public/images/image-jeremy.png";
import styled from "styled-components";

export default function UserProfile() {
  return (
    <>
      <ProfileInfoWrapper>
        <Img src={userImage} alt="Jeremy Image" />
        <UserInfo>
          <small>Report for </small>
          <Heading>Jeremy Robson</Heading>
        </UserInfo>
      </ProfileInfoWrapper>
    </>
  );
}

const Img = styled.img`
  height: 64px;
  width: 64px;
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  max-width: 327px;
  padding: 34px 32px;
  gap: 20px;
  background-color: var(--blue);
  border-radius: 8px;
`;

const Heading = styled.h1`
  color: var(--white);
  font-size: 24px;
  font-weight: 300;
`;

const UserInfo = styled.div`
  text-align: left;
`;
