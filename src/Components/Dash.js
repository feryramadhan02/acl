import React from "react";

import Mate from "../components/mate";
import { Card, CardDeck, Pagination, Figure, Row } from "react-bootstrap";

function Dash() {
  return (
    <div>
      <div
        className="container justify-content-center"
        style={{ marginTop: "20px" }}
      >
        <Card body style={{ marginBottom: "20px" }}>
          <Row container> 

          <h2 style={{ float: "left" }}>Finance Profil.</h2>
          <Figure.Image
            
            float="right"           
            width={50}
            height={50}
            alt="171x180"
            src={require("../asset/image/Mask Group.svg")}
            roundedCircle />
          </Row>
        </Card>
        <CardDeck>
          <Card>
            <Card.Img
              variant="top"
              src={require("../asset/image/chart gunung.svg")}
            />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="justify-content-center" style={{ maxWidth: "30%" }}>
            <Card.Img
              variant="top"
              src={require("../asset/image/graph-18.svg")}
              style={{ maxWidth: "100%" }}
            />
            <Card.Body>
              <Card.Title>Monthly Sales</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        {/* <div
          id="carouselExampleControls"
          class="carousel slide m-100"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../asset/image/kr.jpg")}
                class="d-block w-100"alt=""
              />
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../asset/image/kr2.jpg")}
              class="d-block w-100"alt=""
            />
          </div>
          <div class="carousel-item">
            <img src={require("../asset/image/kr3.jpg")}
              class="d-block w-100"alt=""/>
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> */}

        <div
          class="container card"
          style={{
            boxShadow: "-2px 2px 4px 6px rgba(107, 173, 173, 0.116)",
            marginTop: "20px",
            marginBottom: "25px",
          }}
        >
          <div class="card-body p-6">
            <h2>Project of the Month</h2>
            <p>
              Overview of the Month
              <Mate style={{ float: "right" }}></Mate>
            </p>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name Project</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Develop App</td>
                  <td>12/10/2020</td>
                  <td>12/12/2020</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Maintanance Server</td>
                  <td>12/10/2020</td>
                  <td>13/10/2020</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Charity</td>
                  <td>15/10/2020</td>
                  <td>17/10/2020</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Desain Ads</td>
                  <td>15/10/2020</td>
                  <td>17/10/2020</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger dropdown-toggle"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Action
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
      </div>

      {/* <div class="container " style={{ maxWidth: "380px" }}> */}

      {/* <div class="row justify-content-center" style={{ color: "white"}} >

            
            <div class="col-12" style={{ backgroundColor: "#0278ae", margin: "2px",}}>
              <div class="container"></div>
                <h2>Table Head Colors</h2>
                <p>The .thead-dark class adds a black background to table headers, and the .thead-light class adds a grey background to table headers:</p>
                <table class="table">
                  <thead class="thead-dark">
                    <tr>
                      <th>Firstname</th>
                      <th>Lastname</th>
                      <th>Email</th>
                    </tr>
                  </thead>
              </div>
          </div> */}

      {/* </div> */}
    </div>
  );
}

export default Dash;
