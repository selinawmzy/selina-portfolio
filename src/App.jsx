import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Linkedin, Instagram, ChevronDown, MapPin, ExternalLink, Smartphone, MessageCircle, X, Send, Loader2, Globe, Youtube, Play, FileText, Camera, Video, Download } from 'lucide-react';

/**
 * SELINA WANG PORTFOLIO (v6.2 - Link Correction)
 * * --- HOW TO DEPLOY TO GITHUB ---
 * 1. Create a new React project (e.g., using Vite).
 * 2. Install 'lucide-react' (`npm install lucide-react`).
 * 3. Copy this entire file content into your 'App.jsx'.
 * 4. Build and deploy to GitHub Pages or Vercel.
 */

const DATA = {
  // 您的文件链接
  links: {
    resume: "https://drive.google.com/file/d/1f1ZzPAM0MFGcMc9CaS4DnIQnwRQcSMTs/view?usp=sharing", // 已修正：这是简历链接
    menu: "#",   // 菜谱链接 (暂未完成，目前为空)
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/62c1c7fe000000001b025154"
  },

  // 图片链接 - 使用您提供的最新高清直链
  images: {
    hero: "https://i.postimg.cc/59TkR4Yr/9f4a5289d6ba5ce55bb9322a8e31a0b1.jpg", 
    about: "https://i.postimg.cc/SQ3tvS2H/f7627139e4d707f04d5da312bbb0b295.jpg"
  },
  
  // 英文内容
  en: {
    nav: { about: "About", philosophy: "Philosophy", experience: "Experience", contact: "Contact" },
    hero: {
      greeting: "Hello",
      greeting_sub: "你好",
      intro: "I'm Selina Wang.",
      role: "Social Media / Marketer | Content Creator | \"Shef\"", 
      location: "Based in Miami & Beijing",
      cta: "Explore Work",
      download_cv: "Download Resume",
      status_label: "Current Status",
      status_text: "Master of MPS in Management @ Cornell University"
    },
    philosophy: {
      title: "A Content Creator who doesn't dream about being a Marketer is not a good Chef.", 
      desc1: "Orchestration is key: Time, Energy, Logistics, Cost, and Human Resources. It's about blending flavors and functionality.",
      desc2: "Just like in the kitchen, I analyze raw materials and reconstruct the path to success with a detail-oriented mindset.",
      shef_title: "The \"Shef\"",
      shef_desc: "Foodie & Creator. Replicating flavors with precision.",
      view_menu: "View Menu (Coming Soon)", // Updated text
      creator_title: "The Content Creator",
      creator_desc: "Incubating trends, crafting narratives, owning the voice.",
      view_xhs: "Visit Xiaohongshu"
    },
    experience: {
      title: "Experience",
      subtitle: "Strategic growth & creative content across global platforms.",
      jobs: [
        {
          company: "Balance Now",
          role: "Marketing Coordinator",
          period: "Sept 2025 - Present",
          location: "Remote",
          type: "media",
          tags: ["Marketing", "SEO", "Leadership"],
          details: "Leading marketing teams, managing 10+ multi-platform campaigns weekly, and optimizing SEO workflows.",
          mediaType: "instagram",
          link: "https://www.instagram.com/balancenow.co?igsh=NWU3emhyNGVnZmUx",
          linkText: "View Social Profile"
        },
        {
          company: "Gen Z Social Media Operator",
          role: "Independent Operator",
          period: "Ongoing",
          location: "Global",
          type: "media-dual", 
          tags: ["Instagram Ops", "Video Production", "Growth"],
          details: "Managed content strategy for 'Moli' account. Produced high-engagement video content.",
          links: [
            { type: 'instagram', url: "https://www.instagram.com/moli.umich?igsh=MWd2c2loY3dmbGZ4Nw%3D%3D", label: "@moli.umich" },
            { type: 'youtube', url: "https://youtu.be/9HgdjTBOStE", label: "Video Case Study" }
          ]
        },
        {
          company: "Xiaohongshu (RED)",
          role: "Content Planning Intern",
          period: "May 2024 - Aug 2024",
          location: "Beijing",
          type: "media",
          tags: ["Campaign", "50M+ Views", "Strategy"],
          details: "Led 'Children's Day' & 'Qixi' projects. Incubated 200+ influencers.",
          mediaType: "video",
          link: "https://www.youtube.com/watch?v=JBXFpyQbWrQ",
          linkText: "Campaign Video"
        },
        {
          company: "Central Media Group (CCTV 4)",
          role: "Integrated Media Intern",
          period: "Jul 2023 - Sept 2023",
          location: "Beijing",
          type: "text",
          tags: ["Bilingual", "Directing", "Interview"],
          details: "Spearheaded 'Speak with Ambassadors'. Directed 5+ in-depth bilingual interviews.",
        },
        {
          company: "YNLY Media",
          role: "Marketing Intern",
          period: "Jun 2022 - Sept 2022",
          location: "Beijing",
          type: "text",
          tags: ["KOL Mgmt", "Content", "Instagram"],
          details: "Managed 500+ KOLs & Instagram operations."
        }
      ],
      edu_title: "Education",
      skills_title: "Skills"
    },
    contact: {
      title: "Let's Connect.",
      desc: "Open to relocation & new opportunities. Marketing, content strategy, or just sharing a recipe.",
      rights: "© 2026 Selina Wang. Crafted with care."
    }
  },

  // 中文内容
  zh: {
    nav: { about: "关于我", philosophy: "理念", experience: "经历", contact: "联系" },
    hero: {
      greeting: "你好",
      greeting_sub: "Hello",
      intro: "我是王木子一 (Selina)",
      role: "社交媒体 / 市场营销 | 内容创作者 | \"主厨\"", 
      location: "现居迈阿密 & 北京",
      cta: "查看作品",
      download_cv: "下载简历",
      status_label: "当前状态",
      status_text: "康奈尔大学 管理学硕士在读 (MPS)"
    },
    philosophy: {
      title: "不会 Dream about being Marketer 的 Content Creator 不是一个好厨子。",
      desc1: "核心在于统筹：时间、精力、物流、成本和人力资源。这是一种将风味与功能完美融合的艺术。",
      desc2: "在厨房里，我尝一口就能复刻菜肴；在商业中，我分析原材料并重构成功路径。",
      shef_title: "“主厨”身份",
      shef_desc: "美食家与创作者。精准复刻味道，用做饭的逻辑理解项目管理。",
      view_menu: "查看我的菜谱 (暂未发布)", // Updated text
      creator_title: "内容创作者",
      creator_desc: "孵化趋势，讲述故事，掌握话语权。",
      view_xhs: "查看小红书"
    },
    experience: {
      title: "工作经历",
      subtitle: "战略增长、内容创作与品牌管理的成长轨迹。",
      jobs: [
        {
          company: "Balance Now (智库)",
          role: "市场协调员",
          period: "2025.09 - 至今",
          location: "远程",
          type: "media",
          tags: ["市场营销", "SEO", "团队领导"],
          details: "领导营销团队，每周管理10+个跨平台活动，优化SEO工作流。",
          mediaType: "instagram",
          link: "https://www.instagram.com/balancenow.co?igsh=NWU3emhyNGVnZmUx",
          linkText: "查看社交媒体主页"
        },
        {
          company: "Z世代社交媒体操盘手",
          role: "独立运营者",
          period: "持续进行中",
          location: "全球",
          type: "media-dual",
          tags: ["Instagram运营", "视频制作", "增长"],
          details: "负责 'Moli' 账号的内容策略。制作高互动视频内容。",
          links: [
            { type: 'instagram', url: "https://www.instagram.com/moli.umich?igsh=MWd2c2loY3dmbGZ4Nw%3D%3D", label: "@moli.umich" },
            { type: 'youtube', url: "https://youtu.be/9HgdjTBOStE", label: "视频案例展示" }
          ]
        },
        {
          company: "小红书 (RED)",
          role: "内容策划实习生",
          period: "2024.05 - 2024.08",
          location: "北京",
          type: "media",
          tags: ["项目策划", "5000万+曝光", "KOL孵化"],
          details: "负责“六一”及“七夕”项目。孵化200+博主。",
          mediaType: "video",
          link: "https://www.youtube.com/watch?v=JBXFpyQbWrQ",
          linkText: "观看项目视频"
        },
        {
          company: "中央广播电视总台 (CCTV 4)",
          role: "融媒体运营实习生",
          period: "2023.07 - 2023.09",
          location: "北京",
          type: "text",
          tags: ["双语", "导演", "深度访谈"],
          details: "主导《全球大使》系列。导演5+场深度双语访谈，面向国际观众。",
        },
        {
          company: "YNLY Media",
          role: "市场/KOL运营实习生",
          period: "2022.06 - 2022.09",
          location: "北京",
          type: "text",
          tags: ["KOL管理", "内容制作", "Instagram"],
          details: "管理500+ KOL。运营Instagram账号案例。"
        }
      ],
      edu_title: "教育背景",
      skills_title: "技能"
    },
    contact: {
      title: "保持联系",
      desc: "期待新的工作机会 (可搬迁)。无论是聊聊市场营销，还是分享食谱。",
      rights: "© 2026 王木子一. 用心呈现."
    }
  }
};

