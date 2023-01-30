import { useAppDispatch } from "../../store/store";
import "./style.css";
import { getPrograms, postOpportunity } from "../../store/programs";

interface MyComponentProps {
  title: string;
  programmeType: string;
  durationType: string;
  durationNum: number;
  date: string;
  candidates: number;
  img: any;
}

const Index: React.FC<MyComponentProps> = ({
  title,
  programmeType,
  durationType,
  durationNum,
  date,
  candidates,
  img,
}) => {
  const dispatch = useAppDispatch();

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
            // alert("specific Action");
            dispatch(getPrograms());
          }}
        >
          Get All Program Details
        </button>
        <button
          onClick={() => {
            // alert("specific Action");
            dispatch(
              postOpportunity({
                title: "title",
                summary: "summary",
                description: "description",
                keySkills: "keySkills",
                benefits: "benefits",
                criteria: "criteria",
                programType: 0,
                programStartDate: "2023-01-30T20:55:24.096Z",
                applicationOpenDate: "2023-01-30T20:55:24.096Z",
                applicationCloseDate: "2023-01-30T20:55:24.096Z",
                duration: "duration",
                location: "location",
                minQualification: 0,
                maxApplications: 0,
              })
            );
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

export default Index;
