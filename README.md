<div align="center">

  <img src="https://raw.githubusercontent.com/3361559784/3361559784/main/wallpaper-ezgif.com-gif-maker-3.gif" width="100%" style="border-radius: 12px; box-shadow: 0 0 24px rgba(0,191,255,0.45);" alt="AIRI and Aris banner">

  <h1>邦邦咔邦! GitHub 爱丽丝云端基地</h1>

  <p>
    <b>刘梓恒 / 3361559784</b><br>
    AI Agent / MCP developer · Open-source contributor · Full-stack builder
  </p>

  <p>
    这里不是很正式的简历页。<br>
    更像一张正在更新的作战地图：AI Agent、MCP、桌面自动化、云端应用、开源协作，还有一点爱丽丝。
  </p>

  <p>
    <a href="https://github.com/moeru-ai/airi">
      <img src="https://img.shields.io/badge/Project%20AIRI-Contributor-00BFFF?style=for-the-badge" alt="Project AIRI contributor">
    </a>
    <a href="https://github.com/moeru-ai/airi/tree/main/services/computer-use-mcp">
      <img src="https://img.shields.io/badge/computer--use--mcp-Execution%20Substrate-111827?style=for-the-badge" alt="computer-use-mcp">
    </a>
    <a href="https://github.com/3361559784">
      <img src="https://img.shields.io/badge/Status-Building%20in%20public-10a37f?style=for-the-badge" alt="Building in public">
    </a>
  </p>

  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Pixelify+Sans&size=24&duration=2200&pause=900&color=00BFFF&center=true&vCenter=true&width=640&lines=Project+AIRI+execution+line...;MCP+tools+and+runtime+discipline...;Desktop+and+browser+automation...;Azure+apps+and+AI+agents..." alt="Typing SVG" />
  </a>

  <br><br>

  <img src="https://media.tenor.com/P60A6tUuWIEAAAAi/aris-dance-blue-archive.gif" width="100px" alt="Aris dance">

  <br><br>

  <p>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vue-42B883?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue">
    <img src="https://img.shields.io/badge/Electron-47848F?style=flat-square&logo=electron&logoColor=white" alt="Electron">
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Azure">
    <img src="https://img.shields.io/badge/MCP-Agent%20Tools-111827?style=flat-square" alt="MCP agent tools">
  </p>

</div>

---

<div align="center">

  <h2>主线 / MAIN TRACK</h2>
  <p><b>Project AIRI · computer-use-mcp · desktop/browser automation</b></p>

</div>

