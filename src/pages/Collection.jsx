import React, { useContext , useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Ttitle';
import ProductItetm from '../components/ProductItetm';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter , setShowFilters] = useState(false);

  const [fileterProducts , setFilterProducts] = useState([])

  const [category , setCategory] = useState([]);
  const [subCategory , setSubcategory] = useState([]);

  const [sortType , setSortType] = useState(['relevant'])
  
  
  const toggleCategory =(event)=>{
          if(category.includes(event.target.value)){
                setCategory(prev=>prev.filter(item => item !== event.target.value))
          }else{
            setCategory( prev=> [...prev, event.target.value ])
          }
  }


  const toggleSubCategory=(event)=>{
    if(subCategory.includes(event.target.value)){
      setSubcategory(prev=> prev.filter(item => item!== event.target.value))
    }else{
      setSubcategory(prev=>[...prev, event.target.value])
    }
  }



  const applyFilter = () =>{
    let productsCopy = products.slice();

    if(category.length >0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if(subCategory.length >0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory)); 

    }
    setFilterProducts(productsCopy)
  }

  useEffect(()=>{
      applyFilter()
  },[category , subCategory])


  const sortProduct = () => {
    let fpCopy = fileterProducts.slice();
    switch (sortType){
        case 'low-high':
          setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
          break;

        case 'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;

        default:
          applyFilter();
          break
    }
  }

  useEffect(()=>{
      sortProduct()
  },[sortType] )

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* filter options */}
      <div className='min-w-[240px]'>
        <p 
          onClick={() => setShowFilters(!showFilter)} 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img 
            src={assets.dropdown_icon} 
            className={`h-3 sm:hidden transition-transform duration-200 ${showFilter ? 'rotate-90' : ''}`} 
            alt="" 
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Men'} onChange={toggleCategory} /> Men</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Women'} onChange={toggleCategory} /> Women</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCategory} /> Kids</p>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Topwear'} onChange={toggleSubCategory} /> Topwear</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear</p>
            <p className='flex gap-2'><input type="checkbox" className='w-3' value={'Winterwear'} onChange={toggleSubCategory} /> Winterwear</p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-gray-700 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>



            {/* map products */}

            <div className='grid grid-cols-2 md:grid-cols-3 lggrid-cols-4 gap-4 gap-6'>
                    {
                      fileterProducts.map((item, index)=>(
                        <ProductItetm key={index} 
                        name={item.name} 
                        id={item.id}
                        price={item.price}
                        image= {item.image} 
                        />
                      ))
                    }
            </div>
      </div>
    </div>
  )
}

export default Collection
