/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import {
  LanguageContainer,
  RepoCardContainer,
  RepoCardContent,
  RepoCardDescription,
  RepoCardHeader,
  RepoFooterContent,
  RepoIssuesContent,
} from './styles'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { RepoCardProps } from '../..'

export function RepoCard({
  name,
  repo,
  description,
  created_at,
  language,
}: RepoCardProps) {
  return (
    <NavLink to={`/details/${name}/${repo}`}>
      <RepoCardContainer>
        <RepoCardContent>
          <RepoCardHeader>
            <h2>{repo}</h2>
            <p>
              {formatDistanceToNow(new Date(created_at), { addSuffix: true })}
            </p>
          </RepoCardHeader>
          <RepoCardDescription>
            {description ? (
              <strong>{description}</strong>
            ) : (
              <strong>This repository has no description.</strong>
            )}
          </RepoCardDescription>
        </RepoCardContent>
        <RepoFooterContent>
          {language && (
            <LanguageContainer>
              <span className={language.toLowerCase()}></span>
              <p>{language}</p>
            </LanguageContainer>
          )}
          <RepoIssuesContent>
            <a>Click to view repo&apos;s details</a>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </RepoIssuesContent>
        </RepoFooterContent>
      </RepoCardContainer>
    </NavLink>
  )
}
