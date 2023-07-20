import {ToLocalDateString} from "../utils/toLocalDate.js";
import {PencilSquareIcon} from "@heroicons/react/24/outline";

export default function TableBody({tableData, columns}) {
    // console.log(tableData)

    const getTypeTrip = (name) => {
        // console.log(name)
        if (name === 'journey') {
            return 'سیاحت'
        } else if (name === 'pilgrimage') {
            return 'زیارت'
        }
    }
    const handelEditTrip = (id) => {
        console.log(id)
    }
    const handelSave = (id) => {
        console.log(id)
    }


    // const data1 = [...tableData].sort((a, b) => (a.name < b.name ? -1 : 1));
    // data1.map((d) => console.log( d.name));

    // const data3 = [...tableData].sort((a, b) => a.name.localeCompare(b.name));
    // data3.map((d) => console.log( d.name));

    return <>

        <tbody className={'text-center'}>
        {
            tableData.map((item, index) => {
                return (
                    <tr key={index} className={'border-green-400 border w-full'}>

                        {/*{columns.map(({ accessor }) => {*/}
                        {/*    const tData = item[accessor] ? item[accessor] : "——";*/}
                        {/*    return <td key={accessor}>{tData}</td>;*/}
                        {/*})}*/}


                        <td className={'p-2'}>{item.name}</td>
                        <td className={'p-2'}>{item.capacity}</td>
                        <td className={'p-2'}>{item.remainingCapacity}</td>
                        <td className={'p-2'}>{getTypeTrip(item.type)}</td>
                        <td className={'p-2'}>{item.destination}</td>
                        <td className={'p-2'}>{item.hotel}</td>
                        <td className={'p-2'}>{ToLocalDateString(item.returnDate)}</td>
                        <td className={'p-2'}>{ToLocalDateString(item.departureDate)}</td>
                        <td className={'p-2 flex gap-x-2 justify-center'}>
                            <button onClick={() => handelEditTrip(item.id)}
                                    className={'bg-green-500 hover:bg-green-600 transition-all duration-300 p-2 rounded-xl text-white'}>
                                <PencilSquareIcon className={'w-6 h-6'}/>
                            </button>
                            <button onClick={() => handelSave(item.id)}
                                    className={'bg-green-500 hover:bg-green-600 transition-all duration-300 p-2 rounded-xl text-white'}>
                                ثبت نام ها
                            </button>
                        </td>

                    </tr>
                )
            })
        }

        </tbody>
    </>
}