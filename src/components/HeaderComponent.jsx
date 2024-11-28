import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <header>
            <h1 className="title-GeradorAFD">
                <Link to="/">
                    <strong>
                        Gerador de AFD
                    </strong>
                </Link>
            </h1>

            <h1 className="title-geradorCrc16">
                <Link to="/crc16create">
                    <strong>
                        Gerador de CRC16
                    </strong>
                </Link>
            </h1>
        </header>
    );
}

export default HeaderComponent;
