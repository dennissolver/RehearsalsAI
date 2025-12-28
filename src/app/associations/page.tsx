'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Users, 
  DollarSign, 
  Building2, 
  Sparkles,
  Clock,
  Target,
  TrendingUp,
  Lightbulb,
  Calendar,
  CheckCircle2,
  Rocket,
  Briefcase,
  Theater,
  Scale,
  Mic,
  FlaskConical,
  UserCheck,
  PieChart,
  Stethoscope
} from 'lucide-react';

const platforms = [
  { name: 'SalesReady', audience: 'Sales professionals', scenarios: 'Discovery, demos, negotiations', icon: Briefcase, gradient: 'from-blue-500 to-cyan-500' },
  { name: 'PartReady', audience: 'Actors & performers', scenarios: 'Auditions, scene work, callbacks', icon: Theater, gradient: 'from-pink-500 to-rose-500' },
  { name: 'CaseReady', audience: 'Lawyers & advocates', scenarios: 'Opening/closing, cross-exam', icon: Scale, gradient: 'from-amber-500 to-yellow-500' },
  { name: 'HireReady', audience: 'Job seekers', scenarios: 'Behavioral, technical, salary', icon: UserCheck, gradient: 'from-green-500 to-emerald-500' },
];

const additionalPlatforms = [
  { name: 'RaiseReady', audience: 'Founders' },
  { name: 'SetReady', audience: 'Speakers' },
  { name: 'ThesisReady', audience: 'Academics' },
  { name: 'BoardReady', audience: 'Executives' },
  { name: 'CareReady', audience: 'Healthcare' },
];

const partnershipModels = [
  { 
    title: 'Member Benefit', 
    description: 'Discounted or free access as a membership perk—drives retention',
    icon: Users,
    gradient: 'from-violet-500 to-purple-500'
  },
  { 
    title: 'Revenue Share', 
    description: 'Earn a percentage of member subscriptions—creates non-dues revenue',
    icon: DollarSign,
    gradient: 'from-emerald-500 to-green-500'
  },
  { 
    title: 'White-Label', 
    description: 'Your brand on the platform—strengthens association identity',
    icon: Building2,
    gradient: 'from-blue-500 to-indigo-500'
  },
  { 
    title: 'Free Pilot', 
    description: 'Test with a member cohort before committing—zero risk',
    icon: Sparkles,
    gradient: 'from-amber-500 to-orange-500'
  },
];

const memberBenefits = [
  { icon: Target, text: 'Unlimited practice sessions with AI personas tailored to their profession' },
  { icon: TrendingUp, text: 'Real-time scoring on delivery, content, objection handling, and emotional impact' },
  { icon: Lightbulb, text: 'Personalized coaching that adapts to their skill level and goals' },
  { icon: Clock, text: '24/7 availability—practice at 2am before a 9am audition' },
  { icon: CheckCircle2, text: 'Progress tracking to measure improvement over time' },
];

const whyPartner = [
  { title: 'Member Value', description: 'Tangible skill development that helps members succeed professionally', gradient: 'from-violet-600 to-purple-600' },
  { title: 'Non-Dues Revenue', description: 'New income stream without raising membership fees', gradient: 'from-emerald-600 to-green-600' },
  { title: 'Differentiation', description: "Cutting-edge AI offering competing associations don't have", gradient: 'from-blue-600 to-cyan-600' },
  { title: 'Easy Implementation', description: 'Turnkey solution—announce and go, no IT integration required', gradient: 'from-amber-600 to-orange-600' },
];

const nextSteps = [
  { step: 1, title: '15-minute intro call', description: "to understand your members' needs" },
  { step: 2, title: 'Live demo', description: 'of the platform tailored to your vertical' },
  { step: 3, title: 'Pilot proposal', description: 'with member cohort and success metrics' },
];

export default function AssociationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <main className="relative z-10 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Association Partnership Program
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif">
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                RehearsalsAI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Help your members practice high-stakes conversations with AI—auditions, pitches, negotiations, interviews—so they perform with confidence when it matters most.
            </p>
          </header>

          {/* The Opportunity */}
          <section className="mb-20">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400 font-serif">The Opportunity</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Your members face high-pressure moments that define their careers: investor pitches, auditions, sales calls, courtroom arguments, job interviews. The difference between success and failure often comes down to practice—but realistic practice partners are expensive, scarce, and inconvenient.
              </p>
              <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl p-6 border border-amber-500/30">
                <p className="text-lg font-semibold text-white mb-2">RehearsalsAI solves this.</p>
                <p className="text-slate-300">
                  Our AI voice coaches play the toughest audience—VCs, casting directors, hiring managers, opposing counsel—providing instant, personalized feedback and scoring so members can rehearse anytime, anywhere.
                </p>
              </div>
            </div>
          </section>

          {/* What Your Members Get */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif">What Your Members Get</h2>
            <div className="grid gap-4">
              {memberBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-5 border border-slate-700/50 hover:border-amber-500/30 transition-all"
                >
                  <div className="p-2 rounded-lg bg-amber-500/10">
                    <benefit.icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="text-slate-200">{benefit.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Purpose-Built Platforms */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif">Purpose-Built for Your Members</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {platforms.map((platform) => (
                <div 
                  key={platform.name}
                  className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${platform.gradient}`}>
                      <platform.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{platform.name}</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-1">For: <span className="text-slate-300">{platform.audience}</span></p>
                  <p className="text-slate-400 text-sm">Practice: <span className="text-slate-300">{platform.scenarios}</span></p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-slate-400 italic">
                Additional platforms: {additionalPlatforms.map(p => `${p.name} (${p.audience})`).join(', ')}
              </p>
            </div>
          </section>

          {/* Partnership Models */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif">Partnership Models</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {partnershipModels.map((model) => (
                <div 
                  key={model.title}
                  className="group bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600 transition-all"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${model.gradient} mb-4`}>
                    <model.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{model.title}</h3>
                  <p className="text-slate-400">{model.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Associations Partner */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif">Why Associations Partner With Us</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {whyPartner.map((reason) => (
                <div 
                  key={reason.title}
                  className={`bg-gradient-to-br ${reason.gradient} rounded-xl p-6`}
                >
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/90">{reason.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center font-serif">Next Steps</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-stretch">
              {nextSteps.map((item) => (
                <div 
                  key={item.step}
                  className="flex-1 bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber-500 text-slate-900 font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl p-8 md:p-12 border border-amber-500/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-serif">Ready to explore?</h2>
              <p className="text-slate-300 mb-8 text-lg">
                Book a 15-minute call to discuss how RehearsalsAI can benefit your members.
              </p>
              <a 
                href="https://www.calendly.com/mcmdennis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl text-slate-900 font-bold text-lg hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
              >
                <Calendar className="w-5 h-5" />
                Schedule a Call
              </a>
              <p className="text-slate-400 mt-6 text-sm">
                rehearsals-ai.vercel.app
              </p>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} RehearsalsAI. Powered by Corporate AI Solutions.
        </div>
      </footer>
    </div>
  );
}
