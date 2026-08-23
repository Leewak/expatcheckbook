export interface Step {
  title: string;
  body: string;
}

export function NumberedSteps({ items }: { items: Step[] }) {
  return (
    <ol className="m-0 p-0 list-none flex flex-col gap-0 border-t border-rule">
      {items.map((step, i) => (
        <li key={i} className="flex gap-[18px] py-[18px] border-b border-rule">
          <span className="font-mono text-[13px] font-semibold text-brass min-w-[26px]">{String(i + 1).padStart(2, "0")}</span>
          <span className="text-base leading-[1.65] text-body">
            <strong className="text-ink">{step.title}</strong> {step.body}
          </span>
        </li>
      ))}
    </ol>
  );
}
