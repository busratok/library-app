import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import profile from "../../assets/about.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      <ProfileImg src={profile} />
      <InfoContainer>
        <h2>Welcome to Our Website!</h2>
        <p>
          We are dedicated to providing you with an easy-to-use platform for
          searching books and magazines using the Google Books API. Our goal is
          to help you find the information you need quickly and efficiently,
          whether you are a student, researcher, or simply an avid reader.
        </p>
        <p>
          With the power of the Google Books API, we are able to provide you
          with a vast collection of books and magazines from around the world.
          Our search engine is user-friendly and intuitive, making it easy for
          you to find what you're looking for.
        </p>
        <p>
          At our website, we believe that knowledge is power. By providing you
          with a powerful search engine for books and magazines, we hope to
          empower you to achieve your academic, professional, and personal
          goals. Thank you for choosing our platform, and we look forward to
          helping you find the information you need!
        </p>
      </InfoContainer>
      <IconContainer>
        {iconData.map((item, i) => (
          <a href={item.href} key={i}>
            <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
          </a>
        ))}
      </IconContainer>
    </AboutContainer>
  );
};

export default About;
