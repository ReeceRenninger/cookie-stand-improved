import Link from 'next/link';
import Image from 'next/head';

const Header = () => {
  return (
    <header>
      <div id="salmon fish image">
        <Image
          src="/salmon.png"
          alt="two salmon hanging out"
          width={200}
          height={100}
          />
      </div>
          <h1>Welcome to Salmonella Cookies</h1>
      <nav>
        <ul className="flex border-b mb-1">
          <li className="-mb-px mr-1">
            <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/">Home</Link>
          </li>
          <li className="mr-1">
            <Link className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold" href="/SalesData">Sales Data</Link>
          </li>
        </ul>


      </nav>
    </header>
  );
}

export default Header;