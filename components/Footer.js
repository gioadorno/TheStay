import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How TheStay works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>TheStay Plux</p>
            <p>TheStay Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is a showcase site</p>
            <p>Very awesome</p>
            <p>Love it</p>
            <p>Luxury</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>TheStay is awesome</p>
            <p>Find a place</p>
            <p>Hosting starts here</p>
            <p>Hosting ends here</p>
            <p>Join now</p>
        </div>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Center</p>
            <p>Trust & Safety</p>
            <p>Contact us</p>
            <p>FAQs</p>
            <p>We are here to help</p>
        </div>
    </div>
  )
}

export default Footer