define(['jquery',
        'mustache',
        'text!geobricks_ui_download_trmm/html/templates.hbs',
        'i18n!geobricks_ui_download_trmm/nls/translate',
        'sweet-alert',
        'bootstrap'], function ($, Mustache, templates, translate) {

    'use strict';

    function UI_TRMM() {

        this.CONFIG = {
            lang:               'en',
            url_browse:         'http://localhost:5555/browse/trmm/',
            url_download:       'http://localhost:5555/download/modis/',
            url_countries:      'http://localhost:5555/browse/modis/countries/',
            placeholder_id:     'placeholder',
            url_browse_modis:   'http://localhost:5555/browse/modis/'
        };

    }

    /**
     * This is the entry method to configure the module.
     *
     * @param config Custom configuration in JSON format to extend the default settings.
     */
    UI_TRMM.prototype.init = function(config) {

        /* Extend default configuration. */
        this.CONFIG = $.extend(true, {}, this.CONFIG, config);

        /* Fix the language, if needed. */
        this.CONFIG.lang = this.CONFIG.lang != null ? this.CONFIG.lang : 'en';

        /* Render the main structure. */
        var template = $(templates).filter('#main_structure').html();
        var view = {
            years: translate.years,
            months: translate.months,
            days: translate.days,
            please_select: translate.please_select
        };
        var render = Mustache.render(template, view);
        $('#' + this.CONFIG.placeholder_id).html(render);

        /* Cache JQuery selectors. */
        this.year_selector = $('#year_selector');
        this.month_selector = $('#month_selector');
        this.day_selector = $('#day_selector');

        /* Initiate Chosen drop-downs. */
        this.year_selector.chosen({disable_search_threshold: 10});
        this.month_selector.chosen({disable_search_threshold: 10});
        this.day_selector.chosen({disable_search_threshold: 10});

        /* Populate countries. */
        //this.populate_countries();

        /* Populate drop-downs. **/
        //this.populate_products();

    };

    UI_TRMM.prototype.download = function() {

    };

    return new UI_TRMM();

});