import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Mail, Linkedin, Instagram, ChevronDown, MapPin, Download, Smartphone, MessageCircle, X, Send, Loader2, Globe, Youtube, Camera, Video, Image as ImageIcon, BookOpen, Database, Palette } from 'lucide-react';

/**
 * SELINA WANG PORTFOLIO (v10.0 - Design & YNLY Update)
 * 更新日志：
 * 1. Hero背景字：改为中文 "你好"
 * 2. Portfolio：新增 "Design Portfolio" 替换原有的 Drive，链接已更新
 * 3. Experience：新增 YNLY Media (Influencer Marketing) 经历，数据来自简历
 * 4. 风格：保持柔和的 Pastel Green (Jules Studio 风格)
 */

const DATA = {
  links: {
    resume: "https://drive.google.com/file/d/1f1ZzPAM0MFGcMc9CaS4DnIQnwRQcSMTs/view?usp=sharing",
    menu: "#",   
    xiaohongshu: "https://www.xiaohongshu.com/user/profile/62c1c7fe000000001b025154"
  },
  images: {
    hero: "https://i.postimg.cc/59TkR4Yr/9f4a5289d6ba5ce55bb9322a8e31a0b1.jpg", 
    about: "https://i.postimg.cc/SQ3tvS2H/f7627139e4d707f04d5da312bbb0b295.jpg"
  },
  
  en: {
    loading_text: "Welcome to Selina's World",
    nav: { about: "About", philosophy: "Philosophy", portfolio: "Portfolio", experience: "Experience", contact: "Contact" },
    hero: {
      greeting_back: "你好", // Updated to Chinese as requested
      greeting_front: "Hello.",
      intro: "I'm Selina Wang.",
      role: "Influencer Marketing | Content Strategy | Data-Driven Creative", 
      location: "Based in Miami & Beijing",
      cta: "Explore Work",
      download_cv: "Resume",
      status_label: "Current Focus",
      status_text: "MPS Management @ Cornell | Building Brands"
    },
    philosophy: {
      title: "Data-backed Creativity. Flavor-driven Strategy.", 
      desc1: "Marketing isn't just about visuals; it's about the orchestration of logistics, human psychology, and precise timing.",
      desc2: "Whether analyzing 60,000+ TikTok comments for research or plating a Michelin-level dish, I bring a detail-oriented, analytical mindset to creation.",
      shef_title: "The \"Shef\"",
      shef_desc: "Understanding sensory experiences. Replicating flavors with precision.",
      view_menu: "View Menu (Coming Soon)",
      creator_title: "The Strategist",
      creator_desc: "Incubating trends, crafting narratives, owning the voice.",
      view_xhs: "Visit Xiaohongshu"
    },
    portfolio: {
        title: "Visual & Design Work",
        subtitle: "A collection of design, photography, and strategic case studies.",
        items: [
            {
                title: "Graduate Shooting Example",
                desc: "Artistic direction and portrait photography for milestone moments.",
                link: "https://www.instagram.com/p/C6U82sxrIBi/?img_index=5&igsh=MTdvcnFybmlzamllbQ==",
                icon: "camera"
            },
            {
                title: "Design Portfolio", // Updated Title
                desc: "Creative design works including graphics, UI/UX elements, and brand visuals.", // Updated Desc
                link: "https://drive.google.com/drive/folders/1fP-jvln5xFsfnD57bEMPPNG2qp2Wxt6I?usp=sharing", // Updated Link
                icon: "palette" // Changed Icon
            },
            {
                title: "Event Photography",
                desc: "Dynamic coverage of live events, capturing key highlights.",
                link: "https://drive.google.com/drive/folders/1wsMslap1rwHSQyeZz5Hrzf3WdiH33bs6",
                icon: "video"
            }
        ]
    },
    experience: {
      title: "Experience & Research",
      subtitle: "Bridging academic rigor with real-world marketing impact.",
      jobs: [
        {
          company: "Balance Now",
          role: "Marketing Coordinator",
          period: "Sept 2025 - Present",
          location: "Remote",
          type: "media",
          tags: ["Influencer Marketing", "SEO", "Team Lead"],
          details: "Leading marketing teams and managing 10+ multi-platform campaigns weekly. Optimized SEO workflows to drive organic traffic.",
          mediaType: "instagram",
          link: "https://www.instagram.com/balancenow.co?igsh=NWU3emhyNGVnZmUx",
          linkText: "View Profile"
        },
        {
          company: "University of Michigan",
          role: "Honors Thesis Researcher",
          period: "Apr 2023 - Apr 2024",
          location: "Ann Arbor, MI",
          type: "text",
          tags: ["Python", "Sentiment Analysis", "TikTok Algorithm"],
          details: "Authored 'Choose to Chore?', a quantitative study on #TradWife influencers. Scraped and analyzed 61,492 comments using Python and Sentiment Analysis GPT to decode audience engagement patterns.",
          isThesis: true
        },
        {
          company: "Gen Z Social Media Operator",
          role: "Independent Operator",
          period: "Ongoing",
          location: "Global",
          type: "media-dual", 
          tags: ["Content Strategy", "Video Production", "Growth"],
          details: "Managed content strategy for 'Moli' account, driving engagement through high-quality video production and trend analysis.",
          links: [
            { type: 'instagram', url: "https://www.instagram.com/moli.umich?igsh=MWd2c2loY3dmbGZ4Nw%3D%3D", label: "@moli.umich" },
            { type: 'youtube', url: "https://youtu.be/9HgdjTBOStE", label: "Case Study" }
          ]
        },
        {
          company: "YNLY Media", // Added from Resume
          role: "Influencer Executive Intern",
          period: "Jun 2022 - Sept 2022",
          location: "Beijing",
          type: "text",
          tags: ["KOL Management", "Paid Media", "Growth Strategy"],
          details: "Identified and managed 500+ top lifestyle/parenting KOLs across RED & Douyin. Produced 150+ native ads and managed 200+ posts, achieving 50k+ views on top-tier content."
        },
        {
          company: "Xiaohongshu (RED)",
          role: "Content Planning Intern",
          period: "May 2024 - Aug 2024",
          location: "Beijing",
          type: "media",
          tags: ["Campaign Mgmt", "50M+ Views", "Influencer Incubation"],
          details: "Spearheaded 'Children's Day' & 'Qixi' campaigns. Incubated 200+ influencers to drive platform content diversity.",
          mediaType: "video",
          link: "https://www.youtube.com/watch?v=JBXFpyQbWrQ",
          linkText: "Campaign Video"
        },
        {
          company: "CCTV 4",
          role: "Integrated Media Intern",
          period: "Jul 2023 - Sept 2023",
          location: "Beijing",
          type: "text",
          tags: ["Bilingual Directing", "Interview", "Journalism"],
          details: "Directed 5+ in-depth bilingual interviews for the 'Speak with Ambassadors' series, bridging cultural narratives.",
        }
      ],
      edu_title: "Education",
      skills_title: "Tech & Tools"
    },
    contact: {
      title: "Let's Connect.",
      desc: "Open to opportunities in Influencer Marketing & Content Strategy. Based in Miami/Beijing, ready to relocate.",
      rights: "© 2026 Selina Wang. Crafted with care."
    }
  },

  zh: {
    loading_text: "欢迎来到 Selina 的世界",
    nav: { about: "关于", philosophy: "理念", portfolio: "作品", experience: "经历", contact: "联系" },
    hero: {
      greeting_back: "你好", // Updated to Chinese
      greeting_front: "Hello.", // Changed to English as requested for foreground
      intro: "我是王木子一 (Selina)",
      role: "红人营销 | 内容策略 | 数据驱动创意", 
      location: "迈阿密 & 北京",
      cta: "查看作品",
      download_cv: "简历",
      status_label: "当前状态",
      status_text: "康奈尔大学 管理学硕士 (MPS)"
    },
    philosophy: {
      title: "数据支撑的创意，风味驱动的策略。",
      desc1: "营销不仅仅是视觉；它是物流、人类心理学和精确时机的统筹艺术。",
      desc2: "无论是用 Python 分析 60,000+ 条 TikTok 评论，还是摆盘一道米其林级别的菜肴，我都投入极致的细节关注。",
      shef_title: "“主厨”思维",
      shef_desc: "理解感官体验，精准复刻风味。",
      view_menu: "查看菜谱 (即将发布)",
      creator_title: "策略师",
      creator_desc: "孵化趋势，讲述故事，掌握话语权。",
      view_xhs: "查看小红书"
    },
    portfolio: {
        title: "视觉与设计作品",
        subtitle: "摄影、设计以及策略案例研究精选。",
        items: [
            {
                title: "毕业季专业拍摄",
                desc: "具有艺术指导的专业人像摄影。",
                link: "https://www.instagram.com/p/C6U82sxrIBi/?img_index=5&igsh=MTdvcnFybmlzamllbQ==",
                icon: "camera"
            },
            {
                title: "设计作品合集", // Updated Title
                desc: "包含平面设计、UI/UX 元素及品牌视觉的创意作品集。", // Updated Desc
                link: "https://drive.google.com/drive/folders/1fP-jvln5xFsfnD57bEMPPNG2qp2Wxt6I?usp=sharing", // Updated Link
                icon: "palette" // Changed Icon
            },
            {
                title: "活动现场记录",
                desc: "捕捉活动氛围与高光时刻。",
                link: "https://drive.google.com/drive/folders/1wsMslap1rwHSQyeZz5Hrzf3WdiH33bs6",
                icon: "video"
            }
        ]
    },
    experience: {
      title: "工作与研究经历",
      subtitle: "将学术严谨性与现实世界的营销影响力相结合。",
      jobs: [
        {
          company: "Balance Now (智库)",
          role: "市场协调员",
          period: "2025.09 - 至今",
          location: "远程",
          type: "media",
          tags: ["红人营销", "SEO", "团队管理"],
          details: "领导营销团队，每周管理10+个跨平台活动。优化SEO工作流以提升自然流量。",
          mediaType: "instagram",
          link: "https://www.instagram.com/balancenow.co?igsh=NWU3emhyNGVnZmUx",
          linkText: "查看主页"
        },
        {
          company: "密西根大学",
          role: "荣誉论文研究员 (Honor Thesis)",
          period: "2023.04 - 2024.04",
          location: "安娜堡",
          type: "text",
          tags: ["Python", "情感分析", "TikTok算法"],
          details: "撰写荣誉论文《Choose to Chore?》。利用 Python 和 Sentiment Analysis GPT 抓取并分析了 61,492 条关于 #TradWife 的评论，深度解码受众互动模式。",
          isThesis: true
        },
        {
          company: "Z世代社交媒体操盘手",
          role: "独立运营者",
          period: "持续进行中",
          location: "全球",
          type: "media-dual",
          tags: ["内容策略", "视频制作", "增长"],
          details: "全权负责 'Moli' 账号的内容策略，通过高质量视频制作和趋势分析推动互动增长。",
          links: [
            { type: 'instagram', url: "https://www.instagram.com/moli.umich?igsh=MWd2c2loY3dmbGZ4Nw%3D%3D", label: "@moli.umich" },
            { type: 'youtube', url: "https://youtu.be/9HgdjTBOStE", label: "案例展示" }
          ]
        },
        {
          company: "YNLY Media (引力传媒)", // Added from Resume
          role: "红人营销实习生",
          period: "2022.06 - 2022.09",
          location: "北京",
          type: "text",
          tags: ["KOL管理", "信息流广告", "增长策略"],
          [cite_start]details: "识别并管理500+小红书/抖音头部母婴生活KOL [cite: 651][cite_start]。统筹生产150+原生广告素材，单篇优质内容浏览量突破5万+ [cite: 652]。"
        },
        {
          company: "小红书 (RED)",
          role: "内容策划实习生",
          period: "2024.05 - 2024.08",
          location: "北京",
          type: "media",
          tags: ["Campaign策划", "5000万+曝光", "博主孵化"],
          details: "主导“六一”及“七夕”大型Campaign。孵化200+博主以提升平台内容多样性。",
          mediaType: "video",
          link: "https://www.youtube.com/watch?v=JBXFpyQbWrQ",
          linkText: "项目视频"
        },
        {
          company: "CCTV 4",
          role: "融媒体运营实习生",
          period: "2023.07 - 2023.09",
          location: "北京",
          type: "text",
          tags: ["双语导演", "深度访谈", "新闻"],
          details: "导演5+场《全球大使》系列深度双语访谈，搭建文化传播桥梁。",
        }
      ],
      edu_title: "教育背景",
      skills_title: "技术与工具"
    },
    contact: {
      title: "保持联系",
      desc: "寻找红人营销与内容策略相关机会。现居迈阿密/北京，可搬迁。",
      rights: "© 2026 王木子一. 保留所有权利."
    }
  }
};

// --- STYLES & FONTS INJECTION ---
const StyleInjector = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Lato:wght@300;400;700&display=swap');

        :root {
            /* Palette: Soft Sage & Cream (Jules Studio Vibe) */
            --bg-cream: #FDFCF8;
            --accent-green-pale: #E8F1E8;  
            --accent-green-medium: #CBD5C0; 
            --accent-green-deep: #7A8574;   
            --text-main: #2D2A26;
            --text-muted: #6B655F;
        }

        body {
            font-family: 'Lato', sans-serif;
            background-color: var(--bg-cream);
            color: var(--text-main);
            overflow-x: hidden;
        }
        
        h1, h2, h3, h4, .font-delicate {
            font-family: 'Cormorant Garamond', serif;
        }

        /* Hollow Text Effect for Chinese Characters */
        .text-hollow {
            -webkit-text-stroke: 1.5px var(--accent-green-medium);
            color: transparent;
            opacity: 0.3;
            pointer-events: none; user-select: none;
            font-family: 'Cormorant Garamond', serif; /* Use serif for elegant Chinese too */
        }
        
        .pastel-blob {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.5;
            z-index: 0;
            will-change: transform;
        }
        .blob-1 { background: var(--accent-green-pale); animation: blob-float 15s infinite alternate; }
        .blob-2 { background: #D8EAD8; animation: blob-float 20s infinite alternate-reverse; }

        @keyframes blob-float {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(30px, -30px) scale(1.1); }
        }

        .card-soft {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            border: 1px solid transparent;
        }
        .card-soft:hover {
            transform: translateY(-5px);
            background: white;
            box-shadow: 0 15px 35px -5px rgba(0,0,0,0.05);
            border-color: var(--accent-green-pale);
        }

        .img-fade-left {
            -webkit-mask-image: linear-gradient(to left, black 50%, transparent 100%);
            mask-image: linear-gradient(to left, black 50%, transparent 100%);
            object-fit: cover;
            object-position: center top;
        }
        
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: var(--bg-cream); }
        ::-webkit-scrollbar-thumb { background: var(--accent-green-medium); border-radius: 10px; }
    `}</style>
);

// --- COMPONENTS ---

const LoadingScreen = ({ text }) => (
    <div className="fixed inset-0 z-[100] bg-[var(--accent-green-pale)] flex items-center justify-center animate-fade-out pointer-events-none" style={{animation: 'fadeOut 0.8s ease-in-out forwards 2s'}}>
        <div className="relative overflow-hidden">
            <h1 className="text-3xl md:text-5xl font-delicate font-bold text-[var(--text-main)] tracking-wider animate-text-reveal">
                {text}
            </h1>
        </div>
        <style>{`
            @keyframes fadeOut { to { opacity: 0; visibility: hidden; } }
            @keyframes textReveal { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
    </div>
);

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
    <div className="relative min-h-screen selection:bg-[var(--accent-green-pale)] selection:text-black">
      <StyleInjector />
      <LoadingScreen text={t.loading_text} />

      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[var(--bg-cream)]">
          <div className="pastel-blob blob-1 w-[40rem] h-[40rem] top-[-10%] left-[-10%]"></div>
          <div className="pastel-blob blob-2 w-[35rem] h-[35rem] bottom-[-10%] right-[-5%]"></div>
      </div>

      <nav className={`fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-between items-center transition-all duration-300 ${scrollY > 50 ? 'bg-white/70 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="text-2xl font-delicate font-bold tracking-tight cursor-pointer z-50 text-[var(--text-main)]" onClick={() => scrollTo('home')}>
          Selina Wang.
        </div>
        
        <div className="flex items-center gap-6 z-50">
            <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-[var(--text-muted)]">
            {Object.entries(t.nav).map(([key, label]) => (
                <button 
                key={key} 
                onClick={() => scrollTo(key)}
                className="hover:text-[var(--accent-green-deep)] transition-colors relative group font-delicate text-lg"
                >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent-green-deep)] transition-all duration-300 group-hover:w-full"></span>
                </button>
            ))}
            </div>
            
            <button 
                onClick={toggleLang}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 hover:bg-white shadow-sm transition-all text-xs font-bold uppercase tracking-widest border border-stone-100"
            >
                <Globe size={14} className="text-[var(--text-muted)]" />
                {lang === 'en' ? 'CN' : 'EN'}
            </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative min-h-[90vh] w-full flex items-center px-6 pt-20 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-12 gap-4 items-center h-full">
          
          <div className="md:col-span-7 flex flex-col justify-center items-start space-y-8 z-20 relative pt-10">
             <div className="relative w-full">
                {/* Updated Background Text to Chinese */}
                <h1 className="text-[12rem] md:text-[18rem] leading-none font-delicate font-bold text-hollow absolute -top-24 md:-top-48 left-[-2rem] select-none -z-10 opacity-20">
                    {t.hero.greeting_back}
                </h1>
                <h1 className="text-6xl md:text-8xl font-delicate font-medium leading-[1.1] text-[var(--text-main)] relative z-10 ml-2">
                    {t.hero.greeting_front} <br/>
                    <span className="text-3xl md:text-4xl text-[var(--text-muted)] font-light block mt-4">{t.hero.intro}</span>
                </h1>
            </div>
            
            <div className="inline-block px-4 py-2 rounded-full bg-[var(--accent-green-pale)] text-[var(--accent-green-deep)] text-xs font-bold uppercase tracking-widest">
                {t.hero.role}
            </div>

            <p className="text-xl text-[var(--text-muted)] font-delicate font-light max-w-lg leading-relaxed">
              <span className="flex items-center gap-2 font-sans">
                  <MapPin size={18} className="text-[var(--accent-green-deep)]"/> {t.hero.location}
              </span>
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={() => scrollTo('portfolio')}
                className="px-8 py-4 bg-[var(--text-main)] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center gap-2 font-medium"
              >
                {t.hero.cta} <ArrowUpRight size={18} />
              </button>
              
              <a 
                href={DATA.links.resume}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-white/60 backdrop-blur text-[var(--text-main)] border border-stone-100 rounded-full shadow-sm hover:bg-white transition-all hover:-translate-y-1 flex items-center gap-2 font-medium"
              >
                {t.hero.download_cv} <Download size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-5 relative h-[50vh] md:h-[85vh] z-10 md:-ml-12">
            <div className="w-full h-full relative">
                <img 
                    src={DATA.images.hero} 
                    alt="Selina Wang" 
                    className="w-full h-full img-fade-left"
                />
            </div>
            
            <div className="absolute bottom-12 right-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] max-w-[260px] z-20">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-muted)]">{t.hero.status_label}</p>
                </div>
                <p className="text-sm font-medium leading-snug">{t.hero.status_text}</p>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-20">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* --- PHILOSOPHY SECTION --- */}
      <section id="philosophy" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-8 md:p-16 border border-white/50 shadow-sm">
            <div className="grid md:grid-cols-12 gap-16 items-center">
                <div className="md:col-span-7 space-y-10 order-2 md:order-1">
                    <h2 className="text-4xl md:text-5xl font-delicate font-bold leading-tight text-[var(--text-main)]">
                        {t.philosophy.title}
                    </h2>
                    
                    <div className="space-y-6 text-xl text-[var(--text-muted)] leading-relaxed font-light font-delicate border-l-2 border-[var(--accent-green-medium)] pl-6">
                        <p>{t.philosophy.desc1}</p>
                        <p>{t.philosophy.desc2}</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 font-sans">
                        <div className="card-soft p-8 bg-[var(--accent-green-pale)]/50 rounded-3xl">
                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-4 text-[var(--accent-green-deep)]">S</div>
                            <h3 className="text-xl font-bold mb-2 font-delicate">{t.philosophy.shef_title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-4">{t.philosophy.shef_desc}</p>
                        </div>

                        <div className="card-soft p-8 bg-white/60 rounded-3xl border border-stone-100">
                            <div className="w-10 h-10 bg-[var(--accent-green-pale)] rounded-full flex items-center justify-center mb-4 text-[var(--accent-green-deep)]">M</div>
                            <h3 className="text-xl font-bold mb-2 font-delicate">{t.philosophy.creator_title}</h3>
                            <p className="text-sm text-[var(--text-muted)] mb-4">{t.philosophy.creator_desc}</p>
                            <a href={DATA.links.xiaohongshu} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-wider text-[var(--accent-green-deep)] flex items-center gap-1 hover:text-black">
                                {t.philosophy.view_xhs} <ArrowUpRight size={12}/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-5 order-1 md:order-2">
                    <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                        <img 
                            src={DATA.images.about} 
                            alt="Selina Portrait" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION (Updated) --- */}
      <section id="portfolio" className="py-24 relative z-10">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <span className="text-[var(--accent-green-deep)] font-bold uppercase tracking-widest text-sm bg-[var(--accent-green-pale)] px-4 py-1 rounded-full">Selected Works</span>
                  <h2 className="text-5xl md:text-6xl font-delicate font-bold mt-6 mb-4">{t.portfolio.title}</h2>
                  <p className="text-[var(--text-muted)] max-w-lg mx-auto font-delicate text-xl">{t.portfolio.subtitle}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {t.portfolio.items.map((item, index) => (
                      <a key={index} href={item.link} target="_blank" rel="noreferrer" className="group h-full">
                          <div className="card-soft bg-white/60 backdrop-blur p-8 rounded-[2.5rem] h-full flex flex-col relative overflow-hidden">
                              <div className="w-14 h-14 rounded-2xl bg-[var(--accent-green-pale)] flex items-center justify-center mb-6 text-[var(--accent-green-deep)] group-hover:scale-110 transition-transform">
                                  {item.icon === 'camera' ? <Camera size={24}/> : item.icon === 'palette' ? <Palette size={24}/> : <Video size={24}/>}
                              </div>
                              <h3 className="text-2xl font-bold font-delicate mb-3">{item.title}</h3>
                              <p className="text-[var(--text-muted)] mb-8 leading-relaxed font-sans text-sm flex-grow">{item.desc}</p>
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--text-main)] mt-auto group-hover:gap-4 transition-all">
                                  View Project <ArrowUpRight size={14} />
                              </div>
                          </div>
                      </a>
                  ))}
              </div>
          </div>
      </section>

      {/* --- EXPERIENCE SECTION (Added YNLY) --- */}
      <section id="experience" className="py-32 container mx-auto px-6 z-10 relative">
        <div className="text-center mb-20">
           <h2 className="text-5xl md:text-7xl font-delicate font-bold mb-4">{t.experience.title}</h2>
           <p className="text-[var(--text-muted)] font-delicate text-xl">{t.experience.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 font-sans">
             {t.experience.jobs.map((job, index) => (
                <JobCard key={index} {...job} index={index} />
             ))}
        </div>

        {/* Education & Skills */}
        <div className="mt-24 grid md:grid-cols-12 gap-8 font-sans">
            <div className="md:col-span-5 bg-white/60 backdrop-blur p-10 rounded-[2rem] card-soft">
                <h3 className="text-3xl font-delicate font-bold mb-8 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[var(--accent-green-pale)] flex items-center justify-center text-lg">🎓</span>
                    {t.experience.edu_title}
                </h3>
                <div className="space-y-8 border-l border-stone-200 pl-8 ml-3">
                    <div className="relative">
                        <div className="absolute -left-[38px] top-1 w-5 h-5 rounded-full border-4 border-white bg-[var(--text-main)]"></div>
                        <h4 className="text-lg font-bold">Cornell University</h4>
                        <p className="text-[var(--text-muted)]">MPS in Management (STEM)</p>
                    </div>
                    <div className="relative">
                        <div className="absolute -left-[38px] top-1 w-5 h-5 rounded-full border-4 border-white bg-stone-300"></div>
                        <h4 className="text-lg font-bold">University of Michigan</h4>
                        <p className="text-[var(--text-muted)]">BA in Communication & Media</p>
                    </div>
                </div>
            </div>
            
            <div className="md:col-span-7 bg-[var(--accent-green-pale)]/40 p-10 rounded-[2rem] card-soft">
                 <h3 className="text-3xl font-delicate font-bold mb-8 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg">✨</span>
                    {t.experience.skills_title}
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Python (Data Scraping)', 'Sentiment Analysis GPT', 'Tableau', 'Influencer Marketing', 'Project Management', 'SEO & Growth', 'Adobe Creative Suite', 'Photography'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-white rounded-xl text-sm font-medium hover:scale-105 transition-transform cursor-default shadow-sm text-[var(--text-muted)]">
                        {skill}
                    </span>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer id="contact" className="pt-32 pb-12 px-6 bg-white/40 rounded-t-[4rem] mt-20">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
             <div className="max-w-xl">
                <h2 className="text-6xl md:text-8xl font-delicate font-bold mb-8 leading-[0.9] text-[var(--text-main)]">
                   Let's<br/><span className="italic text-[var(--accent-green-deep)]">Connect.</span>
                </h2>
                <p className="text-2xl text-[var(--text-muted)] font-delicate">
                   {t.contact.desc}
                </p>
             </div>
             
             <div className="flex flex-col gap-4 w-full md:w-auto font-sans">
                <ContactPill icon={<Mail size={20} />} text="selinawmzy@gmail.com" href="mailto:selinawmzy@gmail.com" />
                <ContactPill icon={<Smartphone size={20} />} text="717-517-6588" href="tel:717-517-6588" secondary />
                <div className="flex items-center gap-4 px-8 py-4 bg-white/50 rounded-2xl text-[var(--text-muted)] border border-stone-100">
                   <MapPin size={20} className="text-[var(--accent-green-deep)]" /> Miami, FL / Beijing, China
                </div>
             </div>
          </div>

          <div className="border-t border-stone-200/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[var(--text-muted)] uppercase tracking-widest font-sans">
             <div>{t.contact.rights}</div>
             <div className="flex gap-6">
                <SocialLink href="https://www.linkedin.com/in/selinawmzy" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href="https://www.instagram.com/notmuziyiselina" icon={<Instagram size={20} />} label="Instagram" />
                <SocialLink href={DATA.links.xiaohongshu} icon={<span className="font-bold font-serif text-lg">RED</span>} label="Xiaohongshu" />
             </div>
          </div>
        </div>
      </footer>

      <ChatWidget lang={lang} />
    </div>
  );
};

// --- SUB-COMPONENTS ---

const JobCard = ({ role, company, period, details, type, tags, link, linkText, links, mediaType, isThesis, index }) => {
    const cardBg = index % 2 === 0 ? 'bg-white/70' : 'bg-[#F9Fcf9]/70';
    
    return (
        <div className={`${cardBg} backdrop-blur-sm p-8 rounded-[2.5rem] card-soft flex flex-col h-full relative overflow-hidden group`}>
            {isThesis && <div className="absolute top-0 right-0 bg-[var(--accent-green-pale)] text-[var(--accent-green-deep)] text-[10px] font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">Academic Honor</div>}

            <div className="flex justify-between items-start mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-[var(--text-main)] leading-tight">{company}</h3>
                    <p className="text-sm font-bold uppercase tracking-wider text-[var(--accent-green-deep)] mt-2">{role}</p>
                </div>
                <span className="text-xs font-bold bg-white px-3 py-1 rounded-full text-[var(--text-muted)] shadow-sm">{period}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
                {tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-lg text-[var(--text-muted)] bg-white/50 border border-stone-100">
                        {tag}
                    </span>
                ))}
            </div>

            <p className="text-[var(--text-muted)] leading-relaxed mb-8 flex-grow font-medium">
                {details}
            </p>

            <div className="mt-auto">
                {type === 'media-dual' && links ? (
                    <div className="grid grid-cols-2 gap-4">
                        {links.map((l, i) => (
                            <a key={i} href={l.url} target="_blank" rel="noreferrer" className="h-24 rounded-2xl bg-white border border-stone-100 flex flex-col items-center justify-center hover:bg-[var(--accent-green-pale)] transition-colors">
                                <span className="text-xs font-bold uppercase flex items-center gap-2">{l.label} <ArrowUpRight size={12}/></span>
                            </a>
                        ))}
                    </div>
                ) : type === 'media' && link ? (
                     <a href={link} target="_blank" rel="noreferrer" className="w-full py-4 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center gap-2 hover:bg-[var(--text-main)] hover:text-white transition-all text-xs font-bold uppercase tracking-widest">
                        {mediaType === 'video' ? <Youtube size={18}/> : <Instagram size={18}/>} {linkText}
                     </a>
                ) : null}
            </div>
        </div>
    );
};

const ContactPill = ({ icon, text, href, secondary }) => (
    <a href={href} className={`flex items-center gap-4 px-8 py-4 rounded-2xl shadow-sm transition-all hover:-translate-y-1 ${secondary ? 'bg-white text-[var(--text-main)] border border-stone-100 hover:border-[var(--accent-green-medium)]' : 'bg-[var(--text-main)] text-white hover:bg-[var(--accent-green-deep)]'}`}>
        {icon} <span className="font-medium">{text}</span>
    </a>
);

const SocialLink = ({ href, icon, label }) => (
   <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[var(--accent-green-deep)] transition-colors">
      {icon} <span className="hidden md:inline font-medium">{label}</span>
   </a>
);

const ChatWidget = ({ lang }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        setMessages([{ role: 'ai', text: lang === 'en' ? "Hi! Ask about Selina's thesis or work." : "你好！关于我的论文或工作，请随时提问。" }]);
    }, [lang]);

    useEffect(() => chatEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, isOpen]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = input;
        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setLoading(true);
        setTimeout(() => {
             setMessages(prev => [...prev, { role: 'ai', text: lang === 'en' ? "I'm offline right now (Demo Mode)." : "我现在处于离线演示模式。" }]);
             setLoading(false);
        }, 1000);
    };

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 bg-[var(--text-main)] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform">
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 bg-white/90 backdrop-blur rounded-[2rem] shadow-2xl border border-white/50 h-[400px] flex flex-col p-4">
                    <div className="flex-1 overflow-y-auto space-y-2">
                        {messages.map((msg, i) => (
                            <div key={i} className={`p-2 rounded-xl text-sm ${msg.role === 'user' ? 'bg-[var(--text-main)] text-white ml-auto' : 'bg-white border border-stone-100'}`}>{msg.text}</div>
                        ))}
                    </div>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="..." className="w-full bg-stone-50 rounded-xl px-4 py-2 text-sm mt-2 focus:outline-none" />
                </div>
            )}
        </>
    );
};

export default App;
