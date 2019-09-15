const layoutStyle = {
    margin: 20
};

const Layout: React.FC = props => (
    <div style={layoutStyle}>{props.children}</div>
);

export default Layout;
