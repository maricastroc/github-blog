/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  BarBackground,
  BarContainer,
  BarFill,
  DetailsSummaryContainer,
  DetailsSummaryContent,
  DetailsSummaryHeader,
  IconItem,
  IconsContainer,
  LanguagesContainer,
  ReturnContent,
  TagItem,
  TagsContainer,
  UrlContent,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faCalendar,
  faLink,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { NavLink } from 'react-router-dom'
import { DetailsSummaryProps } from '../..'

export function DetailsSummary({
  title,
  created_at,
  html_url,
  homepage,
  owner,
  languages,
}: DetailsSummaryProps) {
  return (
    <DetailsSummaryContainer>
      <DetailsSummaryHeader>
        <NavLink to="/">
          <ReturnContent>
            <FontAwesomeIcon icon={faAngleLeft} />
            <p>Return</p>
          </ReturnContent>
        </NavLink>
        <UrlContent>
          <a href={html_url} target="_blank" rel="noreferrer">
            <p>See on GitHub</p>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </a>
        </UrlContent>
      </DetailsSummaryHeader>
      <DetailsSummaryContent>
        <h2>{title}</h2>
        {languages !== undefined && (
          <LanguagesContainer>
            <BarContainer>
              <BarBackground>
                {Object.entries(languages).map(([language, percentage]) => (
                  <BarFill
                    key={language}
                    className={language.toLowerCase()}
                    width={percentage}
                  />
                ))}
              </BarBackground>
            </BarContainer>
            <TagsContainer>
              {Object.entries(languages).map(([language, percentage]) => (
                <TagItem key={language}>
                  <span className={language.toLowerCase()}></span>
                  <strong>
                    {language} | {percentage}%
                  </strong>
                </TagItem>
              ))}
            </TagsContainer>
          </LanguagesContainer>
        )}
        <IconsContainer>
          <IconItem>
            <FontAwesomeIcon icon={faGithub} />
            <p>{owner}</p>
          </IconItem>
          <IconItem>
            <FontAwesomeIcon icon={faCalendar} />
            {created_at && (
              <p>
                {formatDistanceToNow(new Date(created_at), { addSuffix: true })}
              </p>
            )}
          </IconItem>
          <IconItem>
            <FontAwesomeIcon icon={faLink} />
            <a
              href={homepage}
              target="_blank"
              rel="noreferrer"
              className={homepage ? '' : 'disabled'}
            >
              site preview
            </a>
          </IconItem>
        </IconsContainer>
      </DetailsSummaryContent>
    </DetailsSummaryContainer>
  )
}
