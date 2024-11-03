import { useState } from 'react';
import InputMask from 'react-input-mask';

function CreateAfdFormRows(){
    
    const inputTypes = {
        cnpj: "99.999.999/9999-99",
        cpf: "999.999.999-99"
    };

    const [valueInput, setValue] = useState(inputTypes.cnpj);
    
    function handleSelect(event) {
        let value = event.target.value;

        if(value === "2"){
            value = inputTypes.cpf
        }else if (value === "1"){
            value = inputTypes.cnpj
        }

        setValue(value);
    }
    
    return(
        <div className="formrows">
            <div>
                <label htmlFor="tipoDeIdentificador">Tipo de Empregador</label>
                <select 
                    id="tipoDeIdentificador"
                    name="tipoDeIdentificador"
                    onChange={handleSelect}
                > 
                    <option value="1" name="cnpj">CNPJ</option>
                    <option value="2" name="cpf">CPF</option>
                </select>
            </div>
            <div>
                <label htmlFor="cnpjOuCpf">
                    CNPJ ou CPF do Empregador 
                    <span>
                        <strong>*</strong>
                        Somente
                    números
                    </span>
                </label>    <br />
                <InputMask
                    className='inputsClass'
                    mask={valueInput}
                    maskChar=" "
                    id='cnpjOuCpf'
                    name='cnpjOuCpf'
                    required
                />
            </div>
            <div className="form-row">
                <div>
                    <label htmlFor="razaoSocial">Razão Social <span><strong>*</strong></span></label>
                    <input className='inputsClass' type="text" id="razaoSocial" name="razaoSocial" maxLength="150" required/>

                    <label htmlFor="content">CPF ou PIS do funcionário <span><strong>*</strong> (Somente
                            números)</span></label>
                    <InputMask
                        className='inputsClass'
                        mask={valueInput}
                        maskChar=" "
                        id='content'
                        name='content'
                    />
                </div>
            </div>

            <div className="form-row">
                <div>
                    <label htmlFor="event">Data de início AFD <span><strong>*</strong></span></label>
                    <input type="date" id="event" name="event" required/>
                </div>
                <div>
                    <label htmlFor="finalevent">Data de fim do AFD <span><strong>*</strong></span></label>
                    <input type="date" id="finalevent" name="finalevent" required/>
                </div>
            </div>

            <div className="form-row">
                <div>
                    <label htmlFor="entrada1">Entrada 1 <span><strong>*</strong></span></label>
                    <input type="time" id="entrada1" name="entrada1" required/>
                </div>
                <div>
                    <label htmlFor="saida1">Saída 1 <span><strong>*</strong></span></label>
                    <input type="time" id="saida1" name="saida1" required/>
                </div>
                <div>
                    <label htmlFor="entrada2">Entrada 2 <span><strong>*</strong></span></label>
                    <input type="time" id="entrada2" name="entrada2" required/>
                </div>
                <div>
                    <label htmlFor="saida2">Saída 2 <span><strong>*</strong></span></label>
                    <input type="time" id="saida2" name="saida2" required/>
                </div>
            </div>

        </div>
    )
}

export default CreateAfdFormRows