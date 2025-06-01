

function MyProjects() {
  const myProjects = [
    {
      title: "College App",
      description: "An all-in-one solution for student and faculty communication at Andhra Polytechnic.",
      link: "https://github.com/your-username/college-app"
    },
    {
      title: "Gym Trainer App",
      description: "A fitness training app that tracks workouts and sets personalized goals.",
      link: "https://github.com/your-username/gym-trainer"
    }
  ];

  return (
    <section id= 'projects' style={styles.section}>
        <h2>my projects</h2>
        {myProjects.map((projects,index)=>(
            <div key={index} style={styles.card}>
                <h2> {projects.title}</h2>
                <p>{projects.description}</p>
                <a href={projects.link} target='blank' rel="noopener no reference">view project</a>
            </div>
        )

        )}
    </section>
  );
}

const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#fafafa',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '500px',
    textAlign: 'left',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  }
};

export default MyProjects;
