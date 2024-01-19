<script>

import { ref, computed } from 'vue';
import FormClavier from '@/components/FormClavier.vue';
import { useContactStore } from '@/stores/contact';
import { useHistoriqueStore } from '@/stores/historique'; // Import the historique store

export default {
  name: 'AffichageNumero',
  components: {
    FormClavier
  },
  setup() {
    const contactStore = useContactStore();
    const historiqueStore = useHistoriqueStore(); // Use the historique store
    const displayedNumero = ref('');

    const displayedContactName = computed(() => {
      const contact = contactStore.contacts.find(c => c.numero === displayedNumero.value);
      return contact ? contact.nom : 'Inconnu';
    });

    function setNumero(newNumber) {
      displayedNumero.value = newNumber;
    }

    function submitNumber() {
      const contactName = displayedContactName.value;
      historiqueStore.ajouterAppel(contactName, displayedNumero.value); // Use the recognized name or 'Inconnu'
      displayedNumero.value = ''; // Optional: Clear the number after submission
    }

    return { displayedNumero, displayedContactName, setNumero, submitNumber };
  }
}

</script>
<template>
    <main>
      <h1>Entrez un numéro de téléphone :</h1>
      <h2>{{ displayedNumero }}</h2>
      <h3>{{ displayedContactName }}</h3>
      <FormClavier @updateNumber="setNumero" @submitNumber="submitNumber"/>
    </main>
  </template>
  
  


<style scoped>
h1 {
    margin-top: 20px;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;

}

h2 {
    font-size: 1.8rem;
    text-align: center;
    height: 70px;
    color: white;
}

</style>