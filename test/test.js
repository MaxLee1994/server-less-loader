var expect = require('expect.js');

describe('server-less-loader', function() {

    it('normal', function() {
        var result1 = require('raw-loader!../!./cases/a.js');
        expect(result1).to.contain('var styleFile = require(\'./a.less\');');

        var result2 = require('raw-loader!../!./cases/b.js');
        expect(result2).to.contain('var style = require (\'./test/b.less\');');
    });

});
