// HomeView

var React = require('react-native');
var Icon = require('react-native-vector-icons/FontAwesome');
var styles = require('./style');
var TabBar = require('../../component/TabBar');

var {
  Navigator
} = React;

module.exports = React.createClass({
  getInitialState: function () {
    return {
      selectedTab: 'home'
    }
  },

  render: function () {
    return (
      <TabBar tintColor={'#5ac8fb'} translucent={true}>
        <TabBar.Item
          title="首页"
          icon="home"
          iconSize={28}
          selectedIcon="home"
          selected={this.state.selectedTab === 'home'}
          onPress={() => {
            this.setState({
              selectedTab: 'home'
            });
          }}>
          <Navigator
            navigationBarHidden={true}
            style={styles.navContainer}
            translucent={true}
            barTintColor="#fff"
            initialRoute={{
              title: '',
              component: require('../Timeline')
            }}/>
        </TabBar.Item>
        <TabBar.Item
          title="写微博"
          icon="plus"
          iconSize={28}
          selectedIcon="plus"
          selected={this.state.selectedTab === 'post'}
          onPress={() => {
            this.setState({
              selectedTab: 'post'
            });
          }}>
          <Navigator
            navigationBarHidden={true}
            style={styles.navContainer}
            initialRoute={{
              title: 'Post',
              component: require('../Post')
            }}/>
        </TabBar.Item>
        <TabBar.Item
          title="消息"
          icon="envelope-o"
          iconSize={28}
          selectedIcon="envelope-o"
          selected={this.state.selectedTab === 'message'}
          onPress={() => {
            this.setState({
              selectedTab: 'message'
            });
          }}>
          <Navigator
            style={styles.navContainer}
            initialRoute={{
              title: '消息',
              component: require('../Message/List')
            }} />
        </TabBar.Item>
        <TabBar.Item
          title="我"
          icon="user"
          iconSize={28}
          selectedIcon="user"
          selected={this.state.selectedTab === 'user'}
          onPress={() => {
            this.setState({
              selectedTab: 'user'
            });
          }}>
          <Navigator
            navigationBarHidden={true}
            style={styles.navContainer}
            initialRoute={{
              title: '我',
              component: require('../Account')
            }}/>
        </TabBar.Item>
      </TabBar>
    );
  }
});
