console.log("embed.js");
// parseUri 1.2.2
// (c) Steven Levithan <stevenlevithan.com>
// MIT License
(function(global) {
    if(typeof(window.bokeh_embed_count) == "undefined"){
        window.bokeh_embed_count = 0;
    }
    else {
        window.bokeh_embed_count += 1;
    }
    if(window.bokeh_embed_count == 1) {
//        debugger;
    }
    var host = "";

    var staticRootUrl = "http://localhost:5006/bokeh/static/";
    if (host!=""){

        staticRootUrl = host + "/static/";
        var bokehJSUrl = window.location.protocol + "//" + staticRootUrl + "js/bokeh.js";
    }
    else {
        bokehJSUrl = staticRootUrl +"js/bokeh.js";
    }

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}, "id": "7c3ac666-9f22-4951-87c8-ed52e9aba1b0", "doc": null}, "type": "ResizeTool", "id": "7c3ac666-9f22-4951-87c8-ed52e9aba1b0"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8ea437da-d824-4fba-842e-38f4b910bd71"}, "columns": ["y"]}], "id": "2f2abbf2-ba57-4103-87db-10ee306f43c8", "doc": null}, "type": "DataRange1d", "id": "2f2abbf2-ba57-4103-87db-10ee306f43c8"}, {"attributes": {"plot": {"type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}, "doc": null, "dimension": 1, "id": "66cdb1d1-0e50-4846-9710-ffd63ddf6923"}, "type": "Grid", "id": "66cdb1d1-0e50-4846-9710-ffd63ddf6923"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "c503dd77-98be-4ef4-b9bb-46726816591c"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "2f2abbf2-ba57-4103-87db-10ee306f43c8"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "7ceadd4c-900b-40ba-b848-87dcbd40f93b"}, {"type": "LinearAxis", "id": "dff11e02-4cb2-43f2-a990-e6d4db7afa0c"}, {"type": "Grid", "id": "ad23a770-4c30-4945-be36-56c806c1f0b9"}, {"type": "Grid", "id": "66cdb1d1-0e50-4846-9710-ffd63ddf6923"}, {"type": "Glyph", "id": "c3dcf3dd-d8b7-47d2-88cb-adc54bc5695f"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "68de0d93-b158-41a7-8332-337600632497", "height": 300, "tools": [{"type": "PanTool", "id": "05d78851-bd24-472b-9f32-99ff8f00fc6b"}, {"type": "ZoomTool", "id": "1a9781e0-031d-485f-9cac-f1436fefcf3c"}, {"type": "ResizeTool", "id": "7c3ac666-9f22-4951-87c8-ed52e9aba1b0"}], "canvas_width": 400}, "type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "8ea437da-d824-4fba-842e-38f4b910bd71"}, "type": "ColumnDataSource", "id": "8ea437da-d824-4fba-842e-38f4b910bd71"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "8ea437da-d824-4fba-842e-38f4b910bd71"}, "doc": null, "id": "c3dcf3dd-d8b7-47d2-88cb-adc54bc5695f", "xdata_range": {"type": "DataRange1d", "id": "c503dd77-98be-4ef4-b9bb-46726816591c"}, "ydata_range": {"type": "DataRange1d", "id": "2f2abbf2-ba57-4103-87db-10ee306f43c8"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "c3dcf3dd-d8b7-47d2-88cb-adc54bc5695f"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "c503dd77-98be-4ef4-b9bb-46726816591c"}, {"type": "DataRange1d", "id": "2f2abbf2-ba57-4103-87db-10ee306f43c8"}], "dimensions": ["width", "height"], "id": "1a9781e0-031d-485f-9cac-f1436fefcf3c"}, "type": "ZoomTool", "id": "1a9781e0-031d-485f-9cac-f1436fefcf3c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "8ea437da-d824-4fba-842e-38f4b910bd71"}, "columns": ["x"]}], "id": "c503dd77-98be-4ef4-b9bb-46726816591c", "doc": null}, "type": "DataRange1d", "id": "c503dd77-98be-4ef4-b9bb-46726816591c"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "c503dd77-98be-4ef4-b9bb-46726816591c"}, {"type": "DataRange1d", "id": "2f2abbf2-ba57-4103-87db-10ee306f43c8"}], "dimensions": ["width", "height"], "doc": null, "id": "05d78851-bd24-472b-9f32-99ff8f00fc6b"}, "type": "PanTool", "id": "05d78851-bd24-472b-9f32-99ff8f00fc6b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}], "id": "29c8daf7-9b9e-4d5c-89f4-e09fae96b979"}, "type": "PlotContext", "id": "29c8daf7-9b9e-4d5c-89f4-e09fae96b979"}, {"attributes": {"plot": {"type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "dff11e02-4cb2-43f2-a990-e6d4db7afa0c"}, "type": "LinearAxis", "id": "dff11e02-4cb2-43f2-a990-e6d4db7afa0c"}, {"attributes": {"plot": {"type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}, "doc": null, "dimension": 0, "id": "ad23a770-4c30-4945-be36-56c806c1f0b9"}, "type": "Grid", "id": "ad23a770-4c30-4945-be36-56c806c1f0b9"}, {"attributes": {"plot": {"type": "Plot", "id": "68de0d93-b158-41a7-8332-337600632497"}, "doc": null, "bounds": "auto", "id": "7ceadd4c-900b-40ba-b848-87dcbd40f93b", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "7ceadd4c-900b-40ba-b848-87dcbd40f93b"}];
    var modeltype = "PlotContext";
    var elementid = "6a6ee7f5-fef3-4fc1-b020-57968fc64b6b";
    var plotID = "68de0d93-b158-41a7-8332-337600632497";
    var dd = {};
    dd[plotID] = all_models;
    

    var secondPlot =                 function() {
        console.log("Bokeh.js loaded callback");
        embed_core = Bokeh.embed_core;
        console.log("embed_core loaded");
        embed_core.search_and_plot(dd);
        embed_core.injectCss(staticRootUrl);
        console.log("search_and_plot called", new Date());}

    function addEvent(el, eventName, func){
        if(el.attachEvent){
            return el.attachEvent('on' + eventName, func);}
        else {
            el.addEventListener(eventName, func, false);}}
    var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined") && _embed_bokeh_inject_application;
    //var script_injected = !(typeof(_embed_bokeh_inject_application) == "undefined");
    if(typeof Bokeh == "object"){
        // application.js is already loaded
        console.log("bokeh.js is already loaded, going straight to plotting");
        setTimeout(function () {
            embed_core = Bokeh.embed_core;
            console.log("calling embed_core.search_and_plot, from already loaded bokehjs state")
            embed_core.search_and_plot(dd);}, 20);}

    else if(!script_injected){
        // bokeh.js isn't loaded and it hasn't been scheduled to be injected
        var s = document.createElement('script');
        s.async = true; s.src = bokehJSUrl; s.id="bokeh_script_tag";
        
    }
    else {
        var s = document.getElementById("bokeh_script_tag");
    }
    var local_bokeh_embed_count = window.bokeh_embed_count;
    if(typeof(s) != "undefined") {
    addEvent(
        s,'load',
        function() {
            setTimeout(secondPlot, 20 * local_bokeh_embed_count);});
    }
    if(!script_injected){
        document.body.appendChild(s);
    }

    _embed_bokeh_inject_application = true;

    window._embed_bokeh = true;}(this));