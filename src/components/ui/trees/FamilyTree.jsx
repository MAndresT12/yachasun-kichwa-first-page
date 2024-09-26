import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import Svg, { Line } from 'react-native-svg';

const FamilyTree = ({
  title = "My Family Tree",
  titleStyle = styles.defaultTitleStyle,
  titleColor = 'black',
  data,
  nodeStyle = styles.defaultNodeStyle,
  nodeTitleStyle = styles.defaultNodeTitleStyle,
  pathColor = '#00ffd8',
  siblingGap = 50,
  imageStyle = styles.defaultImageStyle,
  nodeTitleColor = "#00ff00",
  familyGap = 30,
  strokeWidth = 5
}) => {
  
  const hasChildren = (member) => {
    return member.children && member.children.length;
  };

  const renderTree = (data, level) => {
    return (
      <FlatList
        data={data}
        horizontal={true}
        contentContainerStyle={{ padding: 50 }}
        keyExtractor={(item) => `${item.name} + ${item.spouse}`}
        renderItem={({ item }) => {
          const { name, spouse, profile } = item;
          return (
            <View style={{ justifyContent: 'center', alignItems: 'center', paddingLeft: siblingGap / 2, paddingRight: siblingGap / 2 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={nodeStyle}>
                  <Image style={imageStyle} source={{ uri: profile }} />
                  <Text style={[nodeTitleStyle, { color: nodeTitleColor }]}>{name} {level}</Text>
                </View>
              </View>
              {hasChildren(item) && (
                <Svg height="50" width="20">
                  <Line x1="50%" y1="0" x2="50%" y2="150" stroke={pathColor} strokeWidth={strokeWidth} />
                </Svg>
              )}
              <View style={{ flexDirection: 'row' }}>
                {hasChildren(item) && item.children.map((child, index) => (
                  <View key={child.name + child.spouse} style={{ flexDirection: 'row' }}>
                    <View>
                      <Svg height="50" width="100%">
                        <Line x1="50%" y1="0" x2="50%" y2="100%" stroke={pathColor} strokeWidth={strokeWidth} />
                        {hasChildren(item) && item.children.length !== 1 && item.children.length - 1 !== index && (
                          <Line x1="100%" y1={strokeWidth / 2} x2="50%" y2={strokeWidth / 2} stroke={pathColor} strokeWidth={strokeWidth} />
                        )}
                        {hasChildren(item) && item.children.length !== 1 && index !== 0 && (
                          <Line x1="50%" y1={strokeWidth / 2} x2="0" y2={strokeWidth / 2} stroke={pathColor} strokeWidth={strokeWidth} />
                        )}
                      </Svg>
                      {renderTree([child], level + 1)}
                    </View>
                  </View>
                ))}
              </View>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={[titleStyle, { color: titleColor }]}>{title}</Text>
      {renderTree(data, 1)}
    </View>
  );
};

// Default styles
const styles = StyleSheet.create({
  defaultTitleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  defaultNodeStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  defaultNodeTitleStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  defaultImageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    resizeMode: 'cover',
  },
});

export default FamilyTree;
