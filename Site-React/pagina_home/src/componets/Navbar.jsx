import Style from './NavBar.module.css';
import Ops from './Navbar_ops'
function Navbar() {
    return (
        <div className={Style.header_component_Container}>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <Ops/>
            </div>
        </div>

    )
};
export default Navbar