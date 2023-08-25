import CategoryDisplay from "@/components/adminBackup/CategoryDisplay";
import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (category:string)=>{
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`,{
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("Failed!");
    
  }

  return res.json()
}

type Props = {
  params:{category:string}
}

const CategoryPage = async ({params}:Props) => {

  const products:ProductType[] = await getData(params.category)
  return (
    
    <div>
      <div className='bg-red-500 w-full h-8 text-white flex items-center justify-center py-5'>Admins Dashboard</div>
        <CategoryDisplay products={products}/>
    </div>
  );
};

export default CategoryPage;