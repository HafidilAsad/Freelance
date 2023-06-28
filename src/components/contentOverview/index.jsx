import React from "react";
import Tank from "../asset/overview.jpg";

const ContentOverview = () => {
  return (
    <div>
      <div className="row">
        <div className="col m-1">
          <div>
            <div
            //   className="card-body bg-light text-center fs-4 fw-bold rounded"
            //   style={{ borderLeft: "5px solid #999" }}
            >
              <img src={Tank} alt="" style={{ width: 700 }} />

              <div className="card">
                <div className="card-body  bg-light rounded text-center">
                  <div className="row justify-content-center align-items-center text-center">
                    <div className="col fw-bold">MODE</div>
                    <div className="col fw-bold">SYSTEM</div>
                  </div>

                  <div className="row bg-info py-2">
                    <div className="col">
                      <div className="m-2">
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }}
                        >
                          OFF
                        </button>
                      </div>

                      <button className="rounded">ON</button>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <button className="rounded" style={{ marginRight: 10 }}>
                          AUTO
                        </button>
                        <span className="dot"></span>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <button className="rounded" style={{ marginRight: 10 }}>
                          MANUAL
                        </button>
                        <span className="dot"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col m-1">
          <div className="card">
            <div
              className="card-body bg-light text-center fs-4 fw-bold rounded"
              //   style={{ borderLeft: "5px solid #999" }}
            >
              <div className="card">
                <div className="card-header">MANUAL</div>
                <div className="card-body">
                  VALVE
                  <div className="row bg-info py-2">
                    <div className="col">
                      V1 <button className="rounded">ON</button>
                      <div className="m-2">
                        <span className="dot "></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    >
                      V2 <button className="rounded">ON</button>
                      <div className="m-2">
                        <span className="dot "></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row bg-info py-2">
                    <div className="col">
                      VD <button className="rounded">ON</button>
                      <div className="m-2">
                        <span className="dot "></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    ></div>
                  </div>
                  PUMP
                  <div className="row bg-info py-2">
                    <div className="col">
                      P1 <button className="rounded">ON</button>
                      <div className="m-2">
                        <span className="dot "></span>
                        <button
                          className="rounded "
                          style={{ marginLeft: 10, backgroundColor: "red" }}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                    <div
                      className="col"
                      style={{ borderLeft: "5px solid #1250db" }}
                    >
                      P2 <button className="rounded">ON</button>
                      <div className="m-2">
                        <span className="dot "></span>
                        <button
                          className="rounded"
                          style={{ marginLeft: 10, backgroundColor: "red" }}
                        >
                          OFF
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentOverview;
