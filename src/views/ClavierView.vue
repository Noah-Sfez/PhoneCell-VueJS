<script>

import FormClavier from '@/components/FormClavier.vue'
import AffichageNumero from '@/components/AffichageNumero.vue'

export default {
  name: 'ClavierView',
  
  components: {
    FormClavier,
    AffichageNumero
  },
  props: {
    numero: String
  },
}
</script>

<template>
  <main>
    <AffichageNumero />
  </main>
</template>


<style scoped>

main {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

</style>