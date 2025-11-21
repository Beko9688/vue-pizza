<template>
  <div class="ingredients__filling">
    <p>Начинка:</p>

    <ul class="ingredients__list">
      <li
          v-for="ingredientType in items"
          :key="ingredientType.id"
          class="ingredients__item"
      >
        <app-drag
            :data-transfer="ingredientType"
            :draggable="getValue(ingredientType.value) < MAX_INGREDIENT_COUNT"
        >
          <div class="filling">
            <img
                :src="getIngredientImage(ingredientType.id)"
                :alt="ingredientType.name"
            />
            {{ ingredientType.name }}
          </div>
        </app-drag>

        <app-counter
            class="ingredients__counter"
            :value="getValue(ingredientType.value)"
            :min="0"
            :max="MAX_INGREDIENT_COUNT"
            @input="inputValue(ingredientType.value, $event)"
            @increment="incrementValue(ingredientType.value)"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import {toRef} from "vue";
import AppDrag from "@/common/components/AppDrag.vue";
import {MAX_INGREDIENT_COUNT} from "@/common/constants";
import AppCounter from "@/common/components/AppCounter.vue";


import mushrooms from "@/assets/img/filling/mushrooms.svg";
import cheddar from "@/assets/img/filling/cheddar.svg";
import salami from "@/assets/img/filling/salami.svg";
import ham from "@/assets/img/filling/ham.svg";
import ananas from "@/assets/img/filling/ananas.svg";
import bacon from "@/assets/img/filling/bacon.svg";
import onion from "@/assets/img/filling/onion.svg";
import chile from "@/assets/img/filling/chile.svg";
import jalapeno from "@/assets/img/filling/jalapeno.svg";
import olives from "@/assets/img/filling/olives.svg";
import tomatoes from "@/assets/img/filling/tomatoes.svg";
import salmon from "@/assets/img/filling/salmon.svg";
import mozzarella from "@/assets/img/filling/mozzarella.svg";
import parmesan from "@/assets/img/filling/parmesan.svg";
import blueCheese from "@/assets/img/filling/blue_cheese.svg";


const ingredientImageById = {
  1: mushrooms,
  2: cheddar,
  3: salami,
  4: ham,
  5: ananas,
  6: bacon,
  7: onion,
  8: chile,
  9: jalapeno,
  10: olives,
  11: tomatoes,
  12: salmon,
  13: mozzarella,
  14: parmesan,
  15: blueCheese,
};

const getIngredientImage = (id) => ingredientImageById[id] || "";

const props = defineProps({
  values: {
    type: Object,
    default: () => ({}),
  },
  items: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update"]);

const values = toRef(props, "values");

const getValue = (ingredient) => {
  return values.value[ingredient] ?? 0;
};

const setValue = (ingredient, count) => {
  emit("update", ingredient, Number(count));
};

const decrementValue = (ingredient) => {
  setValue(ingredient, getValue(ingredient) - 1);
};

const incrementValue = (ingredient) => {
  setValue(ingredient, getValue(ingredient) + 1);
};

const inputValue = (ingredient, count) => {
  return setValue(ingredient, Math.min(MAX_INGREDIENT_COUNT, Number(count)));
};

const getImage = (image) => {
  return new URL(`../../assets/img/${image}`, import.meta.url).href;
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/ds-system/ds.scss";
@import "@/assets/scss/mixins/mixins.scss";

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}

.filling {
  @include r-s14-h16;

  position: relative;

  display: block;

  padding-left: 36px;

  img {
    @include p_center-v;

    display: block;

    width: 32px;
    height: 32px;

    box-sizing: border-box;
    padding: 4px;

    border-radius: 50%;
  }
}
</style>
