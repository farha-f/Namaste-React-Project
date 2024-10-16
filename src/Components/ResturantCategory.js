
import { useState } from 'react';
import ItemList from './ItemList';

const ResturantCatergory = ({info, showItem,setShowIndex}) => {

  const handleClick=()=>{
    setShowIndex();
  }

  return <div>
    <div className='w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 '>
      <div className='flex justify-between cursor-pointer ' onClick={handleClick}>
        <span className='font-bold text-lg'>{info?.title}({info?.itemCards?.length})</span>
        <span>🔽</span>
      </div>

       {showItem && <ItemList data={info?.itemCards} />}
    </div>


  </div>

}
export default ResturantCatergory;

