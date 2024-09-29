import React from "react";
import pdf from "../../assets/images/all_tasks.pdf";

const Alltasks = () => {
  return (
    <div className="d-flex flex-column align-items-center container">
      <embed
        src={pdf}
        type="application/pdf"
        width={"100%"}
        height={"600px"}
      ></embed>
    </div>
  );
};

export default Alltasks;
