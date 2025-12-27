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
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    name: 'SalesReady',
    title: 'Sales Executives',
    description: 'Rehearse discovery calls, demos, and negotiations. Get scored on objection handling, value articulation, and closing techniques.',
    icon: '💼',
    status: 'coming',
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'PartReady',
    title: 'Actors & Performers',
    description: 'Run lines with AI scene partners. Practice auditions, nail character work, and get feedback on emotional authenticity.',
    icon: '🎭',
    status: 'coming',
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    name: 'CaseReady',
    title: 'Lawyers & Advocates',
    description: 'Prepare for trial with AI playing judge, jury, or opposing counsel. Sharpen arguments and witness examination.',
    icon: '⚖️',
    status: 'coming',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'SetReady',
    title: 'Comedians & Speakers',
    description: 'Test your material on AI audiences. Refine timing, callbacks, and crowd work before hitting the real stage.',
    icon: '🎤',
    status: 'coming',
    gradient: 'from-purple-500 to-violet-600',
  },
  {
    name: 'ThesisReady',
    title: 'Researchers & Academics',
    description: 'Defend your thesis, practice grant pitches, and rehearse conference presentations with challenging AI reviewers.',
    icon: '🔬',
    status: 'coming',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'HireReady',
    title: 'Job Candidates',
    description: 'Ace interviews with AI hiring managers. Practice behavioral questions, technical screens, and salary negotiations.',
    icon: '👔',
    status: 'coming',
    gradient: 'from-lime-500 to-green-600',
  },
  {
    name: 'BoardReady',
    title: 'Executives & Leaders',
    description: 'Prepare for board presentations, all-hands meetings, and crisis communications with executive-level AI feedback.',
    icon: '📊',
    status: 'coming',
    gradient: 'from-slate-400 to-zinc-500',
  },
  {
    name: 'CareReady',
    title: 'Healthcare Professionals',
    description: 'Practice difficult conversations, patient consultations, and delivering complex diagnoses with empathy and clarity.',
    icon: '🩺',
    status: 'coming',
    gradient: 'from-red-500 to-pink-600',
  },
];

const steps = [
  { num: '01', label: 'Choose your journey', icon: '🎯' },
  { num: '02', label: 'Practice with AI', icon: '🎙️' },
  { num: '03', label: 'Get scored & coached', icon: '📈' },
  { num: '04', label: 'Perform with confidence', icon: '✨' },
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
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-200px] left-1/4 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-200px] right-1/4 w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[150px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="px-6 pt-16 pb-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Brand Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-amber-500/30 bg-amber-500/10">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-amber-400 text-sm font-medium tracking-wider">REHEARSALS.AI</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
              <span className="block text-white/90" style={{ fontFamily: 'Georgia, serif' }}>From Backstage</span>
              <span className="block mt-1 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent" style={{ fontFamily: 'Georgia, serif' }}>
                To Spotlight Ready
              </span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/50 mb-12 leading-relaxed">
              AI-powered voice coaches that play your toughest audience. Practice, get scored, and perfect your performance before the moment that matters.
            </p>

            {/* Steps */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span className="text-amber-500 text-xs font-mono">{step.num}</span>
                  <span className="text-white/70 text-sm text-center">{step.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://raiseready-template.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-black font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-amber-500/30"
            >
              See RaiseReady Live
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="px-6 py-20">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                Every Performance Has a <span className="text-amber-400">Stage</span>
              </h2>
              <p className="text-white/40 max-w-xl mx-auto">
                Choose your arena. Each platform is tailored with domain-specific coaching, scoring rubrics, and AI personas.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {verticals.map((v) => (
                <div
                  key={v.name}
                  className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
                >
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    {v.status === 'live' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/30 text-xs font-medium">
                        COMING SOON
                      </span>
                    )}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${v.gradient} flex items-center justify-center text-xl mb-4 shadow-lg`}>
                    {v.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-1">{v.name}</h3>
                  <p className="text-amber-500/80 text-sm font-medium mb-3">{v.title}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{v.description}</p>

                  {/* Live Link */}
                  {v.status === 'live' && v.liveUrl && (
                    <a
                      href={v.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-amber-400 text-sm font-medium hover:text-amber-300 transition-colors"
                    >
                      Try it now
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
        <section className="px-6 py-20">
          <div className="max-w-lg mx-auto">
            <div className="p-8 rounded-3xl bg-gradient-to-b from-white/10 to-white/5 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-light mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  Join the <span className="text-amber-400">Waitlist</span>
                </h2>
                <p className="text-white/40 text-sm">
                  Be first to access your performance platform when it launches.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">You&apos;re on the list!</h3>
                  <p className="text-white/40 text-sm">We&apos;ll be in touch when your platform is ready.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-1.5">Your name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="Jane Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-1.5">Email address</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="vertical" className="block text-sm text-white/60 mb-1.5">Which platform interests you?</label>
                    <select
                      id="vertical"
                      required
                      value={formData.vertical}
                      onChange={(e) => setFormData({ ...formData, vertical: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-amber-500/50 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-[#0a0a0f]">Select a platform...</option>
                      {verticals.map((v) => (
                        <option key={v.name} value={v.name} className="bg-[#0a0a0f]">
                          {v.name} - {v.title}
                        </option>
                      ))}
                      <option value="other" className="bg-[#0a0a0f]">Other (tell us below)</option>
                    </select>
                  </div>

                  {formData.vertical === 'other' && (
                    <div>
                      <label htmlFor="otherVertical" className="block text-sm text-white/60 mb-1.5">Describe your use case</label>
                      <input
                        type="text"
                        id="otherVertical"
                        required
                        value={formData.otherVertical}
                        onChange={(e) => setFormData({ ...formData, otherVertical: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-amber-500/50 transition-colors"
                        placeholder="e.g., Teacher training, Podcast interviews..."
                      />
                    </div>
                  )}

                  {error && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-black font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-amber-500/20"
                  >
                    {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-10 border-t border-white/10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-white/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>REHEARSALS.AI</span>
            </div>
            <p className="text-white/20">© 2024 RehearsalsAI. Powered by Corporate AI Solutions.</p>
            <a
              href="https://raiseready-template.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-500/60 hover:text-amber-400 transition-colors"
            >
              See RaiseReady in action →
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
