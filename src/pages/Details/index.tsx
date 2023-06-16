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

export function Details() {
  const name = useParams().name
  const repo = useParams().repo
  const [repoContent, setRepoContent] = useState('')

  useEffect(() => {
    async function fetchUserData() {
      const response = await api.get(`/repos/${name}/${repo}/readme`)

      setRepoContent(atob(response.data?.content))
      console.log(atob(response.data?.content))
    }
    fetchUserData()
  })

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
