<script>
import {useHistoriqueStore} from '@/stores/historique'

export default {
  name: 'FormClavier',
  setup() {
    const historiqueStore = useHistoriqueStore();
    return { historiqueStore };
  },
  data() {
    return {
      localNumero: '',
    };
  },
  methods: {
    addNumber(number) {
      this.localNumero += number;
      this.$emit('updateNumber', this.localNumero);
    },
    submitForm() {
        this.$emit('submitNumber', this.localNumero);
        this.localNumero = ''; 
    }
  }
}
</script>
<template>
  <form action="" @submit.prevent="submitForm()">
    <div class="numero">
        <button type="button" @click="addNumber('1')">1</button>
        <button type="button" @click="addNumber('2')">2</button>
        <button type="button" @click="addNumber('3')">3</button>
        <button type="button" @click="addNumber('4')">4</button>
        <button type="button" @click="addNumber('5')">5</button>
        <button type="button" @click="addNumber('6')">6</button>
        <button type="button" @click="addNumber('7')">7</button>
        <button type="button" @click="addNumber('8')">8</button>
        <button type="button" @click="addNumber('9')">9</button>
        <button type="button" @click="addNumber('*')">*</button>
        <button type="button" @click="addNumber('0')">0</button>
        <button type="button" @click="addNumber('#')">#</button>
    </div>
    <input type="submit" value="📞" class="submit">
  </form>
</template>


<style scoped>

.submit {
    width: 100px;
    border-radius: 50%;
    height: 100px;
    font-size: 20px;
    text-align: center;
    border: 2px solid #000;
    background-color: #fff;
    cursor: pointer;
    font-size: 3rem;
    margin-bottom: 10px;
}

form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.input-number {
    width: 100%;
    height: 50px;
    font-size: 20px;
    text-align: center;
    border: 2px solid #000;
    margin-bottom: 10px;
}
.numero {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin-bottom: 10px;
}
.numero button {
    width: 100px;
    border-radius: 50%;
    height: 100px;
    font-size: 20px;
    text-align: center;
    border: 2px solid #000;
    background-color: #fff;
    cursor: pointer;
    font-size: 3rem;
}

</style>