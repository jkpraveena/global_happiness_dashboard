import create from 'zustand';
import { CountryData } from '../types/happiness';
import { happinessData } from '../data/mockData';

interface HappinessStore {
  selectedCountry: CountryData;
  predictedScores: Record<string, number>;
  setSelectedCountry: (country: CountryData) => void;
  setPredictedScore: (country: string, score: number) => void;
}

export const useHappinessStore = create<HappinessStore>((set) => ({
  selectedCountry: happinessData[0],
  predictedScores: {},
  setSelectedCountry: (country) => set({ selectedCountry: country }),
  setPredictedScore: (country, score) =>
    set((state) => ({
      predictedScores: { ...state.predictedScores, [country]: score },
    })),
}));