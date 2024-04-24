import workIcon from "../../public/images/icon-work.svg";
import playIcon from "../../public/images/icon-play.svg";
import selfCareIcon from "../../public/images/icon-self-care.svg";
import socialIcon from "../../public/images/icon-social.svg";
import studyIcon from "../../public/images/icon-study.svg";
import exerciseIcon from "../../public/images/icon-exercise.svg";
import iconEllipsis from "../../public/images/icon-ellipsis.svg";
import styled from "styled-components";

export default function Cards({ data, selectedView }) {
  return (
    <div>
      {data.map((data) => {
        const { title, timeframes } = data;
        const { current } = timeframes[selectedView];
        const { previous } = timeframes[selectedView];

        // SVG icon based on the value of title
        const svg =
          title === "Work"
            ? workIcon
            : title === "Play"
            ? playIcon
            : title === "Study"
            ? studyIcon
            : title === "Exercise"
            ? exerciseIcon
            : title === "Social"
            ? socialIcon
            : title === "Self Care"
            ? selfCareIcon
            : null;
        return (
          <Wrapper key={title} title={title}>
            <SVG src={svg} alt="" />
            <ContentDiv>
              <TitleandEllipsisWrapper>
                <Title>{title}</Title>
                <div>
                  <img src={iconEllipsis} alt="" />
                </div>
              </TitleandEllipsisWrapper>
              <WrapHours>
                <CurrentHrs>{current}hrs</CurrentHrs>
                <PreviousHrs>
                  <small>Last Week - </small>
                  {previous}hrs
                </PreviousHrs>
              </WrapHours>
            </ContentDiv>
          </Wrapper>
        );
      })}
    </div>
  );
}

// Background color based on the value of title
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

  height: 160px;
  display: flex;
  flex-direction: column-reverse;
  margin-top: 24px;
  border-radius: 8px;
  position: relative;
`;

const ContentDiv = styled.div`
  padding: 28px 24px;
  background-color: var(--dark-blue);
  border-radius: 8px;
  margin-bottom: -0.8px;
  margin-left: -0.5px;
  margin-right: -0.5px;
  z-index: 1;
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
  /* margin-top: 6px; */
`;

const SVG = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.8;
  height: 78px;
  width: 78px;
`;

const CurrentHrs = styled.span`
  font-size: 32px;
  font-weight: 300;
`;

const PreviousHrs = styled.span`
  font-size: 15px;
  color: var(--pale-blue);
`;
