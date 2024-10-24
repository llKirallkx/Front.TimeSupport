function CreateAfdFormRows(){
    return(
        <div className="formrows">
            <div>
                <label for="tipoDeIdentificador">Tipo de Empregador</label>
                <select id="tipoDeIdentificador" name="tipoDeIdentificador" onchange="changeMask()">
                    <option value="1">CNPJ</option>
                    <option value="2">CPF</option>
                </select>
            </div>
            <div>
                <label for="cnpjOuCpf">CNPJ ou CPF do Empregador <span><strong>*</strong> (Somente
                    números)</span></label><br />
                <input type="text" id="cnpjOuCpf" name="cnpjOuCpf" maxlength="14" pattern="[0-9]*"
                    title="Somente números" required oninput="validateCnpjCpf(this)" />
            </div>
            <div className="form-row">
                <div>
                    <label for="razaoSocial">Razão Social <span><strong>*</strong></span></label>
                    <input type="text" id="razaoSocial" name="razaoSocial" maxlength="150" required/>

                    <label for="content">CPF ou PIS do funcionário <span><strong>*</strong> (Somente
                            números)</span></label>
                    <input type="text" id="content" name="content" maxlength="11" pattern="[0-9]*"
                        title="Somente números" required oninput="validateCnpjCpf(this)" />
                </div>
            </div>

            <div className="form-row">
                <div>
                    <label for="event">Data de início AFD <span><strong>*</strong></span></label>
                    <input type="date" id="event" name="event" required/>
                </div>
                <div>
                    <label for="finalevent">Data de fim do AFD <span><strong>*</strong></span></label>
                    <input type="date" id="finalevent" name="finalevent" required/>
                </div>
            </div>

            <div className="form-row">
                <div>
                    <label for="entrada1">Entrada 1 <span><strong>*</strong></span></label>
                    <input type="time" id="entrada1" name="entrada1" required/>
                </div>
                <div>
                    <label for="saida1">Saída 1 <span><strong>*</strong></span></label>
                    <input type="time" id="saida1" name="saida1" required/>
                </div>
                <div>
                    <label for="entrada2">Entrada 2 <span><strong>*</strong></span></label>
                    <input type="time" id="entrada2" name="entrada2" required/>
                </div>
                <div>
                    <label for="saida2">Saída 2 <span><strong>*</strong></span></label>
                    <input type="time" id="saida2" name="saida2" required/>
                </div>
            </div>

        </div>
    )
}

export default CreateAfdFormRows