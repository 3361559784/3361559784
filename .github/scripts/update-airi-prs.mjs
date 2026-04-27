import { readFile, writeFile } from 'node:fs/promises'

const README_PATH = new URL('../../README.md', import.meta.url)
const START_MARKER = '<!-- AIRI_MERGED_PRS_START -->'
const END_MARKER = '<!-- AIRI_MERGED_PRS_END -->'

const OWNER = '3361559784'
const TARGET_REPO = 'moeru-ai/airi'
const PR_LIMIT = 6
const FETCH_LIMIT = 100
const MAX_PAGES = 5
const SELECTED_TITLE_KEYWORDS = [
  'action executor',
  'browser',
  'chrome',
  'coding',
  'computer-use',
  'desktop',
  'dom',
  'extension bridge',
  'ghost pointer',
  'mcp',
  'overlay',
  'transcript',
  'workspace memory',
]
const EXCLUDED_TITLE_PATTERNS = [/^chore\(agent\):/i]

function isSelectedPullRequest(pullRequest) {
  const title = pullRequest.title.toLowerCase()
  return (
    !EXCLUDED_TITLE_PATTERNS.some((pattern) => pattern.test(pullRequest.title))
    && SELECTED_TITLE_KEYWORDS.some((keyword) => title.includes(keyword))
  )
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function githubHeaders() {
  const headers = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': `${OWNER}-profile-airi-pr-updater`,
  }

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  return headers
}

async function fetchJson(url) {
  const response = await fetch(url, { headers: githubHeaders() })
  if (!response.ok) {
    const body = await response.text()
    throw new Error(`GitHub API request failed: ${response.status} ${response.statusText}\n${body}`)
  }

  return response.json()
}

async function fetchMergedPullRequests() {
  const pullRequests = []

  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const url = new URL(`https://api.github.com/repos/${TARGET_REPO}/pulls`)
    url.searchParams.set('state', 'closed')
    url.searchParams.set('sort', 'updated')
    url.searchParams.set('direction', 'desc')
    url.searchParams.set('per_page', String(FETCH_LIMIT))
    url.searchParams.set('page', String(page))

    const pagePullRequests = await fetchJson(url)
    if (!Array.isArray(pagePullRequests) || pagePullRequests.length === 0) {
      break
    }

    pullRequests.push(
      ...pagePullRequests
        .filter((pullRequest) => pullRequest?.merged_at && pullRequest?.user?.login === OWNER)
        .map((pullRequest) => ({
          number: pullRequest.number,
          title: pullRequest.title,
          url: pullRequest.html_url,
        })),
    )

    const selectedCount = pullRequests.filter(isSelectedPullRequest).length

    if (selectedCount >= PR_LIMIT) {
      break
    }
  }

  const selectedPullRequests = pullRequests.filter(isSelectedPullRequest)

  return (selectedPullRequests.length >= PR_LIMIT ? selectedPullRequests : pullRequests).slice(0, PR_LIMIT)
}

function renderPullRequestBlock(pullRequests) {
  if (pullRequests.length === 0) {
    throw new Error(`No merged AIRI PRs found for ${OWNER}; refusing to clear README block.`)
  }

  const rows = pullRequests
    .map((pullRequest) => `<tr>
<td><a href="${escapeHtml(pullRequest.url)}">#${pullRequest.number}</a></td>
<td>${escapeHtml(pullRequest.title)}</td>
</tr>`)
    .join('\n')

  return `${START_MARKER}
<details>
<summary><b>Selected merged AIRI PRs</b></summary>

<br>

<p><sub>Auto-updated daily from selected merged PRs authored by <code>${OWNER}</code> in <code>${TARGET_REPO}</code>.</sub></p>

<table>
<tr>
<td width="18%"><b>PR</b></td>
<td><b>Area</b></td>
</tr>
${rows}
</table>

</details>
${END_MARKER}`
}

function replaceMarkedBlock(readme, nextBlock) {
  const start = readme.indexOf(START_MARKER)
  const end = readme.indexOf(END_MARKER)

  if (start === -1 || end === -1 || end < start) {
    throw new Error(`README.md must contain ${START_MARKER} and ${END_MARKER} markers.`)
  }

  return `${readme.slice(0, start)}${nextBlock}${readme.slice(end + END_MARKER.length)}`
}

const readme = await readFile(README_PATH, 'utf8')
const pullRequests = await fetchMergedPullRequests()
const nextReadme = replaceMarkedBlock(readme, renderPullRequestBlock(pullRequests))

await writeFile(README_PATH, nextReadme)
