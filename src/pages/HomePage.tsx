import { Eyebrow } from "@/components/ui/Eyebrow";
import { Hairline } from "@/components/ui/Hairline";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/home/ProjectCard";
import { TextLink } from "@/components/home/TextLink";
import { FOUNDER } from "@/constants/brand";
import { C } from "@/constants/colors";
import { homeProjects } from "@/data/homeProjects";
import type { Page } from "@/types";

interface HomePageProps {
  go: (p: Page) => void;
}

export function HomePage({ go }: HomePageProps) {
  const navigate = (p: Page) => {
    go(p);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* ── Hero ── */}
      <section
        style={{
          display: "flex",
          minHeight: "100vh",
          background: C.merino,
        }}
      >
        <div
          className="hidden md:block"
          style={{ width: "55%", flexShrink: 0, overflow: "hidden", background: C.kangaroo }}
        >
          <img
            src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=1200&h=900&fit=crop&auto=format"
            alt="Warm afternoon light over a chaise lounge in a minimal interior"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: "120px 64px 120px 56px",
          }}
        >
          <div>
            <Eyebrow>Architecture · Interior Design</Eyebrow>
            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(44px, 5.5vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "0.02em",
                color: C.cedar,
                marginTop: "20px",
                whiteSpace: "pre-line",
              }}
            >
              {"The Space Edit\nBy \nAlpana."}
            </h1>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                color: C.oyster,
                maxWidth: "280px",
                lineHeight: 1.8,
                marginTop: "24px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <div style={{ marginTop: "40px" }}>
              <TextLink onClick={() => navigate("work")}>View our work</TextLink>
            </div>
            <div
              style={{
                width: "40px",
                height: "1px",
                background: C.oyster,
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section style={{ background: C.merino, padding: "120px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Reveal>
            <Eyebrow>Selected Projects</Eyebrow>
          </Reveal>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ marginTop: "40px" }}
          >
            {homeProjects.map((proj, i) => (
              <Reveal key={i} delay={i * 80}>
                <ProjectCard proj={proj} onClick={() => navigate("work")} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <div style={{ textAlign: "center", marginTop: "56px" }}>
              <TextLink onClick={() => navigate("work")}>See all projects</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
        <Hairline />
      </div>

      {/* ── Pull Quote ── */}
      <section style={{ background: C.kangaroo, padding: "120px 32px" }}>
        <Reveal>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "clamp(24px, 3.8vw, 46px)",
                lineHeight: 1.45,
                letterSpacing: "0.01em",
                color: C.cedar,
              }}
            >
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500,
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: C.oyster,
                marginTop: "32px",
              }}
            >
              — {FOUNDER}, Principal Designer
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Services ── */}
      <section style={{ background: C.merino, padding: "120px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {[
              {
                numeral: "I",
                name: "Service 1",
                desc: "We create private homes that hold the rhythm of daily life — spaces that age gracefully and feel more yours with every year.",
              },
              {
                numeral: "II",
                name: "Service 2",
                desc: "Offices, galleries, and hospitality environments designed to slow people down and make them look twice at what surrounds them.",
              },
              {
                numeral: "III",
                name: "Service 3",
                desc: "From brief to blueprint, we work alongside architects to ensure the spatial and material languages speak as one.",
              },
            ].map((s, i) => (
              <Reveal key={i} delay={i * 100}>
                <div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 300,
                      fontSize: "13px",
                      color: C.oyster,
                      letterSpacing: "0.08em",
                      marginBottom: "18px",
                    }}
                  >
                    {s.numeral}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 400,
                      fontSize: "28px",
                      color: C.cedar,
                      letterSpacing: "0.02em",
                      lineHeight: 1.2,
                      marginBottom: "16px",
                    }}
                  >
                    {s.name}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "14px",
                      color: C.oyster,
                      lineHeight: 1.8,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


