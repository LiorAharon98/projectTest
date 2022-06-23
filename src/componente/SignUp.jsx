import { useState } from "react";
import {useNavigate} from "react-router-dom"
const SignUp = ({ addWorker, workers}) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [checkRadiolicense, setCheckRadiolicense] = useState(false);
  const nav = useNavigate()
  return (
    <div>
      <input
        type="number"
        placeholder="id"
        onChange={(e) => {
          setId((prevId) => {
            return (prevId = e.target.value);
          });
        }}
      />
      <input
        type="text"
        placeholder="full name"
        onChange={(e) => {
          setName((prevName) => {
            return (prevName = e.target.value);
          });
        }}
      />
      <p>license?</p>
      <br />
      <input
        type="radio"
        value={true}
        onChange={(e) => {
          setCheckRadiolicense(e.target.value);
        }}
        name="license"
      />
      <input
        type="radio"
        value={false}
        name="license"
        onChange={(e) => {
          setCheckRadiolicense(e.target.value);
        }}
        defaultChecked
      />
      <br /> yes no
      <button
        onClick={() => {
          let checkDuplicate = 0;
          workers.forEach((val) => {
            if (val.id == id) checkDuplicate++;
          });
          if (checkDuplicate > 0) return;
          addWorker(name, id, checkRadiolicense,0);
          nav('/')
        }}
      >
        Create
      </button>
    </div>
  );
};

export default SignUp;
