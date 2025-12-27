'use client';

import { useState } from 'react';

const verticals = [
  { name: 'RaiseReady', title: 'Founders & Fundraising', description: 'Perfect your investor pitch. AI coaches play the VC, scoring your delivery, emotional transfer, and investment readiness.', icon: '🚀', status: 'live', liveUrl: 'https://raiseready-template.vercel.app', color: '#f59e0b' },
  { name: 'SalesReady', title: 'Sales Executives', description: 'Rehearse discovery calls, demos, and negotiations. Get scored on objection handling, value articulation, and closing techniques.', icon: '💼', status: 'coming', color: '#10b981' },
  { name: 'PartReady', title: 'Actors & Performers', description: 'Run lines with AI scene partners. Practice auditions, nail character work, and get feedback on emotional authenticity.', icon: '🎭', status: 'coming', color: '#ec4899' },
  { name: 'CaseReady', title: 'Lawyers & Advocates', description: 'Prepare for trial with AI playing judge, jury, or opposing counsel. Sharpen arguments and witness examination.', icon: '⚖️', status: 'coming', color: '#3b82f6' },
  { name: 'SetReady', title: 'Comedians & Speakers', description: 'Test your material on AI audiences. Refine timing, callbacks, and crowd work before hitting the real stage.', icon: '🎤', status: 'coming', color: '#8b5cf6' },
  { name: 'ThesisReady', title: 'Researchers & Academics', description: 'Defend your thesis, practice grant pitches, and rehearse conference presentations with challenging AI reviewers.', icon: '🔬', status: 'coming', color: '#06b6d4' },
  { name: 'HireReady', title: 'Job Candidates', description: 'Ace interviews with AI hiring managers. Practice behavioral questions, technical screens, and salary negotiations.', icon: '👔', status: 'coming', color: '#84cc16' },
  { name: 'BoardReady', title: 'Executives & Leaders', description: 'Prepare for board presentations, all-hands meetings, and crisis communications with executive-level AI feedback.', icon: '📊', status: 'coming', color: '#64748b' },
  { name: 'CareReady', title: 'Healthcare Professionals', description: 'Practice difficult conversations, patient consultations, and delivering complex diagnoses with empathy and clarity.', icon: '🩺', status: 'coming', color: '#ef4444' },
];

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', vertical: '', otherVertical: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          vertical: formData.vertical === 'other' ? formData.otherVertical : formData.vertical,
        }),
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to join waitlist');
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif', fontSize: '20px', lineHeight: 1.6 }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-150px', left: '20%', width: '500px', height: '500px', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '50%', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-150px', right: '20%', width: '400px', height: '400px', background: 'rgba(249, 115, 22, 0.12)', borderRadius: '50%', filter: 'blur(120px)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero */}
        <section style={{ padding: '120px 40px 100px', textAlign: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Brand */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '14px 28px', marginBottom: '56px', borderRadius: '9999px', border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.1)' }}>
            <span style={{ width: '14px', height: '14px', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ color: '#fbbf24', fontSize: '20px', fontWeight: 600, letterSpacing: '0.15em' }}>REHEARSALS.AI</span>
          </div>

          {/* Headline - 5x body text */}
          <h1 style={{ fontSize: 'clamp(64px, 14vw, 110px)', fontWeight: 300, margin: '0 0 48px', lineHeight: 1.05 }}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.9)' }}>From Backstage</span>
            <span style={{ display: 'block', background: 'linear-gradient(90deg, #f59e0b, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>To Spotlight Ready</span>
          </h1>

          {/* Subheadline - 1.5x body text */}
          <p style={{ fontSize: '30px', color: 'rgba(255,255,255,0.6)', maxWidth: '900px', margin: '0 auto 72px', lineHeight: 1.6 }}>
            AI-powered voice coaches that play your toughest audience. Practice, get scored, and perfect your performance before the moment that matters.
          </p>

          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '28px', maxWidth: '1000px', margin: '0 auto 72px' }}>
            {[
              { num: '01', label: 'Choose your journey', icon: '🎯' },
              { num: '02', label: 'Practice with AI', icon: '🎙️' },
              { num: '03', label: 'Get scored & coached', icon: '📈' },
              { num: '04', label: 'Perform with confidence', icon: '✨' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', padding: '32px 28px', borderRadius: '24px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '48px' }}>{step.icon}</span>
                <span style={{ color: '#f59e0b', fontSize: '18px', fontFamily: 'monospace', fontWeight: 600 }}>{step.num}</span>
                <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '20px', textAlign: 'center', fontWeight: 500 }}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://raiseready-template.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '14px', padding: '22px 48px', background: 'linear-gradient(90deg, #f59e0b, #f97316)', borderRadius: '9999px', color: 'black', fontWeight: 600, fontSize: '22px', textDecoration: 'none', boxShadow: '0 12px 48px rgba(245, 158, 11, 0.35)' }}
          >
            See RaiseReady Live
            <span style={{ fontSize: '24px' }}>→</span>
          </a>
        </section>

        {/* Platforms */}
        <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            {/* Section heading - 3x body text */}
            <h2 style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 300, margin: '0 0 28px' }}>
              Every Performance Has a <span style={{ color: '#f59e0b' }}>Stage</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '800px', margin: '0 auto', fontSize: '24px', lineHeight: 1.7 }}>
              Choose your arena. Each platform is tailored with domain-specific coaching, scoring rubrics, and AI personas.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '32px' }}>
            {verticals.map((v) => (
              <div key={v.name} style={{ position: 'relative', padding: '36px', borderRadius: '28px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s' }}>
                {/* Badge */}
                <div style={{ position: 'absolute', top: '28px', right: '28px' }}>
                  {v.status === 'live' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '10px 18px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontSize: '16px', fontWeight: 600 }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                      LIVE
                    </span>
                  ) : (
                    <span style={{ padding: '10px 18px', borderRadius: '9999px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.4)', fontSize: '14px', fontWeight: 600 }}>
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '36px', marginBottom: '28px', boxShadow: `0 10px 32px ${v.color}50` }}>
                  {v.icon}
                </div>

                {/* Content */}
                {/* Card title - 1.6x body text */}
                <h3 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 10px', color: 'white' }}>{v.name}</h3>
                <p style={{ fontSize: '20px', color: 'rgba(245, 158, 11, 0.9)', margin: '0 0 18px', fontWeight: 500 }}>{v.title}</p>
                {/* Card body - same as base */}
                <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.55)', margin: 0, lineHeight: 1.7 }}>{v.description}</p>

                {v.status === 'live' && v.liveUrl && (
                  <a href={v.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginTop: '24px', color: '#fbbf24', fontSize: '20px', fontWeight: 600, textDecoration: 'none' }}>
                    Try it now <span style={{ fontSize: '22px' }}>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section style={{ padding: '100px 40px', maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ padding: '56px', borderRadius: '36px', background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              {/* Form heading - 2.25x body text */}
              <h2 style={{ fontSize: '45px', fontWeight: 300, margin: '0 0 18px' }}>
                Join the <span style={{ color: '#f59e0b' }}>Waitlist</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '22px', margin: 0 }}>Be first to access your platform when it launches.</p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: '80px', height: '80px', margin: '0 auto 28px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontSize: '36px' }}>✓</div>
                <h3 style={{ fontSize: '32px', fontWeight: 600, margin: '0 0 14px' }}>You&apos;re on the list!</h3>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '20px', margin: 0 }}>We&apos;ll be in touch when your platform is ready.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '20px', color: 'rgba(255,255,255,0.65)', marginBottom: '12px', fontWeight: 500 }}>Your name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Smith" style={{ width: '100%', padding: '20px 22px', borderRadius: '18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '20px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '20px', color: 'rgba(255,255,255,0.65)', marginBottom: '12px', fontWeight: 500 }}>Email address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" style={{ width: '100%', padding: '20px 22px', borderRadius: '18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '20px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '20px', color: 'rgba(255,255,255,0.65)', marginBottom: '12px', fontWeight: 500 }}>Which platform interests you?</label>
                  <select required value={formData.vertical} onChange={(e) => setFormData({ ...formData, vertical: e.target.value })} style={{ width: '100%', padding: '20px 22px', borderRadius: '18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '20px', outline: 'none', cursor: 'pointer' }}>
                    <option value="" disabled style={{ background: '#0a0a0f' }}>Select a platform...</option>
                    {verticals.map((v) => (
                      <option key={v.name} value={v.name} style={{ background: '#0a0a0f' }}>{v.name} - {v.title}</option>
                    ))}
                    <option value="other" style={{ background: '#0a0a0f' }}>Other</option>
                  </select>
                </div>
                {formData.vertical === 'other' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '20px', color: 'rgba(255,255,255,0.65)', marginBottom: '12px', fontWeight: 500 }}>Describe your use case</label>
                    <input type="text" required value={formData.otherVertical} onChange={(e) => setFormData({ ...formData, otherVertical: e.target.value })} placeholder="e.g., Teacher training..." style={{ width: '100%', padding: '20px 22px', borderRadius: '18px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '20px', outline: 'none' }} />
                  </div>
                )}
                {error && <div style={{ padding: '18px', borderRadius: '18px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', fontSize: '20px' }}>{error}</div>}
                <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '22px', background: 'linear-gradient(90deg, #f59e0b, #f97316)', borderRadius: '18px', border: 'none', color: 'black', fontWeight: 600, fontSize: '22px', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.6 : 1, boxShadow: '0 10px 32px rgba(245, 158, 11, 0.3)' }}>
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '64px 40px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '48px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '28px', fontSize: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', color: 'rgba(255,255,255,0.45)' }}>
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
              REHEARSALS.AI
            </div>
            <span style={{ color: 'rgba(255,255,255,0.3)' }}>© 2024 RehearsalsAI. Powered by Corporate AI Solutions.</span>
            <a href="https://raiseready-template.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245, 158, 11, 0.75)', textDecoration: 'none', fontWeight: 500 }}>See RaiseReady →</a>
          </div>
        </footer>
      </div>
    </div>
  );
}