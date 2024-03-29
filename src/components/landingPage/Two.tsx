import Image from "next/image";

const Two = () => {
  return (
    <section className="Two">
      <div className="topItem eightSixty"></div>
      <div className="border btop eightSixty"></div>

      <div className="topItem sb eightSixty">
        <Image
          alt="cross"
          src="/cross.svg"
          width={12}
          height={9.96}
          className="left"
        />

        <Image
          alt="cross"
          src="/cross.svg"
          width={12}
          height={9.96}
          className="right eightSixty"
        />
      </div>

      <div className="border btop eightSixty "></div>

      <div className="topItem eightSixty"></div>

      <div className="card">
        <Image alt="clock" src="/clock.svg" width={40} height={40} />
        <p className="title">Real-Time Intelligence</p>
        <p className="subTitle">Get up-to-the-minute information instantly.</p>
      </div>

      <div className="border a"></div>

      <div className="card sb">
        <Image alt="anonymous" src="/anonymous.svg" width={40} height={40} />
        <p className="title">Stealthy Searches</p>
        <p className="subTitle">Stay discreet while gathering data.</p>
      </div>

      <div className="border b"></div>

      <div className="card">
        <Image alt="world" src="/world.svg" width={40} height={40} />
        <p className="title">200+ Data Sources</p>
        <p className="subTitle">Access a vast network of information.</p>
      </div>

      <div className="c"></div>

      <div className="card">
        <Image alt="eliminate" src="/eliminate.svg" width={40} height={40} />
        <p className="title">Zero False Positives</p>
        <p className="subTitle">Eliminate irrelevant results for precision.</p>
      </div>

      <div className="d"></div>

      <div className="card">
        <Image alt="accurate" src="/accurate.svg" width={40} height={40} />
        <p className="title">100% Accuracy</p>
        <p className="subTitle">Trust in data that&apos;s always spot-on.</p>
      </div>

      <div className="e"></div>

      <div className="card">
        <Image alt="storage" src="/storage.svg" width={40} height={40} />
        <p className="title">No Data Storage</p>
        <p className="subTitle">
          Your searches, your privacy, always protected.
        </p>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Two;
