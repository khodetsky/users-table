import usersData from "../../userData.json";

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
                                <td key={colToLower}>
                                    {user[colToLower]}
                                </td>
                            )
                        })}
                    </tr>
                    ))
                )
            }
        </>
    )
}