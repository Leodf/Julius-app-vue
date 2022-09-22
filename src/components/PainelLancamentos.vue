<template>
  <div class="painelLancamento">
    <div class="formularioLancamento">
        
        <form>
            <div class="tiposLancamento">
                <input type="radio" name="tipo" id="entrada">
                <label for="entrada">Entrada</label>
                <input type="radio" name="tipo" id="saida">
                <label for="saida">Saída</label>
            </div>

            <label for="valor">Valor</label>
            <input type="number" name="valor" id="valor">
            <label for="descricao">Descrição</label>
            <input type="text" name="descricao" id="descricao">
            <label for="data">Data</label>
            <input type="date" name="data" id="data">

            <button>Lançar</button>
        </form>
    </div>

    <div class="areaLancamentos">
        <BlocoLancamento tipo="entrada" :lancamento="{
            valor: 100,
            descricao: 'Venda de HQ',
            data: '2020-10-20',
        }" />
        <BlocoLancamento tipo="saida" :lancamento="{
            valor: 50,
            descricao: 'Despesa Mercado',
            data: '2020-10-18',
        }" />
        <BlocoLancamento tipo="saida" :lancamento="{
            valor: 10,
            descricao: 'Despesa Farmacia',
            data: '2020-10-18',
        }" />
    </div>
  </div>
</template>

<script>
import BlocoLancamento from './BlocoLancamento.vue'
export default {
    name: "PainelLancamentos",
    components: {
        BlocoLancamento,
    }
}
</script>

<style scoped>
.painelLancamento {
    width: 40%;
    padding: 20px;
}

.formularioLancamento {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    font-family: "padrao";
}

#valor,
#descricao,
#data,
button {
    display: block;
    margin-bottom: 10px;
}

#descricao {
    width: 70%;
}

#valor,
#descricao,
#data {
    height: 20px;
    font-family: "padrao";
    font-size: 100%;
}

button {
    background-color: var(--cor-destaque);
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
    font-family: "negrito";
    font-size: 100%;
}

.tiposLancamento {
    margin-bottom: 10px;
    font-family: "negrito";
}

.tiposLancamento label {
    margin-right: 20px;
}

.tiposLancamento label:first-of-type {
    color: #22a7f0;
}

.tiposLancamento label:last-of-type {
    color: red;
}

.areaLancamentos {
    margin-top: 30px;
}

</style>