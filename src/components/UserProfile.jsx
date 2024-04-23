import userImage from "../../public/images/image-jeremy.png";
import DataViewSwitcher from "../components/DataViewSwitcher";
import styled from "styled-components";

export default function UserProfile() {
  return (
    <>
      <ProfileInfoWrapper>
        <Img src={userImage} alt="Jeremy Image" />
        <div>
          <small>Report for </small>
          <Heading>Jeremy Robson</Heading>
        </div>
      </ProfileInfoWrapper>

      <DataViewSwitcher />
    </>
  );
}

const Img = styled.img`
  height: 64px;
  width: 64px;
`;

const ProfileInfoWrapper = styled.div`
  max-width: 327px;
`;

const Heading = styled.h1`
  color: var(--white);
  font-size: 40px;
  font-weight: 300;
`;
