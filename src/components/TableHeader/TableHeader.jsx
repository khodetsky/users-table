import { TableRow, TableHed } from "./TableHeader.styled";

export const TableHeader = ({columnsName}) => {

    return (
        <thead>
            <TableRow>
                {columnsName &&
                    (
                        columnsName.map(column => (
                            <TableHed key={column}>
                                {column}
                            </TableHed>
                        ))
                    )
                }
            </TableRow>
        </thead>
    )
}