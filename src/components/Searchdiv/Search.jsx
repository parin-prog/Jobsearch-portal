import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Search = () => {
  const [jobSearch, setJobSearch] = useState("")
  const [city, setCity] = useState("")
  const [location, setLocation] = useState("")
  const [sort, setSort] = useState("")
  const [type, setType] = useState("")
  const [level, setLevel] = useState("")

  const handleChange = (e, type) => {
    switch (type) {
      case "jobsearch":
        setJobSearch(e.target.value);
        break;

      case "city":
        setCity(e.target.value);
        break;

      case "location":
        setLocation(e.target.value);
        break;

        case "sort":
        setSort(e.target.value);
        break;

      case "type":
        setType(e.target.value);
        break;

      case "level":
        setLevel(e.target.value);
        break;

      default:
        break;
    }
  }

  const clearText = (type) => {
    switch (type) {
      case "jobsearch":
        setJobSearch("");

      case "city":
        setCity("");

      case "location":
        setLocation("");

      default:
        break;
    }
  }

  return (
    <div className='searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
      <form action=''>
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-
        [10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>

          <div className='flex gap-2 items-center'>
            <SearchOutlinedIcon className='text-[25px] icon' />
            <input type='text' value={jobSearch} onChange={(e) => handleChange(e, "jobsearch")} className='bg-transparent text-blue-500
              focus:outline-none w-[100%]' placeholder='Search jobs here....' />
            <CancelOutlinedIcon className='text-[30px] text-[#a5a6a6] 
                hover:text-textColor icon' onClick={() => clearText("jobsearch")} />
          </div>

          <div className='flex gap-2 items-center'>
            <HomeOutlinedIcon className='text-[25px] icon' />
            <input type='text' value={city} onChange={(e) => handleChange(e, "city")} className='bg-transparent text-blue-500
              focus:outline-none w-[100%]' placeholder='Search by city here....' />
            <CancelOutlinedIcon className='text-[30px] text-[#a5a6a6] 
                hover:text-textColor icon' onClick={() => clearText("jobsearch")} />
          </div>

          <div className='flex gap-2 items-center'>
            <LocationOnOutlinedIcon className='text-[25px] icon' />
            <input type='text' value={location} onChange={(e) => handleChange(e, "location")} className='bg-transparent text-blue-500
              focus:outline-none w-[100%]' placeholder='Search by location here....' />
            <CancelOutlinedIcon className='text-[30px] text-[#a5a6a6] 
                hover:text-textColor icon' onClick={() => clearText("jobsearch")} />
          </div>
          <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white
            cursor-pointer hover:bg-blue-400'>Search</button>

        </div>
      </form>

      <div className='secDiv flex items-center gap-10 justify-center mt-6'>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor='relevance' className='text-[#808080] font-semibold'>
            Sort by: </label>

          <select name="" id='relevance' onChange={(e) => handleChange(e, "sort")} className='bg-white rounded-[3px] px-4 py-1'>
            <option value="relevance" default>Relevance</option>
            <option value="inclusive">Inclusive</option>
            <option value="start-with">Starts with</option>
            <option value="contains">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor='type' className='text-[#808080] font-semibold'>
            Type: </label>

          <select name="" id='type' onChange={(e) => handleChange(e, "type")} className='bg-white rounded-[3px] px-4 py-1'>
            <option value="full-time" default>Full-time</option>
            <option value="remote">Remote</option>
            <option value="contract">Contract</option>
            <option value="part-time">Part-time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor='level' className='text-[#808080] font-semibold'>
            Level: </label>

          <select name="" id='level' onChange={(e) => handleChange(e, "level")} className='bg-white rounded-[3px] px-4 py-1'>
            <option value="senior" default>Senior</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advocate">Advocate</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Clear All</span>

      </div>
    </div>
  )
}

export default Search