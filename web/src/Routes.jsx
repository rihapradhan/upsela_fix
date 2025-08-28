// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

// import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import UpselaLayout from 'src/layouts/UpselaLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/employers" page={EmployersPage} name="employers" />
      <Route path="/validation" page={ValidationPage} name="validation" />
      <Route path="/job-apply" page={JobApplyPage} name="jobApply" />
      <Route path="/job-post-detail" page={JobPostDetailPage} name="jobPostDetail" />
      <Route path="/career-job-post" page={CareerJobPostPage} name="careerJobPost" />
      <Route path="/career-search" page={CareerSearchPage} name="careerSearch" />
      <Route path="/blog-post" page={BlogPostPage} name="blogPost" />
      {/* <Route path="/blogs" page={BlogsPage} name="blogs" /> */}
      <Route path="/case-study-post" page={CaseStudyPostPage} name="caseStudyPost" />
      <Route path="/case-studies" page={CaseStudiesPage} name="caseStudies" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/services-single" page={ServicesSinglePage} name="servicesSingle" />
      {/* <Set wrap={ScaffoldLayout} title="Posts" titleTo="posts" buttonLabel="New Post" buttonTo="newPost" prerender>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set> */}
      <Set wrap={UpselaLayout}>
        <Route path="/" page={HomePage} name="home" prerender />
        <Route path="/about" page={AboutPage} name="about" prerender />

        {/* <Route path="/service/{id:Int}" page={ServicesSinglePage} name="service" /> */}
        <Route path="/service/{id}" page={ServicesSinglePage} name="service" />
        <Route path="/contact" page={ContactPage} name="contact" prerender />
        <Route path="/case_studies" page={CaseStudiesPage} name="case_studies" prerender />
        <Route path="/case-studies/{id:Int}" page={CaseStudyPostPage} name="case_post" />
        <Route path="/blog" page={BlogsPage} name="blog" prerender />
        <Route path="/blog/{id:Int}" page={BlogPostPage} name="blog_post" />

        <Route path="/careers" page={CareerSearchPage} name="careers" prerender />
        <Route path="/jobpost" page={CareerJobPostPage} name="jobpost" prerender />
        <Route path="/job-detail/{id:Int}" page={JobPostDetailPage} name="job_detail" />
        <Route path="/jobapply" page={JobApplyPage} name="jobapply" prerender />

        <Route path="/validation" page={ValidationPage} name="jobapply" />
      </Set>
      <Route notfound page={NotFoundPage} prerender />
    </Router>
  )
}

export default Routes
