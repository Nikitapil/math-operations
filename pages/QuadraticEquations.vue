<template>
  <section class="quadratic-page">
    <container title="Quadratic equations solver">
      <form @submit.prevent>
        <div class="quadratic-page__form">
          <input type="number" v-model.number="equationParams.aParam"/>
          <span>x<sup>2</sup></span>
          <span>+</span>
          <input type="number" v-model.number="equationParams.bParam">
          <span>x</span>
          <span>+</span>
          <input type="number" v-model.number="equationParams.cParam" />
          <span>= 0</span>
        </div>
        <button class="solve-button" @click="solve">Solve</button>
      </form>
      <p v-if="result" class="result">{{result}}</p>
    </container>
  </section>
</template>
<script setup lang="ts">
import Container from "../components/UI/Container";
import {reactive, ref} from "@vue/reactivity";
import {equationsSolver} from "~/Operations/EquationsSolver";
const equationParams = reactive({aParam: 0, bParam: 0, cParam: 0})
const result = ref('')

const solve = () => {
  result.value = equationsSolver(equationParams.aParam, equationParams.bParam, equationParams.cParam)
}

</script>
<style lang="scss">
.quadratic-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quadratic-page__form {
  display: flex;
  align-items: center;
  gap: 7px;
  input {
    max-width: 60px;
  }
}



.result {
  margin-top: 10px;
  font-weight: 700;
  font-size: 18px;
}
</style>