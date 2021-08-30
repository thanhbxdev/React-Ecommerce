import React from 'react'

function PaginationComponent() {
  return (
    <nav className="woocommerce-pagination">
      <ul className="page-numbers">
        <li>
          <span aria-current="page" className="page-numbers current">
            1
          </span>
        </li>
        <li>
          <a className="page-numbers" href="#">
            2
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            3
          </a>
        </li>
        <li>
          <a className="page-numbers" href="#">
            4
          </a>
        </li>
        <li>
          <a className="next page-numbers" href="#">
            →
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default PaginationComponent
