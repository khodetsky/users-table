import { TableHeader } from "../TableHeader/TableHeader";
import { TableRow } from "../TableRow/TableRow";

export const Table = ({columnsName}) => {

    return (
        <table>
            <TableHeader columnsName={columnsName} />
            <tbody>
                <TableRow columnsName={columnsName} />
            </tbody>
        </table>
    )
}