import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Kbd } from "@/components/ui/kbd";
import { Command } from "lucide-react";

interface ShortcutGroup {
  title: string;
  shortcuts: Array<{
    keys: string[];
    description: string;
  }>;
}

const shortcutGroups: ShortcutGroup[] = [
  {
    title: "Navigation",
    shortcuts: [
      { keys: ["⌘", "K"], description: "Open command palette" },
      { keys: ["⌘", "\\"], description: "Toggle sidebar" },
      { keys: ["⌘", "1"], description: "Go to dashboard" },
      { keys: ["⌘", "2"], description: "Go to editor" },
      { keys: ["⌘", "3"], description: "Go to preview" },
    ]
  },
  {
    title: "Editor",
    shortcuts: [
      { keys: ["⌘", "S"], description: "Save template" },
      { keys: ["⌘", "Z"], description: "Undo" },
      { keys: ["⌘", "Y"], description: "Redo" },
      { keys: ["⌘", "D"], description: "Duplicate element" },
      { keys: ["Delete"], description: "Delete selected" },
    ]
  },
  {
    title: "View",
    shortcuts: [
      { keys: ["⌘", "+"], description: "Zoom in" },
      { keys: ["⌘", "-"], description: "Zoom out" },
      { keys: ["⌘", "0"], description: "Reset zoom" },
      { keys: ["F"], description: "Toggle fullscreen" },
    ]
  },
  {
    title: "General",
    shortcuts: [
      { keys: ["?"], description: "Show shortcuts" },
      { keys: ["⌘", ","], description: "Open settings" },
      { keys: ["Esc"], description: "Close dialogs" },
    ]
  }
];

export const KeyboardShortcuts = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "?" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Command className="h-5 w-5" />
            Keyboard Shortcuts
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {shortcutGroups.map((group, index) => (
            <div key={index} className="space-y-3">
              <h3 className="font-semibold text-foreground">{group.title}</h3>
              <div className="space-y-2">
                {group.shortcuts.map((shortcut, shortcutIndex) => (
                  <div
                    key={shortcutIndex}
                    className="flex items-center justify-between py-1"
                  >
                    <span className="text-sm text-muted-foreground">
                      {shortcut.description}
                    </span>
                    <div className="flex items-center gap-1">
                      {shortcut.keys.map((key, keyIndex) => (
                        <Kbd key={keyIndex}>{key}</Kbd>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <Badge variant="outline" className="mr-2">Tip</Badge>
            Press <Kbd>?</Kbd> anywhere to toggle this dialog
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};