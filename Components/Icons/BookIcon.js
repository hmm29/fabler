/**
 * Created by harrisonmiller on 5/30/15.
 */
var React = require('react-native');
var Icon = require('FAKIconImage');

var {
    StyleSheet,
    TouchableOpacity,
    } = React;

var BookIcon = React.createClass({
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Icon
                    name="ion|ios-book-outline"
                    style={styles.bookicon}
                    size={32}
                    color="black"
                    />
            </TouchableOpacity>
        );
    }
});

var styles = StyleSheet.create({
    bookicon: {
        width: 32,
        height: 32
    }
});

module.exports = BookIcon;