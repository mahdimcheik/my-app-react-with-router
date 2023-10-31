import React from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link to="/">Card</Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link to="/articles/972">
                <span>Carousel</span>
              </Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current="page">
              <Link to="/form">
                <span>Form</span>
              </Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
      </MDBContainer>
    </MDBNavbar>
  );
}
