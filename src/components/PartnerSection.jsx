import React from "react";
import { images } from "../constants/image.js";

const PartnerSection = () => {
  const partnerList = [
    images.ic_aditya,
    images.ic_axis,
    images.ic_axisFinance,
    images.ic_bajaj,
    images.ic_finnable,
    images.ic_fullerton,
    images.ic_hdfc,
    images.ic_heroFin,
    images.ic_icici,
    images.ic_idfc,
    images.ic_incred,
    images.ic_indus,
    images.ic_kotak,
    images.ic_poonawalla,
    images.ic_standardChartered,
    images.ic_tata,
    images.ic_ujjivan,
    images.ic_yes,
  ];
  return (
    <div className="grid-col-6 grid grid-flow-row">
      {partnerList.map((image) => (
        <img src={image} alt="partnerLogo"></img>
      ))}
    </div>
  );
};

export default PartnerSection;
