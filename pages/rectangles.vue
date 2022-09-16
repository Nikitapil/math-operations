<template>
  <div class="rectangles-page__container">
    <div class="rectangles-page">
      <container title="Perimeter">
        <div class="rectangle-side">
          <label for="perimetr-side1">Side 1</label>
          <input type="number" id="perimetr-side1" v-model="perimetrSides.side1" />
        </div>
        <div class="rectangle-side">
          <label for="perimetr-side2">Side 2</label>
          <input type="number" id="perimetr-side2" v-model="perimetrSides.side2" />
        </div>
        <button class="solve-button" @click="calcPerimetr">Calc</button>
        <p v-if="perimetrResult" class="result">{{perimetrResult}}</p>
      </container>
      <container title="Square">
        <div class="rectangle-side">
          <label for="square-side1">Side 1</label>
          <input type="number" id="square-side1" v-model="squareSides.side1" />
        </div>
        <div class="rectangle-side">
          <label for="square-side2">Side 2</label>
          <input type="number" id="square-side2" v-model="squareSides.side2" />
        </div>
        <button class="solve-button" @click="calcSquare">Calc</button>
        <p v-if="squareResult" class="result">{{squareResult}}</p>
      </container>
    </div>
  </div>
</template>
<script setup>
import Container from "../components/UI/Container";
import {reactive, ref} from "@vue/reactivity";

const perimetrSides = reactive({side1: 0, side2: 0})
const squareSides = reactive({side1: 0, side2: 0})
const perimetrResult = ref('')
const squareResult = ref('')

const calcPerimetr = () => {
  if (!perimetrSides.side1 || !perimetrSides.side2) {
    perimetrResult.value = `Perimeter is 0`
    return
  }
  perimetrResult.value = `Perimeter is ${(perimetrSides.side1 + perimetrSides.side2) * 2}`
}

const calcSquare = () => {
  squareResult.value = `Square is ${squareSides.side1 * squareSides.side2}`
}


</script>
<style scoped lang="scss">
.rectangles-page__container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.rectangles-page {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
}
.rectangle-side {
  display: flex;
  gap: 30px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
  input {
    width: 100px;
  }
}
</style>