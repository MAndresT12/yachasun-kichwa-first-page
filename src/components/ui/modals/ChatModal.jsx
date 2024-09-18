import React, { useState, useCallback } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';
import { GiftedChat, MessageText } from 'react-native-gifted-chat';
import modalStyles from '../../../../styles/modalStyles.js';
import { styles } from '../../../../styles/globalStyles.js';

const ChatModal = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([]);

  React.useEffect(() => {
    if (visible) {
      setMessages([
        {
          _id: 1,
          text: 'Otavalo llaktamantami kani\n\nSoy de Otavalo.',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 2,
          text: 'Puliza llaktamantami kani. Kikinka\n\nSoy de Puliza, ¿y usted?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 3,
          text: 'Kikinka maymantatak kanki\n\n¿De dónde es usted?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 4,
          text: 'Ñukapak shutika Antoniomi kan\n\nMi nombre es Antonio',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 5,
          text: 'Ñukapak shutika Sisami kan. Kikinka\n\nMi nombre es Sisa, ¿Y usted?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 6,
          text: 'Kikinka imashutitak kanki\n\n¿Cómo se llama usted?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 7,
          text: 'Allimi kani\n\nEstoy bien',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 8,
          text: 'Kikinka imanallatak kanki\n\n¿Cómo está usted?',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 9,
          text: 'Alli puncha mashi\n\nBuenos días',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Sisa',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
        {
          _id: 10,
          text: 'Imanalla mashi\n\nHola amiga',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'Antonio',
            avatar: require('../../../../assets/images/humu/humu-talking.png'),
          },
        },
      ]);
    }
  }, [visible]);

  const onSend = useCallback((newMessages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages)
    );
  }, []);

  return (
    <Modal visible={visible} animationType="fade" transparent={true} onRequestClose={onClose}>
      <View style={modalStyles.modalBackground}>
        <View style={modalStyles.modalContentChatModal}>
          <GiftedChat
            messages={messages}
            onSend={(messages) => onSend(messages)}
            user={{
              _id: 1,
            }}
            renderAvatarOnTop
          />
          <TouchableOpacity onPress={onClose}>
            <View style={styles.buttonDefaultAlphabet}>
              <Text style={styles.buttonTextAlphabet}>Cerrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ChatModal;
