import { ORDER } from "@/lib/order";
export default function mergeJSONToCSV(jsonArray) {
    // console.log("jsonArray = " + jsonArray);
    // Vérifier si le tableau est vide
    if (jsonArray.length === 0) {
        return null;
    }

    // Obtenir toutes les clés uniques de tous les objets JSON
    const allKeys = Array.from(new Set(jsonArray.flatMap(obj => Object.keys(obj))));

    // Ajouter les clés uniques qui ne sont pas dans l'ordre prédéfini
    const additionalKeys = allKeys.filter(key => !ORDER.includes(key));
    const finalOrder = [...ORDER, ...additionalKeys];

    // Créer l'en-tête CSV avec toutes les clés dans l'ordre prédéfini
    const csvHeader = finalOrder.join(',');

    // Créer les lignes CSV en fusionnant les objets JSON
    const csvRows = jsonArray.map(obj => {
        return finalOrder.map(key => obj[key] !== undefined ? obj[key] : '').join(',');
    });

    // Concaténer l'en-tête et les lignes CSV
    const csvContent = [csvHeader, ...csvRows].join('\n');

    // Créer un objet Blob à partir du contenu CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });

    // Créer un URL pour le téléchargement du fichier
    const downloadUrl = URL.createObjectURL(blob);

    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'merged_data.csv';
    link.click();

    // Nettoyer l'URL de téléchargement
    URL.revokeObjectURL(downloadUrl);
}