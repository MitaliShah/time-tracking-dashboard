import workImg from "../../public/images/icon-study.svg";
import styled from "styled-components";
import playImg from "../../public/images/icon-play.svg";

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
            <div>
              <div>
                <h2>{title}</h2>
                <div>{/* <img src={workImg} alt="" /> */}</div>
              </div>
              <div></div>
            </div>
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
`;
