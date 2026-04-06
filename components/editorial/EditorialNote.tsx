type Props = {
  children: React.ReactNode;
  title?: string;
};

export default function EditorialNote({ children, title = 'Editorial note' }: Props) {
  return (
    <aside className="border-l-2 border-accent bg-paper-warm/80 px-5 py-4 text-sm leading-relaxed text-ink-muted">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-accent">
        {title}
      </p>
      <div className="mt-3">{children}</div>
    </aside>
  );
}
