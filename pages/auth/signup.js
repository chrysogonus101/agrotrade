import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { TextField, } from "@mui/material";
import { FcGoogle} from "react-icons/fc"
import { FaApple } from "react-icons/fa"

export default function Signup () {
  const [tab,setTab] = useState('buyer')
  return (
    <>
    <Head >
     <title>Signup | AgroTrade</title>
    </Head>

    <main className=" h-screen flex justify-center items-center py-20 px-3 md:px-0">
      <div className="w-full md:w-[420px] flex flex-col gap-3 border border-grey-300 rounded-md p-3">
        <Image className="rounded-t-md" width={400} 
        height={200} src='/farm-trade.jpg' alt='farm trade'/>
        
        <div className="flex flex-col gap-5 md:gap-3">
          <ul className="grid grid-cols-2">
            <li className={`text-center font-bold pb-3 cursor-pointer ${tab == 'Farmer' ? styles.tabColor : null}`} onClick={() => setTab('Farmer')}>Farmer</li>
            <li  className={`text-center font-bold pb-3 cursor-pointer ${tab == 'Buyer' ? styles.tabColor : null}`} onClick={() => setTab('Buyer')}>Buyer</li>
          </ul>

          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">{`Register a ${tab} account`}</h2>
            <p className=" text-xstext-green-600">{`Fill the form below to create a ${tab}'s account`}</p>
          </div>

          <form >
            <div className="mb-2">
            <TextField className="w-full" variant="outlined" label="first name"/>
            </div>

            <div className="mb-2">
            <TextField className="w-full" variant="outlined" label="last name"/>
            </div>

            <div className="mb-2">
            <TextField className="w-full" type="email" variant="outlined" label="email"/>
            </div>

            {tab == 'Farmer'
              ? <div className="mb-2">
                 <TextField className="w-full" variant="outlined" label="Company name"/>
              </div> 
              : null}

          

            <button className="h-[48px] w-full flex justify-center items-center bg-green-700 text-white text-xl rounded-md">Register</button>
          </form>

          {/* OR seperator */}
          <div className="separator"> <span className='text-gray-400 my-3'>OR</span> </div>

          {/* Social signup */}

          <div className="flex flex-col gap-3">
            <button className="h-[48px] flex justify-center items-center border border-slate-400 rounded-md text-slate-900">
             <FcGoogle className="text-3xl mr-2"/> Sign Up with Google</button>

             <button className="h-[48px] flex justify-center items-center border border-slate-400 rounded-md text-slate-900">
             <FaApple className="text-3xl mr-2"/> Sign Up with Apple</button>
          </div>

        </div>
      </div>
    </main>
    </>
  )
}

const styles = {
  tabColor: 'border-b-4 border-green-600 cursor-pointer '
}