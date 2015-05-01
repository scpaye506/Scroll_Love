/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rotate',
                            type: 'image',
                            rect: ['34px', '33px', '82px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rotate.svg",'0px','0px']
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['21px', '18px', '21px', '35px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"arrow.svg",'0px','0px'],
                            transform: [[],['45']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '150px', '150px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid20",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid21",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid23",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid24",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid25",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid26",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid27",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid28",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid29",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${arrow}",
                            '8px',
                            '21px'
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            500,
                            "linear",
                            "${arrow}",
                            '53px',
                            '18px'
                        ],
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${arrow}",
                            '0deg',
                            '45deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("rotate_edgeActions.js");
})("EDGE-6812215");
