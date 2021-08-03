import Link from 'next/link'
export default function QuestionsTable(props) {
    return (
        <p className='text-center text-gray-700 font-semibold '>Report Table Coming Soon...
            <br></br>
            <Link href="/Reports" className="items-center hover:bg-green-700 ">
                <a className="text-green-500 hover:bg-green-700 text-black  items-center mb-20">Reports</a>
            </Link>


            <div>
                {
                    props.answeredQuestions.map(item => {
                        return (

                            //  <h3> 'location' : {item.location} , 'minCustomrs' : {item.min},  'maxCustomrs' :  {item.max} ,  'AvgCustomrs' : {item.avg} </h3>
                            <h2 className="text-center">{JSON.stringify(item)}</h2>
                        )
                    })
                }
            </div>
            <div className="p-20"></div>
        </p>
    );
}