import Menu from "./Menu";
import './Header.css';

const Header = () : JSX.Element => {
    return (
        <div className="header">
            <h1>Payments Application</h1>
            <Menu />
        </div>
        
    )
}

export default Header;