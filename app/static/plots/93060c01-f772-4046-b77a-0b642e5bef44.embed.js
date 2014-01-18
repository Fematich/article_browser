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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [], "x": []}, "id": "c8605a7f-0520-429f-ad82-3f437c609963"}, "type": "ColumnDataSource", "id": "c8605a7f-0520-429f-ad82-3f437c609963"}, {"attributes": {"plot": {"type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}, "id": "86c3aa6b-2571-48ee-bcca-66c952f76140", "doc": null}, "type": "ResizeTool", "id": "86c3aa6b-2571-48ee-bcca-66c952f76140"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "38b65f90-4f04-4e52-90bf-5451233e4b3b"}, {"type": "DataRange1d", "id": "aae1749e-3c1d-4e7c-8f70-4880e5040ab4"}], "dimensions": ["width", "height"], "doc": null, "id": "c4caa3b7-3e11-4427-846e-96d54c3348fa"}, "type": "PanTool", "id": "c4caa3b7-3e11-4427-846e-96d54c3348fa"}, {"attributes": {"plot": {"type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}, "doc": null, "dimension": 1, "id": "87918e6f-0053-434a-9dd9-ecac694cd6d5"}, "type": "Grid", "id": "87918e6f-0053-434a-9dd9-ecac694cd6d5"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "c8605a7f-0520-429f-ad82-3f437c609963"}, "doc": null, "id": "8e5c97a9-70f3-4dc9-8d9a-0ba459c11f45", "xdata_range": {"type": "DataRange1d", "id": "38b65f90-4f04-4e52-90bf-5451233e4b3b"}, "ydata_range": {"type": "DataRange1d", "id": "aae1749e-3c1d-4e7c-8f70-4880e5040ab4"}, "glyphspec": {"line_color": {"value": "#1f77b4"}, "line_alpha": 1.0, "fill_color": "#1f77b4", "title": "voorkomens", "type": "line", "fill_alpha": 1.0, "height": 300, "width": 400, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "tools": "pan,zoom,resize", "x_axis_type": "datetime"}, "nonselection_glyphspec": {"line_color": {"value": "#1f77b4"}, "line_width": 1, "angle_units": "deg", "type": "line", "y": {"units": "data", "field": "y"}, "line_alpha": 0.1, "start_angle_units": "deg", "valign": null, "radius_units": "screen", "visible": null, "length_units": "screen", "end_angle_units": "deg", "line_dash_offset": 0, "line_cap": "butt", "line_dash": [], "x": {"units": "data", "field": "x"}, "margin": null, "line_join": "miter", "halign": null}}, "type": "Glyph", "id": "8e5c97a9-70f3-4dc9-8d9a-0ba459c11f45"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "c8605a7f-0520-429f-ad82-3f437c609963"}, "columns": ["x"]}], "id": "38b65f90-4f04-4e52-90bf-5451233e4b3b", "doc": null}, "type": "DataRange1d", "id": "38b65f90-4f04-4e52-90bf-5451233e4b3b"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}], "id": "02e73968-e1fd-4d78-8adc-af6b04475a9b"}, "type": "PlotContext", "id": "02e73968-e1fd-4d78-8adc-af6b04475a9b"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "c8605a7f-0520-429f-ad82-3f437c609963"}, "columns": ["y"]}], "id": "aae1749e-3c1d-4e7c-8f70-4880e5040ab4", "doc": null}, "type": "DataRange1d", "id": "aae1749e-3c1d-4e7c-8f70-4880e5040ab4"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "38b65f90-4f04-4e52-90bf-5451233e4b3b"}, "axes": [], "title": "voorkomens", "y_range": {"type": "DataRange1d", "id": "aae1749e-3c1d-4e7c-8f70-4880e5040ab4"}, "outer_width": 400, "renderers": [{"type": "DatetimeAxis", "id": "da81f714-e70a-4001-9504-4a6d93baac3c"}, {"type": "LinearAxis", "id": "82840257-25a5-429e-94bf-39f66953e438"}, {"type": "Grid", "id": "8213e678-d823-4175-b612-045625a6f75a"}, {"type": "Grid", "id": "87918e6f-0053-434a-9dd9-ecac694cd6d5"}, {"type": "Glyph", "id": "8e5c97a9-70f3-4dc9-8d9a-0ba459c11f45"}], "outer_height": 300, "width": 400, "doc": null, "canvas_height": 300, "id": "93060c01-f772-4046-b77a-0b642e5bef44", "height": 300, "tools": [{"type": "PanTool", "id": "c4caa3b7-3e11-4427-846e-96d54c3348fa"}, {"type": "ZoomTool", "id": "30b91923-c38a-488f-9b2a-3d69ff473171"}, {"type": "ResizeTool", "id": "86c3aa6b-2571-48ee-bcca-66c952f76140"}], "canvas_width": 400}, "type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "38b65f90-4f04-4e52-90bf-5451233e4b3b"}, {"type": "DataRange1d", "id": "aae1749e-3c1d-4e7c-8f70-4880e5040ab4"}], "dimensions": ["width", "height"], "id": "30b91923-c38a-488f-9b2a-3d69ff473171"}, "type": "ZoomTool", "id": "30b91923-c38a-488f-9b2a-3d69ff473171"}, {"attributes": {"plot": {"type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}, "doc": null, "dimension": 0, "id": "8213e678-d823-4175-b612-045625a6f75a"}, "type": "Grid", "id": "8213e678-d823-4175-b612-045625a6f75a"}, {"attributes": {"plot": {"type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}, "doc": null, "bounds": "auto", "dimension": 1, "location": "min", "axis_label": "# artikels", "id": "82840257-25a5-429e-94bf-39f66953e438"}, "type": "LinearAxis", "id": "82840257-25a5-429e-94bf-39f66953e438"}, {"attributes": {"plot": {"type": "Plot", "id": "93060c01-f772-4046-b77a-0b642e5bef44"}, "doc": null, "bounds": "auto", "id": "da81f714-e70a-4001-9504-4a6d93baac3c", "location": "min", "formats": {"days": ["%m/%d/%Y"]}, "axis_label": "Datum", "dimension": 0}, "type": "DatetimeAxis", "id": "da81f714-e70a-4001-9504-4a6d93baac3c"}];
    var modeltype = "PlotContext";
    var elementid = "b9d5ac62-1b65-46d1-8429-2ac4a8915868";
    var plotID = "93060c01-f772-4046-b77a-0b642e5bef44";
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