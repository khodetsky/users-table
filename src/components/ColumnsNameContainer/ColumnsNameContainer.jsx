import { SelectedListItem } from "../SelectedListItem/SelectedListItem";
import { Container, SelectedList, ContainerTitle } from "./ColumnsNameContainer.styled";
import { useDrop } from 'react-dnd'

const ItemTypes = {
  COLUMN: 'column',
}

export const ColumnsNameContainer = ({ children, columnsArr, neadIcon, deleteColumn, selectColumn}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.COLUMN,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    
    const isActive = canDrop && isOver;
    let backgroundColor = '#504f4f';

    if (isActive) {
        backgroundColor = 'darkgreen';
    } else if (canDrop) {
        backgroundColor = 'darkkhaki';
    }

    return (
        <>
            {neadIcon
                ? (
                    <Container ref={drop} style={{backgroundColor}}>
                        <ContainerTitle>{children}</ContainerTitle>
                        <SelectedList >
                            {columnsArr.map((item, index) => (
                                <li key={index}>
                                    <SelectedListItem neadIcon={neadIcon} deleteColumn={deleteColumn}>{item}</SelectedListItem>
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
                                    <SelectedListItem cardType={item} neadIcon={neadIcon} selectColumn={selectColumn}>{item}</SelectedListItem>
                                </li>
                            ))}
                        </SelectedList>
                    </Container>
                  )
            }
        </>
    )
}