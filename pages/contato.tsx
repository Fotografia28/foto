import Head from "next/head";
import Layout from "../components/layout";
import Container from "../components/container";



export default function Page() {

  return (
    <Layout preview={false}>
      <Head>
        <title>Fotos Estudios Equipe - Ensaio fotográfico, eventos e mais</title>
      </Head>
      <Container>
        <div>
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">Contato</h1>
            <p>Entre em contato, estamos atendendo 24h por dia, com uma equipe preparada para sanar suas dúvidas, ideias e realizar um orçamento mediante a disponibilidade de nossos fotografos na sua região, entre em contato totalmente sem compromisso e recebaa uma resposta dentro de 24h</p>
          </div>


          <form>
            <input type="label" placeholder="Email"/>
            <input type="label" placeholder="Telefone"/>
            <textarea placeholder="Telefone"/>
          </form>

        </div>
      </Container>
    </Layout>
  )
}