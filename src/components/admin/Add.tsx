import Image from 'next/image'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Option = {
  title: string;
  additionalPrice: number;
};

const Add = () => {



      const [title,setTtile]=useState('')
      const [desc,setDesc]=useState('')
      const [price,setPrice]=useState(0)
      const [option, setOption] = useState<Option>({
        title: "",
        additionalPrice: 0,
      });
      const [isFeatured,setFeature]=useState(false)
      const [options, setOptions] = useState<Option[]>([]);
      const [CatSlug,setCategory]=useState('pizzas')
      const [img,setImage]=useState('')


        const changeImage=(e: React.ChangeEvent<HTMLInputElement>)=>{

          if(e.target.files){
          const image = e.target.files[0]
          const reader = new FileReader()

          reader.addEventListener('load',()=>{
            setImage(String(reader.result))

          })
          reader.readAsDataURL(image)
          }
            
        }



        const refreshForm=()=>{
          setTtile('')
          setDesc('')
          setImage('')
          setFeature(false)
          setOption({title: "",
          additionalPrice: 0,})
          setOptions([])
        }

      const changeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOption((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };


        const handleSubmit=async()=>{

           
            
          try{
          const res = await fetch(`${process.env.API_URL}/api/products`, {
        method: "POST",
        body: JSON.stringify({
            title,
            desc,price,options,CatSlug,isFeatured,
            img
        }),
      });

      toast.success('Product created!')
      const data = await res.json();
      refreshForm()
     
    } catch (err) {
      console.log(err);
    }
      }



  return (
    
    <div className='flex flex-col items-center gap-4'>
        <h1 className='text-yellow-600 font-bold text-2xl'>Add a Porduct</h1>
      <form className='flex flex-col overflow-y-scroll w-full h-[calc(100vh-8rem)] px-5 '>

          <div className='flex flex-col gap-4 p-5'>
            <label className='text-yellow-600  font-bold'>title</label>
            <input 
            className='p-2 border border-gray-400'
            type="text" 
            onChange={(e)=>setTtile(e.target.value)}
            value={title}/>
            
          </div>


          <div className='flex flex-col gap-4 p-5'>
            <label className='text-yellow-600  font-bold'>description</label>
            <input 
            className='p-2 border border-gray-400'
            type="text" 
            onChange={(e)=>setDesc(e.target.value)}
            value={desc}/>
          </div>


          <div className='flex flex-col gap-4 p-5'>
            <label className='text-yellow-600  font-bold'>price</label>
            <input 
            className='p-2 border border-gray-400'
            type="number" 
            onChange={(e)=>setPrice(Number(e.target.value))
              
            }
            value={price}/>
            
          </div>


          <div className=" p-5 flex flex-col gap-4">
          <label className="text-yellow-600 font-bold">Options</label>
          <div className="flex flex-col gap-3">
            <input
              className="ring-1 ring-gray-400 p-4 rounded-sm placeholder:text-gray-400 outline-none"
              type="text"
              placeholder="Title"
              name="title"
              onChange={changeOption}
              value={option.title}
              
              
            />
            <input
              className="ring-1 ring-gray-400 p-2 rounded-sm placeholder:text-gray-400 outline-none "
              type="number"
              placeholder="Additional Price"
              name="additionalPrice"
              onChange={changeOption}
              value={option.additionalPrice}
            />
            <button
              className="bg-gray-500 p-2 text-white"
              onClick={() => setOptions((prev) => [...prev, option])}
              type='button'
            >
              Add Option
            </button>
          </div>
           <div className="flex flex-wrap gap-4 mt-2">
            {options.map((opt) => (
              <div
                key={opt.title}
                className="p-2  rounded-md cursor-pointer bg-gray-200 text-gray-400"
                onClick={() =>
                  setOptions((prev) =>
                    prev.filter((item) => item.title !== opt.title)
                  )
                }
              >
                <span>{opt.title}</span>
                <span className="text-xs"> (+ ${opt.additionalPrice})</span>
              </div>
            ))}
          </div>
          </div>

          <div className="w-full flex flex-col gap-2 p-5">
          <label
            className="text-sm cursor-pointer flex gap-4 items-center"
            htmlFor="file"
          >
            <Image src="/upload.png" alt="" width={30} height={20} />
            <span className='text-red-600 font-bold'>Upload Image</span>
          </label>
          <input
            type="file"
            onChange={changeImage}
            id="file"
            className="hidden"
            
          />
        </div>

        <div className='flex flex-col gap-4 p-5'>
            <label className='text-yellow-600  font-bold'>Featured?</label>
            <select  className='text-gray-500 font-bold p-2' onChange={(e)=>setFeature(Boolean(e.target.value))} >
              <option  value="true" selected>false</option>
              <option  value="false">true</option>
              
            </select>
          </div>


          <div className='flex flex-col gap-4 p-5'>
            <label className='text-yellow-600  font-bold'>Category</label>
            <select  className='text-gray-500 font-bold p-2' onChange={(e)=>setCategory(e.target.value)} >
              <option  value="pizzas" selected>pizzas</option>
              <option  value="burgers">burgers</option>
              <option  value="pastas">pastas</option>
            </select>
          </div>

          <button type='button'
          className='p-2 rounded-md bg-yellow-600 hover:opacity-80 text-white my-5 '
          onClick={handleSubmit}
          >
              Upload
          </button>
          <ToastContainer/>
      </form>
    </div>
  )
}

export default Add
