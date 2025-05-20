import PropTypes from 'prop-types';
import { Userprofile, Description, Statistics, Avatar } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Userprofile>
      <Avatar src={avatar} alt={username} />
      <Description>
        <h1>{username}</h1>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Statistics>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </Statistics>
    </Userprofile>
  );
};

Profile.protoType = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
