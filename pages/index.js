import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';


export default function Home() {

  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Define the hook

  function questionHandler(event) {
    event.preventDefault();
    const question = {
      location: event.target.location.value,
      min: event.target.min.value,
      max: event.target.max.value,
      avg: event.target.avg.value,
    }

    setAnsweredQuestions([...answeredQuestions, question]); // Push the new question to the previous state
    // setReply(randomReply); // set the state of the hook

  }


  return (
    <div className="font-serif">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" font-serif flex justify-between bg-green-500 text-gray-100 p-3.5 items-center">
        <h1 className="text-4xl text-black">Cookie Stand Admin</h1>
      </header>

      <main className=' font-serif '>
        <div id='big_container' className='bg-green-400 flex-col flex w-10/12 my-10 p-4  m-auto rounded-md '>
          <h2 className='text-center font-semibold text-2xl' >Create Cookie Stands</h2>
          <br></br>
          <form onSubmit={questionHandler}>
            <div className='p-9  mb-4'>
              <label className='font-medium'>Location </label>
              <input className=' b-5 w-11/12 bg-gray-200 rounded-md' name='location' required />
            </div>
            <div id='bottom_container' className='flex flex-row mx-auto -space-x-1'>
              <div className='w-1/4'>
                <label className=' b-5 font-medium'>Minimum Customers per Hour</label>
                <input name='min' type='number' className='rounded-md b-5 w-10/12' required />
              </div>
              <div className='w-1/4'>
                <label className='font-medium'>Maximum Customers per Hour</label>
                <input name='max' type='number' className=' b-5 rounded-md w-10/12' required />
              </div>
              <div className='w-1/4'>
                <label className='font-medium'>Average Cookies per Sale</label>
                <input name='avg' type='float' className=' b-5 rounded-md w-10/12' required />
              </div>
              <button className='w-1/6 h-14 bg-green-700 b-5 '>Create</button>
            </div>
          </form>
        </div>
        <p className='text-center text-gray-700 font-semibold '>Report Table Coming Soon...
          <br></br>
          <Link href="/Reports" className="items-center hover:bg-green-700 ">
            <a className="text-green-500 hover:bg-green-700 text-black  items-center mb-20">Reports</a>
          </Link>
          <div>
            {
              answeredQuestions.map(item => {
                return (

                  //  <h3> 'location' : {item.location} , 'minCustomrs' : {item.min},  'maxCustomrs' :  {item.max} ,  'AvgCustomrs' : {item.avg} </h3>
                  <h2 className="text-center">{JSON.stringify(item)}</h2>
                )
              })
            }
          </div>
        </p>
      </main>
      <div className="p-20"></div>
      <footer className=" text-black font-serif flex justify-between bg-green-500  p-2 items-center mb-3 pb-3.5">
        ©2021


      </footer>
    </div>
  )
}