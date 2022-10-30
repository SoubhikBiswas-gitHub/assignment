import React from 'react'
import EmptyWindow from '../component/emptyWindow/EmptyWindow'
import ExperiencePage from '../component/ExperiencePage/ExperiencePage'
import MobileScroll from '../component/mobileScroll/MobileScroll'
import SecurityPage from '../component/Security/SecurityPage'





const Homepage = () => {
  return (
    <>
    <ExperiencePage/>
    <MobileScroll/>
    <div className="non-mob">
    <EmptyWindow/>
    </div>
    <SecurityPage/>
    </>
  )
}

export default Homepage