function HeaderComponent(){

    return (
        <header>
            <h1 className="title-GeradorAFD">
                <a href="/">
                    <strong>
                        Gerador de AFD
                    </strong>
                </a>
            </h1>

            <h1 className="title-geradorCrc16">
                <a href="crc16Create">
                    <strong>
                        Gerador de CRC16
                    </strong>
                </a>
            </h1>
        </header>
    )
}

export default HeaderComponent