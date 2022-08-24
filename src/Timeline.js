import timelineData from "./data.json";
import TimelineItem from "./TimelineItem";

const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, i) => (
        <TimelineItem data={data} key={i} />
      ))}
    </div>
  );

export default Timeline;
