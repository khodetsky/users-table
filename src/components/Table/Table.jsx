import { TableHeader } from "../TableHeader/TableHeader";
import { TableRow } from "../TableRow/TableRow";
import { TableStyled } from './Table.styled';

export const Table = ({columnsName}) => {

    return (
        <TableStyled>
            <TableHeader columnsName={columnsName} />
            <tbody>
                <TableRow columnsName={columnsName} />
            </tbody>
        </TableStyled>
    )
}