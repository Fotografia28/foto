import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center flex-col gap-y-4">
      <h1 className="text-4xl">Erro 404</h1>
      <p>
        Página não encontrada ou está fora do ar no momento, retorne ao início.
      </p>
      <Link href="/">
        <button className="py-4 border-gray-800 border-solid border-[1px] px-8 rounded-md">
          Voltar ao início
        </button>
      </Link>
    </main>
  );
}
