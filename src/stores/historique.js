import {defineStore} from 'pinia';
export const useHistoriqueStore = defineStore('appels', {
    state: () => ({ 
        appels:[
            {
                nom: "Dupont",
                numero : "06 12 34 56 78",
                date : "2021-04-01",
                heure : "10:00",
            },
        ],
    }),
    actions: {
        ajouterAppel(nom, numero) {
          const now = new Date();
          const date = now.toISOString().split('T')[0];
          const heure = now.toTimeString().split(' ')[0];
          nom = nom || "Inconnu"; // Default to "Inconnu" if no name is provided
      
          this.appels.push({ nom, numero, date, heure });
        },
      }
      
});
