import { createGlobalStyle } from 'styled-components';

export const GlobalTableStyle = createGlobalStyle`
  a {
    color: #3C948B;
    cursor: pointer;
  }
  table {
  width: 100%;
  border-collapse: collapse;
  h2 {
    width: 100%;
  }
  th,
  td {
    border-collapse: collapse;
  }
  th,
  td,
  tr {
    padding: 5px;
  }
  th, td {
    text-align: center;
    border: 1px solid #ddd;
    padding: 8px;  
  }
  th {
    background: #3C948B;
    color: #fff;
  }
  tr:nth-child(even) {
    background-color:rgb(241, 241, 241);
  }
  tr:hover {
    background-color: #ddd;
  }
  td:first-child {
    width: 10%;
  }
  td:nth-child(2) {
    width: 20%;
  }
  }
`;