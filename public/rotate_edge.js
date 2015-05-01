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
                            id: 'curve2',
                            symbolName: 'curve',
                            type: 'rect',
                            rect: ['9', '52', '21', '35', 'auto', 'auto']
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
                    duration: 0,
                    autoPlay: true,
                    data: [
                            [ "eid103", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${curve2}', [] ] ]
                    ]
                }
            },
            "curve": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['15px', '-33px', '21px', '35px', 'auto', 'auto'],
                            id: 'curve',
                            transform: [[], ['45']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/curve.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '21px', '35px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: true,
                    data: [
                        [
                            "eid50",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid124",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid125",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid126",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid127",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid128",
                            "transform-origin",
                            0,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid51",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid129",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid130",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid131",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid132",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid133",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${curve}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid62",
                            "top",
                            0,
                            500,
                            "linear",
                            "${curve}",
                            '0px',
                            '-33px'
                        ],
                        [
                            "eid61",
                            "left",
                            0,
                            500,
                            "linear",
                            "${curve}",
                            '0px',
                            '15px'
                        ],
                        [
                            "eid60",
                            "rotateZ",
                            0,
                            500,
                            "linear",
                            "${curve}",
                            '0deg',
                            '45deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("rotate_edgeActions.js");
})("EDGE-1560739");
