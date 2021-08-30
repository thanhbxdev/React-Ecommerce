import React from 'react'
import BlogSliderbarComponent from './BlogSliderbar.component'
import BlogContentComponent from './BlogContent.component'

function BlogAreaComponent() {
  return (
    <div className="blog-page-area">
      <div className="container">
        <div className="row">
          <BlogSliderbarComponent />
          <BlogContentComponent />
        </div>
      </div>
    </div>
  )
}
export default BlogAreaComponent
