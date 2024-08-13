import styled, { css } from "styled-components";
import { BigSquareButton } from "../components/allButtons.sc";

import {
  veryLightGrey,
  zeeguuLightYellow,
  zeeguuOrange,
  zeeguuVarmYellow,
  lighterBlue,
  lightGrey,
} from "../components/colors";

import {
  NarrowColumn,
  CenteredContent,
  ContentOnRow,
} from "../components/ColumnWidth.sc";

import { Link } from "react-router-dom";

let ArticleReader = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 1.6em !important;
    font-weight: 800;
    line-height: 1.5;
  }

  h2 {
    font-size: 1.4rem !important;
  }

  h3 {
    font-size: 1.3rem !important;
  }

  h4,
  h5,
  h6 {
    font-size: 1.2rem !important;
  }

  hr {
    border-top: 1px solid #f6f6f6;
  }
`;

let PlayerControl = styled.div`
  float: left;

  button {
    background-color: #aaaaff;
  }

  .buttonText {
    font-size: small;
    color: #aaaaff;
  }
`;

let RightHandSide = styled.div`
  float: right;
`;

let Toolbar = styled.div`
  padding-top: 0.5rem;
  height: 8em;
  width: 100%;
  // background-color: ${veryLightGrey};

  button {
    width: 55px;
    height: 55px;

    border-style: none;
    box-shadow: none;
    border-radius: 10px;
    margin: 10px;
    padding: 1px;
    user-select: none;
    cursor: pointer;
  }

  progress[value] {
    --color: linear-gradient(
      89.5deg,
      ${zeeguuOrange},
      ${zeeguuLightYellow} 100%
    ); /* the progress color */
    --background: ${lightGrey}; /* the background color */

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    height: 0.5em;
    margin: 10px 0px 1px 0px;
    border-radius: 10em;
    background: var(--background);
    transition: all 0.1s linear 0s;
  }

  progress[value]::-webkit-progress-bar {
    transition: all 0.1s linear 0s;
    border-radius: 10em;
    background: var(--background);
  }
  progress[value]::-webkit-progress-value {
    transition: all 0.1s linear 0s;
    border-radius: 10em;
    background: var(--color);
  }
  progress[value]::-moz-progress-bar {
    transition: all 0.1s linear 0s;
    border-radius: 10em;
    background: var(--color);
  }

  button:focus {
    outline: none;
  }

  button.selected {
    background-color: ${zeeguuOrange};
  }

  .tooltiptext {
    visibility: hidden;
    color: ${zeeguuOrange};
  }

  button:hover .tooltiptext {
    visibility: visible;
  }
`;

let Title = styled.div`
  font-size: x-large;
  font-weight: 800;
  margin-top: 0.5em;
  line-height: 2em;
`;

let BookmarkButton = styled.div`
  cursor: pointer;
  float: right;
  img {
    height: 1.4em;
  }

  .tooltiptext {
    visibility: hidden;
    color: ${zeeguuOrange};
  }

  :hover .tooltiptext {
    visibility: visible;
  }
`;

let MainText = styled.div`
  font-size: 1.2em;
  line-height: 2em;
  padding: 0.2em;

  .textParagraph {
    margin-bottom: 1.2em;
  }
`;

let _BottomButton = styled(BigSquareButton)`
  width: 8em;
  height: auto;
  display: inline-block;
  &.slightlyLarger {
    width: 10em;
  }
`;

let WhiteButton = styled(_BottomButton)`
  background-color: white;
  color: orange !important;

  display: inline;
  align-items: center;
  justify-content: center;
  border: none //Small
    ${(props) =>
      props.small &&
      css`
        font-size: 10px;
      `}
    // Gray
    ${(props) =>
      props.small &&
      css`
        color: hsla(21, 15%, 60%, 1) !important;
        border-color: hsla(21, 15%, 60%, 1);
        border-width: 1px;
        background-color: hsla(21, 15%, 99%, 1);
      `};
`;

let OrangeButton = styled(_BottomButton)`
  background-color: orange;

  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  h1 {
    color: white;
  }
  a {
    color: white;
  }

  @media (min-wdith: 768px) {
    width: 16em;
  }
`;

let NavigationLink = styled(Link)`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 8em;
  min-height: 2em;
  padding: 0.5em;
  margin-left: 1em;

  @media (min-wdith: 768px) {
    width: 16em;
  }

  // Primary
  ${(props) =>
    props.primary &&
    css`
      background-color: orange !important;
      color: white !important;
      border-color: ${zeeguuOrange};
      border-style: solid;
      border-width: 2px;
      border-radius: 10px;
    `}
  // Secondary
  ${(props) =>
    props.secondary &&
    css`
      background-color: white !important;
      color: orange !important;
    `}
    // Disabled
    ${(props) =>
    props.disabled &&
    css`
      background-color: white !important;
      color: #999999 !important;
      cursor: not-allowed;
      pointer-events: none;
      border-width: 0;
    `}
`;

let InteractiveBox = styled.div`
  border: 1px solid ${lighterBlue};
  background-color: white;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  padding: 2em 0em 2em 0em;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;

  &.review-words {
    background-color: ${lighterBlue};
    border: none;
  }

  @media (min-width: 768px) {
    width: 30em;
  }
  margin-left: auto;
  margin-right: auto;

  h2,
  h3,
  h5,
  p {
    text-align: center;
  }
  .selected {
    background-color: ${zeeguuVarmYellow} !important;
    color: white !important;
  }
`;

let InvisibleBox = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0.5em 0em 0em 0em;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 30em;
  }
  margin-left: auto;
  margin-right: auto;

  h2,
  h3,
  h5,
  p {
    text-align: center;
  }
  .selected {
    background-color: ${zeeguuVarmYellow} !important;
    color: white !important;
  }
  .hovered {
    background-color: ${zeeguuLightYellow} !important;
    color: white !important;
  }
`;

let ExtraSpaceAtTheBottom = styled.div`
  margin-bottom: 8em;
`;

let CombinedBox = styled.div`
  border: 1px solid ${lighterBlue};
  background-color: white;
  border-radius: 0.5em;
  padding: 2em 0em 2em 0em;
  margin-top: 1em;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    width: 30em;
  }
  margin-left: auto;
  margin-right: auto;

  h2,
  h3,
  h5,
  p {
    text-align: center;
  }
  .selected {
    background-color: ${zeeguuVarmYellow} !important;
    color: white !important;
  }
`;

export {
  ArticleReader,
  Toolbar,
  Title,
  BookmarkButton,
  MainText,
  WhiteButton,
  OrangeButton,
  InteractiveBox,
  CenteredContent,
  ExtraSpaceAtTheBottom,
  NarrowColumn,
  ContentOnRow,
  NavigationLink,
  RightHandSide,
  PlayerControl,
  InvisibleBox,
  CombinedBox,
};
