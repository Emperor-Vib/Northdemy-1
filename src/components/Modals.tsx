import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Zap, Globe2, Sparkles, Code, Cpu, Layers, BookOpen, Users, Mail, Phone, MapPin, Building } from 'lucide-react';
import { Currency } from './TransferWidgetCard';
import { NavItem } from './Navbar';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      {/* Modal Dialog */}
      <div className="relative rounded-3xl w-full max-w-lg p-6 sm:p-7 shadow-2xl z-10 animate-in fade-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto border bg-[#10131b] border-white/10 text-white shadow-blue-950/20">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h2 className="text-lg font-bold tracking-tight text-white">{title}</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

// "Apply Now" Modal for Northdemy
export const ApplyModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [track, setTrack] = useState('Software Engineering');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('Kano');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleReset} title={submitted ? 'Application Submitted!' : 'Apply to Northdemy Cohort'}>
      {submitted ? (
        <div className="text-center py-5 space-y-4">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Welcome to Northdemy!</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
              Your application for <strong className="text-white">{track}</strong> has been received. Our admissions team will email you screening details within 24 hours.
            </p>
          </div>
          <div className="bg-[#151924] border border-white/5 rounded-2xl p-3 text-xs text-zinc-400 font-mono">
            Candidate ID: ND-{Math.random().toString(36).substring(2, 8).toUpperCase()}
          </div>
          <button
            onClick={handleReset}
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2.5 rounded-xl text-xs font-semibold transition-all"
          >
            Done
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-zinc-400">
            Join the premier technology hub in Northern Nigeria empowering youth, entrepreneurs, and builders through intensive hands-on digital skills.
          </p>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Select Program Track</label>
            <select
              value={track}
              onChange={(e) => setTrack(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="Software Engineering">Software Engineering (Full-Stack & Cloud)</option>
              <option value="AI & Data Science">AI & Applied Machine Learning</option>
              <option value="Cybersecurity">Cybersecurity & Network Defense</option>
              <option value="Product Design">Product Design (UI/UX & Figma)</option>
              <option value="Mobile Development">Mobile Development (Flutter & React Native)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Full Name</label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500"
              placeholder="e.g. Aminu Bello"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500"
              placeholder="aminu@example.com"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Hub State / City</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="Kano">Kano Hub (Kano State)</option>
              <option value="Kaduna">Kaduna Hub (Kaduna State)</option>
              <option value="Abuja">Abuja Center (FCT)</option>
              <option value="Jos">Jos Hub (Plateau State)</option>
              <option value="Sokoto">Sokoto Center (Sokoto State)</option>
              <option value="Virtual">Virtual / Remote Cohort</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/30"
          >
            {isSubmitting ? (
              <span>Submitting Application...</span>
            ) : (
              <>
                <span>Submit Application for {track}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      )}
    </ModalWrapper>
  );
};

// "Partner" Modal for Northdemy
export const PartnerModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [partnerType, setPartnerType] = useState('Hire Tech Talent');
  const [orgName, setOrgName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={submitted ? 'Partnership Request Received' : 'Partner with Northdemy'}>
      {submitted ? (
        <div className="text-center py-6">
          <Sparkles className="w-10 h-10 text-blue-400 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">Thank You for Connecting!</h3>
          <p className="text-xs text-zinc-400 mt-1">Our partnerships director will reach out within 24 hours.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-xs text-zinc-400">
            Collaborate with Northern Nigeria's premier innovation ecosystem to hire vetted tech talent, sponsor scholarship cohorts, or co-build digital solutions.
          </p>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Partnership Model</label>
            <select
              value={partnerType}
              onChange={(e) => setPartnerType(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="Hire Tech Talent">Hire Vetted Software Engineers & Designers</option>
              <option value="Sponsor Cohort">Sponsor Youth & Women Scholarships</option>
              <option value="Startup Incubation">Venture Capital / Incubation Partner</option>
              <option value="Corporate R&D">Corporate Digital Transformation & R&D</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Organization / Company Name</label>
            <input
              type="text"
              required
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500"
              placeholder="e.g. Acme Global Tech / Innovation Fund"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Work Email</label>
            <input
              type="email"
              required
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500"
              placeholder="partner@company.com"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span>Initiate Partnership</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </ModalWrapper>
  );
};

// Generic Feature/Section Modal for Nav Items
export const SectionDetailModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  section: NavItem | null;
  onOpenApply: () => void;
}> = ({ isOpen, onClose, section, onOpenApply }) => {
  if (!section) return null;

  const contentMap: Record<NavItem, { title: string; subtitle: string; icon: React.ReactNode; items: { label: string; desc: string }[] }> = {
    Home: {
      title: 'Northdemy Tech Hub',
      subtitle: 'The epicenter of Northern Nigerian innovation and software excellence.',
      icon: <Globe2 className="w-6 h-6 text-blue-400" />,
      items: [
        { label: 'Campus & Coworking', desc: 'Modern tech labs with high-speed fiber internet and uninterrupted power.' },
        { label: 'Vetted Talent Pool', desc: 'Over 25,000+ engineers, designers, and data specialists trained.' },
      ],
    },
    Program: {
      title: 'Northdemy Academy Programs',
      subtitle: 'Immersive, industry-aligned tech curriculum taught by top engineers.',
      icon: <Code className="w-6 h-6 text-indigo-400" />,
      items: [
        { label: 'Full-Stack Software Engineering', desc: 'React, Node.js, Python, TypeScript, and modern system design.' },
        { label: 'AI, Data Science & Machine Learning', desc: 'Practical machine learning, LLM integrations, and big data analysis.' },
        { label: 'Cloud Architecture & DevOps', desc: 'AWS, Docker, Kubernetes, CI/CD pipelines, and infrastructure as code.' },
        { label: 'UI/UX & Product Strategy', desc: 'Design systems, user research, wireframing, and design-to-code execution.' },
      ],
    },
    Service: {
      title: 'Enterprise & Hub Services',
      subtitle: 'Fueling business growth through technology development and digital transformation.',
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
      items: [
        { label: 'Dedicated Tech Outsourcing', desc: 'Deploy pre-vetted Northern Nigerian engineering squads to scale your product.' },
        { label: 'Custom Software Development', desc: 'End-to-end bespoke web, mobile, and enterprise platforms tailored to your business.' },
        { label: 'Corporate Digital Upskilling', desc: 'Custom workforce training in AI, cybersecurity, and cloud technologies.' },
      ],
    },
    Project: {
      title: 'Featured Hub Projects',
      subtitle: 'Real-world software built by Northdemy innovators solving local and global challenges.',
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      items: [
        { label: 'AgriPay Northern Grid', desc: 'Digital wallet and credit scoring system for rural agricultural cooperatives.' },
        { label: 'ArewaHealth Telemedicine', desc: 'Low-bandwidth healthcare triage connecting remote clinics to specialists.' },
        { label: 'EduKano Micro-Certificates', desc: 'Blockchain-verified skills accreditation and digital portfolio index.' },
      ],
    },
    Blog: {
      title: 'Northdemy Tech Dispatch',
      subtitle: 'Stories, tutorials, and ecosystem insights from across Northern Nigeria.',
      icon: <BookOpen className="w-6 h-6 text-amber-400" />,
      items: [
        { label: 'The Rise of Tech Startups in Kano & Kaduna', desc: 'How local founders are unlocking billion-naira market opportunities.' },
        { label: 'Building AI in Hausa & Local Dialects', desc: 'Natural language processing initiatives spearheaded by Northdemy fellows.' },
        { label: 'From Novice to Remote Global Engineer in 6 Months', desc: 'Spotlight on our 2025 cohort graduates earning international incomes.' },
      ],
    },
    About: {
      title: 'About Northdemy',
      subtitle: 'Empowering Northern Nigeria to become the next global software powerhouse.',
      icon: <Building className="w-6 h-6 text-purple-400" />,
      items: [
        { label: 'Our Mission', desc: 'Equip 100,000 young Africans across Northern Nigeria with market-ready technological capabilities.' },
        { label: 'Our Footprint', desc: 'Hub campuses established across Kano, Kaduna, Abuja, and Plateau State.' },
        { label: 'Inclusivity & Access', desc: '50% dedicated quota for female technologists and fully sponsored scholarships.' },
      ],
    },
    Team: {
      title: 'Leadership & Mentors',
      subtitle: 'Experienced technologists, educators, and ecosystem champions.',
      icon: <Users className="w-6 h-6 text-rose-400" />,
      items: [
        { label: 'Hub Faculty', desc: 'Senior software architects with experience at Google, Paystack, and Microsoft.' },
        { label: 'Ecosystem Mentors', desc: 'Founders and angel investors guiding startup fellows from idea to launch.' },
      ],
    },
    Partner: {
      title: 'Strategic Partners',
      subtitle: 'Collaborating with global tech giants, venture capital, and civic institutions.',
      icon: <Building className="w-6 h-6 text-blue-400" />,
      items: [
        { label: 'Global Tech Giants', desc: 'Curriculum certified with cloud credits and developer resources.' },
        { label: 'Employment Network', desc: 'Over 120 hiring partners recruiting directly from each graduating cohort.' },
      ],
    },
    Contact: {
      title: 'Contact Northdemy Hub',
      subtitle: 'Get in touch with our admissions desk, project leads, or community team.',
      icon: <Mail className="w-6 h-6 text-sky-400" />,
      items: [
        { label: 'Kano Campus', desc: 'Tech Valley Hub, Bompai Industrial Area, Kano, Nigeria' },
        { label: 'Kaduna Tech Hub', desc: 'Innovation Boulevard, Independence Way, Kaduna, Nigeria' },
        { label: 'Inquiries', desc: 'admissions@northdemy.org • +234 (0) 800 NORTHDEMY' },
      ],
    },
  };

  const current = contentMap[section];

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title={current.title}>
      <div className="space-y-4">
        <div className="flex items-center gap-3 bg-[#151924] border border-white/5 rounded-2xl p-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
            {current.icon}
          </div>
          <div>
            <h3 className="text-xs font-bold text-white">{current.title}</h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">{current.subtitle}</p>
          </div>
        </div>

        <div className="space-y-2.5">
          {current.items.map((item, idx) => (
            <div key={idx} className="bg-[#131620] border border-white/5 rounded-xl p-3">
              <div className="text-xs font-semibold text-blue-400">{item.label}</div>
              <div className="text-[11px] text-zinc-300 mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex gap-2">
          <button
            onClick={() => {
              onClose();
              onOpenApply();
            }}
            className="flex-1 bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
          >
            <span>Apply to Cohort</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2.5 bg-white/5 hover:bg-white/10 text-zinc-300 rounded-xl text-xs font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

// "See How It Works" Modal
export const HowItWorksModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const steps = [
    {
      num: '01',
      title: 'Apply & Pick Your Specialization',
      desc: 'Choose from Full-Stack Development, AI & Data Science, Cloud, or Product Design. Zero prior coding needed.',
      icon: <Globe2 className="w-5 h-5 text-blue-400" />,
    },
    {
      num: '02',
      title: '16 Weeks of Hands-on Innovation',
      desc: 'Learn through real-world software sprints, building practical production-grade applications with 1-on-1 mentorship.',
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
    },
    {
      num: '03',
      title: 'Graduate & Get Hired Globally',
      desc: 'Join our alumni network earning competitive local and international salaries with our 120+ global hiring partners.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose} title="How Northdemy Works">
      <div className="space-y-4">
        <p className="text-xs text-zinc-400">
          Northdemy accelerates youth and entrepreneurs in Northern Nigeria into world-class software professionals through proven project-based learning.
        </p>

        <div className="space-y-3 mt-4">
          {steps.map((st) => (
            <div key={st.num} className="bg-[#151924] border border-white/5 rounded-2xl p-4 flex gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                {st.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-blue-400 font-mono">{st.num}</span>
                  <span className="text-xs font-semibold text-white">{st.title}</span>
                </div>
                <p className="text-[11px] text-zinc-400 mt-1 leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2"
        >
          <span>Explore Academy Cohorts</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </ModalWrapper>
  );
};

// "Send Money" / Tuition & Transfer Modal
interface SendMoneyModalProps {
  isOpen: boolean;
  onClose: () => void;
  details: {
    sendAmount: number;
    sendCurrency: Currency;
    receiveAmount: number;
    receiveCurrency: Currency;
  };
}

export const SendMoneyModal: React.FC<SendMoneyModalProps> = ({ isOpen, onClose, details }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [recipientName, setRecipientName] = useState('Northdemy Innovation Pool');
  const [recipientEmail, setRecipientEmail] = useState('scholarships@northdemy.org');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep('success');
    }, 900);
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <ModalWrapper isOpen={isOpen} onClose={handleReset} title={step === 'form' ? 'Complete Transfer' : 'Transfer Initiated!'}>
      {step === 'form' ? (
        <form onSubmit={handleConfirm} className="space-y-4">
          <div className="bg-[#151924] border border-white/5 rounded-2xl p-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">You send:</span>
              <span className="font-bold text-white">
                {details.sendCurrency.symbol}{details.sendAmount.toFixed(2)} {details.sendCurrency.code}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Recipient receives:</span>
              <span className="font-bold text-emerald-400">
                {details.receiveCurrency.symbol}{details.receiveAmount.toFixed(2)} {details.receiveCurrency.code}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Transfer fee:</span>
              <span className="font-semibold text-blue-400">Free ($0.00)</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-zinc-400">Estimated delivery:</span>
              <span className="text-zinc-300">Instant (less than 2 min)</span>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Recipient Name</label>
              <input
                type="text"
                required
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-zinc-400 mb-1">Recipient Account / Email</label>
              <input
                type="email"
                required
                value={recipientEmail}
                onChange={(e) => setRecipientEmail(e.target.value)}
                className="w-full bg-[#181c28] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] disabled:opacity-50 text-white py-3 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Processing secure route...
              </span>
            ) : (
              <>
                <span>Confirm & Send {details.sendCurrency.symbol}{details.sendAmount.toFixed(2)}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      ) : (
        <div className="text-center py-4 space-y-4">
          <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto text-emerald-400">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Payment Successfully Dispatched</h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
              Sent <strong className="text-white">{details.receiveCurrency.symbol}{details.receiveAmount.toFixed(2)} {details.receiveCurrency.code}</strong> to <strong className="text-white">{recipientName}</strong>.
            </p>
          </div>
          <button
            onClick={handleReset}
            className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-2.5 rounded-xl text-xs font-semibold transition-all"
          >
            Done
          </button>
        </div>
      )}
    </ModalWrapper>
  );
};
