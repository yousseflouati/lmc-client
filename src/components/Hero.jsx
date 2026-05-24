function Hero() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>LMC</h1>
        <p style={styles.subtitle}>
          Louati Motorcycle Concept
        </p>

        <p style={styles.text}>
          Precision. Power. Performance.
        </p>

        <div style={styles.buttons}>
          <button style={styles.primaryBtn}>Explore Bikes</button>
          <button style={styles.secondaryBtn}>Learn More</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1558981806-ec527fa84c39')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    position: "relative"
  },

  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "40px",
    textAlign: "center",
    borderRadius: "10px"
  },

  title: {
    fontSize: "80px",
    margin: 0,
    letterSpacing: "10px"
  },

  subtitle: {
    fontSize: "20px",
    marginBottom: "10px"
  },

  text: {
    fontSize: "16px",
    marginBottom: "20px"
  },

  buttons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },

  primaryBtn: {
    padding: "10px 20px",
    background: "white",
    border: "none",
    cursor: "pointer"
  },

  secondaryBtn: {
    padding: "10px 20px",
    background: "transparent",
    border: "1px solid white",
    color: "white",
    cursor: "pointer"
  }
}

export default Hero