import { useState, useEffect } from "react";
import { Backdrop, ModalStyled, SelectContainer, ButtonContainer } from "./SelectColumnsModal.styled";
import { MainButton } from "../MainButton/MainButton";
import { Filter } from "../Filter/Filter";
import { ColumnsNameContainer } from "../ColumnsNameContainer/ColumnsNameContainer";

export const SelectColumnsModal = ({ initColumns, columnsName, setColumsName, closeModal }) => {
    const [notSelectedColumns, setNotSelectedColumns] = useState([]);
    const [selectedColumns, setSelectedColumns] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        let notSelectedArr = initColumns.filter(column => !columnsName.includes(column));
        setNotSelectedColumns(notSelectedArr);
        let selectedArr = columnsName.filter(column => !notSelectedArr.includes(column))
        setSelectedColumns(selectedArr);
    }, [initColumns, columnsName]);

    const filterColumns = (e) => {
        setFilter(e.target.value.toUpperCase())
    };

    const filteredColumns = () => {
        const result = notSelectedColumns.filter(column => column.includes(filter))
        return result;
    }

    function selectColumn(columnName) {
        if (notSelectedColumns.length > 0) {
            setNotSelectedColumns(prevState => (prevState.filter(column => column !== columnName)));

            setSelectedColumns(prevState => [...prevState, columnName]);
        }
    }

    function deleteColumn(columnName) {
        if (selectedColumns.length > 0) {
            setSelectedColumns(prevState => (prevState.filter(column => column !== columnName)));

            setNotSelectedColumns(prevState => [...prevState, columnName]);
        }
    }

    function submitSelectAndClose() {
        setColumsName(selectedColumns);
        closeModal();
    }

    return (
        <>
            <Backdrop onClick={closeModal}>
            </Backdrop>
            <ModalStyled >
                <Filter filterColumns={filterColumns} />
                <SelectContainer>
                    <ColumnsNameContainer
                        columnsArr={filteredColumns()}
                        neadIcon={false}
                        selectColumn={selectColumn}
                    >
                        Available Columns
                    </ColumnsNameContainer>
                    <ColumnsNameContainer
                        columnsArr={selectedColumns}
                        neadIcon={true}
                        deleteColumn={deleteColumn}
                    >
                        Selected Columns
                    </ColumnsNameContainer>
                </SelectContainer>
                <ButtonContainer>
                    <MainButton clickOnBtn={submitSelectAndClose}>Apply</MainButton>
                </ButtonContainer>
            </ModalStyled>
        </>
    )
}