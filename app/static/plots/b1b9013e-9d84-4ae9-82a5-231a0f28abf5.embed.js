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

    var all_models = [{"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "id": "83b9a4c5-f300-4e0e-a3c4-f2d54cbe3f66", "doc": null}, "type": "ResizeTool", "id": "83b9a4c5-f300-4e0e-a3c4-f2d54cbe3f66"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "a918f570-9310-41c2-b337-13a7ce7df65e"}, "doc": null, "id": "5fe8cc98-e74b-4510-97be-4063ce4f39d2", "xdata_range": {"type": "DataRange1d", "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009"}, "ydata_range": {"type": "DataRange1d", "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a"}, "glyphspec": {"line_color": {"value": "blue"}, "line_alpha": 1.0, "fill_color": {"value": "blue"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "blue"}, "angle_units": "deg", "fill_color": {"value": "blue"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "5fe8cc98-e74b-4510-97be-4063ce4f39d2"}, {"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "doc": null, "legends": {"compare_event_cos:splits1540d0.3m0.1s2": [{"type": "Glyph", "id": "52d403cb-a524-4d7b-8d79-a5a6f36b7dc8"}], "compare_event_cos:sym_log_boost_splits1540d0.3m0.1s2": [{"type": "Glyph", "id": "5fe8cc98-e74b-4510-97be-4063ce4f39d2"}]}, "id": "f229a90c-0e7a-4101-b747-ada81650a78f"}, "type": "Legend", "id": "f229a90c-0e7a-4101-b747-ada81650a78f"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.528428093645485, 0.5756985055230669, 0.7717717717717718, 0.33372228704784135, 0.6672283066554339, 0.7907361455748554, 0.7133027522935779, 0.654014598540146, 0.48701298701298706, 0.003866976024748647, 0.6398891966759003, 0.5650623885918004, 0.8600770218228497, 0.48400556328233657, 0.8934010152284264, 0.558659217877095, 0.8975, 0.7833969465648856, 0.7724719101123595, 0.6295964125560538, 0.5604278074866309, 0.47857889237199586, 0.8560490045941808, 0.5895953757225433, 0.6201550387596899, 0.6864197530864198, 0.8, 0.5617977528089888, 0.9148264984227129, 0.7474747474747475, 0.6953642384105959, 0.8179871520342612, 0.4975124378109453, 0.5638297872340425, 0.5164835164835164, 0.8423153692614771, 0.6823529411764706, 0.4329896907216494, 0.6609442060085836, 0.8120805369127517, 0.8164794007490637, 0.6632124352331606, 0.8813559322033898, 0.7685589519650655, 0.8028846153846153, 0.6609442060085836, 0.821256038647343, 0.7581699346405228, 0.6785714285714285, 0.29565217391304344, 0.6046511627906976, 0.07812499999999999, 0.10843373493975902, 0.41052631578947374, 0.5352112676056339, 0.023038156947444204, 0.039999999999999994, 0.1696969696969697, 0.02519685039370079, 0.004085801838610828, 0.3111111111111111, 0.23047375160051217, 0.22222222222222224, 0.2909090909090909, 0.624390243902439, 0.5263157894736842, 0.02853881278538813, 0.7076923076923076, 0.689655172413793, 0.6296296296296297, 0.012534818941504178, 0.047619047619047616, 0.004130098089829633, 0.425925925925926, 0.02728351126927639, 0.6424870466321243, 0.3311827956989248, 0.15384615384615383, 0.13636363636363635, 0.7215189873417721, 0.45454545454545453, 0.32, 0.5714285714285714, 0.617283950617284, 0.7283236994219653, 0.9022556390977443, 0.8108108108108109, 0.043478260869565216, 0.4761904761904762, 0.7462686567164178, 0.02, 0.764705882352941, 0.13793103448275862, 0.05714285714285714, 0.9473684210526316, 0.20568927789934355, 0.3636363636363636, 0.46341463414634143, 0.3888888888888889, 0.2773722627737226, 0.5524475524475525, 0.2318840579710145, 0.4385964912280702, 0.6363636363636365, 0.2975206611570248, 0.021164021164021166, 0.2325581395348837, 0.7941176470588236, 0.7714285714285715, 0.5526315789473685, 0.007582938388625592, 0.2424242424242424], "x": [6.0497334552319577, 6.5957805139613113, 5.855071922202427, 6.3456363608285962, 6.3561076606958915, 6.4232469635335194, 7.0925737159746784, 6.6580110458707482, 5.1647859739235145, 7.8524390853575099, 6.0063531596017325, 5.8833223884882786, 5.9053618480545707, 5.5333894887275203, 5.6629604801359461, 6.2971093199339352, 5.9989365619466826, 6.9828627514689421, 5.9135030056382698, 6.3851943989977258, 6.2126060957515188, 5.8998973535824915, 7.7877968781811706, 5.3612921657094255, 4.9487598903781684, 4.9972122737641147, 4.0943445622221004, 4.6728288344619058, 5.0106352940962555, 4.6539603501575231, 5.1532915944977793, 5.3752784076841653, 4.5849674786705723, 4.7361984483944957, 4.8441870864585912, 5.389071729816501, 3.6109179126442243, 4.3040650932041702, 5.0039463059454592, 5.5683445037610966, 5.0039463059454592, 4.6249728132842707, 4.6443908991413725, 4.5108595065168497, 5.1704839950381514, 5.1873858058407549, 4.6821312271242199, 4.9558270576012609, 2.9957322735539909, 3.6375861597263857, 4.2766661190160553, 2.5649493574615367, 2.6390573296152584, 4.5325994931532563, 3.4965075614664802, 3.1354942159291497, 2.7725887222397811, 4.3174881135363101, 3.7376696182833684, 3.044522437723423, 2.7725887222397811, 4.5538768916005408, 1.6094379124341003, 2.9444389791664403, 4.2766661190160553, 2.4849066497880004, 3.713572066704308, 3.2580965380214821, 2.6390573296152584, 3.044522437723423, 2.9444389791664403, 2.3978952727983707, 2.9957322735539909, 3.4011973816621555, 4.3438054218536841, 4.4773368144782069, 4.5325994931532563, 2.4849066497880004, 3.1780538303479458, 4.2626798770413155, 2.4849066497880004, 2.7080502011022101, 3.3322045101752038, 3.8286413964890951, 4.4067192472642533, 4.1896547420264252, 3.044522437723423, 2.7080502011022101, 3.3322045101752038, 3.5553480614894135, 2.4849066497880004, 3.8501476017100584, 2.3978952727983707, 3.2188758248682006, 2.3025850929940459, 4.2341065045972597, 2.8903717578961645, 3.3672958299864741, 2.9444389791664403, 3.4657359027997265, 4.3820266346738812, 3.3672958299864741, 4.3307333402863311, 2.3025850929940459, 3.1780538303479458, 3.044522437723423, 2.5649493574615367, 3.6888794541139363, 3.5553480614894135, 4.1108738641733114, 2.5649493574615367, 3.5553480614894135]}, "id": "a918f570-9310-41c2-b337-13a7ce7df65e"}, "type": "ColumnDataSource", "id": "a918f570-9310-41c2-b337-13a7ce7df65e"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009"}, {"type": "DataRange1d", "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a"}], "dimensions": ["width", "height"], "doc": null, "id": "04597793-5aba-46f0-95e7-210f77faa364"}, "type": "PanTool", "id": "04597793-5aba-46f0-95e7-210f77faa364"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "03fb8214-c1b6-4be9-8e2a-c3a5400ebb70"}, "doc": null, "id": "52d403cb-a524-4d7b-8d79-a5a6f36b7dc8", "xdata_range": {"type": "DataRange1d", "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009"}, "ydata_range": {"type": "DataRange1d", "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a"}, "glyphspec": {"line_color": {"value": "green"}, "line_alpha": 1.0, "fill_color": {"value": "green"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"value": "green"}, "angle_units": "deg", "fill_color": {"value": "green"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "52d403cb-a524-4d7b-8d79-a5a6f36b7dc8"}, {"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "doc": null, "dimension": 1, "id": "b02f2158-53a7-455c-a631-3f5bc37ae3c5"}, "type": "Grid", "id": "b02f2158-53a7-455c-a631-3f5bc37ae3c5"}, {"attributes": {"column_names": ["x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"y": [0.46990740740740744, 0.414070351758794, 0.7838258164852255, 0.532994923857868, 0.6555246053853296, 0.7771236333052987, 0.6962843295638126, 0.6719538572458543, 0.06091370558375635, 0.24906832298136644, 0.6329113924050634, 0.5972350230414747, 0.8435013262599469, 0.5793991416309013, 0.8778761061946904, 0.5802238805970149, 0.6866141732283464, 0.7110644992134243, 0.8047808764940239, 0.7396630934150077, 0.3328, 0.687116564417178, 0.5909580193756728, 0.3861671469740634, 0.624, 0.6939759036144578, 0.8095238095238095, 0.5245901639344261, 0.9148264984227129, 0.7093596059113301, 0.7492063492063492, 0.836283185840708, 0.5700934579439252, 0.5299999999999999, 0.6048780487804878, 0.8347107438016529, 0.6499999999999999, 0.4716981132075472, 0.5727272727272728, 0.8195615514333896, 0.8, 0.6766169154228856, 0.8521739130434781, 0.7610619469026548, 0.8083989501312336, 0.6568421052631579, 0.5806451612903226, 0.6557377049180327, 0.2524271844660194, 0.5988700564971752, 0.09655172413793105, 0.09027777777777778, 0.5161290322580645, 0.5757575757575758, 0.6206896551724138, 0.7586206896551724, 0.44594594594594594, 0.004764740917212626, 0.043478260869565216, 0.5185185185185185, 0.24000000000000005, 0.1818181818181818, 0.372093023255814, 0.5327510917030568, 0.3404255319148936, 0.676923076923077, 0.5625, 0.5853658536585367, 0.631578947368421, 0.03636363636363636, 0.027210884353741496, 0.4554455445544555, 0.06276150627615064, 0.7814569536423841, 0.34261241970021405, 0.001224739742804654, 0.13043478260869565, 0.6986301369863014, 0.6, 0.16, 0.02040816326530612, 0.6956521739130435, 0.7555555555555555, 0.9117647058823529, 0.8108108108108109, 0.030769230769230767, 0.5161290322580645, 0.8648648648648648, 0.007692307692307693, 0.7706422018348622, 0.08888888888888888, 0.888888888888889, 0.21658986175115208, 0.5384615384615385, 0.5365853658536586, 0.375, 0.3333333333333333, 0.5473684210526316, 0.44067796610169496, 0.656934306569343, 0.6666666666666667, 0.07547169811320754, 0.22727272727272727, 0.8461538461538461, 0.75, 0.5298013245033112, 0.023333333333333334, 0.14241486068111456], "x": [6.0497334552319577, 6.5957805139613113, 5.855071922202427, 6.3456363608285962, 6.3561076606958915, 6.4232469635335194, 7.0925737159746784, 6.6580110458707482, 5.1647859739235145, 7.8524390853575099, 6.0063531596017325, 5.8833223884882786, 5.9053618480545707, 5.5333894887275203, 5.6629604801359461, 6.2971093199339352, 5.9989365619466826, 6.9828627514689421, 5.9135030056382698, 6.3851943989977258, 6.2126060957515188, 5.8998973535824915, 7.7877968781811706, 5.3612921657094255, 4.9487598903781684, 4.9972122737641147, 4.0943445622221004, 4.6728288344619058, 5.0106352940962555, 4.6539603501575231, 5.1532915944977793, 5.3752784076841653, 4.5849674786705723, 4.7361984483944957, 4.8441870864585912, 5.389071729816501, 3.6109179126442243, 4.3040650932041702, 5.0039463059454592, 5.5683445037610966, 5.0039463059454592, 4.6249728132842707, 4.6443908991413725, 4.5108595065168497, 5.1704839950381514, 5.1873858058407549, 4.6821312271242199, 2.9957322735539909, 3.6375861597263857, 4.2766661190160553, 2.5649493574615367, 2.6390573296152584, 4.5325994931532563, 3.4965075614664802, 3.1354942159291497, 2.7725887222397811, 4.3174881135363101, 3.7376696182833684, 3.044522437723423, 2.7725887222397811, 4.5538768916005408, 1.6094379124341003, 2.9444389791664403, 4.2766661190160553, 2.4849066497880004, 3.713572066704308, 3.2580965380214821, 2.6390573296152584, 3.044522437723423, 2.3978952727983707, 2.9957322735539909, 3.4011973816621555, 4.3438054218536841, 4.4773368144782069, 4.5325994931532563, 2.4849066497880004, 3.1780538303479458, 4.2626798770413155, 2.4849066497880004, 2.7080502011022101, 3.3322045101752038, 3.8286413964890951, 4.4067192472642533, 4.1896547420264252, 3.044522437723423, 2.7080502011022101, 3.3322045101752038, 3.5553480614894135, 2.4849066497880004, 3.8501476017100584, 2.3978952727983707, 2.3025850929940459, 4.2341065045972597, 2.8903717578961645, 3.3672958299864741, 2.9444389791664403, 3.4657359027997265, 4.3820266346738812, 3.3672958299864741, 4.3307333402863311, 2.3025850929940459, 3.044522437723423, 2.5649493574615367, 3.6888794541139363, 3.5553480614894135, 4.1108738641733114, 2.5649493574615367, 3.5553480614894135]}, "id": "03fb8214-c1b6-4be9-8e2a-c3a5400ebb70"}, "type": "ColumnDataSource", "id": "03fb8214-c1b6-4be9-8e2a-c3a5400ebb70"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "825389ef-b9ce-4bff-89e9-90a707dcd3c2"}, "id": "8e933215-9249-4d07-9671-752314b998cf"}, "type": "BoxSelection", "id": "8e933215-9249-4d07-9671-752314b998cf"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "03fb8214-c1b6-4be9-8e2a-c3a5400ebb70"}, "columns": ["x"]}, {"ref": {"type": "ColumnDataSource", "id": "a918f570-9310-41c2-b337-13a7ce7df65e"}, "columns": ["x"]}], "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009", "doc": null}, "type": "DataRange1d", "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009"}, {"type": "DataRange1d", "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a"}], "dimensions": ["width", "height"], "id": "b9d1a722-a367-4c0b-85f6-b03bfade9721"}, "type": "ZoomTool", "id": "b9d1a722-a367-4c0b-85f6-b03bfade9721"}, {"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "location": "min", "bounds": "auto", "doc": null, "id": "237323ec-a1bc-414d-9696-e285a17c5c42", "dimension": 1}, "type": "LinearAxis", "id": "237323ec-a1bc-414d-9696-e285a17c5c42"}, {"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "location": "min", "bounds": "auto", "doc": null, "id": "c8782075-0b3b-461f-a69e-3aecbefa0954", "dimension": 0}, "type": "LinearAxis", "id": "c8782075-0b3b-461f-a69e-3aecbefa0954"}, {"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "dataranges": [], "id": "1f3d042c-e562-4e91-a4b3-960d48dc4604", "doc": null}, "type": "PreviewSaveTool", "id": "1f3d042c-e562-4e91-a4b3-960d48dc4604"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}], "id": "323896fb-0abb-485c-92e8-2ed417e2d85e"}, "type": "PlotContext", "id": "323896fb-0abb-485c-92e8-2ed417e2d85e"}, {"attributes": {"plot": {"type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}, "doc": null, "dimension": 0, "id": "7217ff14-2c24-4387-a869-e23255e45e30"}, "type": "Grid", "id": "7217ff14-2c24-4387-a869-e23255e45e30"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "52d403cb-a524-4d7b-8d79-a5a6f36b7dc8"}, {"type": "Glyph", "id": "5fe8cc98-e74b-4510-97be-4063ce4f39d2"}], "id": "825389ef-b9ce-4bff-89e9-90a707dcd3c2"}, "type": "BoxSelectTool", "id": "825389ef-b9ce-4bff-89e9-90a707dcd3c2"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "03fb8214-c1b6-4be9-8e2a-c3a5400ebb70"}, "columns": ["y"]}, {"ref": {"type": "ColumnDataSource", "id": "a918f570-9310-41c2-b337-13a7ce7df65e"}, "columns": ["y"]}], "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a", "doc": null}, "type": "DataRange1d", "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "3c776ec2-b322-44a5-a4f3-b5ae5e5eb009"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "705f43e7-db7e-4c79-860d-f66bbfd16d1a"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "c8782075-0b3b-461f-a69e-3aecbefa0954"}, {"type": "LinearAxis", "id": "237323ec-a1bc-414d-9696-e285a17c5c42"}, {"type": "Grid", "id": "7217ff14-2c24-4387-a869-e23255e45e30"}, {"type": "Grid", "id": "b02f2158-53a7-455c-a631-3f5bc37ae3c5"}, {"type": "BoxSelection", "id": "8e933215-9249-4d07-9671-752314b998cf"}, {"type": "Legend", "id": "f229a90c-0e7a-4101-b747-ada81650a78f"}, {"type": "Glyph", "id": "52d403cb-a524-4d7b-8d79-a5a6f36b7dc8"}, {"type": "Glyph", "id": "5fe8cc98-e74b-4510-97be-4063ce4f39d2"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5", "tools": [{"type": "PanTool", "id": "04597793-5aba-46f0-95e7-210f77faa364"}, {"type": "ZoomTool", "id": "b9d1a722-a367-4c0b-85f6-b03bfade9721"}, {"type": "PreviewSaveTool", "id": "1f3d042c-e562-4e91-a4b3-960d48dc4604"}, {"type": "ResizeTool", "id": "83b9a4c5-f300-4e0e-a3c4-f2d54cbe3f66"}, {"type": "BoxSelectTool", "id": "825389ef-b9ce-4bff-89e9-90a707dcd3c2"}], "canvas_width": 600}, "type": "Plot", "id": "b1b9013e-9d84-4ae9-82a5-231a0f28abf5"}];
    var modeltype = "PlotContext";
    var elementid = "ee005b7c-ad33-4f3a-8e7b-bea3885aaa14";
    var plotID = "b1b9013e-9d84-4ae9-82a5-231a0f28abf5";
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