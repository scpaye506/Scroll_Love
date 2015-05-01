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
                            rect: ['38px', '36px', '82px', '83px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"rotate.svg",'0px','0px']
                        },
                        {
                            id: 'curve',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['12px', '56px', '21', '35', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '150px', '150px', 'auto', 'auto'],
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
                            "eid40",
                            "left",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            '12px',
                            '12px'
                        ],
                        [
                            "eid41",
                            "top",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            '56px',
                            '56px'
                        ],
                            [ "eid204", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${curve}', [] ] ]
                    ]
                }
            },
            "arrow": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], ['45'], [0, 0, 0], [1, 1, 1]],
                            id: 'arrow',
                            type: 'image',
                            rect: ['13px', '-35px', '21px', '35px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/arrow.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '21px', '35px']
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
                            "eid325",
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
                            "eid326",
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
                            "eid327",
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
                            "eid328",
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
                            "eid329",
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
                            "eid330",
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
                            "eid331",
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
                            "eid332",
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
                            "eid333",
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
                            "eid334",
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
                            '0px',
                            '13px'
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
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            500,
                            "linear",
                            "${arrow}",
                            '0px',
                            '-35px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("roatet_edgeActions.js");
})("EDGE-6812215");
