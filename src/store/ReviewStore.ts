import { create } from "zustand";

interface ReviewsStore {
  areaName: any;
  setAreaName: any;
  zone: any;
  setZone: any;
  imgUrls: string[];
  setImgUrls: any;
}

export const useCreateReviewStore = create<ReviewsStore>((set) => ({
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

export const useUpdateReviewStore = create<ReviewsStore>((set) => ({
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
