import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import { getAllPostsForHome } from '../../lib/api'

export const getServerSideProps: any = async (ctx) => {
  // Vou pegar os primeiros 100 posts do meu blog
  const allPosts = await getAllPostsForHome({ per_page: 100 })

  // Vou criar um fields, onde busco o slug da minha resposta
  // E com o slug vou preenchendo dinamicamente cada post que tenho
  const posts = allPosts.edges


  const fields = posts.map(( slug ) => (
    console.log(slug.node.title),
    {
    loc: `https://www.fotostudioequipe.com.br/${slug.node.title}`,
    lastmod: new Date().toISOString(),
    // changefreq
    // priority
  }))

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}