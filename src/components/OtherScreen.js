import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { pushNotifications } from '../services'

export default class OtherScreen extends React.Component {
    static navigationOptions = {
        title: 'OtherScreen!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>OtherScreen</Text>
                <Button title="Press to test push" onPress={this._handleOnPress} />
            </View>
        );
    }

    _handleOnPress = () => {
        pushNotifications.localNotification();
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black'
    },
})
