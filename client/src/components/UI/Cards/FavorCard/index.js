import React, { Component } from "react";
import faker from 'faker';
import "./style.scss";
import CustomButton from '../../CustomButton'

class FavorCard extends Component {
    render() {
        return (
            <div id="favor-card" >
                <img src="https://images.homedepot-static.com/productImages/61d255b2-0751-4a4d-afe6-fd6649b350a1/svn/toro-self-propelled-lawn-mowers-20332-64_1000.jpg" id="favor-card-img" alt="Favor" />
                <div className="favor-card-body">
                    <h4 className="favor-card-header">Favor:</h4>
                    <p className="favor-card-text">Lawnmower</p>
                    <h4 className="favor-card-header">Message:</h4>
                    <p className="favor-card-text">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </p>
                    <div id="favor-card-button">
                        <CustomButton to="">Contact</CustomButton>
                    </div>
                </div>
            </div>
        );
    }
}
export default FavorCard;
