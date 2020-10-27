import React from "react";

function EmployeeDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.nameL} className="img-fluid" src={props.src} style={{ margin: "0 auto" }} />
      <h3>{props.nameF} {props.nameL}</h3>
      <h3>{props.email}</h3>
      <h3>{props.username}</h3>
      <h3>{props.gender}</h3>
    </div>
  );
}

export default EmployeeDetail;
