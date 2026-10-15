export default function GlobalSection() {
  return (
    <section className="section-wrapper bg-blue-tint" id="global">
      <div className="container">
        <div className="section-header">
          <div className="section-label">International Horizons</div>
          <h2>Global Alliances &amp; Institutional MoUs</h2>
          <p style={{ maxWidth: "650px" }}>
            Forging direct bilateral collaboration pathways with renowned global universities and professional training bodies.
          </p>
        </div>

        <div className="global-grid">
          {/* Shinawatra University MoU */}
          <div className="global-card">
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--blue-700)",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              International MoU
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
              Shinawatra University, Thailand
            </h3>
            <p style={{ fontSize: "0.9375rem" }}>
              Signed in conjunction with ICIRI 2026 (Pathum Thani, Thailand). Facilitates comprehensive bilateral academic exchange, research publications, and overseas training exposures.
            </p>
            <div className="pills-group">
              <span className="text-pill">Student Exchange</span>
              <span className="text-pill">Faculty Mobility</span>
              <span className="text-pill">Joint Research</span>
              <span className="text-pill">Global Internships</span>
            </div>
          </div>

          {/* LKP Academy MoU */}
          <div className="global-card">
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "var(--blue-700)",
                letterSpacing: "0.1em",
                marginBottom: "0.5rem",
              }}
            >
              Professional Aviation Partner
            </div>
            <h3 style={{ fontSize: "1.35rem", marginBottom: "0.75rem" }}>
              LKP Academy MoU
            </h3>
            <p style={{ fontSize: "0.9375rem" }}>
              Collaborative training curriculum for BBA Aviation Management students, incorporating ground operations certification, reservation systems, and airport internship linkages.
            </p>
            <div className="pills-group">
              <span className="text-pill">Aviation Certifications</span>
              <span className="text-pill">Airport Ground Training</span>
              <span className="text-pill">Placement Linkage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
