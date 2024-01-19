<script>
import { useHistoriqueStore } from '@/stores/historique';
import FormClavier from '@/components/FormClavier.vue';
export default {
  name: 'JournalView',
  
  components: {
    FormClavier
  },

  setup() {
    const historiqueStore = useHistoriqueStore();
    return { historiqueStore };
  }
}
</script>

<template>

    <h1>Historique de vos appels :</h1>
    <ul>
        <li v-for="(appel, index) in historiqueStore.appels" :key="index">
            <p>{{ appel.nom }}  ({{ appel.numero }})</p>
            <p class="date">{{ appel.date }}, {{ appel.heure }}</p>
        </li>
    </ul>
    
</template>


<style scoped>

h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    width: auto;
    padding: 1rem;
    background-color: #f2f2f2;
    border-radius: 5px;
    color: black;
}


</style>
