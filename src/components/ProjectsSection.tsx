import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-4 text-muted-foreground text-sm">projects.sh</span>
      </div>
      <div className="terminal-content">
        <div className="mb-4">
          <span className="terminal-prompt">$</span>
          <span className="text-muted-foreground ml-2">git clone dismaying/vindicate</span>
        </div>
        
        <Button 
          asChild
          variant="outline"
          className="border-border hover:border-accent hover:bg-accent/10 text-foreground"
        >
          <a 
            href="https://github.com/dismaying/vindicate" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="h-4 w-4" />
            <span>dismaying/vindicate</span>
          </a>
        </Button>
      </div>
    </section>
  );
};

export default ProjectsSection;
