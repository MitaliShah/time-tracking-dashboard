import workImg from "../../public/images/icon-study.svg";
import styled from "styled-components";
import playImg from "../../public/images/icon-play.svg";
import iconEllipsis from "../../public/images/icon-ellipsis.svg";
export default function Cards({ data, selectedView }) {
  return (
    <div>
      {data.map((data) => {
        const { title, timeframes } = data;
        const { current } = timeframes[selectedView];
        const { previous } = timeframes[selectedView];
        console.log(`Current is :`, current, `Previous is`, previous);

        return (
          <Wrapper key={title} title={title}>
            <ContentDiv>
              <TitleandEllipsisWrapper>
                <Title>{title}</Title>
                <div>
                  <img src={iconEllipsis} alt="" />
                </div>
              </TitleandEllipsisWrapper>
              <WrapHours>
                <span>{current}hrs</span>
                <span>
                  <small>Last Week - </small>
                  {previous}hrs
                </span>
              </WrapHours>
            </ContentDiv>
          </Wrapper>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) =>
    props.title === "Work"
      ? "var(--work-light-red)"
      : props.title === "Play"
      ? "var(--play-soft-blue)"
      : props.title === "Study"
      ? "var(--study-light-red)"
      : props.title === "Exercise"
      ? "var(--exercise-lime-green)"
      : props.title === "Social"
      ? "var(--social-violet)"
      : props.title === "Self Care"
      ? "var(--self-care-soft-orange)"
      : null};
  /* background-image: ${(props) =>
    props.title === "Work" ? `url(workImg)` : null};
  background-size: cover;
  background-position: right;
  height: 78px;
  width: 78px; */
  height: 160px;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 24px;
  border-radius: 8px;
`;

// const SVG = styled.div`
//   position: absolute;
//   background-image: ${(props) =>
//     props.title === "Work" ? `url(workImg)` : null};
//   background-size: cover;
//   background-position: right;
//   height: 78px;
//   width: 78px;
// `;

const ContentDiv = styled.div`
  padding: 28px 24px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  margin-bottom: -0.5px;
`;

const Title = styled.h2`
  font-size: 18px;
`;

const TitleandEllipsisWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const WrapHours = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
`;
