import React from 'react'
import image from '../../../assets/images/blog/blog5.jpg'
import image1 from '../../../assets/images/blog/blog2.jpg'
import image2 from '../../../assets/images/blog/blog3.jpg'
import image3 from '../../../assets/images/blog/blog1.jpg'

function BlogSingleComponent() {
  return (
    <div className="page-content blog-page blog-sidebar right-sidebar blog-text-align row">
      <div className="col-md-6">
        <article className="text-center">
          <div className="blog-entry-header">
            <h1>
              <a href="single-blog.html">Blog image post</a>
            </h1>
            <div className="post-meta">
              <a href="#" className="post-author">
                <i className="fa fa-user" />
                Posted by admin
              </a>
              <a href="#" className="post-date">
                <i className="fa fa-calendar" /> March 10, 2018{' '}
              </a>
            </div>
          </div>
          <div className="post-thumbnail">
            <a href="single-blog.html">
              <img src={image1} alt="bege blog images" />
            </a>
          </div>
          <div className="postinfo-wrapper">
            <p className="text-sm">
              Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium
              arcu ex. Aenean posuere libero eu augue condimentum rhoncus.
              Praesent ornare tortor Donec vitae hendrerit arcu, sit amet
              faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu
              augue condimentum rhoncus. Praesent ornare tortor
            </p>
            <a className="readmore button" href="single-blog.html">
              Read more
            </a>
          </div>
        </article>
      </div>
      <div className="col-md-6">
        <article className="text-center">
          <div className="blog-entry-header">
            <h1>
              <a href="single-blog.html">Blog image post</a>
            </h1>
            <div className="post-meta">
              <a href="#" className="post-author">
                <i className="fa fa-user" />
                Posted by admin
              </a>
              <a href="#" className="post-date">
                <i className="fa fa-calendar" /> March 10, 2018{' '}
              </a>
            </div>
          </div>
          <div className="post-thumbnail">
            <a href="single-blog.html">
              <img src={image2} alt="bege blog images" />
            </a>
          </div>
          <div className="postinfo-wrapper">
            <p className="text-sm">
              Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium
              arcu ex. Aenean posuere libero eu augue condimentum rhoncus.
              Praesent ornare tortor Donec vitae hendrerit arcu, sit amet
              faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu
              augue condimentum rhoncus. Praesent ornare tortor
            </p>
            <a className="readmore button" href="single-blog.html">
              Read more
            </a>
          </div>
        </article>
      </div>
      <div className="col-md-6">
        <article className="text-center">
          <div className="blog-entry-header">
            <h1>
              <a href="single-blog.html">Blog image post</a>
            </h1>
            <div className="post-meta">
              <a href="#" className="post-author">
                <i className="fa fa-user" />
                Posted by admin
              </a>
              <a href="#" className="post-date">
                <i className="fa fa-calendar" /> March 10, 2018{' '}
              </a>
            </div>
          </div>
          <div className="post-thumbnail">
            <a href="single-blog.html">
              <img src={image} alt="bege blog images" />
            </a>
          </div>
          <div className="postinfo-wrapper">
            <p className="text-sm">
              Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium
              arcu ex. Aenean posuere libero eu augue condimentum rhoncus.
              Praesent ornare tortor Donec vitae hendrerit arcu, sit amet
              faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu
              augue condimentum rhoncus. Praesent ornare tortor
            </p>
            <a className="readmore button" href="single-blog.html">
              Read more
            </a>
          </div>
        </article>
      </div>
      <div className="col-md-6">
        <article className="text-center">
          <div className="blog-entry-header">
            <h1>
              <a href="single-blog.html">Blog image post</a>
            </h1>
            <div className="post-meta">
              <a href="#" className="post-author">
                <i className="fa fa-user" />
                Posted by admin
              </a>
              <a href="#" className="post-date">
                <i className="fa fa-calendar" /> March 10, 2018{' '}
              </a>
            </div>
          </div>
          <div className="post-thumbnail">
            <a href="single-blog.html">
              <img src={image3} alt="bege blog images" />
            </a>
          </div>
          <div className="postinfo-wrapper">
            <p className="text-sm">
              Donec vitae hendrerit arcu, sit amet faucibus nisl. Cras pretium
              arcu ex. Aenean posuere libero eu augue condimentum rhoncus.
              Praesent ornare tortor Donec vitae hendrerit arcu, sit amet
              faucibus nisl. Cras pretium arcu ex. Aenean posuere libero eu
              augue condimentum rhoncus. Praesent ornare tortor
            </p>
            <a className="readmore button" href="single-blog.html">
              Read more
            </a>
          </div>
        </article>
      </div>
    </div>
  )
}
export default BlogSingleComponent
