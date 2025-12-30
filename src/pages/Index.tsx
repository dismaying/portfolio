import TerminalHeader from "@/components/TerminalHeader";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import TerminalCursor from "@/components/TerminalCursor";

const Index = () => {
  return (
    <>
      <TerminalCursor />
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <TerminalHeader />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          
          <footer className="mt-8 text-center text-muted-foreground text-sm">
            <span className="terminal-prompt">$</span>
            <span className="ml-2">echo "EOF"</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Index;
