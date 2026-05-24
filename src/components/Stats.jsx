function Stats() {
  return (
    <div style={styles.container}>
      <div>500+ Références</div>
      <div>15+ Marques</div>
      <div>1200+ Clients</div>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-around",
    padding: "40px",
    background: "#111",
    color: "white",
    fontWeight: "bold"
  }
}

export default Stats