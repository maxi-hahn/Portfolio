import { useState } from 'react';
import Arrow from './Arrow';
import "./proyectos.css";

const MockupImage = ({ src, alt, isMobile }) => {
  const [hasError, setHasError] = useState(false);

  if (!src || hasError) return null;

  return (
    <div className={`mockup-container ${isMobile ? 'mobile-frame' : 'desktop-frame'}`}>
      <div className="mockup-header">
        <div className="mockup-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        {!isMobile && <div className="mockup-browser-bar"></div>}
      </div>
      <div className="mockup-screen">
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="mockup-img"
        />
      </div>
    </div>
  );
};

const ProjectScreenshots = ({ desktopImages, mobileImages, hasMobileSwitch, title }) => {
  const [isMobileView, setIsMobileView] = useState(false);

  const activeImages = isMobileView && hasMobileSwitch ? mobileImages : desktopImages;

  if (!activeImages || activeImages.length === 0) return null;

  const toggleView = () => {
    setIsMobileView((prev) => !prev);
  };

  const isMobileActive = isMobileView && hasMobileSwitch;

  return (
    <div className="my-5 w-full flex flex-col md:flex-row items-center justify-center gap-4">
      <div className={`w-full transition-all duration-300 ease-in-out ${
        isMobileActive
          ? 'flex flex-row justify-center items-center gap-4 sm:gap-6'
          : activeImages.length > 1
          ? 'grid grid-cols-1 sm:grid-cols-2 gap-4'
          : 'flex justify-center'
      }`}>
        {activeImages.map((src, idx) => (
          <MockupImage
            key={`${src}-${idx}-${isMobileView}`}
            src={src}
            alt={`${title} — captura ${idx + 1}`}
            isMobile={isMobileActive}
          />
        ))}
      </div>

      {hasMobileSwitch && (
        <div className="flex flex-col items-center justify-center p-2 shrink-0 transition-opacity duration-300" title="Cambiar entre vista Desktop y Mobile">
          <Arrow avanzar={toggleView} />
          <span className="text-xs text-yellow-200/90 mt-2 font-mono bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
            {isMobileView ? 'Vista Mobile' : 'Vista Desktop'}
          </span>
        </div>
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const {
    title,
    categoria,
    description,
    details,
    techList,
    githubFront,
    githubBack,
    github,
    templatesRepo,
    hasDeploy,
    desktopImages = [],
    mobileImages = [],
    hasMobileSwitch = false,
  } = project;

  return (
    <article className="mb-8 mt-6 max-w-full p-6 bg-white/5 border border-white/10 rounded-2xl transition-all duration-300 hover:border-yellow-200/30">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <h3 className="text-2xl font-semibold text-yellow-200">{title}</h3>
        <span className="text-xs px-3 py-1 bg-white/10 text-gray-300 rounded-full font-mono border border-white/10">{categoria}</span>
      </div>

      <p className="text-md mb-3 text-pretty"><span className='text-yellow-200 font-bold'>Descripción: </span>{description}</p>
      {
        details ? 
        <p className="text-md mb-4 text-pretty"><span className='text-yellow-200 font-bold'>Participación & Detalles: </span>{details}</p> : null
      }

      {/* Área de capturas de pantalla con mockups de computadora y mobile switch para GymTup */}
      <ProjectScreenshots
        desktopImages={desktopImages}
        mobileImages={mobileImages}
        hasMobileSwitch={hasMobileSwitch}
        title={title}
      />

      {/* Etiquetas individuales de tecnologías */}
      <div className="mt-4 mb-5">
        <h4 className="text-xs font-semibold text-yellow-200 uppercase tracking-wider mb-2.5">Tecnologías empleadas:</h4>
        <div className="flex flex-wrap gap-2">
          {techList && techList.map((tech, idx) => (
            <span key={idx} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-wrap items-center gap-3 mt-5 pt-3 border-t border-white/10">
        {githubFront && (
          <a href={githubFront} target="_blank" rel="noopener noreferrer" className="btn-github">
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>Ver Front en GitHub</span>
          </a>
        )}

        {githubBack && (
          <a href={githubBack} target="_blank" rel="noopener noreferrer" className="btn-github">
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>Ver Back en GitHub</span>
          </a>
        )}

        {github && !templatesRepo && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn-github">
            <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            <span>Ver en GitHub</span>
          </a>
        )}

        {github && templatesRepo && (
          <>
            <a href={github} target="_blank" rel="noopener noreferrer" className="btn-github">
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              <span>Ver en GitHub</span>
            </a>
            <a href={templatesRepo} target="_blank" rel="noopener noreferrer" className="btn-github">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18"/></svg>
              <span>Ver Templates</span>
            </a>
            <span className="btn-deploy-disabled" title="Documentación en preparación">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              <span>Ver Documentación</span>
            </span>
          </>
        )}

        {hasDeploy && (
          <span className="btn-deploy-disabled" title="Deploy preparado para publicación futura">
            <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            <span>Ver Deploy</span>
          </span>
        )}
      </div>
    </article>
  );
};

const Proyectos = () => {
  const PROJECTS = [
    {
      idItem: 1,
      title: "GymTup — Sistema de Gestión de Gimnasios",
      categoria: "ACADÉMICOS",
      description:
        "Sistema de gestión de gimnasios desarrollado como proyecto integrador final en la Tecnicatura en Programación de la UTN.",
      details:
        "Proyecto académico colaborativo desarrollado junto a un compañero. Participé activamente en el desarrollo tanto de backend como de frontend. En el backend implementé la entidad Class, servicios, repositorios, controladores, envío de emails, BackgroundService para tareas secundarias y sistema de notificaciones. En el frontend trabajé en el CRUD de clases, perfiles, interfaz general y panel de administración.",
      techList: [
        "C#", ".NET / ASP.NET Core", "Entity Framework Core", "SQL Server", 
        "REST APIs", "JWT", "React", "JavaScript", "HTML", "CSS", 
        "Tailwind CSS", "Clean Architecture", "SOLID", "Repository Pattern", "BackgroundService"
      ],
      githubFront: "https://github.com/maxi-hahn/TIF-GymTup",
      githubBack: "https://github.com/maxi-hahn/tpi-programacion-IV-UTN",
      hasDeploy: true,
      desktopImages: [
        "/projects/1.png",
        "/projects/2.png"
      ],
      mobileImages: [
        "/projects/3.png",
        "/projects/4.png"
      ],
      hasMobileSwitch: true,
    },
    {
      idItem: 2,
      title: "Project Manager — Automatización de Proyectos",
      categoria: "PERSONALES",
      description:
        "Aplicación de escritorio desarrollada para automatizar la creación y configuración inicial de proyectos de software mediante plantillas y recursos reutilizables.",
      details:
        "Permite elegir plantillas, herramientas, entornos y tecnologías para generar la estructura inicial e iniciar aplicaciones desde una misma interfaz. Cuenta con un MVP funcional en uso y un repositorio complementario con plantillas reutilizables.",
      techList: ["Python", "CustomTkinter", "PyInstaller", "Pytest", "Git / GitHub"],
      github: "https://github.com/maxi-hahn/Project-Manager",
      templatesRepo: "https://github.com/maxi-hahn/project-manager-templates",
      hasDeploy: false,
      desktopImages: [
        "/projects/7.png",
        "/projects/8.png"
      ],
      mobileImages: [],
      hasMobileSwitch: false,
    },
    {
      idItem: 3,
      title: "Clínica Médica — Gestión de Turnos",
      categoria: "ACADÉMICOS",
      description:
        "Aplicación web académica desarrollada en la UTN para la gestión de atención y turnos en una clínica médica.",
      details:
        "Proyecto académico colaborativo en el que participé principalmente en el desarrollo de la interfaz de la aplicación. Contempla roles de Paciente, Médico, Administrador y Dueño, permitiendo autenticación, solicitudes de turnos y gestión de especialidades.",
      techList: ["React", "React Router", "JavaScript", "HTML", "CSS", "Git / GitHub"],
      githubFront: "https://github.com/Joaquin-Sanchez-Tonani/tpi-g2-frontend",
      githubBack: "https://github.com/Joaquin-Sanchez-Tonani/tpi-g2-backend",
      hasDeploy: true,
      desktopImages: [
        "/projects/5.png",
        "/projects/6.png"
      ],
      mobileImages: [],
      hasMobileSwitch: false,
    },
  ];

  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('TODOS');

  const toggleShowAll = () => setShowAll(!showAll);

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'TODOS') return true;
    return project.categoria === filter;
  });

  const projectsToDisplay = filteredProjects.slice(0, showAll ? filteredProjects.length : 4);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-4 mb-4 mt-2">
        <button
          onClick={() => setFilter('TODOS')}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'TODOS' ? 'bg-yellow-200 text-slate-900 border-2 border-transparent' : 'bg-transparent text-yellow-200 border-2 border-yellow-200 hover:bg-yellow-200/20'}`}
        >
          TODOS
        </button>
        <button
          onClick={() => setFilter('ACADÉMICOS')}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'ACADÉMICOS' ? 'bg-yellow-200 text-slate-900 border-2 border-transparent' : 'bg-transparent text-yellow-200 border-2 border-yellow-200 hover:bg-yellow-200/20'}`}
        >
          ACADÉMICOS
        </button>
        <button
          onClick={() => setFilter('PERSONALES')}
          className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${filter === 'PERSONALES' ? 'bg-yellow-200 text-slate-900 border-2 border-transparent' : 'bg-transparent text-yellow-200 border-2 border-yellow-200 hover:bg-yellow-200/20'}`}
        >
          PERSONALES
        </button>
      </div>

      {projectsToDisplay.map((project) => (
        <ProjectCard key={project.idItem} project={project} />
      ))}

      {filteredProjects.length > 4 && (
        <div className='flex justify-center mt-6'>
          <button
            onClick={toggleShowAll}
            className="text-yellow-200 hover:text-yellow-300 transition-all font-semibold"
          >
            {showAll ? "Ver menos proyectos" : "Ver más proyectos"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Proyectos;
