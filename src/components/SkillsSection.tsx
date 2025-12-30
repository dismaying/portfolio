import { Shield, Terminal, Eye, Lock, Globe, Box, Code } from "lucide-react";

const skills = [
  {
    name: "Beginner Python",
    description: "Scripting, automation, and building security tools with Python fundamentals.",
    icon: Code,
  },
  {
    name: "OSINT",
    description: "Open Source Intelligence gathering and analysis techniques for investigations.",
    icon: Eye,
  },
  {
    name: "OPSEC",
    description: "Operational Security practices to protect identity and minimize digital footprints.",
    icon: Shield,
  },
  {
    name: "OS Security",
    description: "Operating system hardening, permissions, and security configurations.",
    icon: Lock,
  },
  {
    name: "Linux Command Line",
    description: "Proficiency in terminal navigation, scripting, and system administration.",
    icon: Terminal,
  },
  {
    name: "Browser Security",
    description: "Web privacy, secure browsing practices, and extension hardening.",
    icon: Globe,
  },
  {
    name: "Virtualization",
    description: "Virtual machine setup, isolation, and sandboxed environments.",
    icon: Box,
  },
];

const SkillsSection = () => {
  return (
    <section className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-4 text-muted-foreground text-sm">skills.json</span>
      </div>
      <div className="terminal-content">
        <div className="mb-4">
          <span className="terminal-prompt">$</span>
          <span className="text-muted-foreground ml-2">cat skills.json</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="flex items-center gap-3 mb-3">
                <skill.icon className="h-5 w-5 text-accent" />
                <h3 className="font-bold text-foreground">{skill.name}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
