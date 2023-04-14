import { ResponsivePie } from "@nivo/pie";
import { useNavigate } from "react-router-dom";

function ResultPage() {

  const navigate = useNavigate()
  const data = [
    {
      id: "correct",
      label: "correct",
      value: 6,
      color: "rgba(79, 193, 148, 1)"
    },
    {
      id: "wrong",
      label: "wrong",
      value: 2,
      color: "rgba(239, 111, 127, 1)"
    },
    {
      id: "unattempted",
      label: "unattempted",
      value: 2,
      color: "rgba(153, 159, 187, 1)"
    },
    
  ];
  function percentageCalculator(){
    return Math.round((6/10)*100)
  }
  return (
    <>
      <div className="result-container">
        <div className="result-card">
          <h1>Your Result</h1>
          <p className="total">Total: 10</p>
          <p className="correct">Correct: 6</p>
          <p className="wrong">Wrong: 2</p>
          <p className="unattempted-p">Unattempted: 2</p>
          <p>Percentage: {percentageCalculator()+"%"}</p>
          <button className="again-test-button" onClick={() => navigate("/practice")}>Again Test</button>
        </div>
        <div className="performance-container">
          <h1 className="performance-chart">Performance Chart</h1>
          <div className="pie-chart">
            <ResponsivePie
              data={data}
              margin={{ top: 0, right: 80, bottom: 120, left: 110 }}
              innerRadius={0.5}
              colors={{ datum: "data.color" }}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="#333333"
              arcLinkLabelsThickness={2}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPage;
