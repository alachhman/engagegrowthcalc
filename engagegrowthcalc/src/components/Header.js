import Divider from "./Divider";

const Header = () => {
    return(
        <div className="header-content">
            <section className="header-layout">
                <h2>Engage Growth Calc</h2>
                <h3 className="header-button-container" onClick={() => window.location.reload()}>
                    <button className={"header-button"}>
                        Reset
                    </button>
                </h3>
            </section>
            <Divider color={"white"}/>
        </div>

    )
}

export default Header;
