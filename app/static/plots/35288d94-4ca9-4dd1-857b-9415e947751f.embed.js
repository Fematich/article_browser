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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "location": "min", "bounds": "auto", "doc": null, "id": "b290f8de-3649-4fde-802a-98fb8e540276", "dimension": 0}, "type": "LinearAxis", "id": "b290f8de-3649-4fde-802a-98fb8e540276"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d9abfa59-178e-4c03-8ea8-ed576ce6f4ce"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "2a217b96-c8fb-4121-b35f-32717018b5a5"}, "columns": ["y"]}], "id": "fa90df35-076d-4d3b-9944-1c153bff9330", "doc": null}, "type": "DataRange1d", "id": "fa90df35-076d-4d3b-9944-1c153bff9330"}, {"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "doc": null, "dimension": 1, "id": "7565bfdc-b64a-4427-bb2a-f11a07ba7845"}, "type": "Grid", "id": "7565bfdc-b64a-4427-bb2a-f11a07ba7845"}, {"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "location": "min", "bounds": "auto", "doc": null, "id": "9d918c7f-4d1c-426e-8bf7-d7e2c933cfeb", "dimension": 1}, "type": "LinearAxis", "id": "9d918c7f-4d1c-426e-8bf7-d7e2c933cfeb"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "2a217b96-c8fb-4121-b35f-32717018b5a5"}, "doc": null, "id": "65e61abe-fcab-4aec-abdf-5dacb67977e5", "xdata_range": {"type": "DataRange1d", "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3"}, "ydata_range": {"type": "DataRange1d", "id": "fa90df35-076d-4d3b-9944-1c153bff9330"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "65e61abe-fcab-4aec-abdf-5dacb67977e5"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "fe36357e-9790-4bd3-85ca-4c53f451411c"}, {"type": "Glyph", "id": "65e61abe-fcab-4aec-abdf-5dacb67977e5"}], "id": "0c9aee2a-5040-4fa4-8537-729a332ce1fd"}, "type": "BoxSelectTool", "id": "0c9aee2a-5040-4fa4-8537-729a332ce1fd"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3"}, {"type": "DataRange1d", "id": "fa90df35-076d-4d3b-9944-1c153bff9330"}], "dimensions": ["width", "height"], "doc": null, "id": "68dfb6a4-c7bf-4626-b2cc-2d3f05c52a76"}, "type": "PanTool", "id": "68dfb6a4-c7bf-4626-b2cc-2d3f05c52a76"}, {"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "doc": null, "dimension": 0, "id": "df8c4676-2087-4b85-9194-a9a4bbb07f5c"}, "type": "Grid", "id": "df8c4676-2087-4b85-9194-a9a4bbb07f5c"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d9abfa59-178e-4c03-8ea8-ed576ce6f4ce"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "2a217b96-c8fb-4121-b35f-32717018b5a5"}, "columns": ["x"]}], "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3", "doc": null}, "type": "DataRange1d", "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6518520179012196, 0.7305086335200187, 0.37417726789254124, 0.5835905348366873, 0.6992718623044549, 0.36905785884017345, 0.6290313330543595, 0.7188833455688067, 0.3613394501168779, 0.6489496252297695, 0.7285606218760784, 0.372900694468285, 0.6593135364206558, 0.7339579398817141, 0.3779757729546526], "x": [0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3]}, "id": "2a217b96-c8fb-4121-b35f-32717018b5a5"}, "type": "ColumnDataSource", "id": "2a217b96-c8fb-4121-b35f-32717018b5a5"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "fa90df35-076d-4d3b-9944-1c153bff9330"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "b290f8de-3649-4fde-802a-98fb8e540276"}, {"type": "LinearAxis", "id": "9d918c7f-4d1c-426e-8bf7-d7e2c933cfeb"}, {"type": "Grid", "id": "df8c4676-2087-4b85-9194-a9a4bbb07f5c"}, {"type": "Grid", "id": "7565bfdc-b64a-4427-bb2a-f11a07ba7845"}, {"type": "BoxSelection", "id": "3462f292-4349-4562-bf41-b9c1ca2f15a9"}, {"type": "Legend", "id": "686889c1-c818-4c27-b1cd-8e32231f2da2"}, {"type": "Glyph", "id": "fe36357e-9790-4bd3-85ca-4c53f451411c"}, {"type": "Glyph", "id": "65e61abe-fcab-4aec-abdf-5dacb67977e5"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "35288d94-4ca9-4dd1-857b-9415e947751f", "tools": [{"type": "PanTool", "id": "68dfb6a4-c7bf-4626-b2cc-2d3f05c52a76"}, {"type": "ZoomTool", "id": "591b8ff8-28bf-4084-86c9-52e14e09713d"}, {"type": "PreviewSaveTool", "id": "5183f9d3-779e-4fa2-9f44-64370fbaa501"}, {"type": "ResizeTool", "id": "1804861b-a18b-4394-ad92-87e63cbcb9d5"}, {"type": "BoxSelectTool", "id": "0c9aee2a-5040-4fa4-8537-729a332ce1fd"}], "canvas_width": 600}, "type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, {"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "id": "1804861b-a18b-4394-ad92-87e63cbcb9d5", "doc": null}, "type": "ResizeTool", "id": "1804861b-a18b-4394-ad92-87e63cbcb9d5"}, {"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "fe36357e-9790-4bd3-85ca-4c53f451411c"}], "log_boost_splits1540": [{"type": "Glyph", "id": "65e61abe-fcab-4aec-abdf-5dacb67977e5"}]}, "id": "686889c1-c818-4c27-b1cd-8e32231f2da2"}, "type": "Legend", "id": "686889c1-c818-4c27-b1cd-8e32231f2da2"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d9abfa59-178e-4c03-8ea8-ed576ce6f4ce"}, "doc": null, "id": "fe36357e-9790-4bd3-85ca-4c53f451411c", "xdata_range": {"type": "DataRange1d", "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3"}, "ydata_range": {"type": "DataRange1d", "id": "fa90df35-076d-4d3b-9944-1c153bff9330"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "fe36357e-9790-4bd3-85ca-4c53f451411c"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}], "id": "659b6feb-f88e-49e9-a8c2-e87dba97164d"}, "type": "PlotContext", "id": "659b6feb-f88e-49e9-a8c2-e87dba97164d"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.6310415215391938, 0.6700979636447748, 0.3910645335729241, 0.6404549086682197, 0.6794961436856841, 0.40700732429331365, 0.6352641386294299, 0.6848892018073277, 0.41056344844815096, 0.5948290600531481, 0.6797476125456291, 0.4068472977110742, 0.5063627155721406, 0.6420034336380134, 0.38982051925537126, 0.6365227065305923, 0.674210069523634, 0.39841732472539176, 0.6389211003618512, 0.6784710322533719, 0.40416414771245157, 0.6397195935959784, 0.6796249170928611, 0.40542303131521124], "x": [0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.3, 0.3, 0.3, 0.4, 0.4, 0.4, 0.5, 0.5, 0.5, 0.15, 0.15, 0.15, 0.18, 0.18, 0.18, 0.19, 0.19, 0.19]}, "id": "d9abfa59-178e-4c03-8ea8-ed576ce6f4ce"}, "type": "ColumnDataSource", "id": "d9abfa59-178e-4c03-8ea8-ed576ce6f4ce"}, {"attributes": {"plot": {"type": "Plot", "id": "35288d94-4ca9-4dd1-857b-9415e947751f"}, "dataranges": [], "id": "5183f9d3-779e-4fa2-9f44-64370fbaa501", "doc": null}, "type": "PreviewSaveTool", "id": "5183f9d3-779e-4fa2-9f44-64370fbaa501"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "0c9aee2a-5040-4fa4-8537-729a332ce1fd"}, "id": "3462f292-4349-4562-bf41-b9c1ca2f15a9"}, "type": "BoxSelection", "id": "3462f292-4349-4562-bf41-b9c1ca2f15a9"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "ec26fb32-1355-4b11-96bd-52c81a94ddb3"}, {"type": "DataRange1d", "id": "fa90df35-076d-4d3b-9944-1c153bff9330"}], "dimensions": ["width", "height"], "id": "591b8ff8-28bf-4084-86c9-52e14e09713d"}, "type": "ZoomTool", "id": "591b8ff8-28bf-4084-86c9-52e14e09713d"}];
    var modeltype = "PlotContext";
    var elementid = "52617817-0b22-4e2d-a0cb-7302ab77801b";
    var plotID = "35288d94-4ca9-4dd1-857b-9415e947751f";
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