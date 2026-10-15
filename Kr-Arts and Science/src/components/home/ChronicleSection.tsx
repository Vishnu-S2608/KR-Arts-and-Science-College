import Link from "next/link";

export default function ChronicleSection() {
  return (
    <section className="section-wrapper bg-gray-tint" id="chronicle">
      <div className="container">
        <div className="section-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div className="section-label">Latest Events &amp; Honors</div>
            <h2>Campus Chronicle</h2>
          </div>
          <Link href="/events" className="btn btn-outline" style={{ marginBottom: "0.5rem" }}>
            View Full Events Archive
          </Link>
        </div>

        <div className="bento-grid">
          {/* Card 1: Thal Sainik Camp (Span 2) */}
          <article className="bento-card bento-span-2">
            <div className="bento-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (NCC Thal Sainik Camp)
              </div>
            </div>
            <div className="bento-body">
              <div>
                <div className="bento-date">NCC Honors &bull; 2025</div>
                <h3 className="bento-title">Cadet Selection for Prestigious Thal Sainik Camp</h3>
                <p style={{ fontSize: "0.875rem" }}>
                  Cadets from KR Arts &amp; Science College NCC wing successfully cleared rigorous state trials to represent in national drills.
                </p>
              </div>
              <Link href="/events" className="link-explore">
                Read Chronicle Entry{" "}
                <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </article>

          {/* Card 2: Airport Visit */}
          <article className="bento-card">
            <div className="bento-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (Airport Visit)
              </div>
            </div>
            <div className="bento-body">
              <div>
                <div className="bento-date">Aviation Management &bull; 2025</div>
                <h3 className="bento-title">Madurai Airport Operational Visit</h3>
                <p style={{ fontSize: "0.875rem" }}>
                  Practical training session covering security zones, cargo handling, and air traffic coordination.
                </p>
              </div>
              <Link href="/events" className="link-explore">
                Read Entry{" "}
                <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </article>

          {/* Card 3: Srivilliputhur Meet */}
          <article className="bento-card">
            <div className="bento-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (Sports Meet Victory)
              </div>
            </div>
            <div className="bento-body">
              <div>
                <div className="bento-date">Sports Club &bull; 2024-25</div>
                <h3 className="bento-title">Victory at Srivilliputhur Athletic Meet</h3>
                <p style={{ fontSize: "0.875rem" }}>
                  College track and field team secured championship trophies across multiple sprint and relay events.
                </p>
              </div>
              <Link href="/events" className="link-explore">
                Read Entry{" "}
                <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </article>

          {/* Card 4: Decathlon Visit */}
          <article className="bento-card">
            <div className="bento-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (Decathlon Industrial Visit)
              </div>
            </div>
            <div className="bento-body">
              <div>
                <div className="bento-date">Commerce &amp; Management &bull; 2025</div>
                <h3 className="bento-title">Decathlon Industrial Immersion</h3>
                <p style={{ fontSize: "0.875rem" }}>
                  Students analyzed real-time supply chain management and retail enterprise software architecture.
                </p>
              </div>
              <Link href="/events" className="link-explore">
                Read Entry{" "}
                <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </article>

          {/* Card 5: SPARK Symposia */}
          <article className="bento-card">
            <div className="bento-media">
              <div className="photo-placeholder">
                <div className="placeholder-line"></div>
                Photo to be added (SPARK Grand Finale)
              </div>
            </div>
            <div className="bento-body">
              <div>
                <div className="bento-date">Annual Event &bull; 2025</div>
                <h3 className="bento-title">SPARK Innovation Grand Finale</h3>
                <p style={{ fontSize: "0.875rem" }}>
                  Students presented software solutions and social impact business plans before distinguished mentors.
                </p>
              </div>
              <Link href="/events" className="link-explore">
                Read Entry{" "}
                <svg className="arrow-icon" viewBox="0 0 24 24" width="16" height="16">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