最近主要在 [Project AIRI](https://github.com/moeru-ai/airi) 里做 `computer-use-mcp`、coding runner、desktop/browser automation 相关改动。

<table>
<tr>
<td width="34%" valign="top">

<h3>coding runner</h3>

<p>让 coding agent 的收尾、验证、失败恢复更稳定。</p>

<ul>
  <li>completion report</li>
  <li>verification gate</li>
  <li>text-only final recovery</li>
  <li>budget exhausted classification</li>
  <li>live eval / deterministic regression</li>
</ul>

</td>
<td width="33%" valign="top">

<h3>context / memory</h3>

<p>让上下文可以被使用，但不变成新的污染源。</p>

<ul>
  <li>transcript projection</li>
  <li>archive recall</li>
  <li>task memory / evidence pins</li>
  <li>workspace memory review</li>
  <li>context budget policy</li>
</ul>

</td>
<td width="33%" valign="top">

<h3>desktop / browser</h3>

<p>Chrome-first 的桌面控制链路，偏观察、定位、执行边界。</p>

<ul>
  <li>Chrome semantic DOM bridge</li>
  <li>iframe coordinate grounding</li>
  <li>desktop target candidates</li>
  <li>overlay / ghost pointer</li>
  <li>OS input boundary</li>
</ul>

</td>
</tr>
</table>

<table>
<tr>
<td width="50%" valign="top">

<h3>AIRI execution line</h3>

我主要补的是执行链路里的边界、测试、恢复路径和可审计信息。这里不写成“独立完成某某系统”，按公开 PR 和实际改动来算。

<ul>
  <li>MCP tool surface</li>
  <li>approval / audit / trace</li>
  <li>runner verification</li>
  <li>archive / memory discipline</li>
  <li>test matrix and live checks</li>
</ul>

</td>
<td width="50%" valign="top">

<h3>desktop v3 direction</h3>

现在的桌面线偏 macOS + Chrome-first。目标不是“让模型乱点屏幕”，而是把页面语义、视觉候选、OS 输入和 overlay 状态接起来。

<ul>
  <li>visual + semantic grounding</li>
  <li>Chrome bridge lifecycle</li>
  <li>iframe coordinate hardening</li>
  <li>overlay input isolation</li>
  <li>cursor restore behavior</li>
</ul>

</td>
</tr>
</table>

<details>
<summary><b>Selected merged AIRI PRs</b></summary>

<br>

<table>
<tr>
<td width="18%"><b>PR</b></td>
<td><b>Area</b></td>
</tr>
<tr>
<td><a href="https://github.com/moeru-ai/airi/pull/1734">#1734</a></td>
<td>transcript truth source and safe projection</td>
</tr>
<tr>
<td><a href="https://github.com/moeru-ai/airi/pull/1733">#1733</a></td>
<td>read-only DOM tools parity for the extension bridge</td>
</tr>
<tr>
<td><a href="https://github.com/moeru-ai/airi/pull/1727">#1727</a></td>
<td>route target clicks through the action executor</td>
</tr>
<tr>
<td><a href="https://github.com/moeru-ai/airi/pull/1648">#1648</a></td>
<td>browser-native DOM action routing</td>
</tr>
<tr>
<td><a href="https://github.com/moeru-ai/airi/pull/1647">#1647</a></td>
<td>desktop observation and overlay baseline</td>
</tr>
<tr>
<td><a href="https://github.com/moeru-ai/airi/pull/1380">#1380</a></td>
<td>foundation of computer use</td>
</tr>
</table>

</details>

---

<div align="center">

  <h2>支线 / SIDE PROJECTS</h2>
  <p><b>Campus Copilot · Project Aris</b></p>

</div>

Campus Copilot 和 Project Aris 是早一点的完整应用线。它们现在不是主页主角，但仍然是我做过的一条比较完整的产品链路。

<table>
<tr>
<td width="50%" valign="top">

<h3>Campus Copilot</h3>

<ul>
  <li>校园 AI 助手。</li>
  <li>重点是没有数据时不编造。</li>
  <li>课表查询和多源导入。</li>
  <li>OCR 识别课表截图。</li>
  <li>Next.js web demo。</li>
</ul>

</td>
<td width="50%" valign="top">

<h3>Project Aris / QQ Bot</h3>

<ul>
  <li>QQ Bot 消息处理。</li>
  <li>Azure Functions / Cosmos DB。</li>
  <li>双人格和场景切换。</li>
  <li>流式响应和定时提醒。</li>
  <li>校园数据接入。</li>
</ul>

</td>
</tr>
</table>

这条线更偏应用层：能不能把一个 AI 产品跑起来、接进真实入口、处理真实用户输入。AIRI 这条线更偏执行系统和开源协作。

---

<div align="center">

  <h2>工程偏好 / ENGINEERING NOTES</h2>

</div>

<table>
<tr>
<td width="50%" valign="top">

<h3>工作习惯</h3>

<ul>
  <li>先看代码、测试、日志，再下结论。</li>
  <li>PR 尽量小，commit 拆清楚。</li>
  <li>baseline 够用就冻结。</li>
  <li>文档要跟实现、测试、脚本对得上。</li>
  <li>能写 deterministic test 就不要只靠 live demo。</li>
</ul>

</td>
<td width="50%" valign="top">

<h3>AI governance</h3>

这里不展开成大理论，只记几个工程边界：

<ul>
  <li>哪些内容能进 prompt。</li>
  <li>哪些工具能被模型直接调用。</li>
  <li>哪些状态必须经过 review / token / host gate。</li>
  <li>哪些记录只能当证据，不能当指令。</li>
  <li>哪些失败要直接拦住，不能靠模型自己解释过去。</li>
</ul>

</td>
</tr>
</table>

---

<div align="center">

  <h2>工具箱 / TOOLBOX</h2>

</div>

<table>
<tr>
<td width="33%">

<h3>Runtime</h3>

<ul>
  <li>TypeScript</li>
  <li>Node.js</li>
  <li>MCP server</li>
  <li>xsAI / tool calling</li>
  <li>Vitest</li>
</ul>

</td>
<td width="33%">

<h3>Desktop</h3>

<ul>
  <li>Electron</li>
  <li>Vue</li>
  <li>typed Electron IPC via Eventa</li>
  <li>Chrome bridge</li>
  <li>macOS automation</li>
</ul>

</td>
<td width="33%">

<h3>Cloud / App</h3>

<ul>
  <li>Azure Functions</li>
  <li>Cosmos DB</li>
  <li>Next.js</li>
  <li>GitHub Actions</li>
  <li>QQ Bot</li>
</ul>

</td>
</tr>
</table>

---

<div align="center">

  <h2>Status Board</h2>

  <img src="./profile-summary-card-output/default/0-profile-details.svg" width="100%" alt="profile details" />

  <br><br>

  <img src="./profile-summary-card-output/default/3-stats.svg" width="100%" alt="github stats" />

  <br><br>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/3361559784/3361559784/output/github-contribution-grid-snake-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/3361559784/3361559784/output/github-contribution-grid-snake.svg">
    <img alt="github contribution grid snake animation" src="https://raw.githubusercontent.com/3361559784/3361559784/output/github-contribution-grid-snake.svg">
  </picture>

</div>
