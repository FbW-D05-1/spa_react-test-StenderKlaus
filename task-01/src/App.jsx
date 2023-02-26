import React from "react";
import "./style.css";

function App() {
  const user = {
    Name: "Jeff Bezos",
    Stadt: "Albuquerque",
    geboren: "1964",
    mag: "Reich sein",
    twitterLink: "https://twitter.com/jeffbezos",
    img: "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1032942302_dkawzr.jpg",
    twitterName: "JeffBezos",
    Unternehmen: [
      "Amazon",
      "The Washington Post",
      "Google-Aktieninhaber",
      "IMBD",
      "Alexa",
      "Blue Origin",
      "Twitch",
      "Zappos",
      "Whole Food Market",
      "Amazon Robotics",
      "Goodreads",
    ],
  };

  return (
  <div className="container">
    <img src={user.img} alt="" />
    <div className="info">
      <p className="title">Place of birth</p>
      <span>{user.Stadt}</span>
      <p className="title">Age of birth</p>
      <span>{user.geboren}</span>
      <p className="title">Owns</p>
      {user.Unternehmen?.map((unternehmen) => 
        <p>{unternehmen}</p>
      )}
      <p className="title">Likes</p>
      <p>{user.likes}</p>
      <p>Twitter</p>
      <span><a href={user.twitterLink}>@{user.twitterName}</a></span>

    </div>
    </div>
)
    }
export default App;
