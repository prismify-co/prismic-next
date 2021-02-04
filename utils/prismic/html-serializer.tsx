import React from 'react'
import { Elements } from 'prismic-reactjs'
import linkParser from './link-parser'
import { Box, Flex, Heading, Link, Image } from '@chakra-ui/react'
import { jsx, css } from '@emotion/react'
import Text from 'components/ui/text'
// -- Function to add unique key to props
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

import Embed from 'react-embed'
import Span from 'components/ui/span'

// -- HTML Serializer
export default function Seralizer(type, element, content, children, key) {
  var props: any = {}
  const unique = propsWithUniqueKey(props, key)
  switch (type) {
    case Elements.heading1: // Heading 1
      return <Heading as="h1" variant="h1" {...{ children, ...unique }} />

    case Elements.heading2: // Heading 2
      return <Heading as="h2" variant="h2" {...{ children, ...unique }} />

    case Elements.heading3: // Heading 3
      return <Heading as="h3" variant="h3" {...{ children, ...unique }} />

    case Elements.heading4: // Heading 4
      return <Heading as="h4" variant="subtitle" {...{ children, ...unique }} />

    case Elements.heading5: // Heading 5
      return <Heading as="h5" {...{ children, ...unique }} />

    case Elements.heading6: // Heading 6
      return <Heading as="h6" {...{ children, ...unique }} />

    case Elements.paragraph: // Paragraph
      return (
        <Text as="p" {...{ children, ...propsWithUniqueKey(props, key) }} />
      )

    case Elements.preformatted: // Preformatted
      return <Box as="pre" {...{ children, ...unique }} />

    case Elements.strong: // Strong
      return <Box as="strong" {...{ children, ...unique }} />

    case Elements.em: // Emphasis
      return (
        <Box as="em" {...{ children, ...propsWithUniqueKey(props, key) }} />
      )

    case Elements.listItem: // Unordered List Item
    case Elements.oListItem: // Ordered List Item
      return (
        <Box as="li" {...{ children, ...propsWithUniqueKey(props, key) }} />
      )

    case Elements.list: // Unordered List
      return (
        <Box as="ul" {...{ children, ...propsWithUniqueKey(props, key) }} />
      )

    case Elements.oList: // Ordered List
      return (
        <Box as="ol" {...{ children, ...propsWithUniqueKey(props, key) }} />
      )

    case Elements.image: // Image
      const link = linkParser(element?.linkTo?.url || element?.linkTo) as any
      const image = (
        <Image
          {...propsWithUniqueKey(props, key)}
          src={element.url}
          alt={element.alt}
        />
      )

      if (link?.href === '#' || !element?.linkTo?.url || !element?.linkTo) {
        return (
          <Flex
            key={key}
            sx={{
              maxWidth: '550px',
              mx: 'auto',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {image}
          </Flex>
        )
      }

      return (
        <Flex sx={{ maxWidth: '550px', mx: 'auto', justifyContent: 'center' }}>
          <Link key={key} {...link} variant="borderless">
            {image}
          </Link>
        </Flex>
      )

    case Elements.embed: // Embed
      return (
        <Flex
          {...unique}
          sx={{ justifyContent: 'center', alignItems: 'center', my: 4 }}
          css={css`
            & > div {
              width: 100%;
              width: 100% !important;
              max-width: 550px !important;
              margin: 0 auto !important;
            }
            & > div > iframe {
              width: 100% !important;
              max-width: 550px !important;
              margin: 0 auto !important;
            }
          `}
        >
          <Embed url={element?.oembed?.embed_url ?? ''} />
        </Flex>
      )
    case Elements.hyperlink: // Image
      if (!linkParser) {
        return null
      }
      return <Link {...{ children, ...unique, ...linkParser(element?.data) }} />

    case Elements.label: // Label
      props = element.data
        ? Object.assign({}, { className: element.data.label })
        : {}
      if (props.className === 'code') {
        return React.createElement(
          'code',
          propsWithUniqueKey(props, key),
          children
        )
      }
      if (
        ['text-center', 'text-left', 'text-right'].includes(props.className)
      ) {
        props.className += ' block'
      }

      return (
        <Span
          css={css`
            &.block {
              display: block;
            }
          `}
          {...propsWithUniqueKey(props, key)}
        >
          {children}
        </Span>
      )

    case Elements.span: // Span
      if (content) {
        return content.split('\n').reduce((acc, p) => {
          if (acc.length === 0) {
            return [p]
          } else {
            const brIndex = (acc.length + 1) / 2 - 1
            const br = React.createElement(
              'br',
              propsWithUniqueKey({}, brIndex)
            )
            return acc.concat([br, p])
          }
        }, [])
      } else {
        return null
      }

    default:
      // Always include a default that returns null
      return null
  }
}
