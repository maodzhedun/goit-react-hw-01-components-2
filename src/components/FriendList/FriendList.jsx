import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { FriendItem, WrapperList} from "./FriendList.styled";


export const FriendList = ({ friends }) => {
//   console.log('FriendsList:', friends);
  return (
      <WrapperList>
        <h2>Friends</h2>
      {friends.map(({ avatar, id, name, isOnline }) => (
        <FriendItem key={id}>
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          ></FriendListItem>
        </FriendItem>
      ))}
    </WrapperList>
  );
};

FriendList.prototype = {
     friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
}

