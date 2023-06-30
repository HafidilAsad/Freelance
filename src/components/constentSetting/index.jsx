import React from "react";
import "./index.css";
import axios from "axios";
import { useEffect, useState } from "react";

const ContentSetting = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.patch(
        "http://localhost:5100/control_rooms/1",
        {
          pv: inputValue,
        }
      );
      console.log("Database updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating database:", error);
    }
  };

  const [realtime, setRealtime] = useState([]);
  //mengambil data realtime dari power meter

  const getRealtime = async () => {
    try {
      const response = await axios.get("http://localhost:5100/control_rooms");
      setRealtime(response.data);
    } catch (error) {
      console.log(error.message);
    }
    // const result = await axios.get("http://10.14.51.17:5000/mc57s");
    // setRealtime(result.data);
  };

  useEffect(() => {
    getRealtime();
  });

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
              className="card-body bg-light text-center fs-1 fw-bold rounded d-flex align-items-center justify-content-center"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              <input
                type="text"
                className="rounded bg-black text-white p-2 text-center"
                style={{ border: "2px solid grey", width: 150 }}
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="btn  btn-primary fs-1 m-2"
                onClick={handleButtonClick}
              >
                SET
              </button>
            </div>
            <div
              className="card-body bg-light text-center fs-1 fw-bold rounded d-flex align-items-center justify-content-center"
              style={{ borderBottom: "2px solid #1ac953" }}
            >
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <span
                    className="rounded bg-black text-white p-2"
                    style={{ border: "2px solid grey", width: 150 }}
                    key={item.id}
                  >
                    {item.pv}
                  </span>
                ))}
              <p className=" fs-1 m-2">Actual</p>
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
              {realtime
                .filter(({ id }) => id === 1)
                .map((item) => (
                  <span
                    className="rounded bg-black text-white py-3"
                    style={{ border: "2px solid grey" }}
                    key={item.id}
                  >
                    {item.sv}
                  </span>
                ))}
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
