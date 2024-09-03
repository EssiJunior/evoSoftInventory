
interface Magasin {
    id: string;
    nom: string;
    adresse: string;
}

interface Produit {
    id: string;
    nom: string;
    prix: number;
}

interface Inventaire {
    date: string;
    produitId: string;
    stock: Record<string, number>; // Record<magasinId, stock>
}