import { SelectedListItem } from "../SelectedListItem/SelectedListItem";
import { Container, SelectedList, ContainerTitle } from "./ColumnsNameContainer.styled";
import { useDrop } from 'react-dnd';

const ItemTypes = {
  COLUMN: 'column',
}

export const ColumnsNameContainer = ({ children, columnsArr, neadIcon, deleteColumn, selectColumn }) => {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.COLUMN,
        drop: () =>
            ({ name: 'Dustbin' })
        ,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    
    const isActive = canDrop && isOver;
    let boxShadow;

    if (isActive || canDrop) {
        boxShadow = 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px';
    }

    return (
        <>
            {neadIcon
                ? (
                    <Container ref={drop} style={{boxShadow}}>
                        <ContainerTitle>{children}</ContainerTitle>
                        <SelectedList >
                            {columnsArr.map((item, index) => (
                                <li key={index}>
                                    <SelectedListItem neadIcon={neadIcon} deleteColumn={deleteColumn}>
                                        {item}
                                    </SelectedListItem>
                                </li>
                            ))}
                        </SelectedList>
                    </Container>
                  )
                : (
                    <Container>
                        <ContainerTitle>{children}</ContainerTitle>
                        <SelectedList >
                            {columnsArr.map((item, index) => (
                                <li key={index}>
                                    <SelectedListItem neadIcon={neadIcon} selectColumn={selectColumn}>{item}</SelectedListItem>
                                </li>
                            ))}
                        </SelectedList>
                    </Container>
                  )
            }
        </>
    )
}