/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  DetailsSummaryContainer,
  DetailsSummaryContent,
  DetailsSummaryHeader,
  IconItem,
  IconsContainer,
  ReturnContent,
  UrlContent,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleLeft,
  faCalendar,
  faComment,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { formatDistanceToNow } from 'date-fns'
import { NavLink } from 'react-router-dom'

interface DetailsSummaryProps {
  title: string | undefined
  name: string | undefined
  created_at: string | undefined
  comments: number | undefined
  html_url: string | undefined
  repo_name: string | undefined
}

export function DetailsSummary({
  title,
  created_at,
  name,
  comments,
  repo_name,
  html_url,
}: DetailsSummaryProps) {
  return (
    <DetailsSummaryContainer>
      <DetailsSummaryHeader>
        <NavLink to={`/issues/${repo_name}`}>
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
        <IconsContainer>
          <IconItem>
            <FontAwesomeIcon icon={faGithub} />
            <p>{name}</p>
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
            <FontAwesomeIcon icon={faComment} />
            {comments && comments !== 1 ? (
              <p>{comments} comments</p>
            ) : (
              <p>{comments} comment</p>
            )}
          </IconItem>
        </IconsContainer>
      </DetailsSummaryContent>
    </DetailsSummaryContainer>
  )
}
