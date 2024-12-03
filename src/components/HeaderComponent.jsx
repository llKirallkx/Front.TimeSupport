import { NavLink } from 'react-router-dom';

function HeaderComponent() {
    return (
        <header className="nav nav-pills nav-fill">

            <NavLink
                className={({isActive}) => {
                    return isActive ? "nav-link active bg-secondary" : "nav-link"
                }}
                to="/">
                    Gerador de AFD
            </NavLink>

            <NavLink className={({isActive}) => {
                    return isActive ? "nav-link active bg-secondary" : "nav-link"
                }}
                to="/crc16create">                
                   Gerador de CRC 16
            </NavLink>
        </header>

    );
}

export default HeaderComponent;
