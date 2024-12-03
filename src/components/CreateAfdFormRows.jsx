import { useState } from 'react';
import InputMask from 'react-input-mask';

function CreateAfdFormRows() {

    const inputTypes = {
        cnpj: "99.999.999/9999-99",
        cpf: "999.999.999-99"
    };

    const [valueInput, setValue] = useState(inputTypes.cnpj);

    function handleSelect(event) {
        let value = event.target.value;

        if (value === "2") {
            value = inputTypes.cpf
        } else if (value === "1") {
            value = inputTypes.cnpj
        }

        setValue(value);
    }

    return (
        <div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="tipoDeIdentificador" className="form-label">Tipo de Empregador</label>
                    <select
                        id="tipoDeIdentificador"
                        name="tipoDeIdentificador"
                        onChange={handleSelect}
                        className="form-select"
                    >

                        <option value="1" name="cnpj">CNPJ</option>
                        <option value="2" name="cpf">CPF</option>
                    </select>
                </div>

                <div className="col-md-10">
                    <label htmlFor="cnpjOuCpf" className="form-label">
                        CNPJ ou CPF do Empregador <span><strong>*</strong> Somente números</span>
                    </label>
                    <InputMask
                        className="form-control"
                        mask={valueInput}
                        maskChar=" "
                        id="cnpjOuCpf"
                        name="cnpjOuCpf"
                        required
                    />
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="razaoSocial" className="form-label">Razão Social <span><strong>*</strong></span></label>
                <input
                    type="text"
                    className="form-control"
                    id="razaoSocial"
                    name="razaoSocial"
                    maxLength="150"
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    CPF ou PIS do funcionário <span><strong>*</strong> (Somente números)</span>
                </label>
                <InputMask
                    className="form-control"
                    mask={valueInput}
                    maskChar=" "
                    id="content"
                    name="content"
                />
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label htmlFor="event" className="form-label">Data de início AFD <span><strong>*</strong></span></label>
                    <input type="date" className="form-control" id="event" name="event" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="finalevent" className="form-label">Data de fim do AFD <span><strong>*</strong></span></label>
                    <input type="date" className="form-control" id="finalevent" name="finalevent" required />
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-3">
                    <label htmlFor="entrada1" className="form-label">Entrada 1 <span><strong>*</strong></span></label>
                    <input type="time" className="form-control" id="entrada1" name="entrada1" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="saida1" className="form-label">Saída 1 <span><strong>*</strong></span></label>
                    <input type="time" className="form-control" id="saida1" name="saida1" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="entrada2" className="form-label">Entrada 2 <span><strong>*</strong></span></label>
                    <input type="time" className="form-control" id="entrada2" name="entrada2" required />
                </div>
                <div className="col-md-3">
                    <label htmlFor="saida2" className="form-label">Saída 2 <span><strong>*</strong></span></label>
                    <input type="time" className="form-control" id="saida2" name="saida2" required />
                </div>
            </div>


        </div>
    )
}

export default CreateAfdFormRows