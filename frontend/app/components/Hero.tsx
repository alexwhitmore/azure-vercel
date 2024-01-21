import RepoCard from './RepoCard'

export default function Hero({ repos }: { repos: string[] }) {
  return (
    <div>
      <RepoCard repos={repos} />
      {/* <ul>{repos && repos.map((repo) => <li>{repo}</li>)}</ul> */}
    </div>
  )
}
