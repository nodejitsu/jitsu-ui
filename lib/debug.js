/**
 * Mock API
 */

var api = {
  users: {},
  apps: {},
  snapshots: {},
  databases: {},
  logs: {},
  tokens: {}
};

api.apps.start = function() {
  var callback = arguments[arguments.length-1];
  return setTimeout(function() {
    return callback();
  }, 3000);
};

api.apps.stop = function() {
  var callback = arguments[arguments.length-1];
  return setTimeout(function() {
    return callback();
  }, 3000);
};

api.apps.restart = function() {
  var callback = arguments[arguments.length-1];
  return setTimeout(function() {
    return callback();
  }, 3000);
};

api.apps.destroy = function() {
  var callback = arguments[arguments.length-1];
  return setTimeout(function() {
    return callback();
  }, 3000);
};

api.apps.endpoints = function(callback) {
  return callback(null, {
    'joyent': {
      'us-east-1': 'api.nodejitsu.com'
    }
  });
};

api.apps.list = function(callback) {
  var out = []
    , l = 30
    , i = 0;

  for (; i < l; i++) {
    var d = Math.random() * 100 % 10 | 0;
    out.push({
      name: 'app-' + (i + 1),
      state: Math.random() > .5 ? 'started' : 'stopped',
      subdomain: 'foobar' + (i + 1),
      drones: d,
      maxDrones: 10,
      active: {
        filename: 'app-' + (i + 1) + '.tar.gz'
      }
    });
  }

  return callback(null, out);
};

api.apps.view = function(name, callback) {
  return callback(null, {
    domains: [],
    mtime: '01/10 20:34:27 CST',
    state: 'started',
    version: '0.0.1-7',
    scripts: { start: './index.js' },
    env: { SUBDOMAIN: 'fuubar3.my-app2.fuubar3', NODE_ENV: 'production' },
    name: 'my-app2',
    subscriptionId: 2395926,
    directories: { home: 'my-app2' },
    last: {
      running: false,
      id: '0.0.1-6',
      md5: 'efa41467cf19b060c24366c2ae312c01',
      ctime: 1350943381504,
      active: false,
      filename: 'fuubar3-my-app2-0.0.1-6.tgz'
    },
    running: {
      running: false,
      id: '0.0.1-7',
      md5: '251f86b2c13433a1c3a3f1ed7783b9a4',
      ctime: '01/10 20:34:22 CST',
      active: false,
      filename: 'fuubar3-my-app2-0.0.1-7.tgz'
    },
    maxDrones: 1,
    user: 'fuubar3',
    databases: {},
    subdomain: 'fuubar3.my-app2.fuubar3',
    ctime: '10/11 03:26:52 CDT',
    snapshots: [
      { created: '10/11 03:26:54 CDT', id: '0.0.1-1' },
      { created: '10/15 21:32:26 CDT', id: '0.0.1-2' },
      { created: '10/15 21:33:09 CDT', id: '0.0.1-3' },
      { created: '10/16 03:36:35 CDT', id: '0.0.1-4' },
      { created: '10/16 22:47:03 CDT', id: '0.0.1-5' },
      { created: '10/22 17:03:01 CDT', id: '0.0.1-6' },
      { created: '01/10 20:34:22 CST', id: '0.0.1-7' }
    ],
    engines: { node: '0.8.x' },
    active: {
      running: false,
      id: '0.0.1',
      md5: '251f86b2c13433a1c3a3f1ed7783b9a4',
      ctime: '01/10 20:34:22 CST',
      active: false,
      filename: 'fuubar3-my-app2-0.0.1-7.tgz'
    },
    drones: 1,
    repository: {
      url: 'git://github.com/chjj/my-app2.git',
      type: 'git',
      branch: 'master'
    }
  });
};

api.apps.update = function(app, value, callback) {
  return setTimeout(function() {
    return callback();
  }, 3000);
};

api.snapshots.list = function(name, callback) {
   return callback(null, [
     {
       "id": "0.0.0",
       "md5": "0123456789",
       "ctime": 1359715872162,
       "filename": name + "-0.0.0.tgz"
     },
     {
       "id": "0.0.1",
       "md5": "0123456789",
       "ctime": 1359715872162,
       "filename": name + "-0.0.1.tgz"
     }
   ]);
};

api.snapshots.activate = function(app, id, callback) {
  return setTimeout(function() {
    return callback();
  }, 3000);
};

api.logs.byApp = function(app, amount, callback) {
  var results = {
    data: [
      {
        timestamp: new Date,
        json: {
          message: 'log message here'
        }
      },
      {
        timestamp: new Date,
        json: {
          message: 'log message here again'
        }
      }
    ]
  };
  return callback(null, results);
};

api.users.create = function(data, callback) {
  return setTimeout(function() {
    return callback(null, data);
  }, 3000);
};

api.users.confirm = function(data, callback) {
  return setTimeout(function() {
    return callback(null, data);
  }, 3000);
};

api.users.auth = function(callback) {
  return setTimeout(function() {
    return callback(null, true);
  }, 3000);
};

api.users.view = function(name, callback) {
  return callback(null, {
    user: {
      username: 'foobar',
      email: 'foobar@foobar.foo',
      status: 'unknown',
      ctime: new Date().toUTCString(),
      mtime: new Date().toUTCString(),
      permissions: {},
      billing: {
        customerId: 2423423,
        profileId: 134509,
        subscriptions: {
          424252: {
            plan: 'individual-small'
          }
        }
      }
    }
  });
};

module.exports = api;
