import React from "react";
import SOCIAL_PROFILES from "../data/socialProfiles";

const SocialProfile = (props) => {

    const {title, link,image} = props.socialProfile;
    return (
        <span style={{ margin:10}}>
            <a href={link}><img src={image} alt={title} style={{width:35}}/></a>
        </span>
    );
}

const SocialProfiles = () => {

    return (
    <div>
        <h2>Connect with me</h2>
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE =>  (
                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                ))
        }
    </div>   
    );
}

export default SocialProfiles;