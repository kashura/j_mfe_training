import Menu from "./Menu";

const Header = () : JSX.Element => {
    return (
        <div className="headerStyle">
            <h1>Payments Application</h1>
            <Menu />
        </div>
        
    )
}

export default Header;