import React, { Component } from "react";
import faker from 'faker';
import "./style.scss";
import CustomButton from '../../CustomButton';

class FavorCardProfile extends Component {
    render() {

        return (
            <div id="favor-card-profile" >
                <img src="https://images.homedepot-static.com/productImages/61d255b2-0751-4a4d-afe6-fd6649b350a1/svn/toro-self-propelled-lawn-mowers-20332-64_1000.jpg" id="favor-card-profile-img" alt="Favor" />
                <div className="favor-card-profile-body">
                    <h4 className="favor-card-profile-header">Favor:</h4>
                    <p className="favor-card-profile-text">Lawnmower</p>
                    <h4 className="favor-card-profile-header">Message:</h4>
                    <p className="favor-card-profile-text">
                        Some quick example text to build on the card profile-title and make up the
                        bulk of the card'profile-s content.
                    </p>
                </div>
            </div>
        );
    }
}
export default FavorCardProfile;
