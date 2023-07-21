import {useEffect, useState} from "react";
import {data} from "../data.js";
import TableHead from "./TableHead.jsx";
import TableBody from "./TableBody.jsx";

export const Table = () => {
    const [tableData, setTableData] = useState([]);
    const [search, setSearch] = useState('')


    const columns = [
        {label: "نام ", accessor: "name"},
        {label: "ظرفیت", accessor: "capacity"},
        {label: "ظرفیت باقی مانده", accessor: "remainingCapacity"},
        {label: "نوع", accessor: "type"},
        {label: "شهر", accessor: "destination"},
        {label: "هتل", accessor: "hotel"},
        {label: "تاریخ رفت", accessor: "departureDate"},
        {label: "تاریخ برگشت", accessor: "returnDate"},
        {label: "عملیات", accessor: "operation"},
    ];


    const handleSorting = (sortField, sortOrder) => {
        // console.log(sortField, sortOrder)

        if (sortField) {
            const sorted = [...tableData].sort((a, b) => {

                if (a[sortField] === null) return 1;
                if (b[sortField] === null) return -1;
                if (a[sortField] === null && b[sortField] === null) return 0;
                return (
                    a[sortField].toString().localeCompare(b[sortField].toString(), "fa-ir", {
                        numeric: true,
                    }) * (sortOrder === "asc" ? 1 : -1)
                );
            });
            setTableData(sorted);
        }

    }

    useEffect(() => {
        const list = {
            nodes: data.filter((item) => item.name.includes(search)),
        };
        setTableData(list.nodes)
        // console.log(list)

    }, [search])

    const handelSearchValue = (event) => {
        setSearch(event.target.value)
    }

    return <>

        <div className={'w-72'}>
            <label htmlFor="search"
                   className={'block mb-2 text-sm font-medium text-gray-900 dark:text-white'}>جستجو</label>
            <input type="text"
                   className={'textField__input'}
                   onChange={(event) =>
                       handelSearchValue(event)}/>
        </div>

        <table className={'table w-full border shadow-xl my-4'}>
            <TableHead {...{columns, handleSorting}}/>
            <TableBody
                {...{columns, tableData}}
                // tableData={tableData}
                // columns={columns}
            />
        </table>


    </>
}