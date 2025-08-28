import React from 'react'

import { Helmet } from 'react-helmet'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  XIcon,
  LinkedinIcon,
  LinkedinShareButton,
  EmailIcon,
  EmailShareButton,
} from 'react-share'
// https://upsela.beetechsolution.com/job-apply?pageUrl=/job-detail/82
// http://localhost:8910/job-apply?pageUrl=/job-detail/82
// http://localhost:8910/pages/JobPostDetailPage/job-apply?pageUrl=/job-detail/82&hashtag=#YourHashtag
// http://localhost:8910/pages/JobPostDetailPage/job-apply?pageUrl=/job-detail/82&hashtag=#YourHashtag

const SocialShare = (props) => {
  // console.log('🚀 ~ SocialShare ~ props:', props)
  const currentUrl = props.link
  const title = props.title
  const description = props.description
  const imageUrl = props.image

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={currentUrl} />

        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:url" content={currentUrl} />
      </Helmet>
      <div className="social-share-icons">
        <FacebookShareButton
          url={currentUrl}
          quote={title}
          hashtag="#YourHashtag"
          image={imageUrl}
          description={description}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon bgStyle={{ fill: '#666DF2' }} size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={currentUrl}
          quote={title}
          hashtag="#YourHashtag"
          image={imageUrl}
          description={description}
          className="twitter-share"
        >
          <XIcon bgStyle={{ fill: '#666DF2' }} size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton
          url={currentUrl}
          quote={title}
          hashtag="#YourHashtag"
          image={imageUrl}
          description={description}
          className="Demo__some-network__share-button"
        >
          <LinkedinIcon bgStyle={{ fill: '#666DF2' }} size={32} round />
        </LinkedinShareButton>

        <EmailShareButton
          url={currentUrl}
          quote={title}
          hashtag="#YourHashtag"
          image={imageUrl}
          description={description}
          subject={title}
          body="body"
          className="Demo__some-network__share-button"
        >
          <EmailIcon bgStyle={{ fill: '#666DF2' }} size={32} round />
        </EmailShareButton>
      </div>
    </>
  )
}

export default SocialShare
