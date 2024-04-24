import styled from "styled-components";
import UserProfile from "./UserProfile";
const allViews = ["daily", "weekly", "monthly"];

export default function DataViewSwitcher({ setSelectedView }) {
  return (
    <Wrapper>
      <UserProfile />
      <WrapLinks>
        <LinkWrapper>
          {allViews.map((view) => (
            <Link
              onClick={(event) => {
                event.preventDefault();
                setSelectedView(view);
              }}
              href=""
              key={view}
            >
              {view}
            </Link>
          ))}
        </LinkWrapper>
      </WrapLinks>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--dark-blue);
  border-radius: 8px;
  margin-bottom: -24px;

  @media (min-width: 1440px) {
    margin-bottom: 0;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  text-transform: capitalize;
  color: var(--desaturated-blue);

  @media (min-width: 1440px) {
    padding: 26px 32px;
    margin: 0;
    padding: 0;

    &:not(:last-child) {
      margin-bottom: 17px;
    }

    /* gap: 21px; */
    &:hover {
      color: var(--white);
    }
    &:active {
      color: var(--white);
    }
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1440px) {
    flex-direction: column;
  }
`;

const WrapLinks = styled.div`
  @media (min-width: 1440px) {
    padding: 26px 32px;
  }
`;
