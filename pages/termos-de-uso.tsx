
import Link from "next/link";


export default function Page() {

  return (
    <main className="max-w-[80%] m-auto">
      <h1 className="mt-10 text-5xl font-semibold">Termos de Uso</h1>
      <p>Estes Termos de Uso ("Termos") regem o uso deste site de fotografia ("site") e quaisquer serviços oferecidos por ele. Ao acessar ou utilizar este site, você concorda com estes Termos.</p>

      <div className="ml-10 mt-10">
        <h2 className="font-semibold text-2xl">Uso do Site</h2>
        <p>Você concorda em utilizar este site apenas para fins legais e de acordo com estes Termos. Você não deve usar o site de forma que possa danificar, desabilitar, sobrecarregar ou prejudicar o site, ou interferir com o uso de terceiros.</p>


        <h2 className="font-semibold text-2xl mt-6">Conteúdo e Propriedade Intelectual</h2>
        <p>Todo o conteúdo disponível no site, incluindo, mas não se limitando a, textos, imagens, vídeos, logotipos e marcas registradas, é de propriedade do site ou de seus licenciantes e está protegido por leis de propriedade intelectual. O uso não autorizado do conteúdo pode violar leis de direitos autorais e outras leis aplicáveis.</p>

        <h2 className="font-semibold text-2xl mt-6">Links de Afiliados</h2>
        <p>O site pode incluir links para produtos ou serviços de afiliados. Se você clicar em um desses links e realizar uma compra, o site pode receber uma comissão. O site não se responsabiliza pelos produtos ou serviços oferecidos por terceiros através desses links de afiliados.</p>

        <h2 className="font-semibold text-2xl mt-6">Limitação de Responsabilidade</h2>
        <p>O site e seu conteúdo são fornecidos "no estado em que se encontram", sem garantias de qualquer tipo, expressas ou implícitas. O site não se responsabiliza por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos decorrentes do uso ou incapacidade de usar o site ou seu conteúdo.</p>

        <h2 className="font-semibold text-2xl mt-6">Alterações nos Termos</h2>
        <p>Estes Termos podem ser atualizados ocasionalmente e qualquer alteração será efetiva após a publicação dos Termos revisados no site. Recomendamos que você revise periodicamente os Termos de Uso para estar ciente de quaisquer alterações.</p>

        <h2 className="font-semibold text-2xl mt-6">Legislação Aplicável</h2>
        <p>Estes Termos de Uso são regidos e interpretados de acordo com as leis do [seu país/estado], sem consideração a seus conflitos de disposições legais.</p>

        <h2 className="font-semibold text-2xl mt-6">Contato</h2>
        <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do e-mail matteus.isaque28@gmail.com</p>

      </div>

      <p className="mt-10">
        Estamos comprometidos em fornecer um blog com dicas e conteudo do assunto, autêntico e acessível. Se você tiver alguma dúvida, preocupação ou sugestão, não hesite em entrar em contato conosco através do formulário de contato <Link className="underline decoration-3 font-semibold" href="/contato">CLICANDO AQUI</Link> .
      </p>

      <p>
        Agradecemos por visitar nossa página de termos de uso!
      </p>

      <Link href="/" className="underline decoration-3 pb-20">
        A equipe da www.fotostudioequipe.com.br
      </Link>
    </main>
  )
}
