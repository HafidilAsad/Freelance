import React from "react";
import ControlRoom from "../asset/ctrl.jpg";
import Crane from "../asset/crane.jpg";
import Cooling from "../asset/cooling.jpg";
import { useNavigate } from "react-router-dom";

const ContentHome = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/overview");
  };

  return (
    <div
      className="container-fluid  justify-content-center "
      style={{ marginLeft: 10 }}
    >
      <div className="row w-100 justify-content-center">
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
          <div className="col">
            <div className="card h-100">
              <img
                src={ControlRoom}
                className="card-img-top"
                style={{ height: 300, borderBottom: "5px solid blue" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">CONTROL ROOM</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary" onClick={handleButtonClick}>
                  RUNNING
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Crane}
                className="card-img-top"
                style={{ height: 300, borderBottom: "5px solid blue" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">CRANE</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary">RUNNING</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={Cooling}
                className="card-img-top"
                style={{ height: 300, borderBottom: "5px solid blue" }}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">COOLING WATER</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <small className="text-muted">Last updated 3 mins ago</small>
                <button className="btn btn-primary">RUNNING</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentHome;
