export default function AdminSection() {
  return (
    <section className="section-wrapper bg-blue-tint" id="administration">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Leadership &amp; Governance</div>
          <h2>College Administration</h2>
        </div>

        <div className="admin-grid">
          {/* Secretary & Correspondent */}
          <article className="admin-card">
            <div className="admin-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (Mr. K. Pandiaraj)
              </div>
            </div>
            <div className="admin-body">
              <h3 className="admin-name">Mr. K. Pandiaraj</h3>
              <div className="admin-role">Secretary &amp; Correspondent</div>
              <p style={{ fontSize: "0.875rem" }}>
                Guiding the college under the vision of KR Educational and Charitable Trust to establish top-tier academic facilities in Peraiyur.
              </p>
            </div>
          </article>

          {/* Principal */}
          <article className="admin-card">
            <div className="admin-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (Dr. P. S. Senthilkumar)
              </div>
            </div>
            <div className="admin-body">
              <h3 className="admin-name">Dr. P. S. Senthilkumar</h3>
              <div className="admin-role">Principal</div>
              <p style={{ fontSize: "0.875rem" }}>
                Leading curriculum execution, faculty development, research standards, and student holistic welfare.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
