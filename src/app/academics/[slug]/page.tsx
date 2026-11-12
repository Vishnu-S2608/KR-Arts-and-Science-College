import { Suspense } from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COURSES_DATA } from "@/data/coursesData";
import CoursePageClient from "./CoursePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return COURSES_DATA.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);
  if (!course) return { title: "Course Not Found" };

  return {
    title: `${course.title} | KR Arts and Science College, Madurai`,
    description: course.overview.slice(0, 160),
    openGraph: {
      title: `${course.title} - Admissions Open | KR Arts and Science College`,
      description: course.tagline,
      images: [course.image],
    },
  };
}

async function CourseLoader({ params }: Props) {
  const { slug } = await params;
  const course = COURSES_DATA.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return <CoursePageClient course={course} allCourses={COURSES_DATA} />;
}

export default function AcademicCoursePage({ params }: Props) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FDFCF7]" />}>
      <CourseLoader params={params} />
    </Suspense>
  );
}
