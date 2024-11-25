import SectionTitle from "./SectionTitle";

const About = ({ minHeight }) => {
  return (
    <section
      className="about wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="About" />
      <p>
        CodeOholics: A Hub for Innovators At CodeOholics, we believe in the
        power of collaboration and continuous learning. Led by the inspiring
        Farhan Ahmed , our club brings together students passionate about coding
        and technology.
        <br />
        <br />
        We organize exciting events such as coding challenges,
        hackathons, and workshops designed to foster creativity, teamwork, and
        technical growth. Whether you're a beginner or an experienced coder,
        CodeOholics provides a platform to learn, innovate, and grow together.
        Join us as we push the boundaries of technology and build a vibrant
        coding community!
      </p>
    </section>
  );
};

export default About;
