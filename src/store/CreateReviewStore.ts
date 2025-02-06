import { create } from "zustand";

interface CreateReviewStore {
  areaName: any;
  setAreaName: any;
  zone: any;
  setZone: any;
  imgUrls: string[];
  setImgUrls: any;
}

export const useCreateReviewStore = create<CreateReviewStore>((set) => ({
  areaName: "",
  setAreaName: (newAreaName: string) => {
    set({ areaName: newAreaName });
  },
  zone: "",
  setZone: (newZone: string) => {
    set({ zone: newZone });
  },
  imgUrls: [],
  setImgUrls: (newData: string[]) => {
    set({ imgUrls: newData });
  },
}));
