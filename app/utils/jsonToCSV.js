export default function jsonToCSV(json) {

    function downloadCSV(csv, filename) {
        const blob = new Blob([csv], { type: 'text/csv' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function generateUniqueId() {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        return `${timestamp}_${random}`;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////

    // on ajoute une colonne "id"
    if (!Object.entries(json).includes("id")) {
        json = { id: generateUniqueId(), ...json }
    }

    // on transforme le fichier brut en tableau d'objet (nécessaire pour la convertion en csv)
    const data = [json]

    // Obtenir les en-têtes (noms de clés) du premier objet
    const headers = Object.keys(data[0]);

    // Construire la ligne d'en-tête CSV
    const headerRow = headers.join(',');

    // Construire les lignes de données CSV
    const rows = data.map(obj =>
        Object.values(obj).join(',')
    );

    // Combiner les en-têtes et les lignes en une seule chaîne CSV
    const csv = [headerRow, ...rows].join('\n');

    if (headers.length > 3) {
        // downloadCSV(csv, 'data.csv');
    }

    return csv;

}
