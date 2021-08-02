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
    <div className="">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className=" font-serif flex justify-between bg-green-500 text-gray-100 p-3.5 items-center">
        <h1 className="text-4xl text-black">Cookie Stand Admin</h1>
      </header>


      <main className="">
        <form className=" justify-items-center font-serif bg-green-300 text-black flex  bg-gray-200 mx-auto my-4 p-10 mt-8 rounded-2xl w-3/4 " onSubmit={questionHandler}>
          <h2 className="   -my-7 text-right text-xl ">create cookies stand </h2>

          <div className=" w-3/4  mx-auto my-4   ">
            <label className="">Location    <input className="flex-auto p-1  rounded-md b-5" type="text" name="location" placeholder="location" /> </label>
            <br></br>
            <br></br>

            <label>Minimum Customers per Hour    <input className="flex-auto p-1  rounded-md b-5" type="number" name="min" placeholder="Minimum Customers per Hour" /></label>
            <br></br>
            <br></br>
            <label>Maximum Customers per Hour    <input className="flex-auto p-1 rounded-md b-5" type="number" name="max" placeholder="Maximum Customers per Hour" /></label>
            <br></br>
            <br></br>
            <label>Averge Cookies per sale    <input className="flex-auto p-1  rounded-md b-5" type="number" step="0.01" name="avg" placeholder="Averge Cookies per sale" /></label>
            <br></br>
            <br></br>
            <button className="p-2 bg-green-700 rounded-md  w-44 -mx-0.5">Create</button>
          </div>

        </form>

        <p className="text-black  text-center mb-20">Report Table Coming Soon ...
          <br></br>
          <Link href="/Reports" className="items-center hover:bg-green-700">
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


      <footer className=" text-black font-serif flex justify-between bg-green-500 text-gray-100 p-2 items-center">
        ©2021


      </footer>
    </div>
  )
}
