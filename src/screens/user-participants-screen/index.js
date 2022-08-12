import { Alert } from 'react-native';
import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { Menu, Provider } from 'react-native-paper';
import { useOrientation } from '../../hooks/use-orientation';
import Styled from './styles';

const UserParticipantsScreen = () => {
  const usersStore = useSelector((state) => state.usersCollection);
  const [showMenu, setShowMenu] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState({ x: 0, y: 0 });

  // TODO auxiliary function, move to /utils/ folder
  const objectMap = (obj, callback) =>
    Object.fromEntries(
      Object.entries(obj).map(([key, value], idx) => [
        key,
        callback(value, key, idx),
      ])
    );

  const handleUsersName = useCallback(
    () =>
      Object.values(
        objectMap(usersStore.usersCollection, (v) => v.fields.userId)
      ),
    [usersStore]
  );

  const orientation = useOrientation();

  const onIconPress = (event) => {
    const { nativeEvent } = event;
    const anchor = {
      x: nativeEvent.pageX,
      y: nativeEvent.pageY - 150,
    };

    setMenuAnchor(anchor);
    setShowMenu(true);
  };

  const renderItem = ({ item }) => {
    return (
      <Styled.CardPressable onPress={onIconPress}>
        <Styled.UserAvatar userName={item} />
        <Styled.UserName>{item}</Styled.UserName>
      </Styled.CardPressable>
    );
  };

  return (
    <Provider>
      <Styled.ContainerView orientation={orientation}>
        <Styled.FlatList data={handleUsersName()} renderItem={renderItem} />
        <Menu
          visible={showMenu}
          onDismiss={() => setShowMenu(false)}
          anchor={menuAnchor}
        >
          <Menu.Item
            onPress={() =>
              Alert.alert(
                'Currently under development',
                'This feature will be addressed soon, please check out our github page'
              )
            }
            title="Bate-papo privado"
          />
        </Menu>
        <Styled.ActionsBarContainer orientation={orientation}>
          <Styled.ActionsBar orientation={orientation} />
        </Styled.ActionsBarContainer>
      </Styled.ContainerView>
    </Provider>
  );
};

export default UserParticipantsScreen;
