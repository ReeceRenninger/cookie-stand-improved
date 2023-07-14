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
        <ul>
          <li >
            <Link  href="/">Home</Link>
          </li>
          <li >
            <Link  href="/SalesData">Sales Data</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;