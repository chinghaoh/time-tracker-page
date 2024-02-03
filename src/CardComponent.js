import ellipsis from './images/icon-ellipsis.svg'


function CardComponent({backgroundImage,backgroundColour, cardTitle, hours, hoursLastWeek}) {

    const style = {
        backgroundColor: backgroundColour 
      };
    

    return (
        <div className="cardholder">
            <div className="card-background" style={style}>
                <img className="background-image" src={backgroundImage} alt="background"></img>
            </div>
            <div className="card-info">
                <div className="card-info-title">
                    <p className="card-title">{cardTitle}</p>
                    <img className="ellipsis" src={ellipsis} alt='ellipsis'></img>
                </div>
                <div className="hours-spent">
                <h2>{hours}hrs</h2>
                <p>Last week - {hoursLastWeek}hrs</p>
                </div>
            </div>
        </div>
    )
};

export default CardComponent;