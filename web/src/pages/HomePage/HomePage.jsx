import { useEffect, useState } from 'react'

import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import { BeatLoader } from 'react-spinners'

import { MetaTags } from '@redwoodjs/web'

import AboutInfo from 'src/components/AboutInfo/AboutInfo'
import Banner from 'src/components/Banner/Banner'
import BlogInfo from 'src/components/BlogInfo/BlogInfo'
import CareerPartner from 'src/components/CareerPartner/CareerPartner'
import CaseStudy from 'src/components/CaseStudy/CaseStudy'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import HomeModal from 'src/components/HomeModal/HomeModal'
import Opportunity from 'src/components/Opportunity/Opportunity'
import Partners from 'src/components/Partners/Partners'
import Sector from 'src/components/Sector/Sector'
import Services from 'src/components/Services/Services'
import Talent from 'src/components/Talent/Talent'
import { useAuthentication } from 'src/services/auth'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

const HomePage = () => {
  const { authenticate, getPostsByPage } = useAuthentication()
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const { jsonData } = useSharedData()

  const aboutData = jsonData.aboutData
  const blogData = jsonData.blogData

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        await authenticate()
        // Fetch the first page of posts (8 posts)
        const { posts: firstPagePosts, totalPages: total } =
          await getPostsByPage(1)
        setPosts(firstPagePosts)
        setTotalPages(total)

        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const handlePageChange = async (page) => {
    try {
      setLoading(true)

      const { posts: newPosts } = await getPostsByPage(page)
      setPosts(newPosts)
      setCurrentPage(page)

      setLoading(false)
    } catch (error) {
      console.error('Error fetching posts for page:', error)
      setLoading(false)
    }
  }

  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Banner setModalOpen={setOpenModal} bannerData={jsonData.Banner} />
      <HomeModal open={openModal} setOpen={setOpenModal} />
      <Services />

      <Talent posts={posts} loading={loading} />
      <Opportunity />
      <CareerPartner />
      <Partners />
      <Sector />

      <Footer setOpenModal={setOpenModal} />
    </>
  )
}

export default HomePage
