import Link from 'next/link'
export default function Header(props) {
  return (


    <header className=" font-serif flex justify-between bg-green-500 text-gray-100 p-3.5 items-center">
      <h1 className="text-4xl text-black">Cookie Stand Admin</h1>
      <Link href="/overview" className="  ">
        <a className=" font-serif p-1 bg-green-100 rounded-md w-1/7  hover:bg-green-700 text-black  items-left ">OverView</a>
      </Link>
    </header>

  );
}
