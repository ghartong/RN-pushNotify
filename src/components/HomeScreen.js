import * as React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen Updated</Text>
                <Button title="Go test push" onPress={this._showMoreApp} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
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
