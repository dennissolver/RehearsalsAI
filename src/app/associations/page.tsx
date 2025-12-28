'use client';

import Link from 'next/link';

const platforms = [
  { name: 'SalesReady', audience: 'Sales professionals', scenarios: 'Discovery, demos, negotiations', color: '#10b981' },
  { name: 'PartReady', audience: 'Actors & performers', scenarios: 'Auditions, scene work, callbacks', color: '#ec4899' },
  { name: 'CaseReady', audience: 'Lawyers & advocates', scenarios: 'Opening/closing, cross-exam', color: '#f59e0b' },
  { name: 'HireReady', audience: 'Job seekers', scenarios: 'Behavioral, technical, salary', color: '#84cc16' },
];

const additionalPlatforms = [
  { name: 'RaiseReady', audience: 'Founders' },
  { name: 'SetReady', audience: 'Speakers' },
  { name: 'ThesisReady', audience: 'Academics' },
  { name: 'BoardReady', audience: 'Executives' },
  { name: 'CareReady', audience: 'Healthcare' },
];

const partnershipModels = [
  { title: 'Member Benefit', description: 'Discounted or free access as a membership perk—drives retention', icon: '👥', color: '#8b5cf6' },
  { title: 'Revenue Share', description: 'Earn a percentage of member subscriptions—creates non-dues revenue', icon: '💰', color: '#10b981' },
  { title: 'White-Label', description: 'Your brand on the platform—strengthens association identity', icon: '🏢', color: '#3b82f6' },
  { title: 'Free Pilot', description: 'Test with a member cohort before committing—zero risk', icon: '✨', color: '#f59e0b' },
];

const memberBenefits = [
  { icon: '🎯', text: 'Unlimited practice sessions with AI personas tailored to their profession' },
  { icon: '📈', text: 'Real-time scoring on delivery, content, objection handling, and emotional impact' },
  { icon: '💡', text: 'Personalized coaching that adapts to their skill level and goals' },
  { icon: '🕐', text: '24/7 availability—practice at 2am before a 9am audition' },
  { icon: '✓', text: 'Progress tracking to measure improvement over time' },
];

const whyPartner = [
  { title: 'Member Value', description: 'Tangible skill development that helps members succeed professionally', color: '#8b5cf6' },
  { title: 'Non-Dues Revenue', description: 'New income stream without raising membership fees', color: '#10b981' },
  { title: 'Differentiation', description: "Cutting-edge AI offering competing associations don't have", color: '#3b82f6' },
  { title: 'Easy Implementation', description: 'Turnkey solution—announce and go, no IT integration required', color: '#f59e0b' },
];

const nextSteps = [
  { step: 1, title: '15-minute intro call', description: "to understand your members' needs" },
  { step: 2, title: 'Live demo', description: 'of the platform tailored to your vertical' },
  { step: 3, title: 'Pilot proposal', description: 'with member cohort and success metrics' },
];

