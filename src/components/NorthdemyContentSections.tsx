import React, { useState } from 'react';
import {
  Code,
  Shield,
  Rocket,
  Users,
  Lightbulb,
  GraduationCap,
  TrendingUp,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Quote,
  Building2,
  Sparkles,
} from 'lucide-react';
import { NorthdemyLogo } from './Logos';

interface SectionProps {
  onOpenApply: () => void;
  onOpenPartner: () => void;
}

export const NorthdemyContentSections: React.FC<SectionProps> = ({
  onOpenApply,
  onOpenPartner,
}) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterSubmitted(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <div className="relative z-10 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 pt-16 pb-20">
      {/* 1. ABOUT & JIGAWA STATE TECH HUB */}
      <section id="about" className="relative scroll-mt-24">
        <div className="bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A Leading Innovation Hub in Northern Nigeria</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl">
            Building a Thriving Tech Ecosystem in Jigawa State & Beyond
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-8 text-zinc-300 text-sm sm:text-base leading-relaxed">
            <div className="space-y-4">
              <p>
                As an established innovation hub in Northern Nigeria, <strong className="text-white">NorthDemy</strong> provides a platform where aspiring technologists, entrepreneurs, and innovators can learn, collaborate, and build impactful solutions.
              </p>
              <p>
                Across Northern Nigeria, many talented individuals and entrepreneurs face challenges such as limited access to technology education, mentorship, and startup support. NorthDemy was created to address these challenges by building a thriving ecosystem where digital skills, entrepreneurship, and innovation can flourish.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                Located in <strong className="text-white">Jigawa State</strong>, NorthDemy has grown into a recognized tech hub in Jigawa State that connects talent, technology, and opportunity. Entrepreneurs, students, and professionals regularly participate in workshops, hackathons, and innovation programs organized by the hub.
              </p>
              <p>
                The goal of NorthDemy is not just to provide education but to serve as a catalyst for innovation across Northern Nigeria, equipping people with the tools and knowledge needed to compete in the global digital economy.
              </p>
            </div>
          </div>

          {/* 4 Pillars from northdemy.com */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-white/10">
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-center">
              <Building2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Enterprise Partnerships</div>
              <div className="text-[11px] text-zinc-400 mt-1">Direct corporate channels</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-center">
              <Rocket className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">Investor-Grade Incubation</div>
              <div className="text-[11px] text-zinc-400 mt-1">From MVP to seed round</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-center">
              <GraduationCap className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">International Standards</div>
              <div className="text-[11px] text-zinc-400 mt-1">ISO aligned certifications</div>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 text-center">
              <Shield className="w-6 h-6 text-purple-400 mx-auto mb-2" />
              <div className="text-xs font-bold text-white">End-to-End Digital Safety</div>
              <div className="text-[11px] text-zinc-400 mt-1">Cybersecurity protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section id="service" className="relative scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Comprehensive Solutions for Enterprises & Founders</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Comprehensive Solutions for Digital Growth
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
            From talent development to startup acceleration, we provide the complete ecosystem for digital innovation and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">Software Development</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Custom software engineering for startups, enterprises, and public institutions. We build high-throughput web systems, mobile applications, and cloud architecture.
              </p>
            </div>
            <button
              onClick={onOpenPartner}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Build with Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 2 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl hover:border-emerald-500/50 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(16,185,129,0.25)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">Cybersecurity Services</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Comprehensive cybersecurity training and digital protection solutions. Vulnerability assessments, data protection compliance, and threat mitigation.
              </p>
            </div>
            <button
              onClick={onOpenPartner}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <span>Secure Your Systems</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 3 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(99,102,241,0.25)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">Startup Incubation</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                End-to-end support for early-stage startups from ideation to funding readiness. Access technical co-builders, legal advisory, and pre-seed networks.
              </p>
            </div>
            <button
              onClick={onOpenApply}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Apply for Incubation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 4 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(168,85,247,0.25)] transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">Corporate Training</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Custom training solutions for organizations to upskill their workforce in AI adoption, cybersecurity hygiene, modern cloud tools, and DevOps.
              </p>
            </div>
            <button
              onClick={onOpenPartner}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
            >
              <span>Inquire Corporate Training</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service 5 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-xl hover:border-cyan-500/50 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(6,182,212,0.25)] transition-all flex flex-col justify-between lg:col-span-2 group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Strategic Technology Advisory</h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Strategic technology advisory for enterprises and government agencies. Modernize legacy infrastructure, architect cloud platforms, and accelerate regional e-governance solutions across Northern Nigeria.
              </p>
            </div>
            <button
              onClick={onOpenPartner}
              className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Book Strategic Session</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. STARTUP INCUBATION JOURNEY */}
      <section id="project" className="relative scroll-mt-24">
        <div className="bg-gradient-to-b from-[#101422]/90 to-[#0a0d14]/90 border border-blue-500/20 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase font-bold tracking-widest text-blue-400">
              Incubation Pipeline
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mt-2">
              Transform Your Startup Into a Success Story
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
              Join our comprehensive incubation program designed to take your startup from ideation to investment-ready in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="futuristic-card bg-[#141824] border border-white/5 rounded-2xl p-5 relative hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_10px_30px_rgba(37,99,235,0.2)] transition-all">
              <span className="text-2xl font-black text-blue-500/40 font-mono">01</span>
              <h3 className="text-sm font-bold text-white mt-2">Refine Your Idea</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Refine your idea with expert guidance, customer interviews, and market validation across Nigeria.
              </p>
            </div>

            <div className="futuristic-card bg-[#141824] border border-white/5 rounded-2xl p-5 relative hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_10px_30px_rgba(99,102,241,0.2)] transition-all">
              <span className="text-2xl font-black text-indigo-500/40 font-mono">02</span>
              <h3 className="text-sm font-bold text-white mt-2">Build Your MVP</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Build your MVP with technical support, architecture reviews, and 1-on-1 engineering mentorship.
              </p>
            </div>

            <div className="futuristic-card bg-[#141824] border border-white/5 rounded-2xl p-5 relative hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_10px_30px_rgba(6,182,212,0.2)] transition-all">
              <span className="text-2xl font-black text-cyan-500/40 font-mono">03</span>
              <h3 className="text-sm font-bold text-white mt-2">Scale Your Startup</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Scale your startup with strategic business planning, legal compliance, and distribution resources.
              </p>
            </div>

            <div className="futuristic-card bg-[#141824] border border-white/5 rounded-2xl p-5 relative hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.2)] transition-all">
              <span className="text-2xl font-black text-emerald-500/40 font-mono">04</span>
              <h3 className="text-sm font-bold text-white mt-2">Secure Funding</h3>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Access angel investors, venture funds, and pitch at our regional demo day for seed expansion.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-xs text-zinc-300">
              <div><strong className="text-white text-base font-bold">50+</strong> Startups Supported</div>
              <div><strong className="text-white text-base font-bold">25+</strong> Active Investor Network</div>
            </div>
            <button
              onClick={onOpenApply}
              className="cyber-button bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Apply for Incubation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. TRAINING PROGRAMS (IN-DEMAND SKILLS) */}
      <section id="program" className="relative scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Training the Next Generation of Digital Talent</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Master In-Demand Digital Skills
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed">
            Master the most in-demand skills in the digital economy with our expert-led, industry-certified curriculum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-[0_12px_30px_rgba(37,99,235,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Software Development</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Full-Stack Web (React, Node.js, Python), Mobile App development, and API system integration.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-blue-400 font-medium">
              16 Weeks · Industry Certified
            </div>
          </div>

          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_12px_30px_rgba(99,102,241,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <Lightbulb className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Data Science and AI</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Applied Machine Learning, Data Analytics, Python for Data Science, and practical LLM fine-tuning.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-indigo-400 font-medium">
              16 Weeks · Capstone Portfolio
            </div>
          </div>

          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_12px_30px_rgba(16,185,129,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Cybersecurity</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Ethical Hacking, Network Defense, SOC analysis, and international digital safety compliance standards.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-emerald-400 font-medium">
              14 Weeks · Hands-on Labs
            </div>
          </div>

          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-2xl p-6 shadow-xl backdrop-blur-xl hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-[0_12px_30px_rgba(168,85,247,0.2)] transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Rocket className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Digital Entrepreneurship</h3>
            <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
              Tech product management, growth marketing, startup unit economics, and venture fundraising.
            </p>
            <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-purple-400 font-medium">
              12 Weeks · Pitch Showcase
            </div>
          </div>
        </div>

        {/* Corporate Banner Callout */}
        <div className="mt-8 bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-white">Need a Custom Corporate Training?</div>
            <div className="text-xs text-zinc-400 mt-0.5">
              We offer bespoke corporate training solutions tailored to your organization's specific needs and goals.
            </div>
          </div>
          <button
            onClick={onOpenPartner}
            className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl transition-all"
          >
            Inquire About Corporate Training
          </button>
        </div>
      </section>

      {/* 5. VERIFIED TESTIMONIALS FROM NORTHDEMY.COM */}
      <section className="relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[11px] uppercase font-bold tracking-widest text-blue-400">
            Ecosystem Impact
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-2">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Testimonial 1 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_15px_35px_rgba(37,99,235,0.25)] transition-all">
            <div>
              <Quote className="w-7 h-7 text-blue-500/40 mb-3" />
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                "NorthDemy's incubation program was transformative for our startup. Their mentorship and investor network helped us secure our seed funding within 6 months."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="text-xs font-bold text-white">CEO</div>
              <div className="text-[11px] text-blue-400">TechServe Nigeria</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.25)] transition-all">
            <div>
              <Quote className="w-7 h-7 text-emerald-500/40 mb-3" />
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                "The digital safety training program equipped our team with critical cybersecurity skills. We've seen a 70% reduction in security vulnerabilities."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="text-xs font-bold text-white">CTO</div>
              <div className="text-[11px] text-emerald-400">FinSecure Ltd</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="futuristic-card bg-[#0f1118]/85 border border-white/10 rounded-3xl p-6 shadow-xl backdrop-blur-xl flex flex-col justify-between hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_15px_35px_rgba(99,102,241,0.25)] transition-all">
            <div>
              <Quote className="w-7 h-7 text-indigo-500/40 mb-3" />
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                "As a government agency, partnering with NorthDemy has accelerated our digital transformation initiatives. Their expertise and professionalism are unmatched."
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5">
              <div className="text-xs font-bold text-white">Dr. Fatima Ibrahim</div>
              <div className="text-[11px] text-indigo-400">Director, Federal ICT Ministry</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION & NEWSLETTER */}
      <section className="relative">
        <div className="bg-gradient-to-r from-blue-900/40 via-[#101422]/90 to-blue-950/40 border border-blue-500/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl backdrop-blur-xl">
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-zinc-300 text-xs sm:text-sm max-w-xl mx-auto mt-3 leading-relaxed">
            Whether you're looking to upskill, launch a startup, or partner with us, we're here to help you succeed in the digital economy.
          </p>

          <form onSubmit={handleNewsletter} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-2.5">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-[#151926] border border-white/15 rounded-xl px-4 py-2.5 text-xs text-white outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="cyber-button bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shadow-md shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] cursor-pointer"
            >
              {newsletterSubmitted ? 'Thank you!' : 'Subscribe'}
            </button>
          </form>

          {newsletterSubmitted && (
            <div className="text-[11px] text-emerald-400 mt-2 font-medium">
              Thank you for subscribing! Check your inbox for updates.
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenApply}
              className="cyber-button bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.03] transition-all cursor-pointer"
            >
              <span>Apply for Cohort</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onOpenPartner}
              className="bg-white/10 hover:bg-white/20 hover:border-cyan-400 border border-white/10 text-white px-5 py-2.5 rounded-full text-xs font-semibold transition-all hover:scale-[1.02] cursor-pointer"
            >
              <span>Partner with NorthDemy</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. OFFICIAL FOOTER WITH ADDRESS & LEGAL WRITE-UPS */}
      <footer id="contact" className="pt-12 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-3">
            <div className="h-8 flex items-center">
              <NorthdemyLogo className="h-7 w-auto" variant="white" />
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Empowering Africa's Tech Ecosystem. Located in Jigawa State, NorthDemy is the premier technology hub in Northern Nigeria.
            </p>
          </div>

          {/* Col 2: Services */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Services</div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Software Development</li>
              <li>Cybersecurity Services</li>
              <li>Startup Incubation</li>
              <li>Corporate Training</li>
              <li>Technology Advisory</li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Programs</div>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>Software Development</li>
              <li>Data Science & AI</li>
              <li>Cybersecurity Training</li>
              <li>Digital Entrepreneurship</li>
              <li>Corporate Upskilling</li>
            </ul>
          </div>

          {/* Col 4: Official Contact from northdemy.com */}
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider mb-3">Contact & Location</div>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>No 14 Nana Plaza Opposite Sabon Gidan Galadiman Dutse, Jigawa, Nigeria</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>08099072748</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>info@northdemy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} NorthDemy Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-300 cursor-pointer">Terms of Service</span>
            <span className="hover:text-zinc-300 cursor-pointer">Security Compliance</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
