import userImage from "../../public/images/image-jeremy.png";
import styled from "styled-components";

export default function UserProfile() {
  return (
    <>
      <ProfileInfoWrapper>
        <Img src={userImage} alt="Jeremy Image" />
        <UserInfo>
          <Small>Report for </Small>
          <Heading>
            Jeremy <LastName>Robson</LastName>
          </Heading>
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
  /* max-width: 327px; */
  padding: 34px 32px;
  gap: 20px;
  background-color: var(--blue);
  border-radius: 8px;

  @media (min-width: 1440px) {
    max-width: 255px;
    flex-direction: column;
    gap: 43px;
    padding: 37px 32px;
  }
`;

const Heading = styled.h1`
  color: var(--white);
  font-size: 24px;
  font-weight: 300;

  @media (min-width: 1440px) {
    font-size: 40px;
    padding-bottom: 43px;
  }
`;

const UserInfo = styled.div`
  text-align: left;
`;

const LastName = styled.span`
  @media (min-width: 1440px) {
    display: block;
  }
`;

const Small = styled.small`
  font-size: 15px;
`;
