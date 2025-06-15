import React from "react";
import Image from "next/image";
import CtaImage from "../../public/images/cta.svg";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start Learning your Way</div>
      <h2 className="text-3xl font-bold">
        Build And Personalize Leaning Companion
      </h2>
      <p>
        Pick a name, subject, voide & personality - and start learning through
        voice conversation that feels natural and fun
      </p>
      <Image src={CtaImage} alt="cta" width={362} height={232}></Image>
      <button className="btn-primary ">
        <Image src={"/icons/plus.svg"} alt="plus" width={12} height={12} />
        <Link href="/companions/new">
          <p>Build a new companion</p>
        </Link>
      </button>
    </section>
  );
};

export default Cta;
