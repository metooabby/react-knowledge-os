export function fetchUserProfile(): Promise<{ name: string }> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ name: "Anurag" });
        }, 1000);
    })
}