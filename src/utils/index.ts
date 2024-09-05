const magasins: Magasin[] = [
    {
        id: "A1b#C3$dE@",
        nom: "Magasin A",
        adresse: "Marché Ongola Yaoundé, block E, boutique 13"
    },
    {
        id: "F6g&H8!iJ*",
        nom: "Magasin B",
        adresse: "Marché Central Yaoundé, block G, boutique 3"
    },
    {
        id: "K1l^M3%nO$",
        nom: "Magasin C",
        adresse: "Marché AKWA Douala, block C, boutique 30"
    },
    {
        id: "P6q(R8)S9*",
        nom: "Magasin D",
        adresse: "Marché d'Etoudi Yaoundé, block A, boutique 22"
    },
    {
        id: "U1v-W3_X4@",
        nom: "Magasin E",
        adresse: "Marché Ongola, block Z, boutique 2"
    }
];

const produits: Produit[] = [
    {
        id: "A1b#C3$dE@",
        nom: "Produit A",
        prix: 29999 // FCFA
    },
    {
        id: "F6g&H8!iJ*",
        nom: "Produit B",
        prix: 49500 // FCFA
    },
    {
        id: "K1l^M3%nO$",
        nom: "Produit C",
        prix: 15750 // FCFA
    },
    {
        id: "P6q(R8)S9*",
        nom: "Produit D",
        prix: 89999 // FCFA
    },
    {
        id: "U1v-W3_X4@",
        nom: "Produit E",
        prix: 35200 // FCFA
    },
    {
        id: "R7t^U8*V9$",
        nom: "Produit F",
        prix: 22600 // FCFA
    },
    {
        id: "W5x&Y7!Z0#",
        nom: "Produit G",
        prix: 59999 // FCFA
    },
    {
        id: "M2n^O4&P5*",
        nom: "Produit H",
        prix: 12400 // FCFA
    },
    {
        id: "Q8r!S9(T0$",
        nom: "Produit I",
        prix: 77000 // FCFA
    },
    {
        id: "L3m-N6_O7@",
        nom: "Produit J",
        prix: 41150 // FCFA
    }
];

function getListFromLocalStorage(key: string) {
    const list = localStorage.getItem(key);
    return list ? JSON.parse(list) : [];
}

// Function to save a list to localStorage
function saveListToLocalStorage(key: string, list: []) {
    localStorage.setItem(key, JSON.stringify(list));
}

// Function to append an item to the list in localStorage
function appendToList(key: string, newItem: object) {
    // Retrieve the existing list
    const list = getListFromLocalStorage(key);

    // Append the new item
    list.push(newItem);

    // Save the updated list back to localStorage
    saveListToLocalStorage(key, list);
}

export { magasins, produits, getListFromLocalStorage, appendToList };