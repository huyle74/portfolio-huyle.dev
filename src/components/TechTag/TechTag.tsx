import "./TechTag.css";

interface TechTagProps {
  label: string;
}

export default function TechTag({ label }: TechTagProps) {
  return <div className="tech-tag">{label}</div>;
}
