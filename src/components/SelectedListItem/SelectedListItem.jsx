import { Container, IconContainer, Icon } from "./SelectedListItem.styled";
import svgSprite from '../../images/sprite.svg';
import { useDrag } from 'react-dnd';

const ItemTypes = {
  COLUMN: 'column',
}

export const SelectedListItem = ({ cardType, children, neadIcon, deleteColumn, selectColumn }) => {

        const [{ isDragging }, drag] = useDrag(() => ({
          type: ItemTypes.COLUMN,
          item: { cardType },
          end: (item) => {
            if (item) {
                selectColumn(item.cardType);
                console.log(item.cardType);
            }
          },
          collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
          }),
        }))
    
    const opacity = isDragging ? 0.4 : 1;

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