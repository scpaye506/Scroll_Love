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
                            id: 'tilt',
                            type: 'image',
                            rect: ['32px', '31px', '85px', '88px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tilt.svg",'0px','0px'],
                            transform: [[],['-12']]
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid3",
                            "rotateZ",
                            0,
                            750,
                            "linear",
                            "${tilt}",
                            '-12deg',
                            '0deg'
                        ],
                        [
                            "eid5",
                            "rotateZ",
                            750,
                            250,
                            "linear",
                            "${tilt}",
                            '0deg',
                            '-12deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tilt_edgeActions.js");
})("EDGE-7902445");
