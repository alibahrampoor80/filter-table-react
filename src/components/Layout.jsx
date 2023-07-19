import Header from "./Header";
import Footer from "./Footer";


const Layout = ({children}) => {
    return <>
        <div className="bg-gray-50 min-h-screen box-layout">
            <Header/>
            <div className="container md:max-w-screen-xl mx-auto">
                {children}
            </div>
            {/*<Footer/>*/}

        </div>
    </>
}
export default Layout


