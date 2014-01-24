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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [17, 8, 3, 4, 3, 2, 2, 1, 2, 4, 11, 3, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 6, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 3], "x": [1298419200000.0, 1298505600000.0, 1298592000000.0, 1298678400000.0, 1298851200000.0, 1298937600000.0, 1299110400000.0, 1299196800000.0, 1299283200000.0, 1299542400000.0, 1299888000000.0, 1300060800000.0, 1300147200000.0, 1300752000000.0, 1300924800000.0, 1301011200000.0, 1301097600000.0, 1301270400000.0, 1301356800000.0, 1301443200000.0, 1301875200000.0, 1304294400000.0, 1305936000000.0, 1306108800000.0, 1308009600000.0, 1308873600000.0, 1308960000000.0, 1309392000000.0, 1309564800000.0, 1310515200000.0, 1311811200000.0, 1313107200000.0, 1313452800000.0, 1315008000000.0, 1315180800000.0, 1323302400000.0, 1323388800000.0, 1323820800000.0, 1324684800000.0]}, "id": "f70312d0-e7a5-4c47-b018-6a4c9bc35e8e"}, "type": "ColumnDataSource", "id": "f70312d0-e7a5-4c47-b018-6a4c9bc35e8e"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}], "id": "eae9880e-db62-4260-aba9-d8170349dce7"}, "type": "PlotContext", "id": "eae9880e-db62-4260-aba9-d8170349dce7"}, {"attributes": {"plot": {"type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}, "id": "3269801b-b51a-4790-a2ed-fa280d64799a", "doc": null}, "type": "ResizeTool", "id": "3269801b-b51a-4790-a2ed-fa280d64799a"}, {"attributes": {"plot": {"type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}, "doc": null, "dimension": 0, "id": "05daa007-1d09-49d9-8d74-8a85549c6bbb"}, "type": "Grid", "id": "05daa007-1d09-49d9-8d74-8a85549c6bbb"}, {"attributes": {"plot": {"type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "ec60665c-6d99-475e-87a9-d67910674ebd"}, "type": "LinearAxis", "id": "ec60665c-6d99-475e-87a9-d67910674ebd"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ddc2227f-5cd5-41b8-ad1b-e0fd7523512a"}, {"type": "DataRange1d", "id": "54919c6a-1a35-42e9-a449-5b2f8cde6cba"}], "dimensions": ["width", "height"], "doc": null, "id": "0be1af45-2bb8-4961-a610-435118b44e9e"}, "type": "PanTool", "id": "0be1af45-2bb8-4961-a610-435118b44e9e"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "f70312d0-e7a5-4c47-b018-6a4c9bc35e8e"}, "columns": ["y"]}], "id": "54919c6a-1a35-42e9-a449-5b2f8cde6cba", "doc": null}, "type": "DataRange1d", "id": "54919c6a-1a35-42e9-a449-5b2f8cde6cba"}, {"attributes": {"plot": {"type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}, "doc": null, "dimension": 1, "id": "888ce83d-4ecf-4812-85c4-48c9627cc15b"}, "type": "Grid", "id": "888ce83d-4ecf-4812-85c4-48c9627cc15b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "f70312d0-e7a5-4c47-b018-6a4c9bc35e8e"}, "columns": ["x"]}], "id": "ddc2227f-5cd5-41b8-ad1b-e0fd7523512a", "doc": null}, "type": "DataRange1d", "id": "ddc2227f-5cd5-41b8-ad1b-e0fd7523512a"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "f70312d0-e7a5-4c47-b018-6a4c9bc35e8e"}, "doc": null, "id": "f4e96381-181a-4a1d-a809-6290967652b2", "xdata_range": {"type": "DataRange1d", "id": "ddc2227f-5cd5-41b8-ad1b-e0fd7523512a"}, "ydata_range": {"type": "DataRange1d", "id": "54919c6a-1a35-42e9-a449-5b2f8cde6cba"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "f4e96381-181a-4a1d-a809-6290967652b2"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ddc2227f-5cd5-41b8-ad1b-e0fd7523512a"}, {"type": "DataRange1d", "id": "54919c6a-1a35-42e9-a449-5b2f8cde6cba"}], "dimensions": ["width", "height"], "id": "ac5df07b-1821-437f-9f36-05a935e01e0b"}, "type": "ZoomTool", "id": "ac5df07b-1821-437f-9f36-05a935e01e0b"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ddc2227f-5cd5-41b8-ad1b-e0fd7523512a"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "54919c6a-1a35-42e9-a449-5b2f8cde6cba"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "e21c83bd-7e84-46ba-b34b-1b17cbb5cff5"}, {"type": "LinearAxis", "id": "ec60665c-6d99-475e-87a9-d67910674ebd"}, {"type": "Grid", "id": "05daa007-1d09-49d9-8d74-8a85549c6bbb"}, {"type": "Grid", "id": "888ce83d-4ecf-4812-85c4-48c9627cc15b"}, {"type": "Glyph", "id": "f4e96381-181a-4a1d-a809-6290967652b2"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "352942d1-b9a6-401b-af80-fed97e3bd679", "height": 300, "tools": [{"type": "PanTool", "id": "0be1af45-2bb8-4961-a610-435118b44e9e"}, {"type": "ZoomTool", "id": "ac5df07b-1821-437f-9f36-05a935e01e0b"}, {"type": "ResizeTool", "id": "3269801b-b51a-4790-a2ed-fa280d64799a"}], "canvas_width": 400}, "type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}, {"attributes": {"plot": {"type": "Plot", "id": "352942d1-b9a6-401b-af80-fed97e3bd679"}, "doc": null, "bounds": "auto", "id": "e21c83bd-7e84-46ba-b34b-1b17cbb5cff5", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "e21c83bd-7e84-46ba-b34b-1b17cbb5cff5"}];
    var modeltype = "PlotContext";
    var elementid = "3f02e845-33a0-482d-984d-b254a310d699";
    var plotID = "352942d1-b9a6-401b-af80-fed97e3bd679";
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