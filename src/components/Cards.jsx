const generateCardBG = (title) => {
  const backgroundColor = hsl();
  if (title === "work") {
  }
};

export default function Cards({ data, selectedView }) {
  return (
    <div>
      {data.map((data) => {
        const { title, timeframes } = data;
        const { current } = timeframes[selectedView];
        const { previous } = timeframes[selectedView];
        console.log(`Current is :`, current, `Previous is`, previous);

        return (
          <div key={title}>
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
}
