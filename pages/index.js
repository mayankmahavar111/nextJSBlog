export default function Home(props) {
  const resumeUrl =
    "https://drive.google.com/file/d/1R6NNwBjrZ5Log_16ii7lN1B3x8Noa33v/view?usp=sharing";

  const downloadResume = () => {
    if (window) {
      window.open(resumeUrl, "pdf");
    }
  };

  return (
    <main>
      <h1>My portfolio</h1>
      <div>
        Hi, i am creating this website for testing and fun. Don`t mind my
        naiveness while designing the web page.
      </div>
      <div>
        <button onClick={downloadResume}>Download Resume</button>
      </div>
    </main>
  );
}
