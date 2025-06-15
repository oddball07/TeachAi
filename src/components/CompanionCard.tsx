import Image from "next/image";
import React from "react";
import bookMark from "../../public/icons/bookmark.svg";
import clock from "../../public/icons/clock.svg";
import Link from "next/link";

interface CompanionCardProps {
  id: number;
  name: string;
  topic: string;
  duration: number;
  subject: string;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  duration,
  subject,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center ">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image src={bookMark} alt="bookmark" width={12.5} height={15} />
        </button>
      </div>
      <h2 className="text-2xl font-bold ">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src={clock} alt="duration" width={13.5} height={13.5} />
        <p className="text-sm">{duration} minutes</p>
      </div>
      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center">
          Launch Lesson
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
