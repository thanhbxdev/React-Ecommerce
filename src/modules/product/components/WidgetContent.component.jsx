import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function WidgetContentComponent({ categories, onSelect }) {
  const handle = (id) => {
    onSelect(id)
  }
  return (
    <div className="widget-content">
      <ul className="product-categories">
        <li>
          <button
            onClick={() => {
              handle()
            }}
            style={{
              backgroundColor: 'white',
              border: 'none',
              outline: 'none'
            }}
          >
            All
          </button>
        </li>
        {categories.map((cate, index) => (
          <li className="cat-item" key={index}>
            <button
              onClick={() => {
                handle(cate._id)
              }}
              style={{
                backgroundColor: 'white',
                border: 'none',
                outline: 'none'
              }}
            >
              {cate.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
WidgetContentComponent.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default WidgetContentComponent
