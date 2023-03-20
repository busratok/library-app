import React from "react";
import { useLocation } from "react-router-dom";
import {
  Description,
  DetailContainer,
  DetailImg,
  DetailTitle,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg";

const Detail = () => {
  const { state } = useLocation();
  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img
          src={state.volumeInfo.imageLinks?.smallThumbnail || defaultImg}
          alt=""
        />
      </DetailImg>

      <Description>{state.volumeInfo.description}</Description>
      <InfoPart>
        {" "}
        <p>
          {state.volumeInfo.authors && (
            <span>{state.volumeInfo.authors.join("&")}</span>
          )}
        </p>
        <p>
          {state.volumeInfo.publishedDate}
          {state.volumeInfo.publisher && (
            <span>{state.volumeInfo.publisher}</span>
          )}
        </p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
