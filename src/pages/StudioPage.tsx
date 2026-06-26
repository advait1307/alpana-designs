import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/studio/TeamCard";
import { FOUNDER } from "@/constants/brand";
import { C } from "@/constants/colors";

export function StudioPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* ── Studio Intro ── */}
      <section style={{ background: C.merino }}>
        <div
          className="mx-auto flex flex-col md:flex-row"
          style={{ maxWidth: "1280px", minHeight: "88vh" }}
        >
          <div
            className="hidden md:block"
            style={{ width: "45%", flexShrink: 0, overflow: "hidden", background: C.kangaroo }}
          >
            <img
              src="https://images.unsplash.com/photo-1619799090425-0efe92bd62a?w=800&h=1000&fit=crop&auto=format"
              alt="Alpana S., Principal Designer"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              padding: "80px 56px 80px 56px",
            }}
          >
            <div>
              <Reveal>
                <Eyebrow>Our Studio</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h1
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 300,
                    fontSize: "clamp(36px, 4.5vw, 56px)",
                    letterSpacing: "0.03em",
                    color: C.cedar,
                    lineHeight: 1.1,
                    marginTop: "16px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {"Designing with\nPurpose."}
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "15px",
                    color: C.oyster,
                    maxWidth: "400px",
                    lineHeight: 1.85,
                    marginTop: "28px",
                  }}
                >
                  Alpana S Design is a design engine where 26 years of experience meets contemporary thinking.
With a foundation in  architectural and shaped by a deep understanding of interiors, we believe every space should be planned with purpose. Our approach balances functionality, flow, and detail to create environments that feel intuitive, refined, and deeply personal.
We have a dynamic team of young designers who bring fresh perspectives and the latest design technologies to our projects .
Every space is designed with intent, allowing refined aesthetics to emerge naturally from a well-resolved design.
                </p>
              </Reveal>
              <Reveal delay={190}>
                <div
                  style={{
                    width: "60px",
                    height: "1px",
                    background: C.oyster,
                    margin: "36px 0 18px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: C.oyster,
                  }}
                >
                  Alpana Sukerkar · Principal Designer
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section style={{ background: C.kangaroo, padding: "120px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div style={{ overflow: "hidden", background: C.oyster }}>
                <img
                  src="https://images.unsplash.com/photo-1521194263619-39ecc5b55c61?w=500&h=780&fit=crop&auto=format"
                  alt="Geometric light and shadow on concrete — a material detail"
                  style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "640px" }}
                />
              </div>
            </Reveal>
            <div>
              {[
                {
                  name: "Restraint",
                  belief:
                    "We remove before we add, because clarity is a form of generosity.",
                },
                {
                  name: "Materiality",
                  belief:
                    "Every texture, every surface, every finish is chosen with intention.",
                },
                {
                  name: "Timelessness",
                  belief: "We don't design for trends. We design for lives.",
                },
              ].map((v, i) => (
                <Reveal key={i} delay={i * 100}>
                  <div
                    style={{
                      paddingBottom: "32px",
                      marginBottom: "32px",
                      borderBottom: i < 2 ? `1px solid ${C.oyster}` : "none",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 400,
                        fontSize: "30px",
                        color: C.cedar,
                        letterSpacing: "0.02em",
                        marginBottom: "12px",
                      }}
                    >
                      {v.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "14px",
                        color: C.oyster,
                        lineHeight: 1.8,
                      }}
                    >
                      {v.belief}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ background: C.merino, padding: "120px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <Reveal>
            <Eyebrow>The People</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 300,
                fontSize: "clamp(32px, 4vw, 44px)",
                letterSpacing: "0.03em",
                color: C.cedar,
                lineHeight: 1.15,
                marginTop: "14px",
                whiteSpace: "pre-line",
              }}
            >
              {"A small studio.\nBig intentions."}
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: C.oyster,
                maxWidth: "520px",
                lineHeight: 1.8,
                marginTop: "18px",
                marginBottom: "56px",
              }}
            >
              Three people, one way of working: slowly, carefully, and with complete conviction
              in the brief.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Alpana Sukerkar",
                role: "Founder & Principal Designer",
                img: "https://images.unsplash.com/photo-1619799090425-0efe92bd62a7?w=500&h=500&fit=crop&auto=format",
              },
              {
                name: "Anagha Mistry",
                role: "Lead Designer",
                img: "https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?w=500&h=500&fit=crop&auto=format",
              },
              {
                name: "Shanti Kurupaty",
                role: "Project Manager",
                img: "https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?w=500&h=500&fit=crop&auto=format",
              },
              {
                name: "Saroj Kamble",
                role: "Senior Designer",
                img: "https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?w=500&h=500&fit=crop&auto=format",
              },
              {
                name: "Rutuja Ghoge",
                role: "Junior Designer",
                img: "https://images.unsplash.com/photo-1600896997793-b8ed3459a17f?w=500&h=500&fit=crop&auto=format",
              }
            ].map((member, i) => (
              <Reveal key={i} delay={i * 80}>
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


