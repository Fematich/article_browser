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

    var all_models = [{"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "3697c0d0-fd78-4c6a-9143-4f1c8b47bd94"}], "id": "dd83634d-e4e4-4312-b3c5-225223ee669e"}, "type": "BoxSelectTool", "id": "dd83634d-e4e4-4312-b3c5-225223ee669e"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "b91e8d07-0551-4203-b97b-78cc2c17e2bc"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "ad187f88-2666-478e-82c0-a07d3a4fba1e"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "ff345505-780d-48ad-99e0-8a62066ea678"}, {"type": "LinearAxis", "id": "90d0b557-56fb-430e-8302-b0793767a50e"}, {"type": "Grid", "id": "c0b80c3a-9a38-4659-89b5-379babfccc8b"}, {"type": "Grid", "id": "3f22518f-12ea-4f96-a56f-c1b38b9cbf8b"}, {"type": "BoxSelection", "id": "61458fe2-785a-4e20-bd0f-33ba4e46b4f5"}, {"type": "Glyph", "id": "3697c0d0-fd78-4c6a-9143-4f1c8b47bd94"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9", "tools": [{"type": "PanTool", "id": "3f89cf97-6f3f-45d5-a959-9aea7083adc7"}, {"type": "ZoomTool", "id": "66e0344e-fdae-4dff-bfcc-15f9f57eec90"}, {"type": "PreviewSaveTool", "id": "c9470099-0c25-4ba4-9a17-0425a196387f"}, {"type": "ResizeTool", "id": "a3c575bf-f5f3-4dd7-8c23-d57b2449a927"}, {"type": "BoxSelectTool", "id": "dd83634d-e4e4-4312-b3c5-225223ee669e"}], "canvas_width": 600}, "type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "dd83634d-e4e4-4312-b3c5-225223ee669e"}, "id": "61458fe2-785a-4e20-bd0f-33ba4e46b4f5"}, "type": "BoxSelection", "id": "61458fe2-785a-4e20-bd0f-33ba4e46b4f5"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "972c8e83-2c38-4f0e-b77d-948a890b086a"}, "doc": null, "id": "3697c0d0-fd78-4c6a-9143-4f1c8b47bd94", "xdata_range": {"type": "DataRange1d", "id": "b91e8d07-0551-4203-b97b-78cc2c17e2bc"}, "ydata_range": {"type": "DataRange1d", "id": "ad187f88-2666-478e-82c0-a07d3a4fba1e"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "line_alpha": 1.0, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "3697c0d0-fd78-4c6a-9143-4f1c8b47bd94"}, {"attributes": {"plot": {"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, "location": "min", "bounds": "auto", "doc": null, "id": "66ec05a4-2e8c-44c2-aa33-3e9bdf5ecb0c", "dimension": 0}, "type": "LinearAxis", "id": "66ec05a4-2e8c-44c2-aa33-3e9bdf5ecb0c"}, {"attributes": {"data_source": {"type": "ColumnDataSource", "id": "09daa175-d992-471f-b0a2-5af8d9a9429d"}, "doc": null, "id": "1585a1bf-ee20-4335-9ae8-7391bbfc66b7", "xdata_range": {"type": "DataRange1d", "id": "fbcc9459-f287-4135-8440-7571029fc03a"}, "ydata_range": {"type": "DataRange1d", "id": "85ed74cc-c12c-473b-ad8b-894d11bdfd35"}, "glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "line_alpha": 1.0, "fill_color": {"units": "data", "field": "fill_color"}, "fill_alpha": 1.0, "radius": {"units": "screen", "value": 4}, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "type": "circle", "size": {"units": "screen", "field": null, "default": 4}}, "nonselection_glyphspec": {"line_color": {"units": "data", "field": "line_color"}, "angle_units": "deg", "fill_color": {"units": "data", "field": "fill_color"}, "visible": null, "radius": {"units": "screen", "value": 4}, "line_dash_offset": 0, "line_join": "miter", "size": {"units": "screen", "default": 4, "field": null}, "line_alpha": 0.1, "radius_units": "screen", "end_angle_units": "deg", "valign": null, "length_units": "screen", "start_angle_units": "deg", "line_cap": "butt", "line_dash": [], "line_width": 1, "type": "circle", "fill_alpha": 0.1, "halign": null, "y": {"units": "data", "field": "y"}, "x": {"units": "data", "field": "x"}, "margin": null}}, "type": "Glyph", "id": "1585a1bf-ee20-4335-9ae8-7391bbfc66b7"}, {"attributes": {"x_range": {"type": "DataRange1d", "id": "fbcc9459-f287-4135-8440-7571029fc03a"}, "axes": [], "title": "Plot", "y_range": {"type": "DataRange1d", "id": "85ed74cc-c12c-473b-ad8b-894d11bdfd35"}, "outer_width": 600, "renderers": [{"type": "LinearAxis", "id": "66ec05a4-2e8c-44c2-aa33-3e9bdf5ecb0c"}, {"type": "LinearAxis", "id": "0d82ad7f-027c-4195-a912-b70b00b523cb"}, {"type": "Grid", "id": "39da33df-492b-41fe-89ef-2f3fcf9aeb9f"}, {"type": "Grid", "id": "e6ece547-57ee-459d-bb94-8753aa581410"}, {"type": "BoxSelection", "id": "90fff913-209c-4070-87ef-a69f0a2eee3b"}, {"type": "Glyph", "id": "1585a1bf-ee20-4335-9ae8-7391bbfc66b7"}], "outer_height": 600, "doc": null, "canvas_height": 600, "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318", "tools": [{"type": "PanTool", "id": "1b475607-46c4-477c-9e28-530f4510bd58"}, {"type": "ZoomTool", "id": "17b5ba5e-3e3b-43a3-9f1f-f88373844afe"}, {"type": "PreviewSaveTool", "id": "f6ad0845-865a-4022-a640-fe500d0914cc"}, {"type": "ResizeTool", "id": "1212eef6-f9d1-45c4-af9d-dc46a6ba0cc9"}, {"type": "BoxSelectTool", "id": "9cf2442a-db84-408f-8ae2-f6fcf23bd5e0"}], "canvas_width": 600}, "type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "09daa175-d992-471f-b0a2-5af8d9a9429d"}, "columns": ["y"]}], "id": "85ed74cc-c12c-473b-ad8b-894d11bdfd35", "doc": null}, "type": "DataRange1d", "id": "85ed74cc-c12c-473b-ad8b-894d11bdfd35"}, {"attributes": {"plot": {"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, "doc": null, "dimension": 1, "id": "e6ece547-57ee-459d-bb94-8753aa581410"}, "type": "Grid", "id": "e6ece547-57ee-459d-bb94-8753aa581410"}, {"attributes": {"plot": {"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, "id": "1212eef6-f9d1-45c4-af9d-dc46a6ba0cc9", "doc": null}, "type": "ResizeTool", "id": "1212eef6-f9d1-45c4-af9d-dc46a6ba0cc9"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "fbcc9459-f287-4135-8440-7571029fc03a"}, {"type": "DataRange1d", "id": "85ed74cc-c12c-473b-ad8b-894d11bdfd35"}], "dimensions": ["width", "height"], "doc": null, "id": "1b475607-46c4-477c-9e28-530f4510bd58"}, "type": "PanTool", "id": "1b475607-46c4-477c-9e28-530f4510bd58"}, {"attributes": {"plot": {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, "doc": null, "dimension": 0, "id": "c0b80c3a-9a38-4659-89b5-379babfccc8b"}, "type": "Grid", "id": "c0b80c3a-9a38-4659-89b5-379babfccc8b"}, {"attributes": {"plot": {"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, "doc": null, "dimension": 0, "id": "39da33df-492b-41fe-89ef-2f3fcf9aeb9f"}, "type": "Grid", "id": "39da33df-492b-41fe-89ef-2f3fcf9aeb9f"}, {"attributes": {"doc": null, "tool": {"type": "BoxSelectTool", "id": "9cf2442a-db84-408f-8ae2-f6fcf23bd5e0"}, "id": "90fff913-209c-4070-87ef-a69f0a2eee3b"}, "type": "BoxSelection", "id": "90fff913-209c-4070-87ef-a69f0a2eee3b"}, {"attributes": {"plot": {"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, "location": "min", "bounds": "auto", "doc": null, "id": "0d82ad7f-027c-4195-a912-b70b00b523cb", "dimension": 1}, "type": "LinearAxis", "id": "0d82ad7f-027c-4195-a912-b70b00b523cb"}, {"attributes": {"plot": {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, "dataranges": [], "id": "c9470099-0c25-4ba4-9a17-0425a196387f", "doc": null}, "type": "PreviewSaveTool", "id": "c9470099-0c25-4ba4-9a17-0425a196387f"}, {"attributes": {"plot": {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, "id": "a3c575bf-f5f3-4dd7-8c23-d57b2449a927", "doc": null}, "type": "ResizeTool", "id": "a3c575bf-f5f3-4dd7-8c23-d57b2449a927"}, {"attributes": {"doc": null, "renderers": [{"type": "Glyph", "id": "1585a1bf-ee20-4335-9ae8-7391bbfc66b7"}], "id": "9cf2442a-db84-408f-8ae2-f6fcf23bd5e0"}, "type": "BoxSelectTool", "id": "9cf2442a-db84-408f-8ae2-f6fcf23bd5e0"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "972c8e83-2c38-4f0e-b77d-948a890b086a"}, "columns": ["y"]}], "id": "ad187f88-2666-478e-82c0-a07d3a4fba1e", "doc": null}, "type": "DataRange1d", "id": "ad187f88-2666-478e-82c0-a07d3a4fba1e"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": [["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"], ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"]], "x": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]], "fill_color": [["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"], ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"]], "y": [[20, 99, 89, 97, 33, 88, 26, 90, 65, 85, 48, 35, 10, 50, 77, 26, 25, 7, 18, 8, 2, 83, 91, 24, 39, 1, 7, 78, 7, 58, 94, 83, 94, 0, 16, 18, 72, 86, 59, 28, 23, 40, 96, 83, 73, 54, 34, 39, 17, 50, 64, 15, 82, 49, 79, 61, 24, 61, 55, 71, 13, 69, 84, 35, 64, 13, 0, 70, 71, 75, 2, 82, 41, 81, 86, 76, 34, 19, 3, 80, 24, 29, 79, 66, 34, 19, 92, 29, 52, 82, 7, 32, 79, 38, 28, 16, 34, 61, 45, 61], [85, 96, 49, 52, 32, 35, 49, 90, 26, 28, 82, 73, 93, 3, 76, 13, 5, 74, 63, 67, 51, 99, 72, 71, 37, 6, 90, 6, 25, 80, 68, 53, 47, 32, 65, 42, 0, 87, 75, 38, 16, 54, 78, 99, 59, 92, 36, 14, 89, 93, 14, 54, 63, 80, 40, 31, 69, 70, 55, 65, 68, 35, 77, 62, 84, 79, 37, 47, 94, 17, 57, 10, 11, 34, 18, 18, 91, 90, 17, 87, 71, 21, 37, 84, 73, 39, 83, 25, 14, 29, 62, 61, 31, 61, 41, 57, 25, 22, 62, 44]]}, "id": "972c8e83-2c38-4f0e-b77d-948a890b086a"}, "type": "ColumnDataSource", "id": "972c8e83-2c38-4f0e-b77d-948a890b086a"}, {"attributes": {"column_names": ["fill_color", "line_color", "x", "y"], "doc": null, "selected": [], "discrete_ranges": {}, "cont_ranges": {}, "data": {"line_color": [["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"], ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"]], "x": [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]], "fill_color": [["tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato", "tomato"], ["navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy", "navy"]], "y": [[20, 99, 89, 97, 33, 88, 26, 90, 65, 85, 48, 35, 10, 50, 77, 26, 25, 7, 18, 8, 2, 83, 91, 24, 39, 1, 7, 78, 7, 58, 94, 83, 94, 0, 16, 18, 72, 86, 59, 28, 23, 40, 96, 83, 73, 54, 34, 39, 17, 50, 64, 15, 82, 49, 79, 61, 24, 61, 55, 71, 13, 69, 84, 35, 64, 13, 0, 70, 71, 75, 2, 82, 41, 81, 86, 76, 34, 19, 3, 80, 24, 29, 79, 66, 34, 19, 92, 29, 52, 82, 7, 32, 79, 38, 28, 16, 34, 61, 45, 61], [85, 96, 49, 52, 32, 35, 49, 90, 26, 28, 82, 73, 93, 3, 76, 13, 5, 74, 63, 67, 51, 99, 72, 71, 37, 6, 90, 6, 25, 80, 68, 53, 47, 32, 65, 42, 0, 87, 75, 38, 16, 54, 78, 99, 59, 92, 36, 14, 89, 93, 14, 54, 63, 80, 40, 31, 69, 70, 55, 65, 68, 35, 77, 62, 84, 79, 37, 47, 94, 17, 57, 10, 11, 34, 18, 18, 91, 90, 17, 87, 71, 21, 37, 84, 73, 39, 83, 25, 14, 29, 62, 61, 31, 61, 41, 57, 25, 22, 62, 44]]}, "id": "09daa175-d992-471f-b0a2-5af8d9a9429d"}, "type": "ColumnDataSource", "id": "09daa175-d992-471f-b0a2-5af8d9a9429d"}, {"attributes": {"doc": null, "children": [{"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}], "id": "46069696-e3bc-42ce-9c85-f2e6faf3b515"}, "type": "PlotContext", "id": "46069696-e3bc-42ce-9c85-f2e6faf3b515"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "09daa175-d992-471f-b0a2-5af8d9a9429d"}, "columns": ["x"]}], "id": "fbcc9459-f287-4135-8440-7571029fc03a", "doc": null}, "type": "DataRange1d", "id": "fbcc9459-f287-4135-8440-7571029fc03a"}, {"attributes": {"plot": null, "dataranges": [{"type": "DataRange1d", "id": "b91e8d07-0551-4203-b97b-78cc2c17e2bc"}, {"type": "DataRange1d", "id": "ad187f88-2666-478e-82c0-a07d3a4fba1e"}], "dimensions": ["width", "height"], "doc": null, "id": "3f89cf97-6f3f-45d5-a959-9aea7083adc7"}, "type": "PanTool", "id": "3f89cf97-6f3f-45d5-a959-9aea7083adc7"}, {"attributes": {"sources": [{"ref": {"type": "ColumnDataSource", "id": "972c8e83-2c38-4f0e-b77d-948a890b086a"}, "columns": ["x"]}], "id": "b91e8d07-0551-4203-b97b-78cc2c17e2bc", "doc": null}, "type": "DataRange1d", "id": "b91e8d07-0551-4203-b97b-78cc2c17e2bc"}, {"attributes": {"plot": {"type": "Plot", "id": "f3f0591c-c04f-40d8-a808-5e60fa84a318"}, "dataranges": [], "id": "f6ad0845-865a-4022-a640-fe500d0914cc", "doc": null}, "type": "PreviewSaveTool", "id": "f6ad0845-865a-4022-a640-fe500d0914cc"}, {"attributes": {"plot": {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, "location": "min", "bounds": "auto", "doc": null, "id": "ff345505-780d-48ad-99e0-8a62066ea678", "dimension": 0}, "type": "LinearAxis", "id": "ff345505-780d-48ad-99e0-8a62066ea678"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "fbcc9459-f287-4135-8440-7571029fc03a"}, {"type": "DataRange1d", "id": "85ed74cc-c12c-473b-ad8b-894d11bdfd35"}], "dimensions": ["width", "height"], "id": "17b5ba5e-3e3b-43a3-9f1f-f88373844afe"}, "type": "ZoomTool", "id": "17b5ba5e-3e3b-43a3-9f1f-f88373844afe"}, {"attributes": {"plot": {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, "doc": null, "dimension": 1, "id": "3f22518f-12ea-4f96-a56f-c1b38b9cbf8b"}, "type": "Grid", "id": "3f22518f-12ea-4f96-a56f-c1b38b9cbf8b"}, {"attributes": {"doc": null, "dataranges": [{"type": "DataRange1d", "id": "b91e8d07-0551-4203-b97b-78cc2c17e2bc"}, {"type": "DataRange1d", "id": "ad187f88-2666-478e-82c0-a07d3a4fba1e"}], "dimensions": ["width", "height"], "id": "66e0344e-fdae-4dff-bfcc-15f9f57eec90"}, "type": "ZoomTool", "id": "66e0344e-fdae-4dff-bfcc-15f9f57eec90"}, {"attributes": {"plot": {"type": "Plot", "id": "7d79221d-c036-46c6-b6bb-9d5f749046b9"}, "location": "min", "bounds": "auto", "doc": null, "id": "90d0b557-56fb-430e-8302-b0793767a50e", "dimension": 1}, "type": "LinearAxis", "id": "90d0b557-56fb-430e-8302-b0793767a50e"}];
    var modeltype = "PlotContext";
    var elementid = "29c957e8-d058-4960-ba57-c326d2142ac2";
    var plotID = "7d79221d-c036-46c6-b6bb-9d5f749046b9";
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