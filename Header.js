const Title = () => {
    return (
        <h1 id="title" key="hone">
            Food App
        </h1>
    );
};

const HeaderComponent = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderComponent;