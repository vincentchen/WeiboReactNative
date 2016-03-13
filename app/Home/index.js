// HomeView

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var styles = require('./style');
var Account = require('../Account');
var Home = require('../Timeline');
var Post = require('../Post');
var Message = require('../Message/List');
import TabNavigator from 'react-native-tab-navigator';

var {Image} = React;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'home'
    }
  },
  render: function () {
    return (
        <TabNavigator>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title="首页"
                renderIcon={() => <Image source={require('../../image/start_normall@3x.png')} />}
                renderSelectedIcon={() => <Image source={require('../../image/start_hightlight@3x.png') }/>}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <Home/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'post'}
                title="写微博"
                renderIcon={() => <Image source={require('../../image/start_normall@3x.png')} />}
                renderSelectedIcon={() => <Image source={require('../../image/start_hightlight@3x.png') }/>}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'post' })}>
                <Post/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'message'}
                title="消息"
                renderIcon={() => <Image source={require('../../image/start_normall@3x.png')} />}
                renderSelectedIcon={() => <Image source={require('../../image/start_hightlight@3x.png') }/>}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'message' })}>
                <Message/>
            </TabNavigator.Item>
            <TabNavigator.Item
                selected={this.state.selectedTab === 'user'}
                title="我"
                renderIcon={() => <Image source={require('../../image/start_normall@3x.png')} />}
                renderSelectedIcon={() => <Image source={require('../../image/start_hightlight@3x.png') }/>}
                badgeText="1"
                onPress={() => this.setState({ selectedTab: 'user' })}>
                <Account/>
            </TabNavigator.Item>
        </TabNavigator>
    );
  }
});
