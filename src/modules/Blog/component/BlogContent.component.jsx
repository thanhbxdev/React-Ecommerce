import React from 'react'
import image from '../../../assets/images/banner/shop-sidebar.jpg'
function BlogContentComponent() {
  return (
    <div className="col-xs-12 col-md-4 px-5">
      <div className="blog_sidebar">
        <div className="row_products_side">
          <div className="product_left_sidbar">
            <div className="product-filter  mb-30">
              <h5>Search </h5>
              <div className="search__sidbar">
                <div className="input_form">
                  <input
                    type="text"
                    id="search_input"
                    name="s"
                    defaultValue="Search..."
                    className="input_text"
                  />
                  <button
                    id="blogsearchsubmit"
                    type="submit"
                    className="button"
                  >
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
            <div className="product-filter  mb-30">
              <h5>Blog Archives </h5>
              <div className="blog_Archives__sidbar">
                <ul>
                  <li>
                    <a href="#">March 2015</a>&nbsp;(1)
                  </li>
                  <li>
                    <a href="#">December 2014</a>&nbsp;(3)
                  </li>
                  <li>
                    <a href="#">November 2014</a>&nbsp;(4)
                  </li>
                  <li>
                    <a href="#">September 2014</a>&nbsp;(1)
                  </li>
                  <li>
                    <a href="#">August 2014</a>&nbsp;(1)
                  </li>
                </ul>
              </div>
            </div>
            <div className="product-filter  mb-30">
              <h5>Recent Posts</h5>
              <div className="blog_Archives__sidbar">
                <ul>
                  <li>
                    {' '}
                    <a href="#">Blog image post</a>&nbsp;(1)
                  </li>
                  <li>
                    {' '}
                    <a href="#">Post with Gallery</a>&nbsp;(3)
                  </li>
                  <li>
                    <a href="#">Post with Audio</a>&nbsp;(4)
                  </li>
                  <li>
                    <a href="#">Post with Video</a>&nbsp;(1)
                  </li>
                  <li>
                    <a href="#">Post with Text</a>&nbsp;(1)
                  </li>
                </ul>
              </div>
            </div>
            <div className="sidebar-single-banner">
              <a href="#">
                <img src={image} alt="Banner" />
              </a>
            </div>
            <div className="product-filter mb-30">
              <h5>product tags</h5>
              <div className="blog-tags">
                <a href="#">brand</a>
                <a href="#">black</a>
                <a href="#">white</a>
                <a href="#">chire</a>
                <a href="#">table</a>
                <a href="#">Lorem</a>
                <a href="#">ipsum</a>
                <a href="#">dolor</a>
                <a href="#">sit</a>
                <a href="#">amet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogContentComponent
