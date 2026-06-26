import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { C } from "@/constants/colors";
import { portfolioTiles } from "@/data/portfolioTiles";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { StudioPage } from "@/pages/StudioPage";
import { WorkPage } from "@/pages/WorkPage";
import type { Page, Tile } from "@/types";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [opacity, setOpacity] = useState(1);
  const [currentProject, setCurrentProject] = useState<Tile>(portfolioTiles[0]);

  const transition = (fn: () => void) => {
    setOpacity(0);
    setTimeout(() => {
      fn();
      window.scrollTo(0, 0);
      setOpacity(1);
    }, 180);
  };

  const navigate = (p: Page) => {
    if (p === page) return;
    transition(() => setPage(p));
  };

  const goToProject = (t: Tile) => {
    transition(() => {
      setCurrentProject(t);
      setPage("project");
    });
  };

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        html, body { margin: 0; background: var(--merino); color: var(--cedar); }
        button { background: none; border: none; padding: 0; cursor: pointer; }
        input, textarea, select { font-family: inherit; }
        ::-webkit-scrollbar { width: 0px; }
        ::selection { background: var(--oyster); color: var(--cedar); }
        @keyframes lbFadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <Header current={page} go={navigate} />

      <main
        style={{
          opacity,
          transition: "opacity 0.3s ease",
          minHeight: "100vh",
          background: C.merino,
        }}
      >
        {page === "home" && <HomePage go={navigate} />}
        {page === "studio" && <StudioPage />}
        {page === "work" && <WorkPage onProjectSelect={goToProject} />}
        {page === "contact" && <ContactPage />}
        {page === "project" && (
          <ProjectDetailPage
            project={currentProject}
            go={navigate}
            goToProject={goToProject}
          />
        )}
      </main>

      <Footer go={navigate} />
    </>
  );
}
