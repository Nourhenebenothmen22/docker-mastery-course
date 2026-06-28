import SectionTitle from './SectionTitle';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <SectionTitle
      title={title}
      subtitle={subtitle}
    />
  );
}
