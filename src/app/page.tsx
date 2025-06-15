import CompanionCard from "@/components/CompanionCard";
import CompanionList from "@/components/CompanionList";
import Cta from "@/components/CTA";
import React from "react";
import { recentSessions } from "../constants/index";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="1"
          name="neura the brainy explorer"
          topic="neural network of the brain"
          subject="science"
          duration={45}
          color="#ffffde"
        />
        <CompanionCard
          id="2"
          name="Countsy the number wizard"
          topic="Derivatives and Integrals"
          subject="maths"
          duration={30}
          color="#fabfde"
        />
        <CompanionCard
          id="3"
          name="Verba the vocabulary builder"
          topic="English Literature"
          subject="Language"
          duration={30}
          color="#abffde"
        />
      </section>
      <section className="home-section">
        <CompanionList
          title="Recently Completed Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
