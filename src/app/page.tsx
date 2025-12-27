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
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0a0f', color: 'white', fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '-150px', left: '20%', width: '500px', height: '500px', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '50%', filter: 'blur(120px)' }} />
        <div style={{ position: 'absolute', bottom: '-150px', right: '20%', width: '400px', height: '400px', background: 'rgba(249, 115, 22, 0.12)', borderRadius: '50%', filter: 'blur(120px)' }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Hero */}
        <section style={{ padding: '80px 24px 60px', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {/* Brand */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', marginBottom: '32px', borderRadius: '9999px', border: '1px solid rgba(245, 158, 11, 0.3)', background: 'rgba(245, 158, 11, 0.1)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ color: '#fbbf24', fontSize: '13px', fontWeight: 500, letterSpacing: '0.1em' }}>REHEARSALS.AI</span>
          </div>

          {/* Headline */}
          <h1 style={{ fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 300, margin: '0 0 24px', lineHeight: 1.1 }}>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.9)' }}>From Backstage</span>
            <span style={{ display: 'block', background: 'linear-gradient(90deg, #f59e0b, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>To Spotlight Ready</span>
          </h1>

          {/* Subheadline */}
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            AI-powered voice coaches that play your toughest audience. Practice, get scored, and perfect your performance before the moment that matters.
          </p>

          {/* Steps */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', maxWidth: '700px', margin: '0 auto 48px' }}>
            {[
              { num: '01', label: 'Choose your journey', icon: '🎯' },
              { num: '02', label: 'Practice with AI', icon: '🎙️' },
              { num: '03', label: 'Get scored & coached', icon: '📈' },
              { num: '04', label: 'Perform with confidence', icon: '✨' },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '20px 16px', borderRadius: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <span style={{ fontSize: '24px' }}>{step.icon}</span>
                <span style={{ color: '#f59e0b', fontSize: '11px', fontFamily: 'monospace' }}>{step.num}</span>
                <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', textAlign: 'center' }}>{step.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://raiseready-template.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: 'linear-gradient(90deg, #f59e0b, #f97316)', borderRadius: '9999px', color: 'black', fontWeight: 600, fontSize: '16px', textDecoration: 'none', boxShadow: '0 10px 40px rgba(245, 158, 11, 0.3)' }}
          >
            See RaiseReady Live
            <span>→</span>
          </a>
        </section>

        {/* Platforms */}
        <section style={{ padding: '60px 24px', maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 300, margin: '0 0 16px' }}>
              Every Performance Has a <span style={{ color: '#f59e0b' }}>Stage</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.4)', maxWidth: '500px', margin: '0 auto' }}>
              Choose your arena. Each platform is tailored with domain-specific coaching, scoring rubrics, and AI personas.
            </p>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {verticals.map((v) => (
              <div key={v.name} style={{ position: 'relative', padding: '24px', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s' }}>
                {/* Badge */}
                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  {v.status === 'live' ? (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 10px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', fontSize: '11px', fontWeight: 500 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981' }} />
                      LIVE
                    </span>
                  ) : (
                    <span style={{ padding: '4px 10px', borderRadius: '9999px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: 500 }}>
                      COMING SOON
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: v.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px', boxShadow: `0 8px 24px ${v.color}40` }}>
                  {v.icon}
                </div>

                {/* Content */}
                <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 4px', color: 'white' }}>{v.name}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(245, 158, 11, 0.8)', margin: '0 0 12px', fontWeight: 500 }}>{v.title}</p>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', margin: 0, lineHeight: 1.5 }}>{v.description}</p>

                {v.status === 'live' && v.liveUrl && (
                  <a href={v.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '16px', color: '#fbbf24', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                    Try it now <span>↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Waitlist */}
        <section style={{ padding: '60px 24px', maxWidth: '480px', margin: '0 auto' }}>
          <div style={{ padding: '32px', borderRadius: '24px', background: 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h2 style={{ fontSize: '28px', fontWeight: 300, margin: '0 0 8px' }}>
                Join the <span style={{ color: '#f59e0b' }}>Waitlist</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>Be first to access your platform when it launches.</p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 0' }}>
                <div style={{ width: '56px', height: '56px', margin: '0 auto 16px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34d399', fontSize: '24px' }}>✓</div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 8px' }}>You&apos;re on the list!</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '14px', margin: 0 }}>We&apos;ll be in touch when your platform is ready.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Your name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Jane Smith" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '15px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Email address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="jane@company.com" style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '15px', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Which platform interests you?</label>
                  <select required value={formData.vertical} onChange={(e) => setFormData({ ...formData, vertical: e.target.value })} style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '15px', outline: 'none', cursor: 'pointer' }}>
                    <option value="" disabled style={{ background: '#0a0a0f' }}>Select a platform...</option>
                    {verticals.map((v) => (
                      <option key={v.name} value={v.name} style={{ background: '#0a0a0f' }}>{v.name} - {v.title}</option>
                    ))}
                    <option value="other" style={{ background: '#0a0a0f' }}>Other</option>
                  </select>
                </div>
                {formData.vertical === 'other' && (
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '6px' }}>Describe your use case</label>
                    <input type="text" required value={formData.otherVertical} onChange={(e) => setFormData({ ...formData, otherVertical: e.target.value })} placeholder="e.g., Teacher training..." style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '15px', outline: 'none' }} />
                  </div>
                )}
                {error && <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#f87171', fontSize: '14px' }}>{error}</div>}
                <button type="submit" disabled={isSubmitting} style={{ width: '100%', padding: '16px', background: 'linear-gradient(90deg, #f59e0b, #f97316)', borderRadius: '12px', border: 'none', color: 'black', fontWeight: 600, fontSize: '16px', cursor: isSubmitting ? 'not-allowed' : 'pointer', opacity: isSubmitting ? 0.6 : 1, boxShadow: '0 8px 24px rgba(245, 158, 11, 0.25)' }}>
                  {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: '40px 24px', borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: '40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', fontSize: '13px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.3)' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f59e0b' }} />
              REHEARSALS.AI
            </div>
            <span style={{ color: 'rgba(255,255,255,0.2)' }}>© 2024 RehearsalsAI. Powered by Corporate AI Solutions.</span>
            <a href="https://raiseready-template.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(245, 158, 11, 0.6)', textDecoration: 'none' }}>See RaiseReady →</a>
          </div>
        </footer>
      </div>
    </div>
  );
}