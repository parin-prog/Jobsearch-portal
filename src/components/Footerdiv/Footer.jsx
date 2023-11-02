import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid
      grid-cols-5 m-auto items-start justify-center'>
      <div>
        <div className="logoDiv ">
          <h1 className='logo text-[25px] text-white pb-[1.5rem]'>
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          We always make our seekers and companies find the best jobs and employers find
          the best candidates.
        </p>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Company
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>About Us</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feaures</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>News</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>FAQ</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Resources
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Account</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Supporrt Center</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Feedback</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Contact Us</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Support
        </span>
        <div className='grid gap-3'>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Events</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Promo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Req Demo</li>
          <li className='text-white opacity-[.7] hover:opacity-[1]'>Careers</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Contact Info
        </span>
        <div>
          <small className='text-[14px] text-white'>jobSearch@outlook.com</small>
          <div className='icons flex gap-4 py-[1rem]'>
            <InstagramIcon className='bg-white h-[35px] w-[35px] rounded-full icon
              text-blueColor'/>
            <FacebookIcon className='bg-white h-[35px] w-[35px] rounded-full icon
              text-blueColor'/>
            <TwitterIcon className='bg-white text-xl h-[35px] w-[35px] rounded-full icon
              text-blueColor '/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer