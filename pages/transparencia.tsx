import Link from "next/link";


export default function Page() {

  return (
    <main className="max-w-[80%] m-auto">
      <h1 className="mt-10 text-5xl font-semibold">Transparência</h1>
      <p>Bem-vindos à nossa página de transparência!</p>

      <div className="my-10">
        <p>
          No nosso blog de fotografia, a transparência é um valor fundamental. Acreditamos na importância de construir uma relação de confiança com nossos leitores, e é por isso que criamos esta página. Aqui, nos comprometemos a compartilhar informações relevantes sobre como operamos e trabalhamos em nosso blog de receitas.
        </p>
      </div>

      <div className="ml-10">
        <h2 className="font-semibold text-2xl">Origem das fotos:</h2>
        <p>Algumas fotos e vídeos compartilhadas em nosso blog são tiradas e criadas por nossa equipe ou adaptadas de fontes confiáveis. Quando utilizamos receitas de terceiros, sempre damos os devidos créditos e fornecemos links para a fonte original.</p>


        <h2 className="font-semibold text-2xl mt-6">Fotografias e imagens:</h2>
        <p>Em alguns casos, podemos utilizar imagens de bancos de imagens, sempre respeitando as licenças e direitos autorais aplicáveis.</p>

        <h2 className="font-semibold text-2xl mt-6">Comentários e participação dos leitores:</h2>
        <p>Valorizamos os comentários e a participação ativa de nossos leitores. Estamos sempre abertos a sugestões, dúvidas e feedback sobre nossas postagens. No entanto, nos reservamos o direito de moderar e excluir qualquer comentário ofensivo, spam ou que viole nossas políticas. Promovemos um ambiente de respeito mútuo e troca construtiva de ideias.</p>

        <h2 className="font-semibold text-2xl mt-6">Afiliados e publicidade:</h2>
        <p>Ressaltamos que o conteudo editorial do blog é Produzido de forma independente, sem influencia de qualquer patrocinador ou anunciante.</p>
        <p>Porém, estamos abertos a possibilidades de utilizar programas de afiliados e exibir anúncios relevantes. Estamos abertos para parcerias, no momento vamos fazer parcerias com Google AdSense de acordo com os termos. No entanto, isso não afeta a seleção de receitas ou nossa opinião sobre os produtos apresentados. Sempre buscamos recomendar produtos que acreditamos serem de qualidade e úteis para nossos leitores.
        </p>
      </div>

      <p className="mt-10">
        Estamos comprometidos em fornecer um blog com dicas e conteudo do assunto, autêntico e acessível. Se você tiver alguma dúvida, preocupação ou sugestão, não hesite em entrar em contato conosco através do formulário de contato <Link className="underline decoration-3 font-semibold" href="/contato">CLICANDO AQUI</Link> .
      </p>

      <p>
        Agradecemos por visitar nossa página de transparência!
      </p>

      <Link href="/" className="underline decoration-3 pb-20">
        A equipe da www.fotostudioequipe.com.br
      </Link>
    </main>
  )
}