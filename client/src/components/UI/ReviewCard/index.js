import React, { Component } from "react";
import faker from 'faker';
import "./style.scss";

class ReviewCard extends Component {
  render() {

    return (
      <div id="review-card" >
        <img src="https://images.homedepot-static.com/productImages/61d255b2-0751-4a4d-afe6-fd6649b350a1/svn/toro-self-propelled-lawn-mowers-20332-64_1000.jpg" id="favor-card-img" alt="Favor" />
        <div className="review-card-body">
          <h4 className="review-card-header">Favor:</h4>
          <p className="review-card-text">Lawnmower</p>
          <h4 className="review-card-header">Message:</h4>
          <p className="review-card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </p>
        </div>
      </div>
    );
  }
}
export default ReviewCard;

