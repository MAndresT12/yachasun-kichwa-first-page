import React, { useState, useCallback, useEffect } from 'react';
import { Modal, View, TouchableOpacity, Text } from 'react-native';

import { GiftedChat } from 'react-native-gifted-chat';

import modalStyles from '../../../../styles/modalStyles.js';
import { styles } from '../../../../styles/globalStyles.js';

const ChatModal = ({ visible, onClose, initialMessages }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (visible) {
      setMessages(initialMessages);
    }
  }, [visible, initialMessages]);

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
            showUserAvatar
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