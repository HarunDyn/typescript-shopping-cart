import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  button {
    border-radius: 0 0 20px 20px;
    background-color:rgba(0,0,0,0.6);
    color: white;
  }
  button:hover {
    background-color:rgba(255,0,0,0.8);
    color: white;
  }
  img {
    max-height: 15rem;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
    background-color: rgba(236, 236, 236,0.8);
  }
`;