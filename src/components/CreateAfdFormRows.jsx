function CreateAfdFormRows(){
    return(
        <div className="formrows">
            <div>
                <label htmlFor="tipoDeIdentificador">Tipo de Empregador</label>
                {/* Todo, incluir mascara e onchange na mascara no caso de troca entre valores de CNPJ ou CPF */}
                <select id="tipoDeIdentificador" name="tipoDeIdentificador"> 
                    <option value="1">CNPJ</option>
                    <option value="2">CPF</option>
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
                    {/* TODO - incluir onInput para validação do CNPJ ou CPF */}
                <input type="text" id="cnpjOuCpf" name="cnpjOuCpf" maxLength="14" pattern="[0-9]*"
                    title="Somente números" required/>
            </div>
            <div className="form-row">
                <div>
                    <label htmlFor="razaoSocial">Razão Social <span><strong>*</strong></span></label>
                    <input type="text" id="razaoSocial" name="razaoSocial" maxLength="150" required/>

                    <label htmlFor="content">CPF ou PIS do funcionário <span><strong>*</strong> (Somente
                            números)</span></label>
                    {/* TODO - incluir onInput para validação do CNPJ ou CPF */}
                    <input type="text" id="content" name="content" maxLength="11" pattern="[0-9]*"
                        title="Somente números" required/>
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