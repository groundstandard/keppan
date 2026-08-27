import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { PageHero, FeatureGrid, CTASection } from "@/components/sections";
import { DISCIPLINES, DISCIPLINE_FEATURES, getDiscipline } from "@/lib/martial-arts-data";

export function generateStaticParams() {
  return DISCIPLINES.map((d) => ({ discipline: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/martial-arts/[discipline]">) {
  const { discipline } = await params;
  const d = getDiscipline(discipline);
  if (!d) return buildMetadata({ title: "Martial arts", path: `/martial-arts/${discipline}` });
  return buildMetadata({
    title: `${d.name} school management software`,
    description: d.intro,
    path: `/martial-arts/${d.slug}`,
  });
}

export default async function DisciplinePage({ params }: PageProps<"/martial-arts/[discipline]">) {
  const { discipline } = await params;
  const d = getDiscipline(discipline);
  if (!d) notFound();

  return (
    <>
      <PageHero
        eyebrow={d.built}
        title={`${d.name} school management, done right`}
        subtitle={d.intro}
        secondary={{ label: "See pricing", href: "/pricing" }}
      />
      <FeatureGrid
        eyebrow="One platform"
        heading={`Everything a ${d.name} school needs`}
        items={DISCIPLINE_FEATURES}
      />
      <CTASection heading={`Run your ${d.name} school on Keppan`} subtitle="Book a 20-minute walkthrough mapped to your mats." />
    </>
  );
}
