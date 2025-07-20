import { cn } from "@/lib/utils";

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export const Kbd = ({ children, className, ...props }: KbdProps) => {
  return (
    <kbd
      className={cn(
        "inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-muted border border-border rounded shadow-sm min-h-[1.5rem] min-w-[1.5rem]",
        className
      )}
      {...props}
    >
      {children}
    </kbd>
  );
};