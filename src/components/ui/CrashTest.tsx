export default function CrashTest({ shouldCrash }: { shouldCrash: boolean }) {
  if (shouldCrash) {
    throw new Error("Intentional crash");
  }

  return (
    <div className="rounded bg-green-100 p-4 text-green-800 dark:bg-green-900 dark:text-green-100">
      Component is stable
    </div>
  );
}
