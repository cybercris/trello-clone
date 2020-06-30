import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 3px #00000029;
  border-radius: 3px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 5px;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  & + div {
    margin-top: 8px;
  }
`;
