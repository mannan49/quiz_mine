import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MCQs } from "../data/Data";
import toast from "react-hot-toast";

const PracticeMCQs = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < MCQs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if(currentIndex === MCQs.length - 1){
      navigate("/results")
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
  
        <div className="show-mcqs-container">
          <div className="show-mcqs">
            {MCQs.map((mcq, index) => {
              if(index===currentIndex)
              {
                return (
                  <>
                    <h3>
                      Question#{index + 1} of {MCQs.length}
                    </h3>
                    <p className="statement">{mcq.statement}</p>
                    <div className="options-container">
                      <div className="single-option">
                        <input
                          type="radio"
                          name="option"
                          id="optionA"
                          value="A"
                        />
                        <label className="label-option" htmlFor="optionA">
                          A. {mcq.optionA}
                        </label>
                      </div>
                      <div className="single-option">
                        <input
                          type="radio"
                          name="option"
                          id="optionB"
                          value="B"
                        />
                        <label className="label-option" htmlFor="optionB">
                          B. {mcq.optionB}
                        </label>
                      </div>
                      <div className="single-option">
                        <input
                          type="radio"
                          name="option"
                          id="optionC"
                          value="C"
                        />
                        <label className="label-option" htmlFor="optionC">
                          C. {mcq.optionC}
                        </label>
                      </div>
                      <div className="single-option">
                        <input
                          type="radio"
                          name="option"
                          id="optionD"
                          value="D"
                        />
                        <label className="label-option" htmlFor="optionD">
                          D. {mcq.optionD}
                        </label>
                      </div>
                    </div>
                    <div className="mcqs-submit-buttons">
                      <button className="previous-button" onClick={handlePrevious}>Previous</button>
                      <br />
                      <button className="next-button" onClick={handleNext}>Next</button>
                    </div>
                  </>
                );
              }
            })}
          </div>
        </div>

    </>
  );
};

export default PracticeMCQs;
