const template = {
  template: require('html-webpack-template'),
  title: 'React-elme',
  appMountId: 'app',
  inject: false,
  mobile: true,
  meta:[
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, minimal-ui'
    },{
      name:'screen-orientation',
      content: 'portrait'
    },{
      name:'format-detection',
      content: 'telephone=no'
    },{
      name:'apple-mobile-web-app-capable',
      content: 'yes'
    },{
      name:'full-screen',
      content: 'yes'
    }
  ]
  // favicon:'./favicon.png'
}
module.exports = template;
