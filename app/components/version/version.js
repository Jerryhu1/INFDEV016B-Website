'use strict';

angular.module('gameApp.version', [
  'gameApp.version.interpolate-filter',
  'gameApp.version.version-directive'
])

.value('version', '0.1');
