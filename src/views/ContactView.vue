<script>
import { useContactStore } from '@/stores/contact';
import { useHistoriqueStore } from '@/stores/historique';
export default {
  name: 'ContactView',
  setup() {
    const contactStore = useContactStore();
    const historiqueStore = useHistoriqueStore();
    return { contactStore, historiqueStore };
  },
  data() {
    return {
      nom: '',
      numero: ''
    };
  },
  methods: {
  handleCall(contact) {
    this.historiqueStore.ajouterAppel(contact.nom, contact.numero);
  }
}
}
</script>
<template>
  <h1>Bienvenue sur la page Contact</h1>
  <RouterLink to="/newcontact">Ajouter un contact</RouterLink>

  <ul>
    <li v-for="(contact, index) in contactStore.contacts" :key="index">
      Nom: {{ contact.nom }}, Numéro: {{ contact.numero }} 
      <span @click="handleCall(contact)">
        <button>☎</button>
      </span>
    </li>
  </ul>
</template>

<style scoped>

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

button {
  font-size: 1.5rem;
  margin-left: 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: white;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  color: black;
}


</style>
