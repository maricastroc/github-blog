import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import {
  Avatar,
  Description,
  IconItem,
  IconsContainer,
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileWrapper,
  ReturnContent,
  UserDescription,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleLeft,
  faLocationDot,
  faUpRightFromSquare,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { NavLink } from 'react-router-dom'

interface UserDataProps {
  name: string
  followers: number
  login: string
  url: string
  location: string | null
  avatar_url: string
}

interface ProfileProps {
  isItHomePage: boolean
}

export function Profile({ isItHomePage }: ProfileProps) {
  const [userData, setUserData] = useState<UserDataProps | null>(null)

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await api.get('users/maricastroc')

        const userData: UserDataProps = {
          name: response.data.name,
          followers: response.data.followers,
          login: response.data.login,
          url: response.data.html_url,
          location: response.data.location,
          avatar_url: response.data.avatar_url,
        }

        setUserData(userData)
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserData()
  }, [])

  return (
    <ProfileWrapper>
      <ProfileContainer>
        {userData && (
          <>
            <Avatar src={userData.avatar_url} alt="" />
            <ProfileContent>
              <UserDescription>
                <ProfileHeader>
                  <h2>{userData.name}</h2>
                  <a href={userData.url} target="_blank" rel="noreferrer">
                    GITHUB
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </a>
                </ProfileHeader>
                <Description>
                  Hello! I am a great enthusiast in the programming area,
                  constantly learning and always looking for new work
                  partnerships.
                </Description>
              </UserDescription>
              <IconsContainer>
                <IconItem>
                  <FontAwesomeIcon icon={faGithub} />
                  <p>{userData.login}</p>
                </IconItem>
                <IconItem>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <p>{userData.location}</p>
                </IconItem>
                <IconItem>
                  <FontAwesomeIcon icon={faUserGroup} />
                  <p>{userData.followers} followers</p>
                </IconItem>
              </IconsContainer>
            </ProfileContent>
          </>
        )}
      </ProfileContainer>
      {!isItHomePage && (
        <ReturnContent>
          <NavLink to={`/`}>
            <FontAwesomeIcon icon={faAngleLeft} />
            <p>Return</p>
          </NavLink>
        </ReturnContent>
      )}
    </ProfileWrapper>
  )
}
