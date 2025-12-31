type Status = "pending" | "success" | "error";

export function createResource<T>(promise: Promise<T>) {
  let status: Status = "pending";
  let result: T;
  let error: unknown;

  const suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      error = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      }
      if (status === "error") {
        throw error;
      }
      return result!;
    },
  };
}
