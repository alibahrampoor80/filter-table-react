import {Link} from "react-router-dom";

export default function Footer() {

    return <>

        <footer className="bg-white dark:bg-gray-900 w-full text-center text-white p-3 gap-4 space-y-3">
            <p>create by ali bahrampoor</p>
            <Link to="https://github.com/alibahrampoor80"
                  className={'text-blue-600 hover:text-blue-700'} target={'_blank'}>Github</Link>
        </footer>

    </>
}