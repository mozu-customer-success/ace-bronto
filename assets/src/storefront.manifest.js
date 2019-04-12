module.exports = {
  saveContact: {
    actionName: 'http.storefront.routes',
    customFunction: require('./domains/storefront/saveContact')
  },
  sendMessage: {
    actionName: 'http.storefront.routes',
    customFunction: require('./domains/storefront/sendMessage')
  }
}
