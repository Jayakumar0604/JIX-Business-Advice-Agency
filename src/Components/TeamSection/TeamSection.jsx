import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Team1 from '../../assets/About1.png';
import Team2 from '../../assets/About2.png';
import Team3 from '../../assets/About3.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Jayakumar',
      title: 'CEO',
      image: Team1,
      socials: ['facebook', 'twitter', 'linkedin'],
    },
    {
      name: 'Indhumathi',
      title: 'Director of Operations',
      image: Team2,
      socials: ['facebook', 'twitter', 'linkedin'],
    },
    {
      name: 'Sathya',
      title: 'Design Director',
      image: Team3,
      socials: ['facebook', 'twitter', 'linkedin'],
    },
  ];

  const renderSocialIcon = (platform) => {
    const iconMap = {
      facebook: <FaFacebookF />,
      twitter: <FaTwitter />,
      linkedin: <FaLinkedinIn />,
    };
    return (
      <a
        key={platform}
        href="#"
        className="text-gray-500 hover:text-blue-600 transition duration-200"
        aria-label={platform}
      >
        {iconMap[platform]}
      </a>
    );
  };

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl px-10 lg:px-30 mx-auto grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-50  mx-auto  object-cover mb-4 shadow-md"
            />
            <h3 className="text md:text-lg lg:text-2xl montserrat-Medium">{member.name}</h3>
            <p className="text-sm md:text-base text-gray-500">{member.title}</p>
            <div className="flex justify-center gap-4 mt-3 text-xl">
              {member.socials.map(renderSocialIcon)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;