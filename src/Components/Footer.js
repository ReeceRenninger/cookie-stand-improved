import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <p>
        Questions or Comments? Contact Us!
      </p>
      <p>
        Email: <b>Pat@SalmonCookies.fake-email-place</b>
      </p>
      <p>Complaints? Never had any so no worries!</p>
      <p>
        or phone: <b>555-555-5555</b>
      </p>
      <section className="row">
       
      <Image
      src="/fish.jpg"
      width={500}
      height={500}
      alt="fish"
    />
      </section>
    </>
  );
}

export default Footer;