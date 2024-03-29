import { TCartItem } from "@/types/cart";

export const getLocalStorage = (key: string): TCartItem[] | null => {
   return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || "") : null;
};

export const setLocalStorage = (key: string, value: TCartItem[] | null): void => {
   localStorage.setItem(key, JSON.stringify(value));
};
