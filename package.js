Package.describe({
  name: 'helium:accounts-amazon',
  version: '1.0.0',
  summary: 'Login service for Amazon accounts',
  git: 'https://github.com/meteor-helium/accounts-amazon.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.0.2");

  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('helium:amazon@1.0.0', ['client', 'server']);

  api.addFiles("amazon.js");
});
