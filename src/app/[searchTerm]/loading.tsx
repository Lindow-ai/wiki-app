import { Spinner } from "../components/MaterialTailwind";

export default function loading() {
  return (
    <main className="flex justify-center h-screen">
      <Spinner className="w-16 h-screen items-center" />
    </main>
  );
}
