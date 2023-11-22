import { router } from "expo-router";

export const routerPush = (path: string) => {
  router.push(path);
};

export const routerBack = () => {
  router.back();
};
