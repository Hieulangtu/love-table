import React, { Fragment } from 'react'
import Navbar from './Navbar'

/**
PageIntroduction: 
* simple page to introduce the web
* @component
*/
const PageIntroduction = () => {
  return (
    <Fragment>
        <Navbar/>

        <div>
            <h1>Introduction</h1><br></br>
            <p>A website to help teachers manage their subjects</p>
        </div>
    </Fragment>
  )
}

export default PageIntroduction