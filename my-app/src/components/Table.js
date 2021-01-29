import './Table.css';

function Table() {
  return (
    <table className="table"> 
        <th>
            <td>First Name</td>
            <td>Last Name</td>

        </th>
        <tr>
            <td>Bob</td>
            <td>Jones</td>
        </tr>
    </table>
  );
}

export default Table;
