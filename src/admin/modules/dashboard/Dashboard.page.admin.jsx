import React from 'react'
import MasterLayoutAdmin from '../../layout/Master.layout.admin'
import HeaderAdminComponent from './component/Header.admin.component'
import ContentAdminComponent from './component/Content.admin.component'

function DashboardPageAdmin(props) {
  return (
    <MasterLayoutAdmin>
      <div className="content-wrapper">
        <HeaderAdminComponent />
        <ContentAdminComponent />
      </div>
    </MasterLayoutAdmin>
  )
}

export default DashboardPageAdmin
