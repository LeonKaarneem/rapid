import NavBar from "./navbar";
import './layout.css';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <div className="layoutContent">
                {children}
            </div>
        </div>
    );
}

export default Layout;