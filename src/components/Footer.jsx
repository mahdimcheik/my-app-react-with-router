import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <Link className="text-dark" to="/about">
          Notre promo (JS les meilleurs)
        </Link>
      </div>
    </MDBFooter>
  );
}
