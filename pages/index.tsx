import Head from 'next/head'
import { pageQuery } from 'lib/graphql/queries/page'
import { useQuery } from '@apollo/client'
import { initApolloClient } from 'lib/graphql/apollo'
import { PageProps } from 'types/site'
import slicer from 'utils/prismic/slicer'
import SmartLink from 'components/ui/smart-link'
import { Container, Flex } from 'theme-ui'
import Picture from 'components/ui/picture'
import Button from 'components/ui/button'

export default function Home() {
  const { data, loading, error } = useQuery<{ page: PageProps }>(pageQuery(), {
    variables: {
      slug: 'home',
    },
  })
  if (error) {
    console.error(error)
  }
  if (loading) return null
  if (error) return null

  return (
    <>
      <Head>
        <title>Powered by Vercel | Made by tak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main>
        <Container className="container" py={5}>
          {slicer((data?.page?.slices as any) || [])}
          <Button href="https://prismify.co/contact" target="__blank">
            Contact
          </Button>
        </Container>
      </main>

      <Flex as="footer" py={4}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <SmartLink
              sx={{ display: 'flex', alignItems: 'center' }}
              variant="borderless"
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Powered by </span>
              <Picture
                ml={2}
                src="/vercel.svg"
                alt="Vercel Logo"
                className="logo"
                width="70"
                height="auto"
              />
            </SmartLink>
          </div>
          <div>
            Made by{' '}
            <SmartLink variant="borderless" href="https://www.iwatakeshi.com">
              tak
            </SmartLink>
          </div>
        </Container>
      </Flex>
    </>
  )
}

export async function getStaticProps({ preview = false, previewData }) {
  const client = await initApolloClient({}, previewData)
  const { data } = await client.query<{
    page: PageProps
    news_letter_forms: any
  }>({
    query: pageQuery(),
    variables: {
      slug: 'home',
    },
  })
  return {
    revalidate: 60 * 60,
    props: {
      initialApolloState: client.cache.extract(),
      page: data?.page ?? {},
    },
  }
}
