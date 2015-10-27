/*global require,document*/
require.config({

    baseUrl: 'js/libs',

    paths: {
        application: '../application'
    },

    shim: {
        semantic: ['jquery'],
        q: {
            deps: ['jquery'],
            exports: 'q'
        }
    }

});

/* Start the application. */
require(['application'], function (Application) {

    'use strict';

    var app = new Application();
    app.init();

});