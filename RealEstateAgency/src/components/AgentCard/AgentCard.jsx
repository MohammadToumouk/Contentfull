import React from 'react';
import './AgentCard.css'; // Import the CSS file

const AgentCard = ({ image, email, description }) => {
  return (
    <div className="agentCard">
      <div className="agentImage">
        <img src={image} alt="Person" />
      </div>
      <div className="info">
        <p>
          <span style={{fontWeight: "bold"}}>Email:</span>
        </p>
        <a href="mailto:{email}?body=EMA Realestate" style={{marginTop: 20}}>   {email}
        </a>
        <p><span style={{fontWeight: "bold"}}>Description:</span>{description}</p>
      </div>
    </div>
  );
};

export default AgentCard;
