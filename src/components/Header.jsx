import {Link} from "react-router-dom";

export default function Header() {


    return <>
        <header
            className={`shadow-md mb-10 sticky top-0 transition-all duration-200 bg-white`}>
            <nav>
                <ul className={'flex items-center justify-center py-2 gap-x-6 container xl:max-w-screen-xl'}>
                    <li>
                        <Link to={'/'}>
                            خانه
                        </Link>
                    </li>
                    <li>
                        <Link to={'/list'}>
                            جدول
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    </>
}