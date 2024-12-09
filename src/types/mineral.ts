export interface Mineral {
  id: string;
  name: string;
  description: string;
  locations: string[];
  uses: string[];
  image: string;
  production: {
    amount: string;
    year: number;
  };
}

export interface MineralCategory {
  name: string;
  minerals: Mineral[];
}
