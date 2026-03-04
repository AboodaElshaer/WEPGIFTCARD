import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  productSlug: string;
  productTitle: string;
  productImage: string;
  packageName: string;
  packageAmount: string;
  price: string;
  playerId: string;
  server: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => set((state) => ({ items: [...state.items, item] })),
      removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      clearCart: () => set({ items: [] }),
      total: () => {
        return get().items.reduce((acc, item) => {
          const priceNum = parseFloat(item.price.replace('$', '')) || 0;
          return acc + priceNum;
        }, 0);
      },
    }),
    {
      name: 'nexus-cart',
    }
  )
);
