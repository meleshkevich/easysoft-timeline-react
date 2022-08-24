const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <small>
        <strong>Data id: </strong>
        {data._id}
      </small>
      <p>{data.registered}</p>
      <p>
        <strong>Name: </strong>
        {data.name.first} {data.name.last}
      </p>
      <p>
        <strong>Description:</strong> {data.about}
      </p>

      <div>
        <strong>Tags: </strong>
        {data.tags.length > 0 &&
          data.tags.map((tag, i) => <small key={i}>{tag}, </small>)}
      </div>
      <span className="circle" />
    </div>
  </div>
);
export default TimelineItem;
