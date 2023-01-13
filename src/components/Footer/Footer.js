import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div class="row mb-5 pb-3 no-gutters">
      <div class="col-md-4 mb-md-0 mb-4 d-flex">
        <div class="con con-1 w-100 py-5">
          <div class="con-info w-100 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="ion-ios-call"></span>
            </div>
            <div class="text">
              <span>(+00) 1234 5678</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-md-0 mb-4 d-flex">
        <div class="con con-2 w-100 py-5">
          <div class="con-info w-100 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="ion-ios-mail"></span>
            </div>
            <div class="text">
              <span>info@email.com</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-md-0 mb-4 d-flex">
        <div class="con con-3 w-100 py-5">
          <div class="con-info w-100 text-center">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="ion-ios-pin"></span>
            </div>
            <div class="text">
              <span>
                203 Fake St. Mountain View, San Francisco, California, USA
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
