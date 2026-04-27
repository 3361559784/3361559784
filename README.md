<div align="center">

  <img src="https://raw.githubusercontent.com/3361559784/3361559784/main/wallpaper-ezgif.com-gif-maker-3.gif" width="100%" style="border-radius: 12px; box-shadow: 0 0 24px rgba(0,191,255,0.45);" alt="AIRI and Aris banner">

  <h1>邦邦咔邦! GitHub 爱丽丝云端基地</h1>

  <p>
    <b>刘梓恒 / 3361559784</b><br>
    AI Native Developer · Open-source contributor · Full-stack builder
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

## Current Questline

### Project AIRI / computer-use-mcp

现在最主要的公开线是 [Project AIRI](https://github.com/moeru-ai/airi)。我主要参与 `computer-use-mcp`、desktop/browser automation、coding runner 这几块。

这条线关心的不是“模型说它做完了”，而是：

- 工具调用有没有边界。
- 执行结果有没有证据。
- 失败以后能不能恢复。
- 上下文、记忆、归档会不会反过来污染 prompt。
- 桌面和浏览器自动化能不能从观察、定位、执行、审计一路闭合。

一些近期比较常碰的切片：

- transcript / archive retention：把 prompt projection、archive candidate、context budget 这几条线对齐。
- task memory / evidence pins：让当前 run 的关键证据能进下一轮，但不会伪装成指令。
- workspace memory governance：propose、review、apply 分层，不让模型自己把临时结论永久化。
- coding runner recovery：text-only final、verification gate、shell misuse、budget exhausted 这些失败都要能分类。
- desktop v3：Chrome-first、visual + semantic grounding、overlay/ghost pointer、OS input boundary。

<table>
<tr>
<td width="50%">

**AIRI execution line**

- MCP tool surface
- approval / audit / trace
- coding runner verification gate
- archive recall discipline
- task / workspace memory governance

</td>
<td width="50%">

**Desktop and browser line**

- Chrome semantic DOM bridge
- iframe coordinate grounding
- desktop target candidates
- overlay / ghost pointer state
- OS input safety boundaries

</td>
</tr>
</table>

一句话概括：我在做的是让 AI Agent 的执行链路更硬一点，少一点“模型自己悟了”，多一点 runtime contract。

我也会关注一点 AI governance，但不会把它写成很空的口号。对我来说它现在更像工程纪律：哪些东西能被模型看到，哪些东西能被模型写入，哪些状态必须有人类或 host gate 才能改变，哪些证据只能当历史资料不能当系统指令。

### Campus Copilot / Project Aris

Campus Copilot 和 Project Aris 仍然保留，但不再占满整个主页。它们是我早期比较完整的一条应用线：从 QQ Bot、课表、OCR、人格切换，到 Azure serverless 部署和 web demo。

- 校园 AI 助手，重点是“没有数据就不编造”。
- Azure Functions / Cosmos DB / Next.js / QQ Bot。
- 做过课表导入、OCR、双人格、流式响应、定时提醒。
- 它更像前一个阶段：从能跑的 AI 应用，走向有边界的 AI 系统。

这一段现在不会再展开一整张架构图。原因很简单：Campus Copilot 仍然是重要项目，但主页现在更应该展示我正在做的 open-source execution line。

### What this page is trying to say

我不太想把主页写成“精通很多技术”的列表。技术栈当然重要，但我更在意系统最后会不会留下这些东西：

- 可复现的测试。
- 可读的 trace。
- 不乱扩权的工具边界。
- 出错以后还能继续定位的状态机。
- 让下一个人接手时不会想关电脑的文档和提交。

如果一个 agent 系统只有漂亮 demo，没有 failure contract，那它很快就会变成随机数发生器。随机数可以很可爱，但不能拿来当执行系统。

---

## Things I Care About

- AI Agent 不能只靠 prompt 维持纪律。
- Memory、archive、transcript 可以提供上下文，但不能伪装成系统指令。
- Desktop automation 不是乱点屏幕，而是 observation、semantic target、OS input、approval、rollback 的组合。
- 一个 PR 只解决一个问题。基线够用就冻结，别把第二个问题域混进去。
- 测试不是装饰。不能复现的 bug，迟早会回来。

---

## Toolbox

<table>
<tr>
<td width="33%">

**Runtime**

- TypeScript
- Node.js
- MCP server
- xsAI / tool calling
- Vitest

</td>
<td width="33%">

**Desktop**

- Electron
- Vue
- Eventa IPC
- Chrome bridge
- macOS automation

</td>
<td width="33%">

**Cloud / App**

- Azure Functions
- Cosmos DB
- Next.js
- GitHub Actions
- QQ Bot

</td>
</tr>
</table>

---

## Status Board

<div align="center">

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
