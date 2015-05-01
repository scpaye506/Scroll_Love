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
                            id: 'watch',
                            type: 'image',
                            rect: ['52px', '23px', '57px', '103px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"watch.svg",'0px','0px']
                        },
                        {
                            id: 'Button',
                            symbolName: 'Button',
                            type: 'rect',
                            rect: ['1', '0', '149', '150', 'auto', 'auto']
                        },
                        {
                            id: 'swipe2',
                            symbolName: 'swipe',
                            type: 'rect',
                            rect: ['30', '86', '17', '6', 'auto', 'auto']
                        },
                        {
                            id: 'arrow2',
                            symbolName: 'arrow',
                            type: 'rect',
                            rect: ['75', '76', '11', '13', 'auto', 'auto']
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
                    duration: 1064,
                    autoPlay: true,
                    labels: {
                        "Label 1": 1064
                    },
                    data: [
                            [ "eid139", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Button}', [] ] ],
                            [ "eid171", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Button}', [] ] ]
                    ]
                }
            },
            "Button": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '149px', '150px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'BUTTON',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '149px', '150px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "swipe": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '17px', '6px', 'auto', 'auto'],
                            id: 'swipe',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/swipe.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '17px', '6px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid62",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${swipe}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            64,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid442",
                            "-moz-transform-origin",
                            64,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid443",
                            "-ms-transform-origin",
                            64,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid444",
                            "msTransformOrigin",
                            64,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid445",
                            "-o-transform-origin",
                            64,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid446",
                            "transform-origin",
                            64,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4",
                            "-webkit-transform-origin",
                            564,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid447",
                            "-moz-transform-origin",
                            564,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid448",
                            "-ms-transform-origin",
                            564,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid449",
                            "msTransformOrigin",
                            564,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid450",
                            "-o-transform-origin",
                            564,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid451",
                            "transform-origin",
                            564,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid9",
                            "top",
                            64,
                            500,
                            "linear",
                            "${swipe}",
                            '0px',
                            '-38px'
                        ],
                        [
                            "eid8",
                            "height",
                            64,
                            500,
                            "linear",
                            "${swipe}",
                            '6px',
                            '44px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            64,
                            500,
                            "linear",
                            "${swipe}",
                            '0',
                            '1'
                        ]
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
                            rect: ['0px', '0px', '11px', '13px', 'auto', 'auto'],
                            id: 'arrow',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/arrow.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '11px', '13px']
                        }
                    }
                },
                timeline: {
                    duration: 1064,
                    autoPlay: true,
                    data: [
                        [
                            "eid13",
                            "-webkit-transform-origin",
                            564,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid452",
                            "-moz-transform-origin",
                            564,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid453",
                            "-ms-transform-origin",
                            564,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid454",
                            "msTransformOrigin",
                            564,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid455",
                            "-o-transform-origin",
                            564,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid456",
                            "transform-origin",
                            564,
                            0,
                            "linear",
                            "${arrow}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid63",
                            "left",
                            1064,
                            0,
                            "linear",
                            "${arrow}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid12",
                            "opacity",
                            564,
                            500,
                            "linear",
                            "${arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "top",
                            564,
                            500,
                            "linear",
                            "${arrow}",
                            '0px',
                            '-20px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Swipe_edgeActions.js");
})("EDGE-513383731");
