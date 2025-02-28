import Style from './NavBar.module.css';

function Navbar() {
    return (
        <div className={Style.header_component_Container}>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <a href="#" className={Style.headerComponents_links}>Text</a>
                <a href="#" className={Style.headerComponents_links}>Text</a>
                <a href="#" className={Style.headerComponents_links}>Text</a>
            </div>
        </div>
    )
};
export default Navbar