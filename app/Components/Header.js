import Link from 'next/link';
import Image from 'next/head';

const Header = () => {
    return (
        <header>
        <h1>Welcome to Salmon Cookies</h1>
        <div id="salmon fish image">
          <Image
            src="/salmon.png"
            alt="two salmon hanging out"
            width={200}
            height={100}
          />
        </div>
        <nav>
          <Link style={{ paddingRight: "5px" }} href="/">Home</Link>
          <Link href="/SalesData">Sales Data</Link>
        </nav>
      </header>
    );
}

export default Header;