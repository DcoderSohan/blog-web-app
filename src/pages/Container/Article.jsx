import React from 'react'
import ArticleCard from '../../components/ArticleCard'

const Article = () => {
  return (
    <section className='container mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
      <ArticleCard className="w-full"/>
    </section>
  )
}

export default Article
