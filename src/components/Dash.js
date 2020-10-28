import React from "react";



function Dash() {
  return (
    <div>
      <div className="container justify-content-center" style={{ marginTop: "20px" }}>
        <div
          id="carouselExampleControls"
          class="carousel slide m-100"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src={require("../asset/image/kr.jpg")}
                class="d-block w-100" alt=""
              />
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={require("../asset/image/kr2.jpg")}
              class="d-block w-100" alt=""
            />
          </div>
          <div class="carousel-item">
            <img src={require("../asset/image/kr3.jpg")}
              class="d-block w-100" alt="" />
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
        </div>

        <div
          class="container card"
          style={{ boxShadow: "-2px 2px 4px 6px rgba(107, 173, 173, 0.116)", marginTop: "20px", marginBottom: "25px" }} >
          <div class="card-body p-6">
            <h2>Project of the Month</h2>
            <p>
              Overview of the Month
              <img className="float-right" src={require("../asset/image/plus.svg")} role="button" aria-pressed="true"
                style={{ maxWidth: "20px", marginRight: "150px" }} alt="" /></p>


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
                      aria-expanded="false">
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
                      aria-expanded="false">
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
                      aria-expanded="false">
                      Action
                    </button>

                  </td>
                </tr>
              </tbody>
            </table>
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
