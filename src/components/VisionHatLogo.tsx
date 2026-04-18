import { GraduationCap } from "lucide-react";

export const VisionHatLogo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <GraduationCap className="h-6 w-6" strokeWidth={2.2} />
      </div>
      <div className="leading-none">
        <div className="flex items-baseline gap-0.5">
          <span className="text-xl font-bold tracking-tight text-primary">Vision</span>
          <span className="text-xl font-bold tracking-tight text-success">Hat</span>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Academy
        </span>
      </div>
    </div>
  );
};
