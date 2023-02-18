import usersData from "../../userData.json";
import { TableData } from './TableRow.styled';

export const TableRow = ({columnsName}) => {

    return (
        <>
            {usersData &&
                (
                usersData.map(user => (
                    <tr key={user.id}>
                        {columnsName.map(column => {
                            const colToLower = column.toLowerCase();
                            return (
                                <TableData key={colToLower}>
                                    {user[colToLower]}
                                </TableData>
                            )
                        })}
                    </tr>
                    ))
                )
            }
        </>
    )
}