import React from "react";
import { ArrowRight, Users, GraduationCap, Building2, Lightbulb, BarChart3, Leaf, HeartPulse, Droplets, Wheat, Accessibility, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionTitle, Stat, ChallengeCard, SolutionCard } from "./components/UI";

const categories = [
  ["Agriculture", Wheat], ["Water Management", Droplets], ["Healthcare", HeartPulse],
  ["Education", GraduationCap], ["Environment", Leaf], ["Accessibility", Accessibility],
  ["Infrastructure", Building2], ["Public Services", Landmark]
];

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy">
        <span className="eyebrow light">INNOVATE FOR A BETTER JHARKHAND</span>
        <h1>Jharkhand's Problems.<br/>Collaborative Solutions.<br/><em>Real Impact.</em></h1>
        <p>Innova8 Jharkhand connects citizens, universities, students, researchers, startups and industries to identify, solve and implement solutions to real-world challenges.</p>
        <div className="hero-actions">
          <Link className="primary-btn" to="/submit-challenge">Submit a Challenge <ArrowRight size={17}/></Link>
          <Link className="glass-btn" to="/challenges">Explore Challenges</Link>
        </div>
        <div className="hero-stats"><Stat value="24+" label="Districts"/><Stat value="1,250+" label="Challenges"/><Stat value="350+" label="Institutions"/><Stat value="180+" label="Solutions"/></div>
      </div>
      <div className="hero-art">
        <div className="map-bubble">JHARKHAND<br/><small>Community • Academia • Industry</small></div>
        <div className="floating-card one">👥 Citizens<br/><small>Report Problems</small></div>
        <div className="floating-card two">🎓 Universities<br/><small>Propose Solutions</small></div>
        <div className="floating-card three">🤝 Industry<br/><small>Provide Expertise</small></div>
      </div>
    </section>

    <section className="process-strip">
      {[
        ["01","Identify","Citizens & Communities"],
        ["02","Submit","Create a Challenge"],
        ["03","Collaborate","Students + HEIs"],
        ["04","Partner","Industry + Startups"],
        ["05","Implement","Track Impact"]
      ].map(x => <div className="process-item" key={x[0]}><b>{x[0]}</b><strong>{x[1]}</strong><span>{x[2]}</span></div>)}
    </section>

    <section className="section">
      <SectionTitle eyebrow="THE PLATFORM" title="How Innova8 Works" text="From real problems to lasting impact — in five connected steps."/>
      <div className="steps">
        {[
          [Users,"Identify","Citizens and communities report problems."],
          [Lightbulb,"Submit","Turn a local issue into a structured challenge."],
          [GraduationCap,"Collaborate","Students, HEIs and researchers propose solutions."],
          [Building2,"Partner","Industry and startups contribute expertise and resources."],
          [BarChart3,"Implement","Pilot, deploy and measure community impact."]
        ].map(([Icon,t,d],i)=><div className="step" key={t}><span className="step-icon"><Icon/></span><small>0{i+1}</small><h3>{t}</h3><p>{d}</p></div>)}
      </div>
    </section>

    <section className="section tinted">
      <SectionTitle eyebrow="DISCOVER" title="Explore Societal Challenges" text="Browse diverse challenges across Jharkhand." action={{label:"View all challenges",to:"/challenges"}}/>
      <div className="category-grid">{categories.map(([name,Icon])=><Link to="/challenges" className="category-card" key={name}><span><Icon size={21}/></span><div><b>{name}</b><small>View challenges</small></div><ArrowRight size={15}/></Link>)}</div>
    </section>

    <section className="section">
      <SectionTitle eyebrow="REAL PROBLEMS" title="Featured Challenges" text="Be part of solving problems submitted by communities." action={{label:"Explore challenges",to:"/challenges"}}/>
      <div className="card-grid four">
        <ChallengeCard id="water" />
        <ChallengeCard id="irrigation" category="Agriculture" title="Smart Irrigation for Small Farmers" location="Dumka, Jharkhand" image="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80" />
        <ChallengeCard id="learning" category="Education" title="Digital Learning in Remote Areas" location="Chatra, Jharkhand" image="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" />
        <ChallengeCard id="forest" category="Environment" title="Forest Protection & Biodiversity" location="Simdega, Jharkhand" image="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80" />
      </div>
    </section>

    <section className="section tinted">
      <SectionTitle eyebrow="FROM IDEAS TO IMPACT" title="Innovative Solutions" text="Discover prototypes, pilots and implemented solutions." action={{label:"View all solutions",to:"/solutions"}}/>
      <div className="card-grid four">
        <SolutionCard id="water-system" />
        <SolutionCard id="solar" />
        <SolutionCard id="telemedicine" category="Healthcare" title="Telemedicine Outreach Platform" org="Ranchi University" image="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" />
        <SolutionCard id="waste" category="Sanitation" title="Smart Waste Management" org="BIT Mesra" image="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=800&q=80" />
      </div>
    </section>

    <section className="section ecosystem">
      <SectionTitle eyebrow="ONE ECOSYSTEM" title="Collaboration at the Center" text="Innova8 connects capabilities that are often fragmented."/>
      <div className="ecosystem-graphic">
        <div className="eco-box a">👥<b>Citizens & Communities</b><span>Identify problems and local needs</span></div>
        <div className="eco-box b">🎓<b>Universities & HEIs</b><span>Research, innovation and student participation</span></div>
        <div className="eco-center">🌿<strong>Innova8</strong><small>Jharkhand</small></div>
        <div className="eco-box c">🏢<b>Industry & Startups</b><span>Technology, funding and implementation</span></div>
        <div className="eco-box d">🏘️<b>Communities</b><span>Feedback and long-term impact</span></div>
      </div>
    </section>

    <section className="section">
      <SectionTitle eyebrow="WHY INNOVA8?" title="Designed for Real-World Impact" text="A platform for experiential learning, multidisciplinary research and industry collaboration."/>
      <div className="benefits">{["Discover Real Problems","Experiential Learning","Multidisciplinary Collaboration","Innovation","Industry Participation","Community Impact"].map((x,i)=><div className="benefit" key={x}><span>0{i+1}</span><b>{x}</b><p>Connect people, knowledge and resources around meaningful challenges.</p></div>)}</div>
    </section>

    <section className="impact-banner">
      <div><span className="eyebrow light">STATEWIDE IMPACT</span><h2>Innovation across Jharkhand, district by district.</h2><p>Track challenges, teams, institutions and solutions across the state.</p><Link to="/impact" className="glass-btn">Explore Impact <ArrowRight size={16}/></Link></div>
      <div className="jh-map">JHARKHAND<span>24 DISTRICTS</span></div>
    </section>

    <section className="cta-section">
      <span className="eyebrow">YOUR IDEA CAN MAKE A DIFFERENCE</span>
      <h2>Have a Problem Worth Solving?</h2>
      <p>Your community may be facing a problem that could inspire the next great solution.</p>
      <div><Link className="primary-btn" to="/submit-challenge">Submit a Challenge</Link><Link className="outline-btn" to="/register">Become a Solver</Link></div>
    </section>
  </>
}