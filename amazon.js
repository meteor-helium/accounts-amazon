Accounts.oauth.registerService('amazon');

if (Meteor.isClient) {
  Meteor.loginWithAmazon = function(options, callback) {
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Amazon.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.amazon'],
    forOtherUsers: []
  });
}
