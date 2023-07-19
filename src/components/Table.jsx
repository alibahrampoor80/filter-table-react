import {useState} from "react";
import {data} from "../data.js";
import TableHead from "./TableHead.jsx";
import TableBody from "./TableBody.jsx";

export const Table = () => {
    const [tableData, setTableData] = useState(data);

    const columns = [
        {label: "نام ", accessor: "name"},
        {label: "ظرفیت", accessor: "capacity"},
        {label: "ظرفیت باقی مانده", accessor: "remaining_capacity"},
        {label: "نوع", accessor: "type"},
        {label: "شهر", accessor: "city"},
        {label: "تاریخ رفت", accessor: "departure_date"},
        {label: "تاریخ برگشت", accessor: "return_date"},
        {label: "عملیات", accessor: "operation"},
    ];

    const handleSorting = () => {

    }

    return <>

        <table className={'table w-full border shadow-xl my-4'}>
            <TableHead columns={columns} handleSorting={handleSorting}/>
            <TableBody columns={columns} tableData={tableData}/>
        </table>


    </>
}