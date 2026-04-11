import process from 'node:process'

const version = process.versions.node
const [major] = version.split('.').map(Number)

if (major < 22) {
  console.error(
    [
      `Unsupported Node.js runtime: ${version}`,
      'This repository requires Node.js 22 or newer.',
      'Use the version pinned in .nvmrc locally, and update Buildkite agents to a matching runtime.'
    ].join('\n')
  )
  process.exit(1)
}

console.log(`Node.js runtime supported: ${version}`)
