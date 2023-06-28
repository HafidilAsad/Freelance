import React from "react";
import "./index.css";
const ContentSetting = () => {
  return (
    <div>
      <div className="row">
        <div className="col m-2">
          <div className="card shadow">
            <div
              className="card-body bg-light text-center fs-4 fw-bold rounded"
              style={{ borderLeft: "5px solid #1ac953" }}
            >
              PARAMETER
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="card shadow">
            <div
              className="card-body bg-light text-center fs-4 fw-bold rounded"
              style={{ borderLeft: "5px solid #1ac953" }}
            >
              SETTING
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="card shadow">
            <div
              className="card-body bg-light text-center fs-4 fw-bold rounded"
              style={{ borderLeft: "5px solid #1ac953" }}
            >
              ACTUAL
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="card shadow">
            <div
              className="card-body bg-light text-center fs-4 fw-bold rounded"
              style={{ borderLeft: "5px solid #1ac953" }}
            >
              STATUS
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col m-2">
          <div className="card ">
            <div
              className="card-body bg-light text-center fs-1 fw-bold rounded"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              STATUS
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="card ">
            <div
              className="card-body bg-light text-center fs-1 fw-bold rounded"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              <span
                className="rounded bg-black text-white p-2"
                style={{ border: "2px solid grey" }}
              >
                ####,#
              </span>
              mbar
            </div>
          </div>
          <p className="fw-bold fs-4">Hysterisis (+/-)</p>
          <div className="card ">
            <div
              className="card-body bg-light text-center fs-1 fw-bold rounded"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              <span
                className="rounded bg-black text-white p-2"
                style={{ border: "2px solid grey" }}
              >
                ####,#
              </span>
              mbar
            </div>
          </div>
        </div>

        <div className="col m-2 ">
          <div className="card  " style={{ paddingBottom: 75, paddingTop: 75 }}>
            <div className="card-body bg-light text-center fs-1 fw-bold rounded">
              <span
                className="rounded bg-black text-white py-5"
                style={{ border: "2px solid grey" }}
              >
                ####,#
              </span>
              mbar
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="card ">
            <div
              className="card-body bg-light text-center fs-1 fw-bold rounded py-5"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              <span
                className="rounded bg-black text-white p-2 "
                style={{ border: "2px solid grey" }}
              >
                ####,#
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col m-2">
          <div className="card ">
            <div
              className="card-body bg-light text-center fs-1 fw-bold rounded"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              INVERTER
            </div>
          </div>
        </div>
        <div className="col m-2">
          <div className="card ">
            <div
              className="card-body bg-light text-center  fw-bold rounded d-flex justify-content-center align-items-center rounded"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-inline-flex align-items-center">
                  <button className="btn btn-secondary m-1">AUTO</button>
                  <span className="dot"></span>
                </div>
                <div className="d-inline-flex align-items-center m-1">
                  <button className="btn btn-secondary m-1">MANUAL</button>
                  <span className="dot_green"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <p className="fw-bold m-2"> Timer Per Inc/Dec</p>
            <p className="fw-bold m-2"> Manual freq</p>
          </div>

          <div className="d-flex">
            <div className="card ">
              <div
                className="card-body bg-light text-center fs-4 fw-bold rounded"
                style={{ borderBottom: "2px solid #1ac953" }}
              >
                <span
                  className="rounded bg-black text-white p-2"
                  style={{ border: "2px solid grey" }}
                >
                  ####,#
                </span>
                s
              </div>
            </div>
            <div className="card ">
              <div
                className="card-body bg-light text-center fs-4 fw-bold rounded"
                style={{ borderBottom: "2px solid #1ac953" }}
              >
                <span
                  className="rounded bg-black text-white p-2"
                  style={{ border: "2px solid grey" }}
                >
                  ####,#
                </span>
                Hz
              </div>
            </div>
          </div>
        </div>

        <div className="col m-2 ">
          <div className="card  " style={{ paddingBottom: 60, paddingTop: 60 }}>
            <div className="card-body bg-light text-center fs-1 fw-bold rounded">
              <span
                className="rounded bg-black text-white py-5"
                style={{ border: "2px solid grey" }}
              >
                ####,#
              </span>
              Hz
            </div>
          </div>
        </div>
        <div className="col m-2"></div>
      </div>
    </div>
  );
};

export default ContentSetting;
