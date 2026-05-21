export default function Home() {
  const projects = [
    {
      title: "Smart Solar Dryer",
      desc: "IoT-based solar dryer using real-time monitoring and automation for efficient drying.",
      tech: "IoT • Automation • Sensors",
    },
    {
      title: "Leaf Disease Detection System",
      desc: "Machine learning model for plant disease detection using image processing.",
      tech: "Python • ML • Image Processing",
    },
    {
      title: "Diabetes Prediction using Retina Images",
      desc: "Deep learning model using CNN for early disease prediction from retina images.",
      tech: "Python • CNN • Deep Learning",
    },
    {
      title: "Student Database Management System",
      desc: "CRUD-based system to manage student records efficiently.",
      tech: "Python • Flask • Database",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-8 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Harsha Vardhan <span className="text-blue-400">Bodapati</span>
        </h1>

        <p className="text-xl text-zinc-300 mb-6">
          Computer Science Student | AI/ML Developer | Full Stack Learner
        </p>

        <p className="max-w-3xl mx-auto text-zinc-400 leading-7">
          Computer Science undergraduate with strong knowledge in Python,
          Machine Learning, Deep Learning, IoT, Django, Flask, and MongoDB.
          Passionate about building AI-driven and real-world software solutions.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="mailto:harshavardhanbodapati1092@gmail.com"
            className="bg-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600"
          >
            Contact Me
          </a>

          <a
            href="https://www.linkedin.com/in/harsha-bodapati-3105232b5"
            target="_blank"
            className="border border-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="px-8 py-16 bg-zinc-950">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          Technical Skills
        </h2>

        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            "Python",
            "Machine Learning",
            "Deep Learning",
            "CNN",
            "Django",
            "Flask",
            "HTML",
            "CSS",
            "MongoDB",
            "Git",
            "VS Code",
            "IoT",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-zinc-900 border border-zinc-700 px-5 py-3 rounded-xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-blue-400"
            >
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-4">{project.desc}</p>
              <p className="text-blue-300">{project.tech}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-8 py-16 bg-zinc-950">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">
          Education
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold">B.Tech - Computer Science and Engineering</h3>
            <p className="text-zinc-400">QIS College of Engineering and Technology</p>
            <p className="text-blue-300">CGPA: 8.79 | 2023 - 2027</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold">Senior Secondary - SSC</h3>
            <p className="text-zinc-400">Sri Chaitanya School, Vijayawada</p>
            <p className="text-blue-300">85.80%</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
            <h3 className="text-xl font-bold">Secondary - CBSE</h3>
            <p className="text-zinc-400">Sri Chaitanya School, Tadipatri</p>
            <p className="text-blue-300">100%</p>
          </div>
        </div>
      </section>

      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6 text-blue-400">
          Internships & Achievements
        </h2>

        <p className="text-zinc-300 mb-3">AI-ML Virtual Internship - Eduskills</p>
        <p className="text-zinc-300 mb-3">Ignite India Program - Wadhwani Foundation</p>
        <p className="text-zinc-300">Completed multiple real-world projects in Machine Learning and IoT.</p>
      </section>

      <footer className="px-8 py-8 bg-zinc-950 text-center text-zinc-500">
        © 2026 Harsha Vardhan Bodapati. All Rights Reserved.
      </footer>
    </main>
  );
}