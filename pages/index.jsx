
import React from 'react'
import Header from '../components/website/header'
import Blog from '../components/website/blog'

export default function Home() {
  return (
    <>
      <Header title="I'm Connor, 👋" subtitle="I'm a software engineer who loves ☕" />
      <Blog />
    </>
  )
}
