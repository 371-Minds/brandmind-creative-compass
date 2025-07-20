import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
  lines?: number;
  avatar?: boolean;
  button?: boolean;
  card?: boolean;
}

export const SkeletonLoader = ({ 
  className, 
  lines = 3, 
  avatar = false, 
  button = false,
  card = false 
}: SkeletonLoaderProps) => {
  if (card) {
    return (
      <div className={cn("rounded-lg border bg-card p-6", className)}>
        <div className="flex items-center space-x-4 mb-4">
          {avatar && <div className="skeleton h-12 w-12 rounded-full" />}
          <div className="space-y-2 flex-1">
            <div className="skeleton h-4 w-3/4" />
            <div className="skeleton h-3 w-1/2" />
          </div>
        </div>
        <div className="space-y-3">
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "skeleton h-3",
                i === lines - 1 ? "w-2/3" : "w-full"
              )}
            />
          ))}
        </div>
        {button && <div className="skeleton h-10 w-24 mt-4" />}
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      {avatar && <div className="skeleton h-12 w-12 rounded-full" />}
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "skeleton h-3",
            i === 0 ? "w-4/5" : i === lines - 1 ? "w-2/3" : "w-full"
          )}
        />
      ))}
      {button && <div className="skeleton h-10 w-24 mt-4" />}
    </div>
  );
};