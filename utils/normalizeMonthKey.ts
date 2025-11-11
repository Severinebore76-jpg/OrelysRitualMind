// utils/normalizeMonthKey.ts
// Transforme un nom de fichier de mois complet en clé simple utilisable pour l'image.
// Exemple : "01_Janvier_Renaissance" -> "janvier"

export const normalizeMonthKey = (monthFile?: string | null): string => {
  if (!monthFile) return "janvier";
  return monthFile
    .toLowerCase()
    .normalize("NFD") // retire les accents
    .replace(/[\u0300-\u036f]/g, "") // supprime les diacritiques (é -> e)
    .replace(/^\d+_/, "") // enlève le préfixe numérique
    .replace(/_.*/, ""); // garde uniquement le nom du mois
};