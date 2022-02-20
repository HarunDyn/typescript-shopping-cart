import styled from 'styled-components';
import { Button } from '@mui/material';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;
export const ButtonTotal = styled(Button)`
  background-color:rgba(255,0,0,0.8);
  color: white;
  margin-top:1rem;
  :hover{
  color:black;
  }
`;