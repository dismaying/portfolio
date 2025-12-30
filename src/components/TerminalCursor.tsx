import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const TerminalCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!visible || isMobile) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-100"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative flex items-center">
        <span className="text-foreground text-lg font-bold glow-text">▌</span>
        <div className="absolute inset-0 animate-pulse bg-foreground/20 blur-sm" />
      </div>
    </div>
  );
};

export default TerminalCursor;
