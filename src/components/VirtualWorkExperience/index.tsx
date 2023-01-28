import "./style.css";


interface MyComponentProps {
  title: string;
  programmeType: string;
  durationType: string;
  durationNum: number;
  date: string;
  candidates: number;
  img: any;
}

const index: React.FC<MyComponentProps> = ({
  title,
  programmeType,
  durationType,
  durationNum,
  date,
  candidates,
  img,
}) => {
  return (
    <div className="container">
      <div className="imgWrapper">
        <img src={img} alt="text" />
      </div>
      <div className="info">
        <p>{title}</p>
        <div className="details">
          <div>
            <span>Programme type:</span>
            <span>{programmeType}</span>
          </div>

          <div>
            <span>Duration:</span>
            <span>
              {durationNum} {durationType}
            </span>
          </div>

          <div>
            <span>Programme start:</span>
            <span>{date}</span>
          </div>
        </div>
        <button
          onClick={() => {
            alert("specific Action");
          }}
        >
          Post opportunity
        </button>
      </div>
      <div className="candidates">
        <span>{candidates}</span>
        <p>Total available candidates</p>
        <button
          onClick={() => {
            alert("specific Action");
          }}
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default index;
