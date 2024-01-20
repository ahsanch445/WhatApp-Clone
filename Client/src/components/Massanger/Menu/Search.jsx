import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Search = () => {
  return (
    <div className='h-12 w-full bg-white'>
    <div  className=' flex justify-center    '>
     
<div className="mt-2  bg-[#F0F2F5] flex items-center w-[90%] h-9 border border-gray-300 rounded-lg p-2">
    <SearchIcon/>
    <input type="text" placeholder="Search or start new chat" className=" text-sm flex-grow outline-none bg-transparent px-4" />

</div>

    </div>
    </div>
  )
}

export default Search
