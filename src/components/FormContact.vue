<script>
import { useContactStore } from '@/stores/contact';

export default {
  name: 'FormContact',
  setup() {
    const contactStore = useContactStore();
    return { contactStore };
  },
  data() {
    return {
      nom: '',
      numero: ''  
    };
  },
  methods: {
    addContact() {
      this.contactStore.ajouterContact(this.nom, this.numero);
      this.nom = '';
      this.numero = '';
    }
  }
}
</script>


<template>
    <form @submit.prevent="addContact">
      <input type="text" v-model="nom" placeholder="Entrez un nom">
      <input type="text" v-model="numero" placeholder="Entrez un numéro de téléphone"> <!-- Changed type to text -->
      <input type="submit" value="Ajouter">
    </form>
</template>


<style scoped>

form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form input {
    width: 100%;
    height: 50px;
    font-size: 20px;
    text-align: center;
}


</style>