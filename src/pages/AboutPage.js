import founders from "../assets/founders.JPG";
import umar from "../assets/umar.JPG";
import manan from "../assets/manan.png";
import hamid from "../assets/hamid.jpg";

function AboutPage() {
    return (
      <>
        <div className="content">
          <div className="aim">
            <h1>Our Aim</h1>
            <p>
              Quiz Mine is a platform where you will find all the relevant MCQs
              for your subjects. We have made this website for the betterment of
              education in Pakistan. Using this website, you can ace your board
              exams and entrance tests.
            </p>
          </div>
          <div className="introduction">
            <h1>Our Founders</h1>
            <img src={founders} className="founders" alt="" />
          </div>
          <div className="intro-cards-div">
            <div className="intro-card">
              <div className="intro-cad-image">
                <img src={umar} alt="" srcset="" />
              </div>
              <div>
                <h2>Umar Mutaza</h2>
                <h4>L.L.B from G.C University Faisalabad</h4>
                <button>Connect with Him</button>
              </div>
            </div>
            <div className="intro-card">
              <div className="intro-cad-image">
                <img src={manan} alt="" srcset="" />
              </div>
              <div>
                <h2>Manan Nasir</h2>
                <h4>Mechanical Engineering from PIEAS</h4>
                <button>Connect with Him</button>
              </div>
            </div>
            <div className="intro-card">
              <div className="intro-cad-image">
                <img src={hamid} alt="" srcset="" />
              </div>
              <div>
                <h2>Hamid Ali</h2>
                <h4>Masters in English from G.C University Faisalabad</h4>
                <button>Connect with Him</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default AboutPage;
  