// --- STYLES & FONTS INJECTION ---
const StyleInjector = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Lato:wght@300;400&display=swap');

        :root {
            --bg-pastel: #FDFCF8;
            --accent-pink: #FCE1E4;
            --accent-green: #E8F1E8;
            --accent-purple: #E8DFF5;
            --text-main: #2D2A26;
            --text-muted: #6B655F;
        }

        body {
            font-family: 'Lato', sans-serif;
            background-color: var(--bg-pastel);
            color: var(--text-main);
        }
        
        h1, h2, h3, h4, .font-delicate {
            font-family: 'Cormorant Garamond', serif;
        }

        .gradient-text {
            background: linear-gradient(135deg, #2D2A26 0%, #6B655F 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .pastel-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.6;
            z-index: 0;
            animation: blob-bounce 10s infinite alternate;
        }

        @keyframes blob-bounce {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(20px, -20px) scale(1.1); }
        }

        .card-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .card-hover:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1);
        }

        /* Image Clarity Fixes (v6.0 Optimized) */
        .img-clear {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform: translateZ(0); 
            /* 移除可能导致伪影的滤镜，完全依赖原图画质 */
            object-fit: cover;
        }
    `}</style>
);

// --- MAIN APP ---

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lang, setLang] = useState('en');
  const t = DATA[lang];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <StyleInjector />

      {/* Background Blobs for Pastel Feel */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="pastel-blob bg-[var(--accent-pink)] w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="pastel-blob bg-[var(--accent-purple)] w-80 h-80 bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
          <div className="pastel-blob bg-[var(--accent-green)] w-64 h-64 top-1/2 right-1/4 opacity-40"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center bg-[var(--bg-pastel)]/80 backdrop-blur-md transition-all duration-300 border-b border-white/20">
        <div className="text-2xl font-delicate font-bold tracking-tight cursor-pointer z-50" onClick={() => scrollTo('home')}>
          Selina Wang.
        </div>
        
        <div className="flex items-center gap-6 z-50">
            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-[var(--text-muted)]">
            {Object.entries(t.nav).map(([key, label]) => (
                <button 
                key={key} 
                onClick={() => scrollTo(key)}
                className="hover:text-[var(--text-main)] transition-colors relative group font-delicate text-lg"
                >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-pink)] transition-all duration-300 group-hover:w-full"></span>
                </button>
            ))}
            </div>
            
            <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all text-xs font-bold uppercase tracking-widest border border-stone-100"
            >
                <Globe size={14} className="text-[var(--text-muted)]" />
                {lang === 'en' ? 'CN' : 'EN'}
            </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-screen w-full flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center h-full">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center items-start space-y-6 z-10">
            <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-green)] text-[var(--text-muted)] text-xs font-bold uppercase tracking-widest mb-2 animate-fade-in-up">
                {t.hero.role}
            </div>
            <h1 className="text-6xl md:text-8xl font-delicate font-medium leading-[1.1] text-[var(--text-main)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {t.hero.greeting} <span className="text-[var(--accent-pink)] font-bold">.</span> <br/>
              <span className="italic text-4xl md:text-5xl text-[var(--text-muted)] font-light">{t.hero.greeting_sub}</span>
            </h1>
            <p className="text-xl md:text-3xl text-[var(--text-muted)] font-delicate font-light max-w-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {t.hero.intro} <br/>
              <span className="text-base mt-4 block flex items-center gap-2 font-sans">
                  <MapPin size={16}/> {t.hero.location}
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <button 
                onClick={() => scrollTo('experience')}
                className="group relative px-8 py-4 bg-[var(--text-main)] text-white rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                    {t.hero.cta} <ArrowUpRight size={18} />
                </span>
              </button>
              
              <a 
                href={DATA.links.resume}
                target="_blank"
                rel="noreferrer"
                className="group relative px-8 py-4 bg-white text-[var(--text-main)] border border-stone-200 rounded-full overflow-hidden shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2 font-medium">
                    {t.hero.download_cv} <Download size={18} />
                </span>
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2 relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center z-10">
            <div className="relative w-full h-full max-w-lg mx-auto">
                {/* Decorative Frame */}
                <div className="absolute inset-0 border-[1px] border-[var(--accent-pink)] rounded-t-[10rem] rounded-b-[2rem] transform translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 z-0"></div>
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl bg-white z-10">
                    <img 
                        src={DATA.images.hero} 
                        alt="Selina Wang" 
                        className="w-full h-full object-cover img-clear hover:scale-105 transition-transform duration-1000"
                    />
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-8 -left-4 md:-left-8 bg-white/90 backdrop-blur-xl p-6 shadow-xl rounded-2xl max-w-[260px] border border-white z-20 animate-float">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t.hero.status_label}</p>
                    </div>
                    <p className="text-sm font-medium leading-snug">{t.hero.status_text}</p>
                </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section id="philosophy" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 shadow-xl border border-white">
            <div className="grid md:grid-cols-12 gap-16">
                <div className="md:col-span-7 space-y-10">
                <h2 className="text-3xl md:text-5xl font-delicate font-bold leading-tight text-[var(--text-main)]">
                    <span className="text-[var(--text-muted)] italic font-light block mb-4 text-2xl font-serif">Philosophy</span>
                    "{t.philosophy.title}"
                </h2>
                
                <div className="space-y-6 text-xl text-[var(--text-muted)] leading-relaxed font-light font-delicate">
                    <p className="border-l-2 border-[var(--accent-pink)] pl-6">{t.philosophy.desc1}</p>
                    <p>{t.philosophy.desc2}</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {/* Card 1: The Shef (PDF Menu) */}
                    <div className="card-hover p-8 bg-[var(--accent-green)]/30 rounded-3xl border border-white flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-green-700">
                                <span className="font-delicate italic text-2xl">S</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-delicate">{t.philosophy.shef_title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-4">{t.philosophy.shef_desc}</p>
                        </div>
                        <a href={DATA.links.menu} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-green-800 hover:opacity-70">
                        {t.philosophy.view_menu} <ArrowUpRight size={12}/>
                        </a>
                    </div>

                    {/* Card 2: The Content Creator (Xiaohongshu) */}
                    <div className="card-hover p-8 bg-[var(--accent-pink)]/30 rounded-3xl border border-white flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-pink-700">
                                <span className="font-delicate italic text-2xl">C</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 font-delicate">{t.philosophy.creator_title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-4">{t.philosophy.creator_desc}</p>
                        </div>
                        <a href={DATA.links.xiaohongshu} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-pink-800 hover:opacity-70">
                        {t.philosophy.view_xhs} <ArrowUpRight size={12}/>
                        </a>
                    </div>
                </div>
                </div>

                <div className="md:col-span-5 flex items-center">
                    <div className="relative w-full aspect-[3/4] rounded-t-[10rem] rounded-b-[2rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                        <img 
                            src={DATA.images.about} 
                            alt="Selina Portrait" 
                            className="w-full h-full object-cover img-clear"
                        />
                         <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-t-[10rem] rounded-b-[2rem]"></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE SECTION --- */}
      <section id="experience" className="py-32 container mx-auto px-6 z-10 relative">
        <div className="text-center mb-20">
           <span className="text-[var(--accent-pink)] font-bold uppercase tracking-widest text-sm bg-[var(--accent-pink)]/20 px-4 py-1 rounded-full">Career Path</span>
           <h2 className="text-5xl md:text-7xl font-delicate font-bold mt-6 mb-4">{t.experience.title}</h2>
           <p className="text-[var(--text-muted)] max-w-lg mx-auto font-delicate text-xl">{t.experience.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {t.experience.jobs.map((job, index) => (
            <JobCard key={index} {...job} index={index} />
          ))}
        </div>

        {/* Education & Skills Grid */}
        <div className="mt-24 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 bg-white p-10 rounded-3xl shadow-lg border border-stone-100 card-hover">
                <h3 className="text-3xl font-delicate font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-sm">🎓</span>
                    {t.experience.edu_title}
                </h3>
                <div className="space-y-8 relative">
                    <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-stone-200"></div>
                    <div className="pl-6 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-900"></div>
                        <h4 className="text-xl font-bold font-delicate">Cornell University</h4>
                        <p className="text-[var(--text-muted)]">MPS in Management (STEM)</p>
                    </div>
                    <div className="pl-6 relative">
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-300"></div>
                        <h4 className="text-xl font-bold font-delicate">University of Michigan</h4>
                        <p className="text-[var(--text-muted)]">BA in Communication & Media</p>
                    </div>
                </div>
            </div>
            
            <div className="md:col-span-7 bg-[#2D2A26] text-white p-10 rounded-3xl shadow-lg card-hover flex flex-col justify-center">
                 <h3 className="text-3xl font-delicate font-bold mb-8 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">✨</span>
                    {t.experience.skills_title}
                </h3>
                <div className="flex flex-wrap gap-3">
                    {['Photography/Video Recording', 'Data Visualization', 'Tableau', 'Power BI', 'TikTok Ops', 'RED Ecosystem', 'Adobe Suite', 'Project Management', 'Bilingual', 'SEO'].map(skill => (
                    <span key={skill} className="px-4 py-2 border border-white/20 rounded-xl text-sm hover:bg-white hover:text-black transition-colors cursor-default">
                        {skill}
                    </span>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="bg-white/80 backdrop-blur-md pt-32 pb-12 px-6 mt-20 rounded-t-[3rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.05)]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
             <div className="max-w-xl">
                <h2 className="text-6xl md:text-8xl font-delicate font-bold mb-8 leading-[0.9] text-[var(--text-main)]">
                   Let's<br/><span className="italic text-[var(--text-muted)]">Connect.</span>
                </h2>
                <p className="text-2xl text-[var(--text-muted)] font-delicate">
                   {t.contact.desc}
                </p>
             </div>
             
             <div className="flex flex-col gap-4 w-full md:w-auto">
                <ContactPill icon={<Mail size={20} />} text="selinawmzy@gmail.com" href="mailto:selinawmzy@gmail.com" />
                <ContactPill icon={<Smartphone size={20} />} text="717-517-6588" href="tel:717-517-6588" />
                <div className="flex items-center gap-4 px-8 py-4 bg-stone-100 rounded-2xl text-[var(--text-muted)]">
                   <MapPin size={20} /> Miami, FL / Beijing, China
                </div>
             </div>
          </div>

          <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)] uppercase tracking-widest">
             <div>{t.contact.rights}</div>
             <div className="flex gap-6">
                <SocialLink href="https://www.linkedin.com/in/selinawmzy" icon={<Linkedin size={18} />} label="LinkedIn" />
                <SocialLink href="https://www.instagram.com/notmuziyiselina" icon={<Instagram size={18} />} label="Instagram" />
                <SocialLink href={DATA.links.xiaohongshu} icon={<span className="font-bold font-serif">RED</span>} label="Xiaohongshu" />
             </div>
          </div>
        </div>
      </footer>

      <ChatWidget lang={lang} />
    </div>
  );
};

// --- COMPONENT: JOB CARD ---
const JobCard = ({ role, company, period, location, details, type, tags, link, linkText, links, mediaType, index }) => {
    const cardBg = index % 2 === 0 ? 'bg-white' : 'bg-[#F9F8F6]';
    
    return (
        <div className={`${cardBg} p-8 rounded-[2rem] border border-stone-100 shadow-sm card-hover flex flex-col h-full relative overflow-hidden group`}>
            {/* Top Row */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-3xl font-delicate font-bold text-[var(--text-main)] leading-tight">{company}</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent-pink)]/90 mt-2">{role}</p>
                </div>
                <div className="text-right hidden sm:block">
                     <span className="text-xs font-bold bg-stone-100 px-3 py-1 rounded-full text-[var(--text-muted)]">{period}</span>
                </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs border border-stone-200 rounded-lg text-[var(--text-muted)] bg-white/50">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Content */}
            <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow">
                {details}
            </p>

            {/* Render Links / Media Chips */}
            <div className="mt-auto">
                {/* Case 1: Multiple Links (Dual) for Gen Z Operator */}
                {type === 'media-dual' && links ? (
                    <div className="grid grid-cols-2 gap-4">
                        {links.map((l, i) => (
                            <a key={i} href={l.url} target="_blank" rel="noreferrer" className="group/chip relative h-24 rounded-2xl overflow-hidden bg-stone-100 border border-stone-200 flex flex-col items-center justify-center hover:bg-stone-200 transition-colors">
                                {l.type === 'instagram' ? <Instagram className="text-purple-500 mb-2" size={24} /> : <Youtube className="text-red-500 mb-2" size={24} />}
                                <span className="text-xs font-bold uppercase tracking-wider">{l.label}</span>
                                <ArrowUpRight className="absolute top-2 right-2 opacity-0 group-hover/chip:opacity-100 transition-opacity" size={14} />
                            </a>
                        ))}
                    </div>
                ) : 
                /* Case 2: Single Media Link */
                type === 'media' && link ? (
                     <a href={link} target="_blank" rel="noreferrer" className="group/chip relative w-full h-32 rounded-2xl overflow-hidden bg-stone-100 block border border-stone-200">
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-500 group-hover/chip:scale-105 ${mediaType === 'video' ? 'bg-red-50/50' : mediaType === 'instagram' ? 'bg-purple-50/50' : 'bg-stone-50'}`}>
                             {mediaType === 'video' ? (
                                 <div className="flex flex-col items-center gap-2 text-red-400">
                                     <Youtube size={32} />
                                     <span className="text-xs font-bold uppercase tracking-widest">{linkText}</span>
                                 </div>
                             ) : (
                                 <div className="flex flex-col items-center gap-2 text-purple-400">
                                     <Instagram size={32} />
                                     <span className="text-xs font-bold uppercase tracking-widest">{linkText}</span>
                                 </div>
                             )}
                        </div>
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover/chip:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-white p-3 rounded-full shadow-lg transform translate-y-4 group-hover/chip:translate-y-0 transition-transform">
                                <ArrowUpRight size={16} className="text-black" />
                            </div>
                        </div>
                     </a>
                ) : (
                    /* Case 3: Text Only */
                    <div className="pt-6 border-t border-stone-100 flex justify-between items-center text-sm text-[var(--text-muted)]">
                        <span>{location}</span>
                        <span>{period}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- SUB-COMPONENTS ---

const ContactPill = ({ icon, text, href }) => (
    <a href={href} className="flex items-center gap-4 px-8 py-4 bg-stone-900 text-white rounded-2xl shadow-lg hover:bg-[var(--accent-pink)] hover:text-stone-900 transition-all hover:-translate-y-1">
        {icon} <span className="font-medium">{text}</span>
    </a>
);

const SocialLink = ({ href, icon, label }) => (
   <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-black transition-colors">
      {icon} <span className="hidden md:inline">{label}</span>
   </a>
);

const ChatWidget = ({ lang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        setMessages([{ role: 'ai', text: lang === 'en' ? "Hi! I'm Selina's AI assistant." : "你好！我是 Selina 的 AI 助手。" }]);
    }, [lang]);

    useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setLoading(true);

        const apiKey = ""; 
        const systemPrompt = `You are Selina Wang's portfolio AI. Concise & Professional. Info: Cornell/UMich grad, PM/Marketing/Chef. Contact: selinawmzy@gmail.com. User asked: ${userMsg}`;

        try {
            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
                method: "POST", headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ contents: [{ parts: [{ text: systemPrompt }] }] })
            });
            const data = await res.json();
            setMessages(prev => [...prev, { role: 'ai', text: data.candidates?.[0]?.content?.parts?.[0]?.text || "Busy cooking ideas!" }]);
        } catch { setMessages(prev => [...prev, { role: 'ai', text: "AI Offline." }]); } 
        finally { setLoading(false); }
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 bg-[var(--text-main)] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hover:bg-[var(--accent-pink)] hover:text-black">
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-white rounded-3xl shadow-2xl border border-stone-100 overflow-hidden flex flex-col animate-fade-in-up h-[500px]">
                    <div className="bg-[#2D2A26] text-white p-4 flex justify-between items-center">
                        <span className="font-bold text-sm uppercase tracking-wider font-delicate text-lg">Selina AI</span>
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#2D2A26] text-white' : 'bg-white border border-stone-200 text-stone-800 shadow-sm'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && <Loader2 size={16} className="animate-spin text-stone-400 m-4" />}
                        <div ref={chatEndRef}></div>
                    </div>
                    <div className="p-3 bg-white border-t border-stone-100 flex gap-2">
                        <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder={lang === 'en' ? "Ask..." : "提问..."} className="flex-1 bg-stone-100 rounded-xl px-4 py-2 text-sm focus:outline-none" />
                        <button onClick={handleSend} disabled={loading || !input} className="bg-[var(--accent-pink)] text-black p-2 rounded-xl hover:opacity-80"><Send size={18} /></button>
                    </div>
                </div>
            )}
        </>
    );
};

export default App;