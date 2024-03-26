const Header = () : JSX.Element => {
    return (
        <div className="headerStyle">
            <h1>Payments Application</h1>
            <nav className = "navigationMenu">
                <a href='' >Find a transaction</a>
                <a href=''>New transaction</a>
            </nav>
        </div>
        
    )
}

export default Header;