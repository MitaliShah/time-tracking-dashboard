import styled from "styled-components";
import UserProfile from "./UserProfile";
const allViews = ["daily", "weekly", "monthly"];

export default function DataViewSwitcher({ setSelectedView }) {
  return (
    <Wrapper>
      <UserProfile />
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--dark-blue);
  border-radius: 8px;
  margin-bottom: -24px;
`;

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  text-transform: capitalize;

  @media (min-width: 1440px) {
    padding: 26px 32px;
    margin: 0;

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
