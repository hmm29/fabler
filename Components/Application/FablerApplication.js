/**
 * Created by harrisonmiller on 5/30/15.
 */
var React = require('react-native');
var SideMenu = require('react-native-side-menu');
var NavigationBar = require('react-native-navbar');

//Icon modules
var MenuIcon = require('./../Icons/MenuIcon');
var BookIcon = require('./../Icons/BookIcon');

//Page components
var Home = require('./../Pages/Home');

var {
    View,
    Text,
    StyleSheet,
    Navigator
    } = React;

var Menu = React.createClass({
    render: function () {
        return (
            <Text>I am the menu</Text>
        );
    }
});

var FablerApplication = React.createClass({
    renderScene(route, navigator) {
        var Component = route.component;
        var navBar = route.navigationBar;

        if (navBar) {
            navBar = React.addons.cloneWithProps(navBar, {navigator, route});
        }

        return (
            <View style={styles.navigator}>
                {navBar}
                <Component navigator={navigator} route={route}/>
            </View>
        );
    },

    navigate: function (route) {
        this.refs.menu.closeMenu();
        if (route.title == 'Home') {
            this.refs.nav.popToTop();
        }
        else {
            this.refs.nav.push(route);
        }
    },

    handleNext() {
        alert('Next button click handler');
    },

    render() {

        // must pass handler callbacks as props
        // onPrev / onNext doesn't work
        var menu = <Menu navigate={this.navigate} />;
        var handler1 = () => this.refs.menu.toggleMenu();

        var handler2 = () => this.refs.nav.push({
            component: Home,
            navigationBar: <NavigationBar
                title="About"
                customPrev={<MenuIcon onPress={handler1}/>}
                />
        });

        var navbar = <NavigationBar
            title="Home"
            customPrev={<MenuIcon onPress={handler1}/>}
            customNext={<BookIcon onPress={handler2}/>}
            />;
        return (
            <SideMenu ref='menu' menu={menu} animation={'spring'} openMenuOffset={110} toleranceX={80} disableGestures={true}>
                <Navigator
                    ref="nav"
                    style={styles.navigatorContainer}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component: Home,
                        navigationBar: navbar
                    }}
                    />
            </SideMenu>
        );
    }
});

var styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

module.exports = FablerApplication;