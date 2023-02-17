import usersData from "../../userData.json";

export const TableRow = ({columnsName}) => {

    return (
        <>
            {usersData &&
                (
                usersData.map(user => (
                    <tr key={user.id}>
                        {columnsName.includes('ID') &&
                            (<td >
                                {user.id}
                            </td>)
                        }
                        {columnsName.includes('NAME') &&
                            (<td >
                                {user.name}
                            </td>)
                        }
                        {columnsName.includes('USERNAME') &&
                            (<td >
                                {user.username}
                            </td>)
                        }
                        {columnsName.includes('EMAIL') &&
                            (<td >
                                {user.email}
                            </td>)
                        }
                        {columnsName.includes('ADRESS') &&
                            (<td >
                                {user.adress}
                            </td>)
                        }
                        {columnsName.includes('PHONE') &&
                            (<td >
                                {user.phone}
                            </td>)
                        }
                        {columnsName.includes('WEBSITE') &&
                            (<td >
                                {user.website}
                            </td>)
                        }
                        {columnsName.includes('COMPANY') &&
                            (<td >
                                {user.company}
                            </td>)
                        }
                    </tr>
                    ))
                )
            }
        </>
    )
}