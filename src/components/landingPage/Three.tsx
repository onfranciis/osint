import { landingPageThreeCards } from "@/utils/LandingPage";
import Image from "next/image";

const Three = () => {
  return (
    <section className="Three">
      <p className="title">
        Effortless intelligence in
        <span> three steps</span>
      </p>

      <div className="bottom">
        {landingPageThreeCards.map((card) => (
          <div className="card" key={card.title}>
            <Image
              alt={card.title}
              src={card.image}
              width={card.width}
              height={card.height}
            />
            <p className="title">{card.title}</p>
            <p className="subTitle">{card.subTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Three;
