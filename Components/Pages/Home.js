/**
 * Created by harrisonmiller on 5/30/15.
 */
'use strict';

var React = require('react-native');
var {
    StyleSheet,
    Text,
    View,
    Image
    } = React;

var UserInfo = React.createClass({
    render() {
        return (
             <View style={styles.userInfo}>
                <Image
                    source={{uri: 'http://res.cloudinary.com/demo/image/facebook/billclinton.jpg'}}
                    style={styles.thumbnail}/>
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>{"profile.name"}</Text>
                    <Text style={styles.stats}>{"user info"}</Text>
                </View>
            </View>
        );
    }
});

var Home = React.createClass({
    render() {
        return (

            <View style={styles.container}>
                <UserInfo />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    userInfo: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#F5FCFF'
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        textAlign: 'left',
        fontSize: 18,
        marginLeft: 20
    },
    stats: {
        textAlign: 'right',
        fontSize: 20,
        marginRight: 20
    },
    thumbnail: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 6
    }
});

module.exports = Home;