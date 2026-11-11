export function TableOfContents({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <aside className="rounded-2xl border border-white/10 bg-white/[.03] p-5">
      <h2 className="text-sm font-bold text-white">In this guide</h2>
      <ol className="mt-3 space-y-2 text-sm text-slate-400">
        {items.map((item, index) => <li key={item}><a className="hover:text-ocean-400" href={`#section-${index + 1}`}>{item}</a></li>)}
      </ol>
    </aside>
  );
}
