import React, { useEffect, useState } from 'react'

import Skeleton from 'react-loading-skeleton'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useAuthentication } from 'src/services/auth'
import { useSharedData } from 'src/SharedDataProvider/SharedDataContext'

import 'react-loading-skeleton/dist/skeleton.css'

const BlogSlider = () => {
  const { authenticate, getPopularPostsByTag } = useAuthentication()
  const { jsonData } = useSharedData()
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const sliderItem = jsonData.blogSlider.sliderItem
  const storedJsonData = JSON.parse(localStorage.getItem('jsonData'))
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        await authenticate()
        // Fetch the first page of posts (8 posts)
        const posts = await getPopularPostsByTag()
        setPosts(posts)
        // const allPosts = await getAllPosts();
        // setPosts(allPosts);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching posts:', error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    padding: '50px',
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="blog-slider">
      <div className="container">
        <p className="sm-blg">
          <strong>{jsonData.blogSlider.subTitle}</strong>
        </p>
        <h2 className="m-b-20">{jsonData.blogSlider.title}</h2>
        {loading ? (
          // Show skeleton loading while data is being fetched
          <Slider {...settings}>
            <div className="blog-item">
              <Skeleton height={200} width={300} />
              <div>
                <Skeleton height={20} width={200} />
              </div>
            </div>
            <div className="blog-item">
              <Skeleton height={200} width={300} />
              <div>
                <Skeleton height={20} width={200} />
              </div>
            </div>
            <div className="blog-item">
              <Skeleton height={200} width={300} />
              <div>
                <Skeleton height={20} width={200} />
              </div>
            </div>
          </Slider>
        ) : (
          <Slider {...settings}>
            {Array.isArray(posts) && posts.length > 0 ? (
              posts.map((item) => {
                return (
                  <div key={item.title} className="blog-item">
                    {item.featured_image && item.featured_image.url ? (
                      <img
                        src={item.featured_image.url}
                        alt={item.featured_image.alt || 'Featured Image'}
                      />
                    ) : (
                      <img
                        src="/images/slider1.jpg" // Replace with the path to your default image
                        alt="Default"
                        className="border-radius-30"
                      />
                    )}
                    <div>
                      <h4 className="m-t-20">{item.title}</h4>
                    </div>
                  </div>
                )
              })
            ) : (
              <p>No popular posts found.</p>
            )}
          </Slider>
        )}
      </div>
    </div>
  )
}

export default BlogSlider
