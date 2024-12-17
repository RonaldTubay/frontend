export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  genre: string;
  duration: string;
  image: string;
  availableDays: string[]; // Ahora es una lista de días
  functions: string[];
}
