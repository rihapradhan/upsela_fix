import React from "react";

const TeamItem = ({ TeamData, teamHandle }) => {
  const { img, title, post } = TeamData;

  return (
    <div className="team-item text-center" onClick={teamHandle}>
      <div className="team-img">
        <img src={img} alt={title} />
      </div>
      <div className="team-text m-t-20">
        <h3>{title}</h3>
        <p>{post}</p>
      </div>
    </div>
  );
};

export default TeamItem;
