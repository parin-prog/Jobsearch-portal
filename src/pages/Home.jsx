import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Searchdiv/Search'
import Job from '../components/Jobdiv/Job'
import Value from '../components/Valuediv/Value'
import Footer from '../components/Footerdiv/Footer'

const Home = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  )
}

export default Home