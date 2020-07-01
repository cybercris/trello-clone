import styled from 'styled-components';

export const Container = styled.div`
  padding: 14px 12px;
  background: #ffffff;
  box-shadow: 0px 1px 3px #00000029;
  border-radius: 3px;
  min-width: 320px;

  footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;

    margin-top: 12px;

    div {
      display: flex;

      p {
        background: #0000000a;
        color: #818181;
        padding: 4px 8px;
        font-size: 12px;
        border-radius: 3px;

        & + p {
          margin-left: 8px;
        }
      }
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  /* & + div {
    margin-top: 8px;
  } */
`;
