import { Github, Mail, MessageCircle, Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const contacts = [
  {
    label: "github",
    value: "@dismaying",
    href: "https://github.com/dismaying",
    icon: Github,
  },
  {
    label: "discord",
    value: "@subpoenas",
    href: "https://discord.com/users/1360014898095980785",
    icon: MessageCircle,
  },
  {
    label: "email",
    value: "udder-crib-curly@duck.com",
    href: "mailto:udder-crib-curly@duck.com",
    icon: Mail,
  },
];

const cryptoWallets = [
  {
    label: "LTC",
    name: "Litecoin",
    address: "Lh5FPLyF3V1m7DAsh1G2K2gwDJScz3tWj5",
    icon: () => (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.931 7.485L13.16 14.22l-2.926.93.386-1.225 2.303-.74 1.762-6.148h2.385zM9.778 19.752l-.744 2.375h9.659l.745-2.375H9.778zm1.778-5.669l-.743 2.375h9.659l.744-2.375H11.556z"/>
      </svg>
    ),
  },
  {
    label: "BTC",
    name: "Bitcoin",
    address: "34dFjZ555nKQf7SPGkmdRpqPTg2gByv58i",
    icon: () => (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm4.138 10.462c-.23-2.311-2.196-3.078-4.681-3.293V4.308h-1.927v2.811c-.506 0-1.025.013-1.538.025V4.308H10.07v2.86H6.539v1.862s1.426-.028 1.4 0a.997.997 0 011.09.852v8.64c-.05.262-.193.505-.704.522.028.025-1.4 0-1.4 0l-.382 2.08h3.404c.633 0 1.253.013 1.862.025v2.886h1.927v-2.86c.525.012 1.038.019 1.538.019v2.84h1.927v-2.885c3.256-.196 5.527-1.026 5.814-4.137.23-2.505-.947-3.624-2.833-4.076 1.142-.48 1.856-1.466 1.696-3.032zm-2.403 6.83c0 2.453-4.174 2.174-5.507 2.174v-4.348c1.333 0 5.507-.382 5.507 2.174zm-.921-5.625c0 2.223-3.484 1.972-4.59 1.972v-3.946c1.106 0 4.59-.35 4.59 1.974z"/>
      </svg>
    ),
  },
  {
    label: "ETH",
    name: "Ethereum",
    address: "0x2a198912DCC686D90187eE87b2b2d2ad2fc112ED",
    icon: () => (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.003 5L8 16.251l7.997 4.749V5zM16.003 5v15.996L24 16.247 16.003 5zM8 17.25L15.997 27v-5.75L8 17.25zm7.997 4v5.75L24 17.254l-8.003 4z"/>
      </svg>
    ),
  },
  {
    label: "XMR",
    name: "Monero",
    address: "86dJoMZ4WYv6fzBoxqxYfoJndpKEPfP6Lc2EX46qUw9YFVMkqhhFdNVAMmhuRG94SJ9kp55brhYSS9wngjxNXRbK6ZKhEVh",
    icon: () => (
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current">
        <path d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zM5.396 22.41h3.305V12.074L16 19.376l7.299-7.302v10.336h3.305v-14.5L16 18.515 5.396 7.911v14.5z"/>
      </svg>
    ),
  },
];

const ContactSection = () => {
  const [selectedWallet, setSelectedWallet] = useState<typeof cryptoWallets[0] | null>(null);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (address: string) => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <section className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-dot bg-destructive"></div>
          <div className="terminal-dot bg-yellow-500"></div>
          <div className="terminal-dot bg-green-500"></div>
          <span className="ml-4 text-muted-foreground text-sm">contact.txt</span>
        </div>
        <div className="terminal-content">
          <div className="mb-4">
            <span className="terminal-prompt">$</span>
            <span className="text-muted-foreground ml-2">cat contact.txt</span>
          </div>
          
          <div className="space-y-3 font-mono">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <contact.icon className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-accent">{contact.label}:</span>
                <span className="group-hover:glow-text break-all">{contact.value}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <div className="mb-4">
              <span className="terminal-prompt">$</span>
              <span className="text-muted-foreground ml-2">ls wallets/</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {cryptoWallets.map((wallet) => (
                <button
                  key={wallet.label}
                  onClick={() => setSelectedWallet(wallet)}
                  className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded hover:bg-secondary hover:border-accent transition-all group"
                >
                  <div className="text-accent">
                    <wallet.icon />
                  </div>
                  <span className="text-foreground font-mono group-hover:glow-text">
                    {wallet.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedWallet} onOpenChange={() => setSelectedWallet(null)}>
        <DialogContent className="terminal-window border-border bg-background max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-foreground">
              {selectedWallet && (
                <>
                  <div className="text-accent">
                    <selectedWallet.icon />
                  </div>
                  <span>{selectedWallet.name} ({selectedWallet.label})</span>
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="p-4 bg-secondary/30 border border-border rounded-lg">
              <p className="font-mono text-sm break-all text-muted-foreground select-all">
                {selectedWallet?.address}
              </p>
            </div>
            
            <Button
              onClick={() => selectedWallet && copyToClipboard(selectedWallet.address)}
              className="w-full"
              variant="outline"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-2 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Address
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ContactSection;
