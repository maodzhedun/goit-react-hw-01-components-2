import PropTypes from 'prop-types';
import { Span} from "./FriendListItem.styled";

export const FriendListItem = ({ avatar, name, isOnline }) => {
//   console.log(avatar, name, isOnline);
  return (
    <>
      <Span>{isOnline}</Span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
