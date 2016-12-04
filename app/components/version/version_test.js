'use strict';

describe('gameApp.version module', function() {
  beforeEach(module('gameApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
