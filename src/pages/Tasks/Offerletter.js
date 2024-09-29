import React from "react";
import pdf from "../../assets/images/offer_letter.pdf";

const Offerletter = () => {
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
export default Offerletter
