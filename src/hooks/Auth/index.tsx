import { User } from "types/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  user: User | null;
  signIn: (user: User, callback?: VoidFunction) => void;
  signOut: (callback?: VoidFunction) => void;
  getUser: () => User | null;
}

export const useAuth = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      signIn: (user, callback) => {
        if (callback) callback();
        set({ user });
      },
      signOut: (callback) => {
        if (callback) callback();
        set({ user: undefined });
      },
      getUser: () => {
        return get().user;
      },
    }),
    {
      name: "profile-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const signOut = (callback?: VoidFunction) =>
  useAuth.getState().signOut(callback);
export const signIn = (user: User, callback?: VoidFunction) =>
  useAuth.getState().signIn(user, callback);
export const getUser = () => useAuth.getState().getUser();
