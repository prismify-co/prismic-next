const slices = {
  title: `
  ... on title {
    non-repeat {
      title
      text_transform
      text_align
    }
  }`,
  spacer: `
  ... on spacer {
    non-repeat {
      space
    }
  }`,
  text: `
  ... on text {
      non-repeat {
        text
      }
    }
  `,
}

export const PrismicQueries = {
  page: `
  page {
    body {
      ${slices.title}
      ${slices.spacer}
      ${slices.text}
    }
  }
  `,
}
