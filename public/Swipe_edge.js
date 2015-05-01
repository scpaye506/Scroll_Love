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
                            rect: ['32px', '23px', '57px', '103px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"watch.svg",'0px','0px']
                        },
                        {
                            id: 'swipe',
                            type: 'image',
                            rect: ['10px', '86px', '17px', '6px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"swipe.svg",'0px','0px']
                        },
                        {
                            id: 'arrow',
                            type: 'image',
                            rect: ['55px', '76px', '11px', '13px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"arrow.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '100px', '150px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${arrow}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid16",
                            "top",
                            500,
                            500,
                            "linear",
                            "${arrow}",
                            '76px',
                            '56px'
                        ],
                        [
                            "eid5",
                            "-webkit-transform-origin",
                            0,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17",
                            "-moz-transform-origin",
                            0,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid18",
                            "-ms-transform-origin",
                            0,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19",
                            "msTransformOrigin",
                            0,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid20",
                            "-o-transform-origin",
                            0,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid21",
                            "transform-origin",
                            0,
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
                            500,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid22",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid23",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid24",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid25",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid26",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${swipe}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid13",
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
                            "eid27",
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
                            "eid28",
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
                            "eid29",
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
                            "eid30",
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
                            "eid31",
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
                            "top",
                            0,
                            500,
                            "linear",
                            "${swipe}",
                            '86px',
                            '48px'
                        ],
                        [
                            "eid8",
                            "height",
                            0,
                            500,
                            "linear",
                            "${swipe}",
                            '6px',
                            '44px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${swipe}",
                            '0',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Swipe_edgeActions.js");
})("EDGE-513383731");
