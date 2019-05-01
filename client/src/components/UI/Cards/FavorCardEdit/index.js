import React, { Component } from "react";
import "./style.scss";
import CustomButton from '../../CustomButton';

class FavorCardEdit extends Component {
  render() {
    return (
      <div id="favor-card-edit" >
        <img src="https://images.homedepot-static.com/productImages/61d255b2-0751-4a4d-afe6-fd6649b350a1/svn/toro-self-propelled-lawn-mowers-20332-64_1000.jpg" id="favor-card-edit-img" alt="Favor" />
        <div className="favor-card-edit-body">
          <h4 className="favor-card-edit-header">Favor:</h4>
          <p className="favor-card-edit-text">Lawnmower</p>
          <h4 className="favor-card-edit-header">Message:</h4>
          <p className="favor-card-edit-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div id="favor-card-edit-button">
            <CustomButton to="">Select Favor</CustomButton>
          </div>
        </div>
      </div>
    );
  }
}

export default FavorCardEdit;
