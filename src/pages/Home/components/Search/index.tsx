import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  SearchBar,
  SearchButton,
  SearchContainer,
  SearchContent,
  SearchHeader,
} from './styles'

interface SearchProps {
  repos: number
  onChange: (keyword?: string) => void
}

export function Search({ repos, onChange }: SearchProps) {
  const [text, setText] = useState('')

  function handleUserInput(ev: FormEvent) {
    ev.preventDefault()
    onChange(text)
  }

  function handleSetValue(ev: ChangeEvent<HTMLInputElement>) {
    setText(ev.target.value)
  }

  function handleKeyDown(ev: React.KeyboardEvent<HTMLInputElement>) {
    if (ev.key === 'Backspace' && text.length === 1) {
      onChange()
    }
  }

  return (
    <SearchContainer onSubmit={handleUserInput}>
      <SearchHeader>
        <h2>Repositories</h2>
        <p>{repos} repositories</p>
      </SearchHeader>
      <SearchContent>
        <SearchBar
          spellCheck={false}
          placeholder="Search for a repository"
          value={text}
          onChange={handleSetValue}
          onKeyDown={handleKeyDown}
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchContent>
    </SearchContainer>
  )
}
