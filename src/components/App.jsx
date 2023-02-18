import { GlobalStyle } from './GlobalStyles';
import { useState } from "react";
import { Table } from "../components/Table/Table";
import { MainButton } from "../components/MainButton/MainButton";
import { Section } from "../components/Section/Section";
import { SelectColumnsModal } from "../components/SelectColumnsModal/SelectColumnsModal";

export const App = () => {
  const initColumns = ["ID", "NAME", "USERNAME", "EMAIL", "ADRESS", "PHONE", "WEBSITE", "COMPANY"];

  const [columnsName, setColumsName] = useState(initColumns);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openSelectModal() {
    setModalIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeSelectModal() {
    setModalIsOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <>
      <main>
        <Section>
          <MainButton clickOnBtn={openSelectModal}>Select Columns</MainButton>
          <Table columnsName={columnsName} />
        </Section>
        {modalIsOpen &&
          <SelectColumnsModal
            initColumns={initColumns}
            columnsName={columnsName}
            setColumsName={setColumsName}
            closeModal={closeSelectModal}
          />
        }
      </main>
      <GlobalStyle/> 
    </>
  );
};
