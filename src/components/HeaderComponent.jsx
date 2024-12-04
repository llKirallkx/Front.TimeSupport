import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function HeaderComponent() {

    const [serverStatus, setServerStatus] = useState(null); // null = desconhecido
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkServerStatus = async () => {
            try {
                const response = await fetch("http://localhost:10000/status");

                if (!response.ok) {
                    throw new Error("Falha ao obter o status do servidor");
                }

                const data = await response.json();
                setServerStatus(data.status); // Exemplo: true para ativo, false para inativo
                setError(false);
            } catch (err) {
                console.error(err);
                setServerStatus(false); // Considere o servidor inativo em caso de erro
                setError(true);
            }
        };

        checkServerStatus();

        const interval = setInterval(() => {
            checkServerStatus();
        }, 2 * 60000);

        return () => clearInterval(interval);
    }, []);

    const buttonClass = serverStatus
        ? "btn btn-success" // Servidor ativo
        : serverStatus === false
            ? "btn btn-danger" // Servidor inativo
            : "btn btn-secondary"; // Status desconhecido (ex: carregando)

    return (
        <header className="nav nav-pills nav-fill">

            <NavLink
                className={({ isActive }) => {
                    return isActive ? "nav-link active bg-secondary" : "nav-link"
                }}
                to="/">
                Gerador de AFD
            </NavLink>

            <NavLink className={({ isActive }) => {
                return isActive ? "nav-link active bg-secondary" : "nav-link"
            }}
                to="/crc16create">
                Gerador de CRC 16
            </NavLink>

            <button type="button" className={buttonClass}>
                {error
                    ? "Server error"
                    : serverStatus === null
                        ? "Conecting..."
                        : serverStatus
                            ? "Servidor Ativo"
                            : "Servidor Inativo"}
            </button>
        </header>

    );
}

export default HeaderComponent;
