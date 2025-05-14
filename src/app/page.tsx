import Image from 'next/image';
import Link from 'next/link';
import {
  Github,
  Mail,
  Linkedin,
  MessageSquare,
  PhoneCallIcon,
} from 'lucide-react';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Introduction Section */}
      <section id="introduction" className="py-20 px-6 md:px-24 lg:px-32 flex flex-col items-center justify-center">
        <div className="relative w-48 h-48 rounded-full overflow-hidden mb-8 shadow-lg">
          <Image
            src="https://images.unsplash.com/photo-1570295999680-3a9792a3fbba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90b3wtfHx8fGVufDB8fHx8fA%3D%3D" // Placeholder image
            alt="Your Professional Photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-gray-200">Pedro Raimundo dos Santos Neto</h1>
        <p className="text-lg text-center max-w-2xl text-gray-600 dark:text-gray-400">
           Cientista de Dados | Analista de Dados | Engenheiro de Machine Learning <br /> Engenheiro de Software | Analista de Inteligência Artificial
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 px-6 md:px-24 lg:px-32 bg-muted">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Formação</h2>
        <div className="grid gap-4">
          {/* Example Education Item */}
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Bacharel em Ciência da Computação</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">Universidade Federal de Campina Grande, 2020 - 2024</p>
            <p className="text-gray-600 dark:text-gray-400">descrição</p>
          </div>
          {/* Add more education items here */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 px-6 md:px-24 lg:px-32">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Experiência</h2>
        <div className="grid gap-4">
          {/* Example Experience Item 1*/}
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Participação em Projeto de Extensão</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">Laboratório de Metrologia de Campina Grande (LABMET), 2022 - 2023</p>
            <p className="text-gray-600 dark:text-gray-400">
             Atividades de divulgação científica do BINGO Project, apoio em atividades de extensão do projeto e suporte de TI.
            </p>
          </div>
          {/* Example Experience Item 2 */}
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Monitoria</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">UASC - UFCG, 2024</p>
            <p className="text-gray-600 dark:text-gray-400">
              Assistente de Professor bolsista na disciplina de Inteligência Artificial.
            </p>
          </div>
          {/* Example Experience Item 3 */}
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Monitoria</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">UASC - UFCG, 2021</p>
            <p className="text-gray-600 dark:text-gray-400">
              Assistente de Professor na disciplina de Programação II.
            </p>
          </div>
          {/* Add more experience items here */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6 md:px-24 lg:px-32 bg-muted">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example Project Card 1 */}
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Project Title</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">Brief description of the project.</p>
            <div className="mt-4 flex justify-end space-x-2">
              <Link href="#" className="text-primary hover:underline">
                GitHub
              </Link>
              <Link href="#" className="text-primary hover:underline">
                Live Demo
              </Link>
            </div>
          </div>
          {/* Example Project Card 2 */}
          <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Project Title</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">Brief description of the project.</p>
            <div className="mt-4 flex justify-end space-x-2">
              <Link href="#" className="text-primary hover:underline">
                GitHub
              </Link>
              <Link href="#" className="text-primary hover:underline">
                Live Demo
              </Link>
            </div>
          </div>
           {/* Example Project Card 3 */}
           <div className="bg-card rounded-lg shadow-md p-4">
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200">Project Title</h3>
            <p className="text-muted-foreground text-gray-600 dark:text-gray-400">Brief description of the project.</p>
            <div className="mt-4 flex justify-end space-x-2">
              <Link href="#" className="text-primary hover:underline">
                GitHub
              </Link>
              <Link href="#" className="text-primary hover:underline">
                Live Demo
              </Link>
            </div>
          </div>
          {/* Add more project cards here */}
        </div>
      </section>

      {/* Contact Bar */}
      <footer className="bg-primary text-primary-foreground py-4 px-6 md:px-24 lg:px-32 mt-auto">
        <div className="flex items-center justify-center space-x-6">
          <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
            </svg>
          </Link>
          <Link href="#" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
            <Github className="h-6 w-6 text-white" />
          </Link>
          <Link href="mailto:" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
            <Mail className="h-6 w-6 text-white" />
          </Link>
          <Link href="https://wa.me/" className="hover:bg-primary/10 rounded-full p-2 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.46 3.48 1.29 4.99L2 22l5.35-1.38c1.46.78 3.08 1.2 4.79 1.2h.01c5.46 0 9.91-4.45 9.91-9.91c0-5.46-4.45-9.91-9.91-9.91zm4.32 12.89c-.19.29-.69.48-1.15.59c-.46.11-.97.18-1.48.11c-.5-.07-.96-.14-1.38-.29c-.91-.31-1.74-.9-2.43-1.67c-.94-1.01-1.59-2.19-1.92-3.28c-.09-.3-.15-.61-.15-.93c0-.32.01-.64.04-.95c.03-.31.06-.57.11-.74c.18-.58.5-.88.91-1.07c.41-.19.8-.22 1.11-.22c.31 0 .58.01.79.03c.21.02.4.04.52.18c.12.14.18.31.21.51c.03.2.05.42.06.66c.01.24.02.49.01.75c-.01.26-.08.5-.19.71c-.11.21-.25.4-.41.57c-.16.17-.31.31-.44.43c-.13.12-.24.25-.34.37c-.1.12-.18.23-.24.33c-.06.1-.09.19-.09.27c0 .08.02.15.06.21c.04.06.11.13.19.2c.31.28.69.64 1.13 1.04c.61.56 1.12.96 1.48 1.18c.14.08.26.13.35.14c.09.01.18 0 .26-.04c.08-.04.16-.1.24-.17c.08-.07.15-.14.22-.22c.1-.11.2-.21.29-.29c.1-.09.2-.16.31-.19c.11-.03.23-.03.35-.01c.12.02.25.08.39.18c.14.1.26.23.35.38c.09.15.15.32.17.49c.02.17.01.34-.01.51c-.03.17-.09.33-.19.48z"></path>
            </svg>
          </Link>
        </div>
        <p className="text-center text-xs mt-2 text-gray-400">
          Desenvolvido por Pedro | Feito com Firebase Studio 🔥<br/>Hospedado com ❤️ por GitHub
        </p>
      </footer>
    </div>
  );
}
