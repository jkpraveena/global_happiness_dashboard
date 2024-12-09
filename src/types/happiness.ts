export interface CountryData {
  country: string;
  rank: number;
  score: number;
  gdpPerCapita: number;
  socialSupport: number;
  healthyLife: number;
  freedom: number;
  generosity: number;
  corruption: number;
  continent: string;
  latitude: number;
  longitude: number;
  ageGroups: {
    youth: number;
    adult: number;
    senior: number;
  };
  yearlyTrend: number[];
}

export interface HappinessStats {
  globalAverage: number;
  topCountries: CountryData[];
  continentAverages: Record<string, number>;
}