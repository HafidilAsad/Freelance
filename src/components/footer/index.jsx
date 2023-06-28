import React from "react";

const FooterContent = () => {
  return (
    <div
      className="mt-5 m-4 px-2 d-flex justify-content-end align-items-center gap-2 rounded  bg-light"
      style={{ borderBottom: "2px solid #2986cc" }}
    >
      <button type="button" className="btn btn-primary m-2">
        HOME
      </button>
      <button type="button" className="btn btn-primary m-2">
        SETTING
      </button>
      <button type="button" className="btn btn-primary m-2">
        MANUAL CONTROL
      </button>
      <button type="button" className="btn btn-primary m-2">
        MONITOR I/O
      </button>
      <div className="ms-auto">
        <button type="button" className="btn btn-success m-2">
          SETTING
        </button>
      </div>
      <button type="button" className=" btn btn-success m-2">
        RESET
      </button>
    </div>
  );
};

export default FooterContent;
