import React from 'react';
import { Text, View } from 'react-native';
import { style } from './style.js'

const Header = ({ content }) => (
    <View>
        <View style={style.subHeader} />
        <View style={style.header}>
            <Text style={style.text}>{content}</Text>
        </View>
    </View>
);

export default Header;
