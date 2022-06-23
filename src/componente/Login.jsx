import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CurrentUser from "./CurrentUser";
import Products from "./Products";

const Login = ({ workers, products, removeItem }) => {
  const nav = useNavigate();
  const [currentUser, setCurrentUser] = useState([]);
  const [displayProduct, setDisplayProduct] = useState(false);
  const [checkId, setCheckId] = useState(0);

  return (
    <div>
      NO.
      <input
        type="number"
        placeholder="id"
        onChange={(e) => {
          setCheckId(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (checkId == "99999") {
            nav("/manager");
            return;
          }
          const afterCheckWokrer = workers.filter((val) => {
            return val.id == checkId;
          });
          if (afterCheckWokrer.length == 0) {
            alert("employer X not exist");
            return;
          }
          setDisplayProduct(true);
          afterCheckWokrer[0].visit++;
          return setCurrentUser(afterCheckWokrer);
        }}
      >
        Enter
      </button>
      {currentUser.map((val, index) => {
        return <CurrentUser key={index} name={val.name} id={val.id} license={val.license} />;
      })}
      <br />
      {displayProduct &&
        products.map((val, index) => {
          return (
            <Products
              key={index}
              productName={val.productName}
              productAvailable={val.productAvailable}
              productNum={val.productNum}
              removeItem={removeItem}
              currentUser={currentUser[0]}
              needForklift={val.needForklift}
              index={index}
            />
          );
        })}
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Login;
