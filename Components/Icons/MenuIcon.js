/**
 * Created by harrisonmiller on 5/30/15.
 */
var React = require('react-native');
var Icon = require('FAKIconImage');

var {
    StyleSheet,
    TouchableOpacity,
    } = React;

var MenuIcon = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon
                    name="ion|navicon"
                    style={styles.menuicon}
                    size={32}
                    color="black"
                    />
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    menuicon: {
        width: 32,
        height: 32
    }
});

module.exports = MenuIcon;