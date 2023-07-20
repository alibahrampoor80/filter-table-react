import {useState} from "react";
import {ChevronDownIcon} from "@heroicons/react/24/outline";

export default function TableHead({columns, handleSorting}) {

    const [order, setOrder] = useState("asc");
    const [sortField, setSortField] = useState("");

    const handleSortingChange = (accessor) => {
        const sortOrder =
            accessor === sortField && order === "asc" ? "desc" : "asc";
        setSortField(accessor);
        setOrder(sortOrder);
        handleSorting(accessor, sortOrder);
    };

    return <>
        <thead className={'w-full bg-green-100 text-green-500 font-bold p-2'}>
        <tr>
            {columns.map(({label, accessor}) => {
                return <th key={accessor} className={'p-2 '}>
                    {label}

                    {
                        accessor === 'operation' ? "" :
                            <button className={''} onClick={() => handleSortingChange(accessor)}>
                                <ChevronDownIcon className={'w-4 h-4'}/>
                            </button>
                    }


                </th>
            })}
        </tr>
        </thead>
    </>
}