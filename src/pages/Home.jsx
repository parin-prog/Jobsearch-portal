import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Search from '../components/Searchdiv/Search'
import Job from '../components/Jobdiv/Job'
import Value from '../components/Valuediv/Value'
import Footer from '../components/Footerdiv/Footer'
import { data } from '../data/data'

const Home = () => {

  const [job, setJob] = useState(data);
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar />
      <Search />
      <div className='jobContainer flex gap-10 flex-wrap items-center py-10'>
        {job.map((item) => (
          <Job key={item.id} item={item} />
        ))}
      </div>
      <Value />
      <Footer />
    </div>

  )
}

export default Home