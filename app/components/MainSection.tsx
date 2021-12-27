interface MainSectionProps {
  title: string;
  children: React.ReactNode;
}
export function MainSection({ title, children }: MainSectionProps) {
  return (
    <section className="main-section">
      <header>
        <h1 className="header-font">{title}</h1>
      </header>
      {children}
    </section>
  );
}
