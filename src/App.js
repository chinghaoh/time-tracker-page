import './App.css';
import CardComponent from './CardComponent';
import ProfileCardComponent from './ProfileCardComponent';
import './Style.css';
import profilePicture from "./images/image-jeremy.png";
import workIcon from "./images/icon-work.svg";
import playIcon from "./images/icon-play.svg";
import studyIcon from "./images/icon-study.svg";
import exerciseIcon from "./images/icon-exercise.svg";
import socialIcon from "./images/icon-social.svg";
import selfCarIcon from "./images/icon-self-care.svg";


function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <body>
        <div className="container">
          <div className="grid-wrapper">
            <ProfileCardComponent profilePicture={profilePicture} name="Jeremy Robson"></ProfileCardComponent>
            <CardComponent backgroundImage={workIcon} backgroundColour={"hsl(15, 100%, 70%)"} cardTitle="Work" hours={32} hoursLastWeek={36}></CardComponent>
            <CardComponent backgroundImage={playIcon} backgroundColour={"hsl(196, 73%, 62%)"} cardTitle="Play" hours={10} hoursLastWeek={8}></CardComponent>
            <CardComponent backgroundImage={studyIcon} backgroundColour={"hsl(349, 100%, 68%)"} cardTitle="Study" hours={4} hoursLastWeek={7}></CardComponent>
            <CardComponent backgroundImage={exerciseIcon} backgroundColour={"hsl(145, 57%, 55%)"} cardTitle="Exercise" hours={4} hoursLastWeek={5}></CardComponent>
            <CardComponent backgroundImage={socialIcon} backgroundColour={"hsl(262, 62%, 52%)"} cardTitle="Social" hours={5} hoursLastWeek={10}></CardComponent>
            <CardComponent backgroundImage={selfCarIcon} backgroundColour={"hsl(42, 84%, 65%)"} cardTitle="Self Care" hours={2} hoursLastWeek={2}></CardComponent>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
