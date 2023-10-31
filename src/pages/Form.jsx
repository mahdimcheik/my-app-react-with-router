import React from "react";
import { MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function Form() {
  return (
    <div>
      <MDBRow className="g-3 align-items-center">
        <MDBInput
          wrapperClass="col-auto"
          label="Password"
          type="text"
          id="formTextExample2"
          aria-describedby="textExample2"
        />
        <MDBCol size="auto">
          <span id="textExample2" className="form-text">
            Must be 8-20 characters long.
          </span>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
