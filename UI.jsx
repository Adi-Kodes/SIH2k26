import React from "react";
import { ArrowRight, MapPin, Users, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";

export function SectionTitle({eyebrow, title, text, action}) {
  return <div className="section-head">
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>
    {action && <Link className="link-arrow" to={action.to}>{action.label} <ArrowRight size={16}/></Link>}
  </div>;
}

export function Stat({value,label}) {
  return <div className="stat"><strong>{value}</strong><span>{label}</span></div>;
}

export function ChallengeCard({id=1, image="https://upload.wikimedia.org/wikipedia/commons/6/6d/Government_banner_of_Jharkhand.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail_unscaled&_=20220422090523", category="Water Management", title="Drinking Water Quality Monitoring", location="Gumla, Jharkhand", status="Open", teams="8 Teams", days="12 Days Left"}) {
  return <article className="card challenge-card">
    <img src={image} alt="" />
    <div className="card-body">
      <div className="badge-row"><span className="badge">{category}</span><span className="status">{status}</span></div>
      <h3>{title}</h3>
      <p className="muted"><MapPin size={14}/> {location}</p>
      <p>Develop an affordable, reliable solution for a real community need.</p>
      <div className="meta"><span><Users size={14}/> {teams}</span><span><Clock3 size={14}/> {days}</span></div>
      <Link to={`/challenges/${id}`} className="primary-btn full">View Challenge <ArrowRight size={16}/></Link>
    </div>
  </article>
}

export function SolutionCard({id=1, category="Agriculture", title="Solar Powered Irrigation", org="NIT Jamshedpur", image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80", status="Pilot Deployment"}) {
  return <article className="card solution-card">
    <img src={image} alt="" />
    <div className="card-body">
      <div className="badge-row"><span className="badge">{category}</span><span className="status">{status}</span></div>
      <h3>{title}</h3>
      <p className="muted">{org}</p>
      <p>Practical technology designed for affordable, scalable community impact.</p>
      <div className="meta"><span>🤝 Industry Partner</span><span>🌱 Field Testing</span></div>
      <Link to={`/solutions/${id}`} className="primary-btn full">View Solution <ArrowRight size={16}/></Link>
    </div>
  </article>
}