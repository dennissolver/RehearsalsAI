'use client';

import { useState } from 'react';

const verticals = [
  {
    name: 'RaiseReady',
    title: 'Founders & Fundraising',
    description: 'Perfect your investor pitch. AI coaches play the VC, scoring your delivery, emotional transfer, and investment readiness.',
    icon: '🚀',
    status: 'live',
    liveUrl: 'https://raiseready-template.vercel.app',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'SalesReady',
    title: 'Sales Executives',
    description: 'Rehearse discovery calls, demos, and negotiations. Get scored on objection handling, value articulation, and closing techniques.',
    icon: '💼',
    status: 'coming',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'PartReady',
    title: 'Actors & Performers',
    description: 'Run lines with AI scene partners. Practice auditions, nail character work, and get feedback on emotional authenticity.',
    icon: '🎭',
    status: 'coming',
    color: 'from-pink-500 to-rose-600',
  },
  {
    name: 'CaseReady',
    title: 'Lawyers & Advocates',
    description: 'Prepare for trial with AI playing judge, jury, or opposing counsel. Sharpen arguments and witness examination.',
    icon: '⚖️',
    status: 'coming',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'SetReady',
    title: 'Comedians & Speakers',
    description: 'Test your material on AI audiences. Refine timing, callbacks, and crowd work before hitting the real stage.',
    icon: '🎤',
    status: 'coming',
    color: 'from-purple-500 to-violet-600',
  },
  {
    name: 'ThesisReady',
    title: 'Researchers & Academics',
    description: 'Defend your thesis, practice grant pitches, and rehearse conference presentations with challenging AI reviewers.',
    icon: '🔬',
    status: 'coming',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'HireReady',
    title: 'Job Candidates',
    description: 'Ace interviews with AI hiring managers. Practice behavioral questions, technical screens, and salary negotiations.',
    icon: '👔',
    status: 'coming',
    color: 'from-lime-500 to-green-600',
  },
  {
    name: 'BoardReady',
    title: 'Executives & Leaders',
    description: 'Prepare for board presentations, all-hands meetings, and crisis communications with executive-level AI feedback.',
    icon: '📊',
    status: 'coming',
    color: 'from-slate-500 to-zinc-600',
  },
  {
    name: 'CareReady',
    title: 'Healthcare Professionals',
    description: 'Practice difficult conversations, patient consultations, and delivering complex diagnoses with empathy and clarity.',
    icon: '🩺',
    status: 'coming',
    color: 'from-red-500 to-pink-600',
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vertical: '',
    otherVertical: '',
  });
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
    <main className="min-h-screen bg-[#0a0a14] text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-amber-500/5 via-transparent to-orange-500/5 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full border border-amber-500/30 bg-amber-500/5 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-amber-500 animate-pulse" />
            <span className="font-mono text-amber-400 tracking-wider text-sm">REHEARSALS.AI</span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            <span className="block text-white/90">From Backstage</span>
            <span className="block mt-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              To Spotlight Ready
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-12">
            AI-powered voice coaches that play your toughest audience. 
            Practice, get scored, and perfect your performance before the moment that matters.
          </p>

          {/* How it works */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
            {[
              { step: '01', label: 'Choose your journey', icon: '🎯' },
              { step: '02', label: 'Practice with AI', icon: '🎙️' },
              { step: '03', label: 'Get scored & coached', icon: '📈' },
              { step: '04', label: 'Perform with confidence', icon: '✨' },
            ].map((item, i) => (
              <div 
                key={item.step}
                className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all duration-300"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div className="text-left">
                  <div className="font-mono text-xs text-amber-500">{item.step}</div>
                  <div className="text-sm text-white/80">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Live example CTA */}
          <a
            href="https://raiseready-template.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-black font-semibold text-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105"
          >
            <span>See RaiseReady Live</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4">
              Every Performance Has a <span className="text-amber-400">Stage</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Choose your arena. Each platform is tailored with domain-specific coaching, scoring rubrics, and AI personas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verticals.map((vertical, index) => (
              <div
                key={vertical.name}
                className="group relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-500 hover:transform hover:scale-[1.02] hover:bg-white/[0.05]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Status badge */}
                {vertical.status === 'live' ? (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-medium text-emerald-400">LIVE</span>
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <span className="text-xs font-medium text-white/40">COMING SOON</span>
                  </div>
                )}

                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${vertical.color} mb-4 text-2xl shadow-lg`}>
                  {vertical.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold mb-1 text-white group-hover:text-amber-400 transition-colors">
                  {vertical.name}
                </h3>
                <p className="text-sm text-amber-500/80 mb-3 font-medium">{vertical.title}</p>
                <p className="text-white/50 text-sm leading-relaxed">{vertical.description}</p>

                {/* Action link for live vertical */}
                {vertical.status === 'live' && vertical.liveUrl && (
                  <a
                    href={vertical.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                  >
                    <span>Try it now</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm">
            {/* Spotlight effect */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[200px] bg-amber-500/20 rounded-full blur-[80px]" />
            
            <div className="relative text-center mb-8">
              <h2 className="font-serif text-3xl md:text-4xl font-light mb-3">
                Join the <span className="text-amber-400">Waitlist</span>
              </h2>
              <p className="text-white/50">
                Be first to access your performance platform when it launches.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-4">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">You&apos;re on the list!</h3>
                <p className="text-white/50">We&apos;ll be in touch when your platform is ready for rehearsal.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="vertical" className="block text-sm font-medium text-white/70 mb-2">
                    Which platform interests you most?
                  </label>
                  <select
                    id="vertical"
                    required
                    value={formData.vertical}
                    onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#0a0a14]">Select a platform...</option>
                    {verticals.map((v) => (
                      <option key={v.name} value={v.name} className="bg-[#0a0a14]">
                        {v.name} - {v.title}
                      </option>
                    ))}
                    <option value="other" className="bg-[#0a0a14]">Other (tell us below)</option>
                  </select>
                </div>

                {formData.vertical === 'other' && (
                  <div>
                    <label htmlFor="otherVertical" className="block text-sm font-medium text-white/70 mb-2">
                      Describe your use case
                    </label>
                    <input
                      type="text"
                      id="otherVertical"
                      required
                      value={formData.otherVertical}
                      onChange={(e) => setFormData({ ...formData, otherVertical: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all"
                      placeholder="e.g., Teacher training, Podcast interviews..."
                    />
                  </div>
                )}

                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-black font-semibold text-lg hover:from-amber-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Joining...</span>
                    </span>
                  ) : (
                    'Join the Waitlist'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="font-mono text-sm text-white/40">REHEARSALS.AI</span>
          </div>
          <p className="text-white/30 text-sm">
            © 2024 RehearsalsAI. Powered by Corporate AI Solutions.
          </p>
          <a
            href="https://raiseready-template.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-500/70 hover:text-amber-400 text-sm transition-colors"
          >
            See RaiseReady in action →
          </a>
        </div>
      </footer>
    </main>
  );
}
