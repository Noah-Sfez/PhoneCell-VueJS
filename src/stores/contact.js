import {defineStore} from 'pinia';
export const useContactStore = defineStore('contacts', {
    state: () => ({ 
        contacts:[
            {
                nom: "Dupont",
                numero : "06 12 34 56 78",
            },
        ],
    }),
    actions: {
        ajouterContact(nom, numero) {
            this.contacts.push({ nom, numero });
          },
        supprimerContact(index){
            this.contacts.splice(index, 1);
        },
    }
});
