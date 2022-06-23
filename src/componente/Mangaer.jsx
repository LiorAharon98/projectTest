import React from "react";

const Mangaer = ({ workers }) => {
  return (
    <div className="managerContainer">
      {workers.map((val, index) => {
        return (
          <table key={index} className="tableContainer">
            <tbody>
              <tr>
                <td>{val.name}</td>
              </tr>
              <tr>
                <td>{val.id}</td>
              </tr>
              <tr>
                <td>{val.visit}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
};

export default Mangaer;
