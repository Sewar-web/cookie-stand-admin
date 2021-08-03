
export default function QuestionsForm(props) {
  return (
    <form onSubmit={props.questionHandler}>
      <div className='p-9  mb-4'>
        <label className='font-serif '>Location </label>
        <input className=' b-5 w-11/12 bg-gray-100 rounded-md' name='location' required />
      </div>
      <div id='bottom_container' className='flex flex-row mx-auto -space-x-1'>
        <div className='w-1/4  '>
          <label className=' b-5 font-serif '>Minimum Customers per Hour</label>
          <input name='min' type='number' className='rounded-md b-5 w-10/12' required />
        </div>
        <div className='w-1/4'>
          <label className='font-serif'>Maximum Customers per Hour</label>
          <input name='max' type='number' className=' b-5 rounded-md w-10/12' required />
        </div>
        <div className='w-1/4'>
          <label className='font-serif'>Average Cookies per Sale</label>
          <input name='avg' type='float' className=' b-5 rounded-md w-10/12' required />
        </div>
        <button className='w-1/6 h-14 bg-green-700 b-5  text-bold'>Create</button>
      </div>
    </form>
  );
}