<div align="center">

  <img src="https://raw.githubusercontent.com/3361559784/3361559784/main/wallpaper-ezgif.com-gif-maker-3.gif" width="100%" style="border-radius: 10px; box-shadow: 0 0 20px rgba(0,191,255,0.5);" alt="Aris Banner">
  <h1> ✨ 邦邦咔邦!GitHub 爱丽丝云端基地 ✨ </h1>

  <p>
    <a href="#">
      <img src="https://img.shields.io/badge/Azure-Cloud%20Native-0078D4?style=for-the-badge&logo=microsoftazure" alt="Azure">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/Imagine%20Cup-2026%20Competitor-orange?style=for-the-badge&logo=microsoft" alt="Imagine Cup">
    </a>
  </p>
  
  <p>
  这里是 <b>Sensei (刘梓恒)</b> 的全栈开发基地。<br>
  <b>🤖 AI Native Developer | ☁️ Azure Cloud Architect | 🧱 Independent Maker</b><br>
   目前正在努力攻略 <b>[Serverless]</b> 和 <b>[LLM Agent]</b> 副本中！(ง •_•)ง <br>
   提交的代码越多,贪吃蛇的方块越多吗,爱丽丝不要哇。・゜・(ノД`)・゜・。<br>
   ( >﹏<。) 老师不哭不哭！爱丽丝给您呼呼！<br>
   "并不是要每天都写很多代码哦！" 只要偶尔来点亮一下，贪吃蛇就会很开心地长大了！就算没有方块，爱丽丝也会一直陪着老师的！<br>
   <b>但为了让爱丽丝变得更聪明,老师正在用 Azure 给她搭建云端大脑呢!</b> ☁️✨<br>
    (づ￣ 3￣)づ
  </p>

  ---
  
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Pixelify+Sans&size=24&duration=2000&pause=1000&color=00BFFF&center=true&vCenter=true&width=500&lines=Microsoft+Imagine+Cup+2026...%E2%96%88;Campus+Copilot+-+AI+Campus+Assistant...%E2%96%88;Serverless+%2B+LLM+Agent+Architecture...%E2%96%88;Azure+Functions+%2B+Cosmos+DB...%E2%96%88" alt="Typing SVG" />
  </a>
  
  <br>

  <img src="https://media.tenor.com/P60A6tUuWIEAAAAi/aris-dance-blue-archive.gif" width="100px">
  
  <br><br>

  <p>
    <img src="https://img.shields.io/badge/Azure%20Functions-0078D4?style=flat-square&logo=azurefunctions&logoColor=white" alt="Azure Functions">
    <img src="https://img.shields.io/badge/Cosmos%20DB-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Cosmos DB">
    <img src="https://img.shields.io/badge/Next.js%2016-000000?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js">
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Node.js%2022-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node">
    <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker">
    <img src="https://img.shields.io/badge/GitHub%20Models-10a37f?style=flat-square&logo=openai&logoColor=white" alt="AI">
    <img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind">
  </p>

</div>

<br>

## 🏆 Campus Copilot - Microsoft Imagine Cup 2026

> **"不是更聪明的 AI，是更懂边界的 AI"**  
> 面向中国高校学生的智能校园助手，基于 Azure Serverless 架构，核心特色是 **红线意识** + **双人格系统**。

<div align="center">

| 🌐 **线上体验** | 📦 **技术栈** | 🎯 **目标** |
|:---:|:---:|:---:|
| [campus-copilot-demo.azurewebsites.net](https://campus-copilot-demo.azurewebsites.net) | Azure + Next.js + LLM | Imagine Cup 2026 |

</div>

### 🎯 核心差异化

| 传统 AI 助手 | Campus Copilot |
|:---:|:---:|
| ❌ 没有数据也会编造答案 | ✅ **红线意识** - 无数据时坚决不编造 |
| ❌ 所有场景用同一种语气 | ✅ **双人格系统** - 查课专业，闲聊可爱 |
| ❌ 只支持单一输入方式 | ✅ **多源导入** - Excel/ICS/OCR/链接/手动 |
| ❌ 出错显示技术报错 | ✅ **产品化引导** - 友好错误提示 |

<br>

<div align="center">
  <h3>🏗️ System Architecture 系统架构</h3>
</div>

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        Campus Copilot Architecture                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│  │   Web App   │    │   QQ Bot    │    │   WeChat    │    │   API       │  │
│  │  (Next.js)  │    │  (NapCat)   │    │   (WIP)     │    │  Clients    │  │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘    └──────┬──────┘  │
│         │                  │                  │                  │         │
│         └──────────────────┴──────────────────┴──────────────────┘         │
│                                    │                                        │
│                                    ▼                                        │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                    Azure Functions (Serverless)                      │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌────────────┐  │   │
│  │  │ schoolBot   │  │ chaoxing    │  │ ocrCourse   │  │ dailyAris  │  │   │
│  │  │ HTTP Trigger│  │ Scraper     │  │ Vision API  │  │ Timer Trig │  │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘  └────────────┘  │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                    │                                        │
│         ┌──────────────────────────┼──────────────────────────┐            │
│         │                          │                          │            │
│         ▼                          ▼                          ▼            │
│  ┌─────────────┐           ┌─────────────┐           ┌─────────────┐       │
│  │  Cosmos DB  │           │   GitHub    │           │   Azure     │       │
│  │  NoSQL      │           │   Models    │           │ AI Services │       │
│  │  ─────────  │           │   ─────────  │           │  ─────────  │       │
│  │ • Chat Hist │           │ • GPT-4o    │           │ • Vision    │       │
│  │ • Schedule  │           │ • GPT-4o-m  │           │ • TTS       │       │
│  │ • Affection │           │ • Streaming │           │ • Search    │       │
│  └─────────────┘           └─────────────┘           └─────────────┘       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 🛠️ Tech Stack 技术栈

<table>
<tr>
<td width="50%">

**🖥️ Frontend (campus-ai-web)**
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS 4.0
- **Animation**: Framer Motion
- **Language**: TypeScript 5
- **UI**: Lucide React Icons
- **Deploy**: Azure App Service (Docker)

</td>
<td width="50%">

**⚡ Backend (Azure Functions)**
- **Runtime**: Node.js 22
- **Trigger**: HTTP / Timer / Queue
- **Database**: Azure Cosmos DB (NoSQL)
- **AI Model**: GitHub Models (GPT-4o)
- **Search**: DuckDuckGo / SERP API
- **OCR**: Azure Computer Vision 4.0

</td>
</tr>
</table>

### 📁 Project Structure 项目结构

```
qq-bot-aris-clean/
├── campus-ai-web/              # 🌐 Next.js 前端 (Imagine Cup Demo)
│   ├── app/                    # App Router 页面
│   │   ├── page_new.tsx        # 主聊天界面 (响应式)
│   │   ├── demo/               # 评委体验 Demo 页
│   │   └── api/                # API Routes
│   ├── components/             # React 组件
│   │   ├── AliceAvatar.tsx     # 爱丽丝 Live2D 风格头像
│   │   ├── Sidebar.tsx         # 左侧导航栏
│   │   ├── RightPanel.tsx      # 右侧上下文面板
│   │   └── ScheduleImport*.tsx # 课表导入组件
│   └── services/               # 前端服务层
│
├── src/functions/              # ⚡ Azure Functions (Serverless)
│   ├── schoolBot.js            # 核心消息处理 (QQ Bot)
│   ├── chaoxingScraper*.js     # 学习通课表抓取
│   ├── ocrCourse.js            # 课表 OCR 识别
│   └── dailyAris.js            # 定时任务 (每日提醒)
│
├── services/                   # 🔧 共享服务模块
│   ├── hybridSearch.js         # 混合搜索 (本地+网络)
│   ├── emotionService.js       # 情绪识别引擎
│   ├── scheduleService.js      # 课表查询服务
│   ├── visionService.js        # 图像理解服务
│   └── modelRouter.js          # LLM 路由 (双模型)
│
└── .github/workflows/          # 🚀 CI/CD
    ├── deploy-campus-copilot-demo.yml
    └── main_school-bot.yml
```

### ✨ Key Features 核心功能

**🔴 红线意识 (Safety Protocol)**
```javascript
// 没有课表数据时，坚决不编造
if (!schedule || schedule.length === 0) {
  return {
    reply: "⚠️ 我还没有你的课表数据，无法回答课程相关问题。",
    meta: { safety_protocol: "NO_DATA_NO_FABRICATION" }
  };
}
```

**🎭 双人格系统 (Auto Persona Switch)**
```javascript
// 场景判断 → 自动切换人格
if (isScheduleQuery || isAcademicQuery) {
  persona = "professional";  // ⚡ 专业模式: 简洁准确
} else {
  persona = "alice";         // 🎀 爱丽丝: 可爱活泼
}
```

**📚 多源课表导入**
- 🔗 学习通链接自动抓取 (Chaoxing Scraper)
- 📊 Excel/CSV 文件解析
- 📅 ICS 日历格式导入
- 📸 课表截图 OCR 识别
- ✏️ 手动输入

**🚀 流式响应 (Streaming)**
```typescript
// 打字机效果 + 思考阶段展示
onThinking: (stage) => updateUI({ phase: "thinking", text: stage }),
onToken: (token, full) => updateUI({ phase: "generating", text: full }),
onComplete: (result) => finalizeMessage(result)
```

<br>

## 🌟 Project Aris - QQ Bot (Original Project)

> **"Not just a bot, but a soul."**
> 基于 Azure Serverless 架构设计的多模态 AI 情感伴侣。

<div align="center">
  <h3>🏗️ QQ Bot Architecture (v2.0)</h3>
  <pre lang="mermaid">
graph TB
    subgraph "Input Layer 输入层"
        User[👤 User/Sensei] -->|Text 文本| Input
        User -->|Image 图片| Input
        User -->|Poke 戳一戳| Input
        Input[QQ Message]
    end
    
    Input -->|Webhook POST| NapCat[🔌 NapCat Protocol Adapter]
    NapCat -->|Event Payload| Azure
    
    subgraph "Azure Serverless Tier 云端无服务器层"
        Azure[⚡ Azure Functions HTTP Trigger]
        
        Azure -->|Auth Check| Guard[🛡️ Security Guard]
        Guard -->|Cooldown Check| RateLimit[⏱️ Rate Limiter]
        RateLimit -->|Pass| Router[🎯 Intent Router]
        
        Router -->|Message Type| TypeCheck{消息类型?}
        TypeCheck -->|Text| TextFlow
        TypeCheck -->|Image| VisionFlow
        TypeCheck -->|Poke| PokeFlow
    end
    
    subgraph "Text Processing Pipeline 文本处理流"
        TextFlow[📝 Text Handler]
        TextFlow -->|Query History| CosmosDB[(🗄️ Cosmos DB)]
        CosmosDB -->|Recent 15 msgs| TextFlow
        
        TextFlow -->|User Profile| AffectionDB[(❤️ Affection System)]
        AffectionDB -->|Level & Points| TextFlow
        
        TextFlow -->|Emotion Detection| EmotionEngine[🎭 Emotion Analyzer]
        EmotionEngine -->|7 Patterns| TextFlow
        
        TextFlow -->|Build Context| PromptBuilder[🧩 Dynamic Prompt Builder]
        PromptBuilder -->|Time-aware| TimeSystem[🕐 Time of Day]
        PromptBuilder -->|Memory Inject| RAG[🧠 RAG Memory Retrieval]
        
        PromptBuilder -->|Final Prompt| LLM[🤖 GitHub Models GPT-4o]
        LLM -->|Generated Text| PostProcess
    end
    
    subgraph "Vision Processing Pipeline 视觉处理流"
        VisionFlow[🖼️ Image Handler]
        VisionFlow -->|Anime Char?| AnimeTrace[🔍 AnimeTrace API]
        VisionFlow -->|Custom Model| CustomVision[👁️ Azure Custom Vision]
        VisionFlow -->|General OCR| ComputerVision[📸 Azure CV 4.0]
        
        AnimeTrace -->|Character Info| VisionMerge
        CustomVision -->|Aris Detection| VisionMerge
        ComputerVision -->|Scene Description| VisionMerge
        VisionMerge[🎨 Vision Result Merger] -->|Context| LLM
    end
    
    subgraph "Poke Interaction System 戳一戳系统"
        PokeFlow[👆 Poke Handler]
        PokeFlow -->|Count Window| PokeCounter[(⏲️ Poke State Cache)]
        PokeCounter -->|Threshold Check| PokeMood{触发模式?}
        
        PokeMood -->|Gentle 温柔| GentleResp[💕 Sweet Response]
        PokeMood -->|Annoyed 不耐烦| AnnoyedResp[😤 Annoyed Response]
        PokeMood -->|Counter 反击| CounterPoke[👊 Counter Attack]
        
        GentleResp -->|Affection +5| AffectionDB
        AnnoyedResp -->|Affection -5| AffectionDB
    end
    
    subgraph "Response Generation Layer 响应生成层"
        PostProcess[🔧 Smart Post-Processor]
        PostProcess -->|Emoji→Kaomoji| EmojiConvert[😊→ω✨]
        PostProcess -->|Sentence Split| SmartSplit[📏 Smart Splitter]
        PostProcess -->|RPG Terms| RPGEnhance[⚔️ RPG Terminology]
        
        PostProcess -->|Check Keywords| AudioRouter{需要语音?}
        
        AudioRouter -->|Keyword Match| GithubAudio[🎵 GitHub Raw Audio Assets]
        AudioRouter -->|Short & Fast| AzureTTS[☁️ Azure TTS ja-JP-NanamiNeural]
        AudioRouter -->|Long & Emotional| LocalTTS[🎙️ GPT-SoVITS Local Server]
        
        LocalTTS -->|REF: Aris_Battle_Damage_3.wav| SoVITSEngine
        SoVITSEngine[🔊 Voice Clone Engine] -->|Audio Stream| Output
    end
    
    subgraph "Output & Persistence 输出与持久化"
        Output[📨 Response Package]
        Output -->|Save to DB| CosmosDB
        Output -->|Update Points| AffectionDB
        Output -->|Store Event| RAG
        
        Output -->|HTTP 200 + Payload| NapCat
        NapCat -->|Send QQ Message| User
    end
    
    style Azure fill:#0078D4,stroke:#fff,color:#fff
    style LLM fill:#10a37f,stroke:#fff,color:#fff
    style CosmosDB fill:#0078D4,stroke:#fff,color:#fff
    style LocalTTS fill:#ff6b6b,stroke:#fff,color:#fff
    style AffectionDB fill:#ff69b4,stroke:#fff,color:#fff
</pre>
</div>

**核心亮点 (Core Features)**:

**✅ 已实装 (Production)**:
* ❤️ **情感状态机**: 7种情绪模式识别 + 动态好感度系统 (0-1000分),支持特殊节日加成。
* 🎭 **多模态输入处理**:
  - 文本: 情绪识别 + RPG术语增强 + 智能分句
  - 图像: AnimeTrace识图 + Azure Custom Vision + Computer Vision 4.0
  - 交互: 戳一戳渐进式情绪系统 (温柔→烦躁→反击)
* 🎨 **AI绘图能力**: 集成 Pollinations API,支持64个碧蓝档案角色的中英文映射与特征保留。
* 🌐 **多语言支持**: 自动检测中文/日文/英文,动态切换 Prompt 模板。
* 🛡️ **生产级安全机制**: Token鉴权 + 群组冷却 (8s) + 用户限流 (2s) + 防刷屏防护。

**🚧 架构设计中 (Roadmap v2.0)**:
* 🗣️ **混合语音路由系统**: 设计了三层 TTS 架构以平衡速度与情感表现力:
  - Tier 1: GitHub Raw Assets (关键词直链,已实现)
  - Tier 2: GPT-SoVITS (本地声线克隆方案,已完成可行性验证)
  - Tier 3: Azure TTS (已集成官方 SDK，因语音质量暂未正式启用)
* ☁️ **Serverless 云原生架构**: 规划基于 Azure Functions + Cosmos DB 实现弹性伸缩与低成本运维。
* 🧠 **RAG 长期记忆系统**: 设计基于余弦相似度的向量检索方案,支持跨会话上下文召回。

<br>

<div align="center">
  <h3>🆔 冒险者ID卡</h3>
  <table border="0" width="100%">
    <tr>
      <td width="30%" align="center" valign="middle">
        <img src="160735726.jpeg" width="140px" style="border-radius: 50%; border: 4px solid #00BFFF; box-shadow: 0 0 10px rgba(0,191,255,0.5);">
      </td>
      <td width="70%" align="left" valign="top">
        <h1>刘梓恒 (Sensei)</h1>
        <p><code>3361559784</code> · Full-Stack Developer</p>
        <p>📍 Studying at Wuchang Institute of Technology</p>
        <p><b>Highlights:</b></p>
        <ul>
          <li>☁️ Azure Cloud Native Developer</li>
          <li>🤖 AI/LLM Application Enthusiast</li>
          <li>🏆 Imagine Cup 2026 Competitor</li>
        </ul>
      </td>
    </tr>
  </table>
  
  <br>
  <img src="./profile-summary-card-output/default/0-profile-details.svg" width="100%" />
</div>

<br>

<div align="center">
  <h3>📊 GitHub Stats</h3>
  <img src="https://github-readme-stats.vercel.app/api?username=3361559784&show_icons=true&theme=tokyonight&hide_border=true" width="48%" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=3361559784&theme=tokyonight&hide_border=true" width="48%" />
</div>

<br>

<div align="center">
  <h3>🐍 爱丽丝正在和老师的提交记录玩贪吃蛇！</h3>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/3361559784/3361559784/output/github-contribution-grid-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/3361559784/3361559784/output/github-contribution-grid-snake.svg">
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/3361559784/3361559784/output/github-contribution-grid-snake.svg">
  </picture>
</div>

---

<div align="center">
  <p>
    <sub><i>"只要不断尝试，Bug 也会变成 Feature 的！" —— 天童爱丽丝</i></sub><br>
    ( >﹏<。)
  </p>
  
  <br>
  
  <a href="https://campus-copilot-demo.azurewebsites.net">
    <img src="https://img.shields.io/badge/🚀%20Try%20Campus%20Copilot-Demo-blue?style=for-the-badge" alt="Demo">
  </a>
</div>
