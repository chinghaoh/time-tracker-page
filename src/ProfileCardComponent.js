function ProfileCardComponent({ profilePicture, name }) {

    return (
        <div className="cardholder grid-span-col-3">
                <div className="profile-background">
                    <img className="profile-picture" src={profilePicture} alt='profile'></img>
                    <div className="card-info-title">
                        <div className="profile-card-title">
                            <p>Report for</p>
                            <h2>{name}</h2>
                        </div>
                    </div>
                </div>
                <div className="profile-card-info">
                    <p>Daily</p>
                    <p>Weekly</p>
                    <p>Monthly</p>
                </div>
        </div>
    )
};

export default ProfileCardComponent;