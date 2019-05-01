import React, { Component } from "react";
import "./style.scss";

class ReviewCard extends Component {
  render() {

    return (
      <div id="review-card"  >
        <div className="container" id="container-review-card" >

          <div className="row" id="review-card-padding-removal">

            <div className="col-md-5" id="review-card-padding-removal">
              <img src="https://images.homedepot-static.com/productImages/61d255b2-0751-4a4d-afe6-fd6649b350a1/svn/toro-self-propelled-lawn-mowers-20332-64_1000.jpg" id="favor-card-img" alt="Favor" />
            </div>

            <div className="col-md-7" id="review-card-padding-removal">
              <div className="review-card-body" id="review-card-padding-removal">
                <h4 className="review-card-header">Favor:</h4>
                <p className="review-card-text">Lawnmower</p>
                <h4 className="review-card-header">Reviewer:</h4>
                <p className="review-card-text">John Smith</p>
              </div>
            </div>

          </div>

          <div className="row" id="review-card-padding-removal">
            <div className="col-md-12">
              <h4 className="review-card-header">Review:</h4>
              <p className="review-card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </p>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ReviewCard;

