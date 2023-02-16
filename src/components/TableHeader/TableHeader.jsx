
export const TableHeader = ({columnsName}) => {

    return (
        <thead>
            <tr>
                {columnsName &&
                    (
                        columnsName.map(column => (
                            <th key={column}>
                                {column.toUpperCase()}
                            </th>
                        ))
                    )
                }
            </tr>
        </thead>
    )
}