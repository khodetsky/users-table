import usersData from "../../userData.json";

export const TableRow = ({columnsName}) => {

    return (
        <>
            {usersData &&
                (
                usersData.map(user => (
                    <tr key={user.id}>
                        {columnsName.includes('id') &&
                            (<td >
                                {user.id}
                            </td>)
                        }
                        {columnsName.includes('name') &&
                            (<td >
                                {user.name}
                            </td>)
                        }
                        {columnsName.includes('username') &&
                            (<td >
                                {user.username}
                            </td>)
                        }
                        {columnsName.includes('email') &&
                            (<td >
                                {user.email}
                            </td>)
                        }
                        {columnsName.includes('adress') &&
                            (<td >
                                {user.adress}
                            </td>)
                        }
                        {columnsName.includes('phone') &&
                            (<td >
                                {user.phone}
                            </td>)
                        }
                        {columnsName.includes('website') &&
                            (<td >
                                {user.website}
                            </td>)
                        }
                        {columnsName.includes('company') &&
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