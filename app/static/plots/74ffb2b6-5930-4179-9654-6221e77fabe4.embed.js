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

    var all_models = [{"attributes": {"data_source": {"type": "ColumnDataSource", "id": "036ba5f4-d71d-4e14-b93a-a6d13f7ace8d"}, "doc": null, "id": "8de8e642-4f5e-446e-9796-8936be9d3886", "xdata_range": {"type": "DataRange1d", "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7"}, "ydata_range": {"type": "DataRange1d", "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "8de8e642-4f5e-446e-9796-8936be9d3886"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": ["0.631041521539", "0.670097963645", "0.391064533573", "0.640454908668", "0.679496143686", "0.407007324293", "0.635264138629", "0.684889201807", "0.410563448448", "0.594829060053", "0.679747612546", "0.406847297711", "0.506362715572", "0.642003433638", "0.389820519255", "0.636522706531", "0.674210069524", "0.398417324725", "0.638921100362", "0.678471032253", "0.404164147712", "0.639719593596", "0.679624917093", "0.405423031315"], "x": ["True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False"]}, "id": "e3302341-1ca2-4953-b358-ed0ee37249c2"}, "type": "ColumnDataSource", "id": "e3302341-1ca2-4953-b358-ed0ee37249c2"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "doc": null, "dimension": 1, "id": "7453221a-5ad6-4754-80bc-b17cb251f6fe"}, "type": "Grid", "id": "7453221a-5ad6-4754-80bc-b17cb251f6fe"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "073f0481-8140-44d1-96b9-7003249e945e"}, {"type": "LinearAxis", "id": "c6ba4191-cece-4fa0-b881-64421b51c45f"}, {"type": "Grid", "id": "41a9990b-7be6-4e25-8d93-e3911c947575"}, {"type": "Grid", "id": "7453221a-5ad6-4754-80bc-b17cb251f6fe"}, {"type": "BoxSelection", "id": "2fb99e09-5c77-4619-b1b6-0a9d0b959c9f"}, {"type": "Legend", "id": "7f308f62-ed5d-4f95-8b2b-81088caf5310"}, {"type": "Glyph", "id": "3840ded8-68af-4ab8-92f6-6f899c6daf31"}, {"type": "Glyph", "id": "8de8e642-4f5e-446e-9796-8936be9d3886"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "74ffb2b6-5930-4179-9654-6221e77fabe4", "tools": [{"type": "PanTool", "id": "b0a79412-a133-473d-bed8-81f0b1ca0465"}, {"type": "ZoomTool", "id": "e8a1ad75-c453-42e7-a2d7-919ffd5dc13c"}, {"type": "PreviewSaveTool", "id": "6da479f4-5ea2-4311-8fab-ab75cffde2d5"}, {"type": "ResizeTool", "id": "a6d5f9c6-085c-4b7a-b711-349e116cdec5"}, {"type": "BoxSelectTool", "id": "75872aa3-981e-4b43-b875-cea1b8d314f1"}], "canvas_width": 600}, "type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "id": "a6d5f9c6-085c-4b7a-b711-349e116cdec5", "doc": null}, "type": "ResizeTool", "id": "a6d5f9c6-085c-4b7a-b711-349e116cdec5"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "e3302341-1ca2-4953-b358-ed0ee37249c2"}, "doc": null, "id": "3840ded8-68af-4ab8-92f6-6f899c6daf31", "xdata_range": {"type": "DataRange1d", "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7"}, "ydata_range": {"type": "DataRange1d", "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "3840ded8-68af-4ab8-92f6-6f899c6daf31"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "location": "min", "bounds": "auto", "doc": null, "id": "073f0481-8140-44d1-96b9-7003249e945e", "dimension": 0}, "type": "LinearAxis", "id": "073f0481-8140-44d1-96b9-7003249e945e"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "location": "min", "bounds": "auto", "doc": null, "id": "c6ba4191-cece-4fa0-b881-64421b51c45f", "dimension": 1}, "type": "LinearAxis", "id": "c6ba4191-cece-4fa0-b881-64421b51c45f"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "doc": null, "dimension": 0, "id": "41a9990b-7be6-4e25-8d93-e3911c947575"}, "type": "Grid", "id": "41a9990b-7be6-4e25-8d93-e3911c947575"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "3840ded8-68af-4ab8-92f6-6f899c6daf31"}, {"type": "Glyph", "id": "8de8e642-4f5e-446e-9796-8936be9d3886"}], "id": "75872aa3-981e-4b43-b875-cea1b8d314f1"}, "type": "BoxSelectTool", "id": "75872aa3-981e-4b43-b875-cea1b8d314f1"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e3302341-1ca2-4953-b358-ed0ee37249c2"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "036ba5f4-d71d-4e14-b93a-a6d13f7ace8d"}, "columns": ["y"]}], "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3", "doc": null}, "type": "DataRange1d", "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7"}, {"type": "DataRange1d", "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3"}], "dimensions": ["width", "height"], "id": "e8a1ad75-c453-42e7-a2d7-919ffd5dc13c"}, "type": "ZoomTool", "id": "e8a1ad75-c453-42e7-a2d7-919ffd5dc13c"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "doc": null, "legends": {"splits1540": [{"type": "Glyph", "id": "3840ded8-68af-4ab8-92f6-6f899c6daf31"}], "log_boost_splits1540": [{"type": "Glyph", "id": "8de8e642-4f5e-446e-9796-8936be9d3886"}]}, "id": "7f308f62-ed5d-4f95-8b2b-81088caf5310"}, "type": "Legend", "id": "7f308f62-ed5d-4f95-8b2b-81088caf5310"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "e3302341-1ca2-4953-b358-ed0ee37249c2"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "036ba5f4-d71d-4e14-b93a-a6d13f7ace8d"}, "columns": ["x"]}], "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7", "doc": null}, "type": "DataRange1d", "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "fd190b54-46f5-441f-9f86-4f283c7eb6d7"}, {"type": "DataRange1d", "id": "1ea4269b-0a22-4cb7-89fe-db6c973ebcf3"}], "dimensions": ["width", "height"], "doc": null, "id": "b0a79412-a133-473d-bed8-81f0b1ca0465"}, "type": "PanTool", "id": "b0a79412-a133-473d-bed8-81f0b1ca0465"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}], "id": "11cdecb5-4970-4e64-b9b0-deb0e4fcc515"}, "type": "PlotContext", "id": "11cdecb5-4970-4e64-b9b0-deb0e4fcc515"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "75872aa3-981e-4b43-b875-cea1b8d314f1"}, "id": "2fb99e09-5c77-4619-b1b6-0a9d0b959c9f"}, "type": "BoxSelection", "id": "2fb99e09-5c77-4619-b1b6-0a9d0b959c9f"}, {"attributes": {"plot": {"type": "Plot", "id": "74ffb2b6-5930-4179-9654-6221e77fabe4"}, "dataranges": [], "id": "6da479f4-5ea2-4311-8fab-ab75cffde2d5", "doc": null}, "type": "PreviewSaveTool", "id": "6da479f4-5ea2-4311-8fab-ab75cffde2d5"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": ["0.651852017901", "0.73050863352", "0.374177267893", "0.583590534837", "0.699271862304", "0.36905785884", "0.629031333054", "0.718883345569", "0.361339450117", "0.64894962523", "0.728560621876", "0.372900694468", "0.659313536421", "0.733957939882", "0.377975772955"], "x": ["True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False", "True", "None", "False"]}, "id": "036ba5f4-d71d-4e14-b93a-a6d13f7ace8d"}, "type": "ColumnDataSource", "id": "036ba5f4-d71d-4e14-b93a-a6d13f7ace8d"}];
    var modeltype = "PlotContext";
    var elementid = "1f98cd41-c1ae-40f2-9c3f-cafab1f70da1";
    var plotID = "74ffb2b6-5930-4179-9654-6221e77fabe4";
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