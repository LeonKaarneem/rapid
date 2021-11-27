import NavBar from "./navbar";

const Layout = ({children}) => {
    return (
        <div>
            <NavBar />
            <div style={{padding: '15px'}}>
                {children}
            </div>
        </div>
    );
}

export default Layout;