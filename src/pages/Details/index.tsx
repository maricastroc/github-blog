/* eslint-disable no-control-regex */
/* eslint-disable camelcase */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import ReactMarkdown from 'react-markdown'
import { DetailContainer, DetailContent } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import he from 'he'
import atob from 'atob'
import { calculatePercentages } from '../../../utils/languagePercentage'
import { DetailsSummary } from './components/DetailSummary'

export interface LanguagesProps {
  [language: string]: number
}

export interface DetailsSummaryProps {
  title: string | undefined
  created_at: string | undefined
  html_url: string | undefined
  homepage: string | undefined
  owner: string | undefined
  languages: LanguagesProps | undefined
}

interface RepoDetailsProps {
  created_at: string | undefined
  name: string
  html_url: string | undefined
  homepage: string | undefined
  owner: {
    login: string | undefined
  }
}

export function Details() {
  const name = useParams().name
  const repo = useParams().repo
  const [repoContent, setRepoContent] = useState('')
  const [repoDetails, setRepoDetails] = useState<RepoDetailsProps | undefined>()
  const [repoLanguages, setRepoLanguages] = useState<
    LanguagesProps | undefined
  >()

  useEffect(() => {
    async function fetchUserRepoData() {
      const response = await api.get(`repos/${name}/${repo}`)
      const languages = await api.get(`repos/${name}/${repo}/languages`)

      setRepoDetails(response.data)
      console.log(response.data)

      languages.data !== undefined &&
        setRepoLanguages(calculatePercentages(languages.data))
    }
    fetchUserRepoData()
  }, [name, repo])

  useEffect(() => {
    async function fetchUserRepoReadme() {
      const response = await api.get(`/repos/${name}/${repo}/readme`)

      setRepoContent(atob(response.data?.content))
    }
    fetchUserRepoReadme()
  }, [name, repo])

  repoLanguages !== undefined &&
    console.log(calculatePercentages(repoLanguages!))

  function removeSpecialCharacters(text: string) {
    const decodedText = he.decode(text)
    const cleanedText = decodedText.replace(/[^\x00-\x7F]/g, '')
    return cleanedText
  }

  const cleanedText = removeSpecialCharacters(repoContent)

  const CodeBlock = (props: any) => {
    const { children } = props

    const customStyles = {
      backgroundColor: '#112131',
      borderRadius: '4px',
      marginTop: '1rem',
    }

    return (
      <SyntaxHighlighter
        language="typescript"
        style={darcula}
        customStyle={customStyles}
      >
        {children}
      </SyntaxHighlighter>
    )
  }

  return (
    <DetailContainer>
      <DetailsSummary
        title={repoDetails?.name}
        created_at={repoDetails?.created_at}
        html_url={repoDetails?.html_url}
        owner={repoDetails?.owner?.login}
        homepage={repoDetails?.homepage}
        languages={repoLanguages}
      />
      <DetailContent>
        {repoContent && (
          <ReactMarkdown
            components={{
              code: CodeBlock,
            }}
          >
            {cleanedText}
          </ReactMarkdown>
        )}
      </DetailContent>
    </DetailContainer>
  )
}
