import Link from "next/link";
import PersonalityGallery from "@/components/personalities/PersonalityGallery";
import ShareButtons from "@/components/personalities/ShareButtons";
import styles from "./BirthdayProfile.module.css";
import { site } from "@/data/site";

function SectionTitle({ eyebrow, title, id }) {
  return (
    <div className={styles.sectionTitle}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function Timeline({ items, label }) {
  return (
    <ol className={styles.timeline} aria-label={label}>
      {items.map((item) => (
        <li className={styles.timelineItem} key={`${item.title}-${item.detail}`}>
          <span className={styles.timelineDot} aria-hidden="true" />
          {item.date ? <p className={styles.timelineDate}>{item.date}</p> : null}
          <h3>{item.title}</h3>
          {item.detail ? <p>{item.detail}</p> : null}
        </li>
      ))}
    </ol>
  );
}

export default function BirthdayProfile({ personality }) {
  return (
    <main className={styles.page}>
      <article>
        <header className={styles.hero}>
          <div className="section-shell">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <ol>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/personalities">Personalities</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{personality.name}</li>
              </ol>
            </nav>

            <div className={styles.birthdayBanner} role="note">
              <span aria-hidden="true">✦</span>
              <span>Happy Birthday</span>
              <span aria-hidden="true">✦</span>
            </div>

            <div className={styles.heroGrid}>
              <div className={styles.heroCopy}>
                <p className={styles.heroEyebrow}>{personality.badge}</p>
                <h1>{personality.title}</h1>
                <p className={styles.subtitle}>{personality.subtitle}</p>
                <p className={styles.birthdayMessage}>
                  {personality.birthdayMessage}
                </p>
                <a className={styles.heroLink} href="#profile">
                  Discover his story <span aria-hidden="true">↓</span>
                </a>
              </div>
              <div className={styles.gallery}>
                <PersonalityGallery
                  birthday
                  name={personality.name}
                  images={personality.images}
                />
              </div>
            </div>
          </div>
        </header>

        <section
          className={styles.profileStrip}
          id="profile"
          aria-label="Personal information"
        >
          <div className="section-shell">
            <dl className={styles.facts}>
              <div>
                <dt>Born</dt>
                <dd>{personality.birthday}</dd>
              </div>
              <div>
                <dt>Place of birth</dt>
                <dd>{personality.placeOfBirth}</dd>
              </div>
              <div>
                <dt>Hometown</dt>
                <dd>{personality.hometown}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className={styles.statistics} aria-label="Career highlights">
          <div className="section-shell">
            <div className={styles.statisticsGrid}>
              {personality.statistics.map((statistic) => (
                <article className={styles.statCard} key={statistic.label}>
                  <p className={styles.statValue}>{statistic.value}</p>
                  <h2>{statistic.label}</h2>
                  <p>{statistic.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className={styles.content}>
          <div className="section-shell">
            <section className={styles.biography} aria-labelledby="biography-title">
              <SectionTitle
                eyebrow="A life of purpose"
                title="Biography"
                id="biography-title"
              />
              <div className={styles.prose}>
                {personality.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section
              className={styles.contentSection}
              aria-labelledby="education-title"
            >
              <SectionTitle
                eyebrow="Learning and formation"
                title="Education"
                id="education-title"
              />
              <Timeline items={personality.education} label="Education history" />
            </section>

            <section
              className={styles.contentSection}
              aria-labelledby="ministry-title"
            >
              <SectionTitle
                eyebrow="Called to serve"
                title="Ministry"
                id="ministry-title"
              />
              <p className={styles.sectionIntro}>
                Rev. Dr. Aboagye was commissioned into the ministry of the
                Presbyterian Church of Ghana on 26th June 1985 and ordained on
                28th June 1987.
              </p>
              <Timeline items={personality.ministry} label="Ministry milestones" />
            </section>

            <section
              className={styles.contentSection}
              aria-labelledby="leadership-title"
            >
              <SectionTitle
                eyebrow="Across Ghana and abroad"
                title="Leadership and appointments"
                id="leadership-title"
              />
              <p className={styles.sectionIntro}>
                Throughout his distinguished career, he served in numerous
                capacities, demonstrating exceptional leadership and
                commitment to the growth of the Church and society.
              </p>
              <Timeline
                items={personality.appointments.map((title) => ({ title }))}
                label="Leadership appointments"
              />
            </section>

            <section
              className={styles.contentSection}
              aria-labelledby="service-title"
            >
              <SectionTitle
                eyebrow="A lasting contribution"
                title="Legacy and service"
                id="service-title"
              />
              <Timeline
                items={personality.service.map((title) => ({ title }))}
                label="Service and legacy contributions"
              />
            </section>

            <section
              className={styles.closing}
              aria-labelledby="retirement-title"
            >
              <div>
                <p className={styles.eyebrow}>A grateful tribute</p>
                <h2 id="retirement-title">Faithful service, lasting influence</h2>
                <blockquote>
                  <p>
                    “His life and ministry continue to inspire many through an
                    unwavering commitment to faith, education, leadership, and
                    service.”
                  </p>
                </blockquote>
                <p className={styles.retirement}>
                  Retired from full-time ministry on{" "}
                  <strong>{personality.retirement}</strong>.
                </p>
              </div>
            </section>

            <section
              className={styles.family}
              aria-labelledby="family-title"
            >
              <SectionTitle
                eyebrow="Family"
                title="A life shared with loved ones"
                id="family-title"
              />
              <div className={styles.familyCard}>
                <div>
                  <p className={styles.factLabel}>Wife</p>
                  <p className={styles.spouse}>{personality.family.spouse}</p>
                </div>
                <div>
                  <p className={styles.factLabel}>Four adult sons</p>
                  <ul>
                    {personality.family.children.map((child) => (
                      <li key={child}>{child}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <footer className={styles.footer}>
              <div>
                <h2>Share this birthday tribute</h2>
                <ShareButtons
                  title={personality.title}
                  url={`${site.canonicalUrl}/personalities/${personality.slug}`}
                />
              </div>
              <Link href="/personalities" className={styles.backLink}>
                Back to all personalities <span aria-hidden="true">→</span>
              </Link>
            </footer>
          </div>
        </div>
      </article>
    </main>
  );
}
