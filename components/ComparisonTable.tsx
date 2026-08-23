export interface ComparisonColumn {
  label: string;
  align?: "left" | "right";
}

export function ComparisonTable({
  columns,
  rows,
  verdictColumnIndex,
  highlightRows = [],
  note,
}: {
  columns: ComparisonColumn[];
  rows: (string | number)[][];
  verdictColumnIndex?: number;
  highlightRows?: number[];
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-[15px] border-collapse">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th
                  key={col.label}
                  className={`font-mono text-[11px] tracking-[0.1em] uppercase font-medium text-muted border-b-2 border-ink ${
                    col.align === "right" ? "text-right" : "text-left"
                  } ${i === 0 ? "pr-3.5 pb-2.5 pl-0" : i === columns.length - 1 ? "pl-3.5 pb-2.5 pr-0" : "px-3.5 pb-2.5"}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={highlightRows.includes(rowIndex) ? "bg-surface-alt" : undefined}>
                {row.map((cell, cellIndex) => {
                  const isFirst = cellIndex === 0;
                  const isLast = cellIndex === row.length - 1;
                  const isVerdict = cellIndex === verdictColumnIndex;
                  const align = columns[cellIndex]?.align === "right" ? "text-right" : "text-left";
                  return (
                    <td
                      key={cellIndex}
                      className={`py-3.5 border-b border-rule ${align} ${isFirst ? "pr-3.5 pl-0 font-semibold text-ink" : isLast ? "pl-3.5 pr-0" : "px-3.5"} ${
                        isFirst ? "" : "font-mono"
                      } ${isVerdict ? "font-semibold text-brass" : cellIndex === 0 ? "" : "text-ink"}`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="m-0 text-[13.5px] leading-[1.6] text-muted max-w-[70ch]">{note}</p>}
    </div>
  );
}
