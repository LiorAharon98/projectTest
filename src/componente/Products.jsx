import React from "react";

const Products = ({ currentUser, index, needForklift, productNum, productName, removeItem, productAvailable }) => {
  return (
    <div>
      <div key={index}>
        <button
          onClick={() => {
            if (needForklift == true && currentUser.license == false) alert("need a license");
            else if (needForklift == true && currentUser.license == "true") {
              removeItem(index);
              productAvailable = false;
            } else if (needForklift == false) {
              removeItem(index);
              productAvailable = false;
            }
          }}
        >
          update
        </button>
        <br />
        {productNum}
        <br />
        {productName}
        <br />
        need forklift ? {needForklift ? "yes" : "no"}
      </div>
    </div>
  );
};

export default Products;
