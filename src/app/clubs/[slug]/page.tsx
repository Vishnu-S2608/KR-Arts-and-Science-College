import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CLUBS_DATA } from "@/data/clubsData";
import ClubPageClient from "./ClubPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CLUBS_DATA.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const club = CLUBS_DATA.find((c) => c.slug === slug);
  if (!club) return { title: "Club Not Found | KR Arts and Science College" };

  return {
    title: `${club.title} | KR Arts and Science College, Madurai`,
    description: club.overview.slice(0, 160),
    openGraph: {
      title: `${club.title} | KR Arts and Science College`,
      description: club.tagline,
      images: [club.image],
    },
  };
}

async function ClubLoader({ params }: Props) {
  const { slug } = await params;
  const club = CLUBS_DATA.find((c) => c.slug === slug);

  if (!club) {
    notFound();
  }

  return <ClubPageClient club={club} allClubs={CLUBS_DATA} />;
}

export default function SingleClubPage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFCF7]" />}>
      <ClubLoader params={params} />
    </Suspense>
  );
}
