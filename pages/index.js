import Head from 'next/head'
import { useState } from 'react';
import {hours} from '../data.js';


import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import QuestionsForm from '../components/QuestionsForm.js';
import QuestionsTable from '../components/QuestionsTable.js';
import CreateTable from '../components/CreateTable.js';

export default function Home() {
  
  function questionHandler(event){
    event.preventDefault()
    let cookies = {
      location: event.target.location.value,
    }
    let min = Math.floor(event.target.min.value);
    let max = Math.floor(event.target.max.value);
    let avg = event.target.avg.value
    let hour = []
    let sum = 0
    for (let i=0; i<=13; i++){
      let val = Math.floor((Math.random() * (max - min + 1) + min)*avg)
      hour.push(val)
      sum+=val
    }
    hour.push(sum)
    cookies['stand'] = hour
    document.querySelectorAll('input').forEach(element=>{
      element.value = ''
    })
    setLocations([...locations, cookies])
    SetTotal(total.map(function (value, index) {
      return value + hour[index];
    }))
  }
  
  const [answeredQuestions] = useState([]); 
  
  const [locations, setLocations] = useState([])
  const [total, SetTotal] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
  
  return (
    <div className="font-serif">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header answers={answeredQuestions} title={'Cookie Stand Admin'}/>

      <main className=' font-serif '>

        <div id='big_container' className='bg-green-400 flex-col flex w-10/12 my-10 p-4  m-auto rounded-md '>
          <h2 className='text-center font-semibold text-2xl' >Create Cookie Stands</h2>
          <br></br>
          
          <QuestionsForm questionHandler={questionHandler}/>

        
        </div>
       
       
        <QuestionsTable answeredQuestions={answeredQuestions}/>
        
        <CreateTable locations={locations} total={total}  />
      
      
      </main>
      
      <Footer answers={answeredQuestions} title={'Cookie Stand Admin'}/>
    </div>
  )
}