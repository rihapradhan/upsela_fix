import React, { useState } from "react";
import TeamItem from '../TeamItem/TeamItem';
import Modal from "../Modal/Modal";

const TeamData = [
  {
    img: 'images/team-member1.png',
    title: 'Dave Martin',
    post: 'CEO',
  },
  {
    img: 'images/team-member1.png',
    title: 'Dave Martin',
    post: 'CEO',
  },
  {
    img: 'images/team-member1.png',
    title: 'Dave Martin',
    post: 'CEO',
  },
  {
    img: 'images/team-member1.png',
    title: 'Dave Martin',
    post: 'CEO',
  },
];

const Team = () => {
  const [flag, setFlag] = useState(false);

  const teamHandle = () => {
    setFlag(!flag);
    // console.log( flag);
  };

  return (
    <>
      <div className="team p-tb-60">
        <div className="container">
          <h2 className="team-title text-center">Meet Our Team</h2>
          <div className="team-list">
            {TeamData.map((item, index) => {
              return <TeamItem key={index} TeamData={item} teamHandle={teamHandle} />;
            })}
          </div>
        </div>

        {flag ? <Modal flag={flag} teamHandle={teamHandle} /> : ''}
      </div>
    </>
  );
};

export default Team;
