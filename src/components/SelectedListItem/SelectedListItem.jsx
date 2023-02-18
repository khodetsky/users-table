import { Container, IconContainer, Icon } from "./SelectedListItem.styled";
import svgSprite from '../../images/sprite.svg';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  COLUMN: 'column',
}

export const SelectedListItem = ({ children, neadIcon, deleteColumn, selectColumn }) => {

        const [{ isDragging }, drag] = useDrag(() => ({
          type: ItemTypes.COLUMN,
          item: { children },
            end: (item, monitor) => {
                const dropResult = monitor.getDropResult();

                if (item && dropResult) {
                    selectColumn(item.children);
                }
            },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
                handlerId: monitor.getHandlerId(),
            }),
        }), [children])
    
    const opacity = isDragging ? 0.6 : 1;

    return (
        <>
            {neadIcon
                ? (
                    <Container>
                        {children}
                        <IconContainer onClick={() => deleteColumn(children)}>
                            <Icon href={svgSprite + '#cross'}></Icon>
                        </IconContainer>
                    </Container >
                  )
                : (
                    <Container ref={drag} style={{opacity, cursor: 'move'}}>
                        {children}
                    </Container>
                  )
            }
        </>
    )
}