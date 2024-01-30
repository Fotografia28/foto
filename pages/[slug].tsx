import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../components/container";
import PostBody from "../components/post-body";
import MoreStories from "../components/more-stories";
import Header from "../components/header";
import PostHeader from "../components/post-header";
import SectionSeparator from "../components/section-separator";
import Layout from "../components/layout";
import PostTitle from "../components/post-title";
import Tags from "../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../lib/api";
import { CMS_NAME } from "../lib/constants";
import { useEffect } from "react";

export default function Post({ post, posts, preview, head, seo }) {
  const router = useRouter();
  const morePosts = posts?.edges;
  useEffect(() => {
    if (!post?.slug) {
      window.location.href = "/404";
    }
  });

  // const canonical = seo.canonical || "d"
  const description = seo.description || "a";

  return (
    <>
      <Layout preview={preview}>
        <Container>
          <Header />
          {router?.isFallback ? (
            <PostTitle>Loading…</PostTitle>
          ) : (
            <>
              <article>
                <Head>
                  <title>{`${post?.title}`}</title>
                  {/* {seo.canonical && (
                    <link rel="canonical" href={canonical} />
                  )} */}

                  <meta name="description" content={description} />
                  <meta
                    property="og:image"
                    content={post?.featuredImage.node.sourceUrl}
                  />
                </Head>
                <PostHeader
                  title={post?.title}
                  coverImage={post?.featuredImage}
                  date={post?.date}
                  author={post?.author}
                  categories={post?.categories}
                />
                <PostBody content={post?.content} />
                <footer>
                  {post?.tags.edges.length > 0 && <Tags tags={post?.tags} />}
                </footer>
              </article>

              <SectionSeparator />
              {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </>
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params?.slug, preview, previewData);
  const allPost = await getAllPostsWithSlug();

  const { node } = allPost?.edges.find(
    (post) => post.node.slug == data.post.slug
  );
  const seo = node.seo;

  return {
    props: {
      preview,
      seo: seo,
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  // const seo = data?.filter((post) => post.edges.node.slug === params.slug)

  return {
    paths: allPosts.edges.map(({ node }) => `/${node.slug}`) || [],
    // path: seo,
    fallback: true,
  };
};
