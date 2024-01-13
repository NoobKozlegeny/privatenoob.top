import styled from "styled-components";

const BlockListDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.quarteriary};
  display: inline-block;
  width: 40%;
  margin: 20px;
  border-radius: 20px;
  text-align: center;
  min-width: 300px;
  max-width: 800px;
  flex: 1;
  flex-grow: 1;
  flex-basis: 30%;
  height: 100%;
  outline-style: outset;
  outline-color: ${({ theme }) => theme.colors.tertiary};
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='29' height='50.115' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M14.498 16.858L0 8.488.002-8.257l14.5-8.374L29-8.26l-.002 16.745zm0 50.06L0 58.548l.002-16.745 14.5-8.373L29 41.8l-.002 16.744zM28.996 41.8l-14.498-8.37.002-16.744L29 8.312l14.498 8.37-.002 16.745zm-29 0l-14.498-8.37.002-16.744L0 8.312l14.498 8.37-.002 16.745z'  stroke-width='1' stroke='hsla(239, 100%, 17%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>");
`;

export default BlockListDiv;
