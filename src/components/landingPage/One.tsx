import Image from "next/image";
import Link from "next/link";

const One = () => {
  return (
    <section className="One">
      <div className="main">
        <p className="title">
          <span>Supercharge </span>
          your searches with OSINT Industries
        </p>

        <p className="subTitle">
          The world&apos;s best OSINT platform to give you detailed information
          from over 200+ websites.
        </p>

        <div className="actions">
          <Link href="">
            <p className="get">Get started</p>
          </Link>

          <Link href="" className="learn">
            <p>Learn more</p>

            <Image
              alt="Get started"
              src="/arrow-right.svg"
              width={14}
              height={14}
            />
          </Link>
        </div>

        <Image alt="5 star rating" src="/rating.svg" width={201} height={24} />
      </div>
    </section>
  );
};

export default One;
