export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`max-w-[1240px] mx-auto ${className}`}>{children}</div>;
}
