import Link from 'next/link'

export default function overview() {
    return (

        <div>
            <h1>Coming Soon...</h1>

            <Link href="/" className="text-center hover:bg-green-700 mt-20">
              <a className="text-green-500 font-serif  hover:bg-green-700 text-black  items-center mb-20">Home</a>
           </Link>
        </div>
    )
}