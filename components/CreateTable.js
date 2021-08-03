import React from 'react'
import { If, Then, Else } from 'react-if'
import { hours } from '../data.js';
function CreateTable(props) {
  return (
    <div className='flex justify-center font-serif '>
      <If condition={props.locations.length}>
        <Then>
          <table className=' m-7  mx-auto   text-center  bg-green-200 '>

            <thead className='bg-green-600 text-center rounded-md '>
              <th className="rounded-md ">Location</th>
              {
                hours.map(element => {
                  return (
                    <th className=' px-2 py-1 text-center rounded-md '>{element}</th>
                  )
                })
              }
              <th className="rounded-md">Totals</th>
            </thead>
            {
              props.locations.map((location, idx) => {
                if (idx % 2 == 0) {
                  return (
                    <tr className='bg-green-400 border-b  text-center border-black '>
                      <td className='px-10 py-3 text-center '>{location.location}</td>
                      {
                        location.stand.map(val => {
                          return (
                            <td className='px-4 py-3 text-center'>{val}</td>
                          )
                        })
                      }
                    </tr>
                  )
                }
                else {
                  return (
                    <tr className='bg-green-300 border-b border-gray-50 text-center border-black'>
                      <td className='px-4 py-3 text-center text-bold '>{location.location}</td>
                      {
                        location.stand.map(val => {
                          return (
                            <td className='text-center '>{val}</td>
                          )
                        })
                      }

                    </tr>
                  )
                }
              })
            }
            <tr className='   text-center bg-green-600 '>
              <th className='px-2 py-1 text-center '>Totals</th>
              {
                props.total.map(value => {
                  return (
                    <th className='px-2 py-1 text-center '>{value}</th>
                  )
                })
              }
            </tr>
          </table>
        </Then>
        <Else>
          <h1 className='text-center font-bold text-3xl  text-black-900'>No Cookie Stands Available! 🙂</h1>
        </Else>
      </If>
    </div>
  )
}

export default CreateTable