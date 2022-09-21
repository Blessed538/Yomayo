import React from "react";

const Footer = () => {
  return (
    <div className="bg-bg-footer w-full">
      <div className="max-w-[90%] mx-auto my-auto py-12">
        <div className="flex text-white space-y-3 text-sm flex-col font-yomayo not-italic flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <h3>BayomAssociates</h3>
            <p>@ 2022 Bayomassociates. All rights reserved</p>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-4 space-x-0 md:space-x-8 sm:justify-between">
            <div>
              <h3>ADDRESS</h3>
              <p>Opposite Thuja Ville Estate,</p>
              <p>Wuye,Abuja</p>
            </div>
            <div>
              <h3>CONTACT</h3>
              <p>+234 80 3311 2190</p>
              <p>bayomassociates@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
