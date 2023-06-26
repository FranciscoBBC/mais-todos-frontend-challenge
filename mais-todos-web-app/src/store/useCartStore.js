import { create } from "zustand";
import { persist } from "zustand/middleware";

const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      addProductToCart: (product) => {
        set((state) => ({
          cart: [...state.cart, product],
        }));
      },
      removeProductFromCart: (productID) => {
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productID),
        }));
      },
      clearCart: () => {
        set(() => ({
          cart: [],
        }));
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

export default useCartStore;
