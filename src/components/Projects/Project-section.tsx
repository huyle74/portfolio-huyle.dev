import "./Project.css";

interface ProjectSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  link?: string;
  projectImage?: string;
  name?: string;
}

export default function ProjectSection({
  title,
  description,
  children,
  link,
  projectImage,
  name,
}: ProjectSectionProps) {
  return (
    <div className="project-section-container">
      <h2 className="project-section-title">{title}</h2>
      <div>{children}</div>
      <p className="project-section-description">{description}</p>
      <a
        href={link}
        className="Project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
      <img src={projectImage} alt={name} className="project-image" />
    </div>
  );
}
