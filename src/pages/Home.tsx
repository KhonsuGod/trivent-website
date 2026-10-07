import { DeltaMate } from '../sections/home/DeltaMate';
import { Engagements } from '../sections/home/Engagements';
import { ExperiencePractice } from '../sections/home/ExperiencePractice';
import { FounderPreview } from '../sections/home/FounderPreview';
import { Hero } from '../sections/home/Hero';
import { Industries } from '../sections/home/Industries';
import { Philosophy } from '../sections/home/Philosophy';
import { SolutionsOverview } from '../sections/home/SolutionsOverview';
import { WhyTrivent } from '../sections/home/WhyTrivent';
import { FinalCta } from '../components/FinalCta';
import { Seo } from '../components/Seo';

export function Home() {
  return (
    <>
      <Seo
        title="TRIVENT Business Solutions | Human & Business Transformation"
        description="PT TRIVENT SOLUSI BISNIS — Human & Business Transformation Company. Practical consulting, leadership development, assessment, and business transformation. Bandung Barat, Indonesia."
        path="/"
      />
      <Hero />
      <Philosophy />
      <SolutionsOverview />
      <WhyTrivent />
      <ExperiencePractice />
      <DeltaMate />
      <Industries />
      <FounderPreview />
      <Engagements />
      <FinalCta />
    </>
  );
}
