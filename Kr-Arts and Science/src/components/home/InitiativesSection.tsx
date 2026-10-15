export default function InitiativesSection() {
  return (
    <section className="section-wrapper bg-gray-tint" id="initiatives">
      <div className="container">
        {/* Feature 1: SPARK */}
        <div className="feature-split-grid">
          <div>
            <div className="section-label">Institutional Innovation</div>
            <h3>SPARK Initiative</h3>
            <p>
              The SPARK series represents KR College&apos;s marquee platform for inter-collegiate innovation, 
              practical leadership challenges, and technological showcases. Students interact with external 
              evaluators, pitch sustainable projects, and refine essential presentation faculties.
            </p>
            <div className="pills-group">
              <span className="text-pill">Project Showcases</span>
              <span className="text-pill">Innovation Grants</span>
              <span className="text-pill">Technical Symposia</span>
            </div>
          </div>
          <div className="feature-card-media">
            <div className="photo-placeholder">
              <div className="placeholder-line"></div>
              Photo to be added (SPARK Event)
            </div>
          </div>
        </div>

        {/* Feature 2: KR Leaders Club */}
        <div className="feature-split-grid reverse">
          <div>
            <div className="section-label">New for 2026</div>
            <h3>KR Leaders Club</h3>
            <p>
              Inaugurated to cultivate decisive civic and corporate leadership among undergraduate scholars. 
              The club drives community outreach, ethical governance forums, parliamentary debates, and 
              direct mentorship dialogues with accomplished public administrators.
            </p>
            <div className="pills-group">
              <span className="text-pill">Public Governance</span>
              <span className="text-pill">Debate &amp; Diplomacy</span>
              <span className="text-pill">Community Action</span>
            </div>
          </div>
          <div className="feature-card-media">
            <div className="photo-placeholder">
              <div className="placeholder-line"></div>
              Photo to be added (KR Leaders Club Launch)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
