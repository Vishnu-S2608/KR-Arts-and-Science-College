import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Clubs & Societies | KR Arts And Science College",
  description:
    "Discover student clubs, NCC cadet wing, KR Leaders Club, and community outreach bodies at KR Arts And Science College, Madurai.",
};

export default function ClubsPage() {
  return (
    <main className="pt-[calc(var(--header-height)+2rem)] min-h-[80vh]">
      <section className="section-wrapper bg-blue-tint">
        <div className="container">
          <div className="section-label">Campus Leadership &amp; Culture</div>
          <h1 className="mb-4">Student Clubs &amp; Societies</h1>
          <p className="max-w-[650px] text-[1.1rem] text-slate-600 mb-10">
            Active co-curricular organizations fostering patriotic character, creative artistic expression, 
            environmental protection, sportsmanship, and civic leadership.
          </p>

          <div className="bento-grid">
            {/* 1. NCC */}
            <article className="bento-card bento-span-2">
              <div className="bento-media">
                <div className="photo-placeholder">
                  <div className="placeholder-line"></div>
                  Photo to be added (NCC Cadets Parade)
                </div>
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    National Cadet Corps
                  </span>
                  <h3 className="bento-title">National Cadet Corps (NCC)</h3>
                  <p className="text-sm leading-relaxed">
                    Instilling self-discipline, national pride, and character. Cadets undergo rigorous obstacle navigation, 
                    drill maneuvers, weapon handling seminars, and participation in annual Thal Sainik Camp conditioning.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">B &amp; C Certificate Training</span>
                  <span className="text-pill">Thal Sainik Trials</span>
                  <span className="text-pill">Republic Day Camp Path</span>
                </div>
              </div>
            </article>

            {/* 2. KR Leaders Club */}
            <article className="bento-card">
              <div className="bento-media">
                <div className="photo-placeholder">
                  <div className="placeholder-line"></div>
                  Photo to be added (KR Leaders Club)
                </div>
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    New Initiative 2026
                  </span>
                  <h3 className="bento-title">KR Leaders Club</h3>
                  <p className="text-sm">
                    Platform for debate, policy critique, public diplomacy, and student-driven civic initiatives across Peraiyur taluk.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">Civic Leadership</span>
                  <span className="text-pill">Mentorship</span>
                </div>
              </div>
            </article>

            {/* 3. Training & Placement Cell */}
            <article className="bento-card">
              <div className="bento-media">
                <img src="/images/library.png" alt="Placement Training Cell" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    Career Cell
                  </span>
                  <h3 className="bento-title">Training &amp; Placement Cell</h3>
                  <p className="text-sm">
                    Conducting continuous aptitude classes, technical mock interviews, and coordinating with 7+ top recruiting corporates.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">100% Placement Record</span>
                  <span className="text-pill">Soft Skills</span>
                </div>
              </div>
            </article>

            {/* 4. Sports Club */}
            <article className="bento-card">
              <div className="bento-media">
                <div className="photo-placeholder">
                  <div className="placeholder-line"></div>
                  Photo to be added (Sports Grounds)
                </div>
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    Athletics &amp; Games
                  </span>
                  <h3 className="bento-title">Sports Club</h3>
                  <p className="text-sm">
                    Coordinating track and field tournaments, cricket, volleyball, kabaddi, and athletic conditioning programs.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">Inter-College Meets</span>
                  <span className="text-pill">Yoga &amp; Wellness</span>
                </div>
              </div>
            </article>

            {/* 5. Green Club */}
            <article className="bento-card">
              <div className="bento-media">
                <img src="/images/campus-hero.png" alt="Green Campus" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    Environmental Action
                  </span>
                  <h3 className="bento-title">Green Club</h3>
                  <p className="text-sm">
                    Dedicated to tree plantation drives, water conservation monitoring, eco-friendly waste separation, and plastic-free campus drives.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">Eco Preservation</span>
                  <span className="text-pill">Clean Peraiyur</span>
                </div>
              </div>
            </article>

            {/* 6. Unnat Bharat Abhiyan */}
            <article className="bento-card">
              <div className="bento-media">
                <div className="photo-placeholder">
                  <div className="placeholder-line"></div>
                  Photo to be added (Rural Community Outreach)
                </div>
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    National Flagship Program
                  </span>
                  <h3 className="bento-title">Unnat Bharat Abhiyan</h3>
                  <p className="text-sm">
                    Connecting higher education institutions with rural villages for socio-economic development and local livelihood enhancement.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">Village Surveys</span>
                  <span className="text-pill">Digital Literacy</span>
                </div>
              </div>
            </article>

            {/* 7. Art & Craft Club */}
            <article className="bento-card">
              <div className="bento-media">
                <div className="photo-placeholder">
                  <div className="placeholder-line"></div>
                  Photo to be added (Fine Arts &amp; Craft Exhibition)
                </div>
              </div>
              <div className="bento-body">
                <div>
                  <span className="text-pill mb-2">
                    Creative Arts
                  </span>
                  <h3 className="bento-title">Art &amp; Craft Club</h3>
                  <p className="text-sm">
                    Fostering painting, clay sculpting, origami, traditional Tamil rangoli, and stage decoration crafts.
                  </p>
                </div>
                <div className="pills-group mt-4">
                  <span className="text-pill">Annual Exhibits</span>
                  <span className="text-pill">Workshops</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
