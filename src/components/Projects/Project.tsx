import "./Project.css";
import ProjectSection from "./Project-section";
import TechTag from "../TechTag/TechTag";

export default function Project() {
  return (
    <div className="project-container" id="projects">
      <h2 className="project-title">Projects</h2>
      <span className="dashed-border"></span>
      <ProjectSection
        title="NabLeather"
        link="https://nableather.com/"
        name="nableather.com"
        projectImage="/images/nabLeather.png"
        description="This project is a custom Shopify theme built with Liquid, HTML, and JavaScript, using Metaobjects to structure and display dynamic content. It connects directly to Shopify merchant data—products, variants, and collections—to power flexible storefront features. The theme is organized with reusable sections and snippets for clean, scalable development, making it easy to maintain and extend while delivering a fast, interactive shopping experience.
"
      >
        <TechTag label="Liquid" />
        <TechTag label="JavaScript" />
        <TechTag label="HTML" />
        <TechTag label="CSS" />
      </ProjectSection>
      <span className="dashed-border"></span>
      <ProjectSection
        title="My E-visa"
        link="https://myevisa.app/"
        name="myevisa.app"
        projectImage="/images/myevisa.png"
        description="The E-Visa Project is a global online platform that enables users to apply for visas to multiple countries through a streamlined digital process. The system supports secure online payments via PayPal and includes a powerful admin dashboard built with Refine for managing applications, users, and approvals efficiently.

The platform is developed with Next.js for the frontend and Express.js for the backend, ensuring a scalable and responsive architecture. It integrates Google Authentication and OAuth for secure user access, while Prisma ORM and MySQL handle data management. The application is deployed on a Hostinger VPS, providing reliable performance, security, and flexibility for international operations."
      >
        <TechTag label="React" />
        <TechTag label="TypeScript" />
        <TechTag label="Express.js" />
        <TechTag label="Hostinger VPS" />
        <TechTag label="CSS" />
        <TechTag label="Next.js" />
        <TechTag label="Prisma" />
        <TechTag label="MySQL" />
        <TechTag label="Paypal" />
      </ProjectSection>
      <span className="dashed-border"></span>
      <ProjectSection
        title="TruBeauty Key"
        link="https://trubeautykey.com/"
        name="trubeautykey.com"
        projectImage="/images/trubeautyKey.png"
        description="This project is a modern website developed for a U.S.-based beauty clinic, built using React, TypeScript, and CSS to ensure performance, scalability, and clean code architecture. The design focuses on a refined, user-friendly UX and elegant UI that reflects the clinic’s brand and enhances client engagement. The site is fully responsive and optimized for speed, with reliable deployment and hosting managed through Hostinger for secure and stable performance."
      >
        <TechTag label="React" />
        <TechTag label="TypeScript" />
        <TechTag label="HTML" />
        <TechTag label="CSS" />
        <TechTag label="Next.js" />
      </ProjectSection>
      <span className="dashed-border"></span>
      <ProjectSection
        title="SinPost"
        link="https://www.singpost.com/"
        name="sinpost.com"
        projectImage="/images/sinpost.png"
        description="The OLP project is a large-scale system developed for a Singapore government client, designed to integrate multiple third-party logistics providers into a single unified platform. The solution includes the development of secure APIs and is deployed on Microsoft Azure to ensure scalability, reliability, and high availability. Built using a microservices architecture with nine independent services, the system enables efficient data exchange, streamlined logistics operations, and flexible future expansion."
      >
        <TechTag label="NestJS" />
        <TechTag label="TypeScript" />
        <TechTag label="Microservices" />
        <TechTag label="Azure" />
        <TechTag label="PostgreSQL" />
        <TechTag label="TypeORM" />
        <TechTag label="React" />
      </ProjectSection>
      <span className="dashed-border"></span>
      <ProjectSection
        title="Ao Dai Minh Hien"
        link="https://aodaiminhhien.com/"
        name="aodaiminhhien.com"
        projectImage="/images/aodaiminhhien.png"
        description="This project was developed for Ao Dai Minh Hien, a traditional long dress (Áo Dài) brand based in Southern Vietnam. The website showcases Vietnamese cultural heritage through a modern, visually engaging digital experience that highlights the elegance and craftsmanship of the brand’s collections.
Built with JavaScript, React, and Next.js, the platform delivers high performance and SEO optimization. Advanced animations powered by GSAP create smooth, premium interactions, while Docker ensures consistent deployment environments. The application is hosted on Google Cloud, providing scalable and reliable infrastructure to support business growth and online visibility.
"
      >
        <TechTag label="React" />
        <TechTag label="Javascript" />
        <TechTag label="HTML" />
        <TechTag label="CSS" />
        <TechTag label="GSAP" />
        <TechTag label="Next.js" />
        <TechTag label="Google Cloud" />
        <TechTag label="Docker" />
      </ProjectSection>
    </div>
  );
}