export default function AssociationsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontSize: '20px', lineHeight: 1.6 }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '25%', left: '25%', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.12)', borderRadius: '50%', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '400px', height: '400px', background: 'rgba(245, 158, 11, 0.1)', borderRadius: '50%', filter: 'blur(120px)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Navigation */}
        <nav style={{ padding: '24px 40px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '18px', transition: 'color 0.3s' }}>
            <span style={{ fontSize: '20px' }}>←</span>
            Back to Home
          </Link>
        </nav>

        <main style={{ padding: '40px 40px 100px', maxWidth: '1100px', margin: '0 auto' }}>

          {/* Header */}
          <header style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', marginBottom: '32px', borderRadius: '9999px', background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
              <span style={{ fontSize: '20px' }}>👥</span>
              <span style={{ color: '#fbbf24', fontSize: '16px', fontWeight: 600 }}>Association Partnership Program</span>
            </div>
            <h1 style={{ fontSize: 'clamp(48px, 10vw, 80px)', fontWeight: 300, margin: '0 0 32px', lineHeight: 1.1 }}>
              <span style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                RehearsalsAI
              </span>
            </h1>
            <p style={{ fontSize: '24px', color: 'rgba(255,255,255,0.6)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.6 }}>
              Help your members practice high-stakes conversations with AI—auditions, pitches, negotiations, interviews—so they perform with confidence when it matters most.
            </p>
          </header>

          {/* The Opportunity */}
          <section style={{ marginBottom: '80px' }}>
            <div style={{ padding: '48px', borderRadius: '28px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '24px', color: '#f59e0b' }}>The Opportunity</h2>
              <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.7)', marginBottom: '28px', lineHeight: 1.7 }}>
                Your members face high-pressure moments that define their careers: investor pitches, auditions, sales calls, courtroom arguments, job interviews. The difference between success and failure often comes down to practice—but realistic practice partners are expensive, scarce, and inconvenient.
              </p>
              <div style={{ padding: '28px 32px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(249, 115, 22, 0.1) 100%)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                <p style={{ fontSize: '22px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>RehearsalsAI solves this.</p>
                <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.75)', margin: 0, lineHeight: 1.6 }}>
                  Our AI voice coaches play the toughest audience—VCs, casting directors, hiring managers, opposing counsel—providing instant, personalized feedback and scoring so members can rehearse anytime, anywhere.
                </p>
              </div>
            </div>
          </section>

          {/* What Your Members Get */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '32px', textAlign: 'center' }}>What Your Members Get</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {memberBenefits.map((benefit, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', padding: '24px 28px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.3s' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(245, 158, 11, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                    {benefit.icon}
                  </div>
                  <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.5 }}>{benefit.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Purpose-Built Platforms */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '32px', textAlign: 'center' }}>Purpose-Built for Your Members</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
              {platforms.map((platform) => (
                <div key={platform.name} style={{ padding: '28px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: platform.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: 'white', fontWeight: 700 }}>
                      {platform.name.charAt(0)}
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: 600, margin: 0, color: 'white' }}>{platform.name}</h3>
                  </div>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', margin: '0 0 6px' }}>For: <span style={{ color: 'rgba(255,255,255,0.75)' }}>{platform.audience}</span></p>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Practice: <span style={{ color: 'rgba(255,255,255,0.75)' }}>{platform.scenarios}</span></p>
                </div>
              ))}
            </div>
            <p style={{ textAlign: 'center', fontSize: '18px', color: 'rgba(255,255,255,0.45)', fontStyle: 'italic' }}>
              Additional platforms: {additionalPlatforms.map(p => `${p.name} (${p.audience})`).join(', ')}
            </p>
          </section>

          {/* Partnership Models */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '32px', textAlign: 'center' }}>Partnership Models</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {partnershipModels.map((model) => (
                <div key={model.title} style={{ padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: model.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '20px', boxShadow: `0 8px 24px ${model.color}40` }}>
                    {model.icon}
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 12px', color: 'white' }}>{model.title}</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.6 }}>{model.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Associations Partner */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '32px', textAlign: 'center' }}>Why Associations Partner With Us</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
              {whyPartner.map((reason) => (
                <div key={reason.title} style={{ padding: '32px', borderRadius: '20px', background: `linear-gradient(135deg, ${reason.color}20 0%, ${reason.color}10 100%)`, border: `1px solid ${reason.color}30` }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 600, margin: '0 0 12px', color: 'white' }}>{reason.title}</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 500, marginBottom: '32px', textAlign: 'center' }}>Next Steps</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              {nextSteps.map((item) => (
                <div key={item.step} style={{ flex: '1 1 250px', maxWidth: '320px', padding: '32px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, color: '#0a0a0f', margin: '0 auto 20px' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 600, margin: '0 0 8px', color: 'white' }}>{item.title}</h3>
                  <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ textAlign: 'center' }}>
            <div style={{ padding: '56px 48px', borderRadius: '32px', background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(249, 115, 22, 0.1) 50%, rgba(245, 158, 11, 0.15) 100%)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
              <h2 style={{ fontSize: '42px', fontWeight: 500, margin: '0 0 16px' }}>Ready to explore?</h2>
              <p style={{ fontSize: '22px', color: 'rgba(255,255,255,0.6)', marginBottom: '36px' }}>
                Book a 15-minute call to discuss how RehearsalsAI can benefit your members.
              </p>
              <a
                href="https://www.calendly.com/mcmdennis"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '22px 48px',
                  background: 'linear-gradient(90deg, #f59e0b, #f97316)',
                  borderRadius: '9999px',
                  color: 'black',
                  fontWeight: 600,
                  fontSize: '22px',
                  textDecoration: 'none',
                  boxShadow: '0 12px 48px rgba(245, 158, 11, 0.35)',
                  transition: 'all 0.3s'
                }}
              >
                <span style={{ fontSize: '24px' }}>📅</span>
                Schedule a Call
              </a>
              <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '28px', fontSize: '18px' }}>
                rehearsals-ai.vercel.app
              </p>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer style={{ padding: '48px 40px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '18px' }}>
            © {new Date().getFullYear()} RehearsalsAI. Powered by Corporate AI Solutions.
          </div>
        </footer>
      </div>
    </div>
  );
}