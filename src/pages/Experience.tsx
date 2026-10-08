import { Link } from 'react-router-dom';
import { FinalCta } from '../components/FinalCta';
import { ProfessionalEngagements } from '../components/ProfessionalEngagements';
import { ImageReveal, Reveal } from '../components/Reveal';
import { SectionHead } from '../components/SectionHead';
import { Seo } from '../components/Seo';
import { ExperienceShowcase } from '../sections/ExperienceShowcase';

export function Experience() {
  return (
    <>
      <Seo
        title="Experience | Selected Engagements — TRIVENT"
        description="TRIVENT experience: leadership development, HR systems, process improvement, organizational development — plus professional engagements."
        path="/experience"
      />
      <div className="page-hero">
        <div className="container">
          <SectionHead
            level={1}
            index="E"
            eyebrow="Experience"
            title="Turning experience into organizational excellence."
            lede="Built through real organizational challenges, practical solutions, and measurable improvements. Every organization has different challenges — the work below is designed around them, never generic."
            backToHome
          />
        </div>
      </div>

      <section className="section" aria-label="Experience showcase">
        <div className="container">
          <ExperienceShowcase />
          <Reveal delay={0.06}>
            <ImageReveal
              src="/assets/delta-mate-group-photo.webp"
              alt="Participants and facilitators of the PT Delta Mate Leadership Development Program with their certificates"
              width={1200}
              height={675}
              className="exp-page-photo"
              kicker="Program Cohort"
              caption="The PT Delta Mate program cohort — one of the documented engagements behind this experience."
            />
          </Reveal>
          <Reveal delay={0.08}>
            <p style={{ marginTop: 22 }}>
              <Link className="back-link" to="/" aria-label="See the PT Delta Mate documentary on Home">
                The full PT Delta Mate documentary lives on Home →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section tone-dark" aria-labelledby="exp-engagements">
        <div className="container">
          <SectionHead
            index="F"
            eyebrow="Professional Engagements"
            title="Selected professional engagements."
          />
          <ProfessionalEngagements />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
