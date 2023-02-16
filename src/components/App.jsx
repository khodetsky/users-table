import { GlobalStyle } from './GlobalStyles';
import { useState } from "react";
import { Table } from "../components/Table/Table";

export const App = () => {
  const initData = ["id", "name", "username", "email", "adress", "phone", "website", "company"];

  const [columnsName, setColumsName] = useState(initData);

  return (
    <>
      <main>
        <Table columnsName={columnsName} />
      </main>
      <button type='button' onClick={setColumsName}></button>
      <GlobalStyle/> 
    </>
  );
};
