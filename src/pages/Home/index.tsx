import { useEffect, useState } from 'react'
import { Profile } from '../../components/Profile'
import { Search } from './components/Search'
import { HomeContainer, ReposContainer } from './styles'
import { api } from '../../lib/axios'
import { RepoCard } from './components/RepoCard'

export interface RepoCardProps {
  name: string
  repo: string
  created_at: string
  description: string
  html_url: string
  language: string
  open_issues: number
}

export interface RepoProps {
  owner: {
    login: string
  }
  name: string
  created_at: string
  description: string
  html_url: string
  language: string
  open_issues: number
}

export function Home() {
  const [reposNumber, setReposNumber] = useState(0)
  const [repos, setRepos] = useState<RepoProps[]>([])
  const [keywordValue, setKeywordValue] = useState('')

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get(
          'users/maricastroc/repos?sort=created&direction=desc',
        )

        if (keywordValue) {
          const filteredRepos = response.data.filter(
            (repo: any) =>
              repo.name.includes(keywordValue) ||
              (repo.description ?? '').includes(keywordValue),
          )
          setReposNumber(filteredRepos.length)
          setRepos(filteredRepos)
          return
        }
        console.log(response.data)
        setReposNumber(response.data.length)

        setRepos(response.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserData()
  })

  function handleUserInput(keyword?: string) {
    keyword ? setKeywordValue(keyword) : setKeywordValue('')
  }

  return (
    <HomeContainer>
      <Profile isItHomePage={true} />
      <Search repos={reposNumber} onChange={handleUserInput} />
      <ReposContainer>
        {repos.map((repo, index) => {
          return (
            <RepoCard
              key={index}
              name={repo.owner.login}
              description={repo.description}
              html_url={repo.html_url}
              created_at={repo.created_at}
              language={repo.language}
              open_issues={repo.open_issues}
              repo={repo.name}
            />
          )
        })}
      </ReposContainer>
    </HomeContainer>
  )
}
