<div align="center">

  <h1>刘梓恒 / 3361559784</h1>

  <p>
    <b>AI Native Developer · Open-source contributor · Full-stack builder</b>
  </p>

  <p>
    我现在主要在做一件事：<br>
    把 AI Agent 从“会聊天”往“能安全执行、能被验证、能被接手”的方向推进。
  </p>

  <p>
    <a href="https://github.com/moeru-ai/airi">
      <img src="https://img.shields.io/badge/Project%20AIRI-Contributor-00BFFF?style=for-the-badge" alt="Project AIRI contributor">
    </a>
    <a href="https://github.com/moeru-ai/airi/tree/main/services/computer-use-mcp">
      <img src="https://img.shields.io/badge/computer--use--mcp-Execution%20Substrate-10a37f?style=for-the-badge" alt="computer-use-mcp">
    </a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vue-42B883?style=flat-square&logo=vuedotjs&logoColor=white" alt="Vue">
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js">
    <img src="https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Azure">
    <img src="https://img.shields.io/badge/MCP-Tools%20%2F%20Agents-111827?style=flat-square" alt="MCP tools and agents">
  </p>

</div>

---

## 最近在做

### Project AIRI

我在 [Project AIRI](https://github.com/moeru-ai/airi) 里主要参与 `computer-use-mcp` 和 desktop / browser automation 相关方向。

比较常碰的东西：

- MCP tool surface：工具注册、schema、权限边界、tool descriptor。
- Coding runner：completion discipline、verification gate、archive recall、task/workspace memory governance。
- Desktop / browser automation：Chrome semantic DOM、iframe 坐标、desktop grounding、overlay 状态展示。
- Execution reliability：approval、audit、trace、recovery、测试矩阵和 live eval。

我不会把它写成“我一个人做了 AIRI 的 computer-use 系统”。更准确的说法是：我在给这条 execution line 补边界、补证据、补测试，让它更像一个能长期维护的东西。

### Campus Copilot / Project Aris

这条线现在不再放成一整篇论文了，保留成项目记录就够。

- 面向校园场景的 AI 助手，核心是“没有数据就不编造”。
- Azure Functions / Cosmos DB / Next.js / QQ Bot / 多源课表导入。
- 做过双人格、课表 OCR、流式响应、定时提醒和校园数据接入。

它是我从“做一个能跑的 AI 应用”过渡到“做一个有边界的 AI 系统”的阶段。

---

## 我关心的工程问题

- AI Agent 不该只靠 prompt 自觉，关键边界要落到 runtime discipline。
- 工具调用要能被审计，失败要能复现，恢复路径要能测试。
- Memory / archive / transcript 这些东西可以进上下文，但不能装成系统指令。
- Desktop automation 不是“让模型乱点屏幕”，而是 observation、semantic target、OS input、approval 和 rollback 的组合。
- 一个 PR 只解决一个问题。基线够用就冻结，别把第二个问题域混进去。

---

## 当前技术栈

<table>
<tr>
<td width="50%">

**Agent / MCP / Runtime**

- TypeScript
- MCP server / tool schema
- XState-ish runner discipline
- Vitest / fixture-first testing
- Desktop / browser automation

</td>
<td width="50%">

**App / Cloud**

- Vue / Electron / Vite
- Node.js
- Azure Functions
- Cosmos DB
- GitHub Actions

</td>
</tr>
</table>

---

## GitHub 状态

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
