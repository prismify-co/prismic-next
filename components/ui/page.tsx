import GoogleFonts from 'next-google-fonts'
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'

type PageProps = {
  seo?: NextSeoProps
  header?: React.ReactNode
  children: React.ReactNode
  footer?: React.ReactNode
}

export default function Page(props: PageProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&display=swap" />
      <NextSeo {...props.seo} />
      {props.header && <header>{props.header}</header>}
      <main>{props.children}</main>
      {props.footer && <footer>{props.footer}</footer>}
    </>
  )
}
