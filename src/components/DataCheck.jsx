import PropTypes from 'prop-types';

const DataCheck = ({ data }) => {
    return (
        <div>
            <h2 className="text-primary">Resultado da Avaliação</h2>
            <p className="text-secondary">Confira os dados recebidos do servidor:</p><br />
            
            <h3 className="text-success">Cabeçalho:</h3>
            {Object.entries(data.cabecalho).map(([key, value], index) => (
                <p key={index}><strong>{key}:</strong> {value}</p>
            ))}<br />
            
            <h3 className="text-success">Registros:</h3>
            {data.registros.map((registro, index) => (
                <div key={index}>
                    {Object.entries(registro).map(([key, value]) => (
                        <p key={key}><strong>{key}:</strong> {value.toString()}</p>
                    ))}
                </div>
            ))}<br />
            
            <h3 className="text-danger">Linhas Inválidas:</h3>
            {data.invalidLines.map((line, index) => (
                <p key={index}>{JSON.stringify(line)}</p>
            ))}<br />
            
            <h3 className="text-danger">Erros:</h3>
            {data.erros.map((erro, index) => (
                <p key={index}>{JSON.stringify(erro)}</p>
            ))}<br />
        </div>
    );
};

DataCheck.propTypes = {
    data: PropTypes.shape({
        cabecalho: PropTypes.object.isRequired,
        registros: PropTypes.arrayOf(PropTypes.object).isRequired,
        invalidLines: PropTypes.arrayOf(PropTypes.object).isRequired,
        erros: PropTypes.arrayOf(PropTypes.object).isRequired
    }).isRequired
};

export default DataCheck;