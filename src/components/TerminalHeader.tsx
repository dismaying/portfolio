import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const DISCORD_USER_ID = "1360014898095980785";

interface DiscordUser {
  username: string;
  avatar: string | null;
  discriminator: string;
}

const TerminalHeader = () => {
  const [discordUser, setDiscordUser] = useState<DiscordUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [typedText, setTypedText] = useState("");
  const fullText = "subpoenas";

  useEffect(() => {
    const fetchDiscord = async () => {
      try {
        const response = await fetch(`https://avatar-cyan.vercel.app/api/${DISCORD_USER_ID}`);
        if (!response.ok) throw new Error("API failed");
        const userData = await response.json();
        setDiscordUser({
          username: userData.username || "subpoenas",
          avatar: userData.avatarUrl || null,
          discriminator: userData.discriminator || "0",
        });
      } catch (err) {
        console.error("Failed to fetch Discord profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDiscord();
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="terminal-window mb-8">
      <div className="terminal-header">
        <div className="terminal-dot bg-destructive"></div>
        <div className="terminal-dot bg-yellow-500"></div>
        <div className="terminal-dot bg-green-500"></div>
        <span className="ml-4 text-muted-foreground text-sm">portfolio.sh</span>
      </div>
      <div className="terminal-content scanline">
        <div className="flex items-center gap-6">
          <Avatar className="h-24 w-24 border-2 border-border">
            {discordUser?.avatar ? (
              <AvatarImage 
                src={discordUser.avatar} 
                alt={discordUser.username}
              />
            ) : null}
            <AvatarFallback className="bg-secondary text-foreground text-2xl">
              {loading ? "..." : "SP"}
            </AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="terminal-prompt">$</span>
              <span className="text-muted-foreground">whoami</span>
            </div>
            <h1 className="text-3xl font-bold glow-text">
              @{discordUser?.username || typedText}
              <span className="blink">_</span>
            </h1>
            <p className="text-muted-foreground">
              <span className="terminal-prompt">&gt;</span> Security Enthusiast | Self-taught Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TerminalHeader;
