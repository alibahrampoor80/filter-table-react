import {Link} from "react-router-dom";

export default function Footer() {

    return <>

        <footer className="bg-white dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">گروه ما</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <Link to="#" className=" hover:underline">درباره ی ما</Link>
                            </li>

                            <li className="mb-4">
                                <Link to="#" className="hover:underline">تماس با ما</Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/blogs" className="hover:underline">مقالات</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help
                            center</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">iOS</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Android</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Windows</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2023 <a
            href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
        </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">GitHub account</span>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">

                            <span className="sr-only">Dribbble account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    </>
}