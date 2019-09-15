const Layout: React.FC = props => (
    <div>
        <nav className="navbar bg-light">
            <span className="navbar-brand">React Localstorage Chat</span>
        </nav>
        <div className="container pt-5">
            <div className="row">
                <main className="col-12">{props.children}</main>
            </div>
        </div>
    </div>
);

export default Layout;
