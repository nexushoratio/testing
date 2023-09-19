// ==UserScript==
// ==UserLibrary==
// @name          NH_foo
// @description   Testing how this stuff work on GF
// @version       0.0.3
// @license       LGPL-3.0-or-later; https://www.gnu.org/licenses/lgpl-3.0-standalone.html
// @homepageURL   https://github.com/nexushoratio/testing
// @supportURL    https://github.com/nexushoratio/testing/issues
// @match         https://www.example.com/*
// ==/UserLibrary==
// ==/UserScript==

//* global NexusHoratio */

window.NexusHoratio ??= {};

((ns) => {
  'use strict';

  ns.foo = {
    version: '0.0.3',
    bob: 'test9',
  };

})(window.NexusHoratio);
