import { createResource } from "./resource";

function fetchUser() {
  return new Promise<{ name: string }>((resolve) => {
    setTimeout(() => {
      resolve({ name: "Anurag" });
    }, 1500);
  });
}

export const userResource = createResource(fetchUser());
