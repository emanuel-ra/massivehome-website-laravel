import { create } from "zustand";

interface Store {
  isCategoriesNav: boolean;
  isMobileNav: boolean;
  isMobileCategories: boolean;
  isSearching: boolean;
  toggleMobileNav: () => void;
  toggleCategoriesNav: () => void;
  toggleMobileCategoriesNav: () => void;
  toggleSearchingNav: () => void;
  resetState: () => void;
}

export const useNavBarStore = create<Store>()((set, get) => {
  return {
    isCategoriesNav: false,
    isMobileNav: false,
    isMobileCategories: false,
    isSearching: false,
    toggleMobileNav: () => {
      const { isMobileNav } = get();
      set({ isMobileNav: !isMobileNav });
    },
    toggleCategoriesNav: () => {
      const { isCategoriesNav } = get();
      set({ isCategoriesNav: !isCategoriesNav });
    },
    toggleMobileCategoriesNav: () => {
      const { isMobileCategories } = get();
      set({ isMobileCategories: !isMobileCategories });
    },
    toggleSearchingNav: () => {
      const { isSearching } = get();
      set({ isSearching: !isSearching });
    },
    resetState:()=>{
      set({ isSearching: false, isCategoriesNav:false,isMobileNav:false,isMobileCategories:false });
    }
  };
});
