export default function Home() {
  return (
    <div style={{
      background: "black",
      color: "white",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      fontFamily: "Arial"
    }}>
      <h1 style={{ letterSpacing: "0.3em" }}>SHARKIE ACTIVE</h1>
      <p style={{ opacity: 0.7, marginTop: "20px" }}>
        Preview Build — Coming Soon
      </p>
    </div>
  );
}
