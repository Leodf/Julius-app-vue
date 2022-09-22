<template>
  <div>
    <MarcaJulius />
    <HeaderJulius />
    <div class="container">
      <PainelLancamentos />
      <PainelResumo />
    </div>
  </div>
</template>

<script>
import PainelLancamentos from './components/PainelLancamentos.vue'
import PainelResumo from './components/PainelResumo.vue'
import HeaderJulius from './components/HeaderJulius.vue'
import MarcaJulius from "./components/MarcaJulius.vue"

export default {
  name: 'App',
  components: { MarcaJulius, HeaderJulius, PainelResumo, PainelLancamentos }
}
</script>

<style>

@font-face {
  font-family: "padrao";
  src: url(./fonts/KumbhSans-Regular.ttf);
}

@font-face {
  font-family: "negrito";
  src: url(./fonts/KumbhSans-Bold.ttf);
}

:root {
  --cor-destaque: #5333ed;
}

body {
  margin: 0;
  padding: 0;
  background-color: #dddddd;
}

.container {
  display: flex;
  padding: 20px;
}
</style>
