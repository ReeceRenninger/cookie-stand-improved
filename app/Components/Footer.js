import Image from 'next/image';
// import Fish from '/public/fish.png';

const Footer = () => {
  return (
    <>
      <p>
        Questions or Comments? Contact Us!
      </p>
      <p>
        Email: <b>Pat@SalmonCookies.Null</b>
      </p>
      <p>
        or phone: <b>555-555-5555</b>
      </p>
      <section class="row">
        {/* COME BACK TO FIX THIS FUCKING IMAGE -Reece note */}
      <Image
      src="/public/fish.png"
      width={500}
      height={500}
      alt="fish"
    />
      </section>
      <section class="row">
        <p>
          <a href="sales.html">Click me to see average cookie sales per hour!</a>
        </p>
      </section>
    </>
  );
}

export default Footer;