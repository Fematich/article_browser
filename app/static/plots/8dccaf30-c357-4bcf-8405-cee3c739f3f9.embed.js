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

    var all_models = [{"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.7549668874172185, 0.5964912280701754, 0.0031695721077654514, 0.017982017982017984, 0.625, 0.005235602094240838, 0.8, 0.016, 0.13157894736842105, 0.020618556701030927, 0.375, 0.4938271604938272, 0.009852216748768473, 0.005188067444876784, 0.3478260869565218, 0.5793103448275863, 0.33920704845814975, 0.14285714285714285, 0.0024906600249066002, 0.5, 0.888888888888889, 0.5925925925925926, 0.10687022900763361, 0.23076923076923075, 0.2263157894736842, 0.5303867403314917, 0.7674418604651162, 0.6666666666666666, 0.3150684931506849, 0.5813953488372093, 0.31168831168831174, 0.5505226480836237, 0.007910349373764008, 0.12322274881516589, 0.029850746268656716, 0.24892703862660942, 0.3888888888888889, 0.697986577181208, 0.6779661016949152, 0.759493670886076, 0.88, 0.608695652173913, 0.27338129496402874, 0.26666666666666666, 0.009216589861751152, 0.7777777777777778, 0.921875, 0.33333333333333337, 0.6744186046511628, 0.888888888888889, 0.027548209366391182, 0.7428571428571429, 0.20000000000000004, 0.2745098039215686, 0.75, 0.4516129032258065, 0.8108108108108109, 0.2162162162162162, 0.5211864406779662, 0.3009118541033435, 0.3444816053511706, 0.575451647183847, 0.0910384068278805, 0.18508201795109872, 0.27163781624500666, 0.8124118476727785, 0.49837486457204766, 0.6075949367088608, 0.40458015267175573, 0.7420109119251753, 0.6515151515151516, 0.7407407407407407, 0.40210526315789474, 0.4635938543754175, 0.7315812149935372, 0.8915032679738563, 0.7633802816901408, 0.7749196141479099, 0.5518763796909492, 0.7700170357751278, 0.8720720720720722, 0.6581196581196581, 0.41533546325878595, 0.6349206349206349, 0.7139107611548556, 0.7768595041322314, 0.5338345864661653, 0.9113924050632911, 0.7035175879396984, 0.7317073170731708, 0.8633405639913232, 0.5922330097087378, 0.6428571428571429, 0.375, 0.8280254777070064, 0.7073170731707318, 0.4329896907216494, 0.5982142857142858, 0.8164665523156088, 0.8283582089552239, 0.71, 0.8353413654618473, 0.7610619469026548, 0.8341968911917098, 0.6625766871165645, 0.8557692307692307, 0.7384615384615385], "x": [88.0, 77.0, 16.0, 42.0, 33.0, 11.0, 26.0, 20.0, 24.0, 21.0, 19.0, 28.0, 13.0, 21.0, 15.0, 72.0, 93.0, 14.0, 21.0, 30.0, 10.0, 18.0, 13.0, 12.0, 69.0, 93.0, 46.0, 25.0, 32.0, 61.0, 29.0, 80.0, 13.0, 35.0, 16.0, 95.0, 28.0, 71.0, 20.0, 35.0, 35.0, 72.0, 24.0, 19.0, 12.0, 14.0, 66.0, 75.0, 41.0, 40.0, 23.0, 82.0, 5.0, 38.0, 10.0, 19.0, 21.0, 29.0, 359.0, 424.0, 543.0, 2411.0, 576.0, 2572.0, 570.0, 367.0, 365.0, 253.0, 175.0, 593.0, 76.0, 47.0, 732.0, 1078.0, 1203.0, 403.0, 370.0, 349.0, 499.0, 616.0, 288.0, 406.0, 213.0, 141.0, 148.0, 60.0, 107.0, 150.0, 105.0, 173.0, 216.0, 98.0, 114.0, 127.0, 219.0, 37.0, 74.0, 149.0, 262.0, 149.0, 102.0, 104.0, 91.0, 176.0, 179.0, 108.0, 142.0]}, "id": "f9739119-b22c-43bb-b956-b704e2e3c1a4"}, "type": "ColumnDataSource", "id": "f9739119-b22c-43bb-b956-b704e2e3c1a4"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "dataranges": [], "id": "6e6cf211-5cf1-4595-9039-a8a3d9089689", "doc": null}, "type": "PreviewSaveTool", "id": "6e6cf211-5cf1-4595-9039-a8a3d9089689"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "d9957a0d-7e9c-41d4-9f98-59766effbd16"}, "doc": null, "id": "fdfeabcc-88bd-45fb-8ec5-246c639318fc", "xdata_range": {"type": "DataRange1d", "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a"}, "ydata_range": {"type": "DataRange1d", "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "fdfeabcc-88bd-45fb-8ec5-246c639318fc"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "fdfeabcc-88bd-45fb-8ec5-246c639318fc"}, {"type": "Glyph", "id": "16c45f44-5a66-4c9b-a297-5ad420f2b42f"}], "id": "b15948e6-a97a-41bd-8575-0a00662515b6"}, "type": "BoxSelectTool", "id": "b15948e6-a97a-41bd-8575-0a00662515b6"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "location": "min", "bounds": "auto", "doc": null, "id": "4b7c0220-2e40-4d76-b7b7-7c427fa60d69", "dimension": 0}, "type": "LinearAxis", "id": "4b7c0220-2e40-4d76-b7b7-7c427fa60d69"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "doc": null, "dimension": 0, "id": "f059f2ee-b513-4243-9546-a385dddab80d"}, "type": "Grid", "id": "f059f2ee-b513-4243-9546-a385dddab80d"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "id": "4aa82288-fdec-4126-91cd-94eb70f69724", "doc": null}, "type": "ResizeTool", "id": "4aa82288-fdec-4126-91cd-94eb70f69724"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a"}, {"type": "DataRange1d", "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506"}], "dimensions": ["width", "height"], "id": "8a01eae3-3fa2-49f9-a6f8-e44ee54a5fb8"}, "type": "ZoomTool", "id": "8a01eae3-3fa2-49f9-a6f8-e44ee54a5fb8"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}], "id": "c06d0db8-d47e-4cdb-a339-5988f3f35838"}, "type": "PlotContext", "id": "c06d0db8-d47e-4cdb-a339-5988f3f35838"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d9957a0d-7e9c-41d4-9f98-59766effbd16"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "f9739119-b22c-43bb-b956-b704e2e3c1a4"}, "columns": ["x"]}], "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a", "doc": null}, "type": "DataRange1d", "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a"}, {"type": "DataRange1d", "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506"}], "dimensions": ["width", "height"], "doc": null, "id": "2a0c85c5-ea23-4480-b45f-3a4daf650c21"}, "type": "PanTool", "id": "2a0c85c5-ea23-4480-b45f-3a4daf650c21"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "b15948e6-a97a-41bd-8575-0a00662515b6"}, "id": "5b020cbb-d7ed-4bca-9d54-9f9aa1596d8b"}, "type": "BoxSelection", "id": "5b020cbb-d7ed-4bca-9d54-9f9aa1596d8b"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "4b7c0220-2e40-4d76-b7b7-7c427fa60d69"}, {"type": "LinearAxis", "id": "e0f76171-60b5-4097-b2da-d8a434946267"}, {"type": "Grid", "id": "f059f2ee-b513-4243-9546-a385dddab80d"}, {"type": "Grid", "id": "32738404-4038-4b48-9fe6-f4670f112ed6"}, {"type": "BoxSelection", "id": "5b020cbb-d7ed-4bca-9d54-9f9aa1596d8b"}, {"type": "Legend", "id": "d5a86477-7a43-4691-bc5d-030c5173df56"}, {"type": "Glyph", "id": "fdfeabcc-88bd-45fb-8ec5-246c639318fc"}, {"type": "Glyph", "id": "16c45f44-5a66-4c9b-a297-5ad420f2b42f"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9", "tools": [{"type": "PanTool", "id": "2a0c85c5-ea23-4480-b45f-3a4daf650c21"}, {"type": "ZoomTool", "id": "8a01eae3-3fa2-49f9-a6f8-e44ee54a5fb8"}, {"type": "PreviewSaveTool", "id": "6e6cf211-5cf1-4595-9039-a8a3d9089689"}, {"type": "ResizeTool", "id": "4aa82288-fdec-4126-91cd-94eb70f69724"}, {"type": "BoxSelectTool", "id": "b15948e6-a97a-41bd-8575-0a00662515b6"}], "canvas_width": 600}, "type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.1761658031088083, 0.7157894736842105, 0.7225806451612903, 0.01961796592669076, 0.7586206896551724, 0.004338394793926247, 0.5294117647058822, 0.0023130300693909025, 0.6666666666666667, 0.64, 0.003659652333028362, 0.29411764705882354, 0.007674597083653109, 0.3448275862068965, 0.5573770491803278, 0.17647058823529413, 0.003348961821835231, 0.5581395348837209, 0.41509433962264153, 0.3121149897330595, 0.10344827586206896, 0.6274509803921569, 0.44642857142857145, 0.8000000000000002, 0.3636363636363636, 0.09374999999999999, 0.21658986175115208, 0.4341085271317829, 0.7368421052631581, 0.2181818181818182, 0.4840764331210191, 0.5, 0.0033333333333333327, 0.45833333333333337, 0.5474452554744526, 0.013793103448275862, 0.4473684210526316, 0.7058823529411765, 0.29473684210526313, 0.5263157894736842, 0.5873015873015874, 0.6545454545454545, 0.72, 0.7812500000000001, 0.5837837837837837, 0.2777777777777778, 0.33333333333333337, 0.004665629860031104, 0.6511627906976745, 0.900763358778626, 0.005649717514124294, 0.6562499999999999, 0.7837837837837837, 0.013253012048192769, 0.7849462365591396, 0.16666666666666666, 0.202020202020202, 0.6666666666666666, 0.0273972602739726, 0.742857142857143, 0.5333333333333333, 0.635561160151324, 0.012832263978001836, 0.38565022421524664, 0.6979655712050078, 0.8163265306122449, 0.80625, 0.44832214765100664, 0.7856547122602168, 0.8736842105263158, 0.6503597122302158, 0.583078491335372, 0.3898050974512744, 0.6613386613386614, 0.508313539192399, 0.6592865928659286, 0.668936170212766, 0.30219910144242135, 0.3438520130576713, 0.8503937007874016, 0.5667215815485998, 0.454308093994778, 0.042105263157894736, 0.7365439093484418, 0.7032418952618454, 0.6356589147286821, 0.6889952153110047, 0.7741935483870969, 0.555956678700361, 0.9102564102564102, 0.013698630136986302, 0.7235494880546075, 0.7140186915887852, 0.4105960264900662, 0.5573770491803278, 0.4367816091954023, 0.8293736501079914, 0.7499999999999999, 0.41237113402061853, 0.6890756302521008, 0.804635761589404, 0.8986486486486487, 0.6772486772486773, 0.8917748917748919, 0.7807017543859648, 0.8355091383812011, 0.6201834862385321, 0.883720930232558, 0.7984790874524714], "x": [76.0, 47.0, 88.0, 77.0, 16.0, 42.0, 33.0, 11.0, 26.0, 15.0, 20.0, 24.0, 21.0, 19.0, 28.0, 13.0, 21.0, 15.0, 72.0, 93.0, 14.0, 21.0, 30.0, 10.0, 18.0, 13.0, 69.0, 93.0, 46.0, 32.0, 61.0, 12.0, 12.0, 29.0, 80.0, 13.0, 35.0, 16.0, 95.0, 28.0, 71.0, 20.0, 35.0, 35.0, 72.0, 24.0, 19.0, 12.0, 14.0, 66.0, 75.0, 41.0, 40.0, 23.0, 82.0, 5.0, 38.0, 10.0, 19.0, 21.0, 29.0, 732.0, 1078.0, 1203.0, 403.0, 370.0, 349.0, 499.0, 616.0, 288.0, 406.0, 359.0, 424.0, 779.0, 543.0, 2411.0, 576.0, 2572.0, 570.0, 367.0, 365.0, 253.0, 175.0, 593.0, 213.0, 141.0, 148.0, 60.0, 107.0, 150.0, 105.0, 173.0, 216.0, 98.0, 114.0, 127.0, 219.0, 37.0, 74.0, 149.0, 262.0, 149.0, 102.0, 104.0, 91.0, 176.0, 179.0, 108.0, 142.0]}, "id": "d9957a0d-7e9c-41d4-9f98-59766effbd16"}, "type": "ColumnDataSource", "id": "d9957a0d-7e9c-41d4-9f98-59766effbd16"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "doc": null, "legends": {"compare_event:log_boost_splits2020d0.3m0.1s2": [{"type": "Glyph", "id": "fdfeabcc-88bd-45fb-8ec5-246c639318fc"}], "compare_event:splits1530d0.3m0.1s2": [{"type": "Glyph", "id": "16c45f44-5a66-4c9b-a297-5ad420f2b42f"}]}, "id": "d5a86477-7a43-4691-bc5d-030c5173df56"}, "type": "Legend", "id": "d5a86477-7a43-4691-bc5d-030c5173df56"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "d9957a0d-7e9c-41d4-9f98-59766effbd16"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "f9739119-b22c-43bb-b956-b704e2e3c1a4"}, "columns": ["y"]}], "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506", "doc": null}, "type": "DataRange1d", "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "f9739119-b22c-43bb-b956-b704e2e3c1a4"}, "doc": null, "id": "16c45f44-5a66-4c9b-a297-5ad420f2b42f", "xdata_range": {"type": "DataRange1d", "id": "56b98fd7-05a6-4dbb-bd1b-f35bf9b1e22a"}, "ydata_range": {"type": "DataRange1d", "id": "374dbc54-abf8-4d23-ad52-1ae8fc1ed506"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "16c45f44-5a66-4c9b-a297-5ad420f2b42f"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "doc": null, "dimension": 1, "id": "32738404-4038-4b48-9fe6-f4670f112ed6"}, "type": "Grid", "id": "32738404-4038-4b48-9fe6-f4670f112ed6"}, {"attributes": {"plot": {"type": "Plot", "id": "8dccaf30-c357-4bcf-8405-cee3c739f3f9"}, "location": "min", "bounds": "auto", "doc": null, "id": "e0f76171-60b5-4097-b2da-d8a434946267", "dimension": 1}, "type": "LinearAxis", "id": "e0f76171-60b5-4097-b2da-d8a434946267"}];
    var modeltype = "PlotContext";
    var elementid = "07b8c629-0c88-48ac-b392-eac30b282c6e";
    var plotID = "8dccaf30-c357-4bcf-8405-cee3c739f3f9";
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