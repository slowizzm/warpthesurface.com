/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'snaredrum': '',
            'sadmachine': ''        },
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
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'flatearth_slowed',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['368', '417', '320px', '45px', 'auto', 'auto'],
                            autoplay: 'autoplay',
                            loop: 'loop',
                            source: [aud+"flatearth_slowed.mp3",aud+"flatearth_slowed.ogg"],
                            preload: 'auto'
                        },
                        {
                            id: 'quotesMod',
                            symbolName: 'quotesMod',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'anon_intro',
                            symbolName: 'anon_intro',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'meds',
                            symbolName: 'meds',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'codeblock',
                            symbolName: 'codeblock',
                            type: 'rect',
                            rect: ['-50px', '-13px', '1540', '746', 'auto', 'auto'],
                            transform: [[],[],[],['0.93506','0.96521']]
                        },
                        {
                            id: 'vid_int',
                            symbolName: 'vid_int',
                            type: 'rect',
                            rect: ['477px', '225px', '480', '270', 'auto', 'auto'],
                            transform: [[],[],[],['2.88587','2.88587']]
                        },
                        {
                            id: 'sun',
                            symbolName: 'sun',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'glitch_open',
                            symbolName: 'glitch_open',
                            type: 'rect',
                            rect: ['-237px', '40px', '1915', '640', 'auto', 'auto'],
                            transform: [[],[],[],['0.75211','1.12505']]
                        },
                        {
                            id: 'glitch_in',
                            symbolName: 'glitch_in',
                            display: 'block',
                            type: 'rect',
                            rect: ['720px', '350px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'option_hold',
                            symbolName: 'option_hold',
                            display: 'block',
                            type: 'rect',
                            rect: ['-240px', '-180px', '1920', '1080', 'auto', 'auto'],
                            transform: [[],[],[],['0.46302','0.46296']]
                        },
                        {
                            id: 'prog_reg',
                            symbolName: 'prog_reg',
                            display: 'none',
                            type: 'rect',
                            rect: ['899', '67px', '424', '100', 'auto', 'auto']
                        },
                        {
                            id: 'regress',
                            symbolName: 'regress',
                            display: 'none',
                            type: 'rect',
                            rect: ['-5px', '40px', '1448', '640', 'auto', 'auto'],
                            transform: [[],[],[],['0.99448','1.12552']]
                        },
                        {
                            id: 'glitch_touch_audio',
                            symbolName: 'glitch_touch_audio',
                            display: 'block',
                            type: 'rect',
                            rect: ['720px', '350px', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'progress',
                            symbolName: 'progress',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '113', '90', 'auto', 'auto']
                        },
                        {
                            id: 'about_info',
                            symbolName: 'about_info',
                            type: 'rect',
                            rect: ['403px', '49px', '723', '16', 'auto', 'auto']
                        },
                        {
                            id: 'about_infoCopy2',
                            symbolName: 'about_info',
                            type: 'rect',
                            rect: ['430px', '9px', '723', '16', 'auto', 'auto']
                        },
                        {
                            id: 'hov_anon',
                            symbolName: 'hov_anon',
                            display: 'none',
                            type: 'rect',
                            rect: ['589px', '329px', '263', '223', 'auto', 'auto'],
                            transform: [[],[],[],['1.61217','1.61217']]
                        },
                        {
                            id: 'regHover',
                            symbolName: 'regHover',
                            type: 'rect',
                            rect: ['-7px', '67px', '588', '101', 'auto', 'auto'],
                            transform: [[],[],[],['0.97959']]
                        },
                        {
                            id: 'progHover',
                            symbolName: 'progHover',
                            type: 'rect',
                            rect: ['859px', '67px', '588', '99', 'auto', 'auto'],
                            transform: [[],[],[],['0.97619']]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['0px', '-52px', '1440px', '819px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.1098)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'hover_sun',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['636px', '219px', '165px', '165px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'progress_buton',
                            display: 'none',
                            type: 'rect',
                            rect: ['866px', '67px', '574px', '99px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.07)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'regress_button',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1px', '67px', '574px', '99px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(255,255,255,0.07)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'footer',
                            display: 'none',
                            type: 'rect',
                            rect: ['-1px', '668px', '1441px', '52px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.1098)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'wearelegion',
                            symbolName: 'wearelegion',
                            display: 'none',
                            type: 'rect',
                            rect: ['0', '0', '0', '0', 'auto', 'auto']
                        },
                        {
                            id: 'sunhover',
                            display: 'none',
                            type: 'rect',
                            rect: ['531px', '331px', '363px', '289px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'about',
                            display: 'none',
                            type: 'text',
                            rect: ['512px', '668px', '100px', '51px', 'auto', 'auto'],
                            cursor: 'default',
                            text: "<p style=\"margin: 0px; text-align: center;\">​ABOUT</p>",
                            align: "center",
                            font: ['snaredrum', [21, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", "", "none"]
                        },
                        {
                            id: 'mission',
                            display: 'none',
                            type: 'text',
                            rect: ['612px', '668px', '100px', '51px', 'auto', 'auto'],
                            cursor: 'default',
                            text: "<p style=\"margin: 0px; text-align: center;\">​MISSION</p>",
                            align: "center",
                            font: ['snaredrum', [21, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", "", "none"]
                        },
                        {
                            id: 'contact',
                            display: 'none',
                            type: 'text',
                            rect: ['712px', '668px', '100px', '51px', 'auto', 'auto'],
                            cursor: 'default',
                            text: "<p style=\"margin: 0px; text-align: center;\">CONTACT</p>",
                            align: "center",
                            font: ['snaredrum', [21, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", "", "none"]
                        },
                        {
                            id: 'print3d',
                            display: 'none',
                            type: 'text',
                            rect: ['812px', '668px', '100px', '51px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px; text-align: center;\">​THE MASK</p>",
                            align: "center",
                            font: ['snaredrum', [21, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "50px", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['0', '0', '1440px', '720px', 'auto', 'auto'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 180000,
                    autoPlay: true,
                    labels: {
                        "land": 33,
                        "hold": 3033,
                        "touch": 5033,
                        "option": 13000,
                        "regress_out": 20033,
                        "progress_out": 30033,
                        "legion": 105250,
                        "quotes": 180000
                    },
                    data: [
                        [
                            "eid802",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${contact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid807",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${contact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid792",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${anon_intro}",
                            'none',
                            'block'
                        ],
                        [
                            "eid357",
                            "display",
                            5033,
                            0,
                            "linear",
                            "${sun}",
                            'none',
                            'block'
                        ],
                        [
                            "eid368",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${sun}",
                            'block',
                            'none'
                        ],
                        [
                            "eid427",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${regress_button}",
                            'none',
                            'block'
                        ],
                        [
                            "eid445",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${regress_button}",
                            'block',
                            'none'
                        ],
                        [
                            "eid151",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${regress}",
                            'none',
                            'block'
                        ],
                        [
                            "eid645",
                            "display",
                            30033,
                            0,
                            "linear",
                            "${regress}",
                            'block',
                            'none'
                        ],
                        [
                            "eid369",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${glitch_touch_audio}",
                            'block',
                            'none'
                        ],
                        [
                            "eid804",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${mission}",
                            'none',
                            'block'
                        ],
                        [
                            "eid808",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${mission}",
                            'block',
                            'none'
                        ],
                        [
                            "eid486",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${sunhover}",
                            'none',
                            'block'
                        ],
                        [
                            "eid638",
                            "display",
                            105250,
                            0,
                            "linear",
                            "${wearelegion}",
                            'none',
                            'block'
                        ],
                        [
                            "eid554",
                            "display",
                            0,
                            0,
                            "linear",
                            "${hov_anon}",
                            'none',
                            'none'
                        ],
                        [
                            "eid555",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${hov_anon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid553",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${hov_anon}",
                            'block',
                            'none'
                        ],
                        [
                            "eid375",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${glitch_in}",
                            'block',
                            'none'
                        ],
                        [
                            "eid801",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${print3d}",
                            'none',
                            'block'
                        ],
                        [
                            "eid806",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${print3d}",
                            'block',
                            'none'
                        ],
                        [
                            "eid313",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${option_hold}",
                            'block',
                            'none'
                        ],
                        [
                            "eid799",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${footer}",
                            'none',
                            'block'
                        ],
                        [
                            "eid810",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${footer}",
                            'block',
                            'none'
                        ],
                        [
                            "eid370",
                            "display",
                            30033,
                            0,
                            "linear",
                            "${progress}",
                            'none',
                            'block'
                        ],
                        [
                            "eid644",
                            "display",
                            105250,
                            0,
                            "linear",
                            "${progress}",
                            'block',
                            'none'
                        ],
                        [
                            "eid428",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${progress_buton}",
                            'none',
                            'block'
                        ],
                        [
                            "eid446",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${progress_buton}",
                            'block',
                            'none'
                        ],
                        [
                            "eid475",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${hover_sun}",
                            'none',
                            'block'
                        ],
                        [
                            "eid476",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${hover_sun}",
                            'block',
                            'none'
                        ],
                        [
                            "eid805",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${about}",
                            'none',
                            'block'
                        ],
                        [
                            "eid809",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${about}",
                            'block',
                            'none'
                        ],
                        [
                            "eid422",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${prog_reg}",
                            'none',
                            'block'
                        ],
                        [
                            "eid457",
                            "display",
                            20033,
                            0,
                            "linear",
                            "${prog_reg}",
                            'block',
                            'none'
                        ],
                            [ "eid300", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${option_hold}', [] ] ],
                            [ "eid152", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${regress}', [] ] ],
                            [ "eid583", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${flatearth_slowed}', [] ] ],
                            [ "eid423", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${prog_reg}', [] ] ],
                            [ "eid539", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${about_info}', [] ] ],
                            [ "eid144", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${glitch_touch_audio}', [] ] ],
                            [ "eid483", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${hov_anon}', [] ] ],
                            [ "eid358", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sun}', [] ] ],
                            [ "eid371", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${progress}', [] ] ],
                            [ "eid639", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${wearelegion}', [] ] ],
                            [ "eid479", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${meds}', [] ] ],
                            [ "eid868", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${about_infoCopy2}', [] ] ],
                            [ "eid869", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${quotesMod}', [] ] ],
                            [ "eid78", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${vid_int}', [] ] ],
                            [ "eid484", "trigger", 13000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${hov_anon}', [0] ] ],
                            [ "eid480", "trigger", 13000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${meds}', [] ] ],
                            [ "eid642", "trigger", 30033, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${progress}', [] ] ],
                            [ "eid650", "trigger", 30033, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${progHover}', [] ] ],
                            [ "eid652", "trigger", 30033, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${regHover}', [] ] ]
                    ]
                }
            },
            "glitch_exe": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/lovesweetlove.mp3'],
                            id: 'lovesweetlove',
                            rect: ['286px', '240px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            id: 'megaglitch',
                            rect: ['-1303', '-425', '2795', '860', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'g_bg'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            rect: ['-874px', '-351px', '722px', '722px', 'auto', 'auto'],
                            id: 'Video_Feb_12_1_11_28_AMCopy',
                            opacity: '1',
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            rect: ['297px', '-373px', '768px', '767px', 'auto', 'auto'],
                            id: 'Video_Feb_12_1_11_28_AMCopy2',
                            opacity: '1',
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            rect: ['-337px', '-364px', '753px', '752px', 'auto', 'auto'],
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM',
                            opacity: '1',
                            type: 'video',
                            tag: 'video'
                        },
                        {
                            id: 'glitch_media2',
                            rect: ['-888px', '-273px', '914', '514', 'auto', 'auto'],
                            type: 'rect',
                            symbolName: 'glitch_media2'
                        },
                        {
                            transform: [[], [], [], ['1.04559', '1.04559']],
                            rect: ['72px', '-242px', '858', '483', 'auto', 'auto'],
                            id: 'glitch_media',
                            symbolName: 'obama',
                            clip: 'rect(-115.217529296875px 662.34765625px 583px -55.6435546875px)',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 13021.880658181,
                    autoPlay: true,
                    labels: {
                        "glitch_love": 3033
                    },
                    data: [
                        [
                            "eid38",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            3593,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM}",
                            'none',
                            'none'
                        ],
                        [
                            "eid40",
                            "display",
                            3720,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM}",
                            'block',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            3895,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM}",
                            'block',
                            'none'
                        ],
                        [
                            "eid161",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid162",
                            "display",
                            3593,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid163",
                            "display",
                            3720,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid164",
                            "display",
                            3895,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid165",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid170",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            3593,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid172",
                            "display",
                            3720,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid173",
                            "display",
                            3895,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid174",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy2}",
                            'block',
                            'none'
                        ],
                            [ "eid3", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${lovesweetlove}', [11.42] ] ],
                            [ "eid5", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM}', [] ] ],
                            [ "eid179", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy2}', [] ] ],
                            [ "eid180", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy}', [] ] ],
                            [ "eid193", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${lovesweetlove}', [24.63] ] ],
                            [ "eid194", "trigger", 3302, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${lovesweetlove}', [] ] ],
                            [ "eid185", "trigger", 3720, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM}', [5.18] ] ],
                            [ "eid184", "trigger", 3894.5232146968, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${lovesweetlove}', [3.87] ] ],
                            [ "eid186", "trigger", 3895, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM}', [11.31] ] ],
                            [ "eid183", "trigger", 4021.8806581813, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${lovesweetlove}', [] ] ],
                            [ "eid182", "trigger", 5030.5232146968, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Video_Feb_12_1_11_28_AMCopy2}', [] ] ],
                            [ "eid6", "trigger", 5030.5232146968, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Video_Feb_12_1_11_28_AM}', [] ] ],
                            [ "eid4", "trigger", 5030.5232146968, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${lovesweetlove}', [] ] ],
                            [ "eid181", "trigger", 5030.5232146968, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${Video_Feb_12_1_11_28_AMCopy}', [] ] ]
                    ]
                }
            },
            "vid_int": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/lg_fli__alt.mp4'],
                            id: 'lg_fli__alt',
                            rect: ['-78px', '-93px', '636px', '457px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            type: 'text',
                            id: 'TextCopy3',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['sadmachine', [33, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            display: 'none',
                            text: '<p style=\"margin: 0px; text-align: center;\">​FLAT EARTH INTERACTIVE</p>',
                            rect: ['0px', '87px', '480px', '19px', 'auto', 'auto'],
                            align: 'center'
                        },
                        {
                            type: 'image',
                            display: 'none',
                            rect: ['-1px', '0px', '481px', '271px', 'auto', 'auto'],
                            id: 'holdSnap',
                            fill: ['rgba(0,0,0,0)', 'media/holdSnap.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '480px', '270px']
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: true,
                    labels: {
                        "vid_touch": 5033
                    },
                    data: [
                        [
                            "eid462",
                            "display",
                            5033,
                            0,
                            "linear",
                            "${lg_fli__alt}",
                            'none',
                            'block'
                        ],
                        [
                            "eid463",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${lg_fli__alt}",
                            'block',
                            'none'
                        ],
                        [
                            "eid867",
                            "display",
                            0,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid866",
                            "display",
                            12750,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid865",
                            "display",
                            14717,
                            0,
                            "linear",
                            "${TextCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid816",
                            "display",
                            14930,
                            0,
                            "linear",
                            "${holdSnap}",
                            'none',
                            'block'
                        ],
                        [
                            "eid817",
                            "display",
                            14941,
                            0,
                            "linear",
                            "${holdSnap}",
                            'block',
                            'none'
                        ],
                            [ "eid459", "trigger", 5033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${lg_fli__alt}', [0] ] ]
                    ]
                }
            },
            "glitch_touch_audio": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'audio',
                            source: ['media/lovesweetlove.mp3'],
                            id: 'lovesweetlove2',
                            preload: 'auto',
                            rect: ['395px', '307px', '320px', '45px', 'auto', 'auto'],
                            volume: '0.42',
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 3398,
                    autoPlay: true,
                    labels: {
                        "touch_audio": 3033
                    },
                    data: [
                            [ "eid145", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${lovesweetlove2}', [3.033] ] ],
                            [ "eid146", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${lovesweetlove2}', [] ] ]
                    ]
                }
            },
            "regress": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/thirteenthfloor.mp3', 'media/thirteenthfloor.ogg'],
                            id: 'thirteenthfloor',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM3',
                            rect: ['0px', '0px', '720px', '720px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM3Copy2',
                            rect: ['808px', '0px', '720px', '720px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM3Copy',
                            rect: ['408px', '0px', '720px', '720px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            textStyle: ['', '', '21px', '', 'none'],
                            rect: ['-203px', '604px', '971px', '39px', 'auto', 'auto'],
                            font: ['snaredrum', [67, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            align: 'center',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">ERASING USER HISTORY:</p>',
                            display: 'none',
                            type: 'text'
                        },
                        {
                            rect: ['561px', '597px', '875px', '39px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['-85px', '-119px', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'regressSnap',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'media/regressSnap.jpg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '1440px', '720px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 28417.41714513,
                    autoPlay: true,
                    labels: {
                        "death": 20034
                    },
                    data: [
                        [
                            "eid149",
                            "display",
                            20034,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid570",
                            "display",
                            20034,
                            0,
                            "linear",
                            "${Text}",
                            'none',
                            'block'
                        ],
                        [
                            "eid571",
                            "display",
                            28401,
                            0,
                            "linear",
                            "${Text}",
                            'block',
                            'none'
                        ],
                        [
                            "eid569",
                            "display",
                            20034,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid572",
                            "display",
                            28401,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid814",
                            "display",
                            28255,
                            0,
                            "linear",
                            "${regressSnap}",
                            'none',
                            'block'
                        ],
                        [
                            "eid568",
                            "width",
                            20034,
                            967,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '73px',
                            '183px'
                        ],
                        [
                            "eid619",
                            "width",
                            21381,
                            403,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '207px',
                            '254px'
                        ],
                        [
                            "eid631",
                            "width",
                            22034,
                            1000,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '268px',
                            '360px'
                        ],
                        [
                            "eid621",
                            "width",
                            23307,
                            227,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '424px',
                            '422px'
                        ],
                        [
                            "eid622",
                            "width",
                            23534,
                            500,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '422px',
                            '456px'
                        ],
                        [
                            "eid624",
                            "width",
                            25034,
                            374,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '557px',
                            '623px'
                        ],
                        [
                            "eid632",
                            "width",
                            25408,
                            392,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '623px',
                            '625px'
                        ],
                        [
                            "eid625",
                            "width",
                            25800,
                            234,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '625px',
                            '647px'
                        ],
                        [
                            "eid627",
                            "width",
                            26253,
                            490,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '685px',
                            '741px'
                        ],
                        [
                            "eid634",
                            "width",
                            27360,
                            174,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '782px',
                            '841px'
                        ],
                        [
                            "eid629",
                            "width",
                            28034,
                            221,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '841px',
                            '863px'
                        ],
                        [
                            "eid635",
                            "width",
                            28255,
                            146,
                            "easeInOutQuart",
                            "${Rectangle3}",
                            '863px',
                            '875px'
                        ],
                        [
                            "eid76",
                            "display",
                            20034,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid150",
                            "display",
                            20034,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM3Copy2}",
                            'none',
                            'block'
                        ],
                            [ "eid153", "trigger", 20034.251957117, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM3Copy}', [] ] ],
                            [ "eid154", "trigger", 20034.251957117, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM3Copy2}', [] ] ],
                            [ "eid155", "trigger", 20034.251957117, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM3}', [] ] ],
                            [ "eid156", "trigger", 20501.251957117, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM3Copy}', [2.05] ] ],
                            [ "eid157", "trigger", 21001.251957117, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM3Copy2}', [6.02] ] ],
                            [ "eid158", "trigger", 22001.251957117, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM3}', [0] ] ],
                            [ "eid646", "trigger", 23186.00014513, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${thirteenthfloor}', [] ] ]
                    ]
                }
            },
            "option_hold": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'video',
                            source: ['media/fli_hold.mp4'],
                            id: 'fli_hold2',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['-247px', '-362px', '2434px', '1751px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            type: 'rect',
                            rect: ['980px', '975px', '24px', '45px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            display: 'none',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1440px', '720px']
                        }
                    }
                },
                timeline: {
                    duration: 15750,
                    autoPlay: true,
                    labels: {
                        "option_loop": 13000
                    },
                    data: [
                        [
                            "eid466",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${fli_hold2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid467",
                            "display",
                            15750,
                            0,
                            "linear",
                            "${fli_hold2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid819",
                            "display",
                            12858,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid820",
                            "display",
                            15750,
                            0,
                            "linear",
                            "${Rectangle}",
                            'block',
                            'none'
                        ],
                            [ "eid465", "trigger", 13000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${fli_hold2}', [0] ] ]
                    ]
                }
            },
            "sun": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/thesun.ogg'],
                            id: 'thesun3',
                            rect: ['722px', '350px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 7553,
                    autoPlay: true,
                    labels: {
                        "thesun": 5033
                    },
                    data: [
                            [ "eid359", "trigger", 5033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${thesun3}', [] ] ]
                    ]
                }
            },
            "progress": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            rect: ['145px', '57px', '1158px', '661px', 'auto', 'auto'],
                            source: ['media/anonvid_AME/anonymousVideo3point5.mp4'],
                            id: 'anonymousVideo3point5',
                            type: 'video',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '113px', '90px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 77272,
                    autoPlay: true,
                    labels: {
                        "vidPlay": 30744
                    },
                    data: [
                        [
                            "eid844",
                            "display",
                            32711,
                            0,
                            "linear",
                            "${anonymousVideo3point5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid845",
                            "display",
                            74211,
                            0,
                            "easeInOutQuart",
                            "${anonymousVideo3point5}",
                            'block',
                            'none'
                        ],
                            [ "eid846", "trigger", 30744, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${anonymousVideo3point5}', [] ] ]
                    ]
                }
            },
            "glitch_in": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'audio',
                            source: ['media/gametoplay.mp3'],
                            id: 'gametoplay',
                            preload: 'auto',
                            rect: ['352px', '295px', '320px', '45px', 'auto', 'auto'],
                            volume: '0.42',
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "glitchn": 0
                    },
                    data: [
                            [ "eid61", "trigger", 33, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${gametoplay}', [4.95] ] ],
                            [ "eid63", "trigger", 1033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${gametoplay}', [] ] ]
                    ]
                }
            },
            "obama": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/glitch_media.mp4'],
                            id: 'glitch_media',
                            rect: ['-191px', '-116px', '1277px', '717px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '858px', '483px']
                        }
                    }
                },
                timeline: {
                    duration: 13021.880658181,
                    autoPlay: true,
                    labels: {
                        "g_media": 3033
                    },
                    data: [
                        [
                            "eid196",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${glitch_media}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            3128,
                            0,
                            "linear",
                            "${glitch_media}",
                            'block',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            3159,
                            0,
                            "linear",
                            "${glitch_media}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "display",
                            3219,
                            0,
                            "linear",
                            "${glitch_media}",
                            'block',
                            'none'
                        ],
                        [
                            "eid200",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${glitch_media}",
                            'none',
                            'none'
                        ],
                        [
                            "eid213",
                            "display",
                            3643,
                            0,
                            "linear",
                            "${glitch_media}",
                            'none',
                            'block'
                        ],
                        [
                            "eid214",
                            "display",
                            3869,
                            0,
                            "linear",
                            "${glitch_media}",
                            'block',
                            'none'
                        ],
                        [
                            "eid215",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${glitch_media}",
                            'none',
                            'block'
                        ],
                        [
                            "eid216",
                            "display",
                            4174,
                            0,
                            "linear",
                            "${glitch_media}",
                            'block',
                            'none'
                        ],
                            [ "eid209", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${glitch_media}', [] ] ],
                            [ "eid212", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${glitch_media}', [] ] ],
                            [ "eid217", "trigger", 3643, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${glitch_media}', [5.07] ] ],
                            [ "eid218", "trigger", 3868.7724542928, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${glitch_media}', [] ] ],
                            [ "eid219", "trigger", 4021.8806581813, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${glitch_media}', [9] ] ],
                            [ "eid220", "trigger", 4173.8806581813, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${glitch_media}', [] ] ]
                    ]
                }
            },
            "glitch_media2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'video',
                            source: ['media/glitch_media_bnw.mp4'],
                            id: 'glitch_media_bnw',
                            preload: 'auto',
                            rect: ['0px', '30px', '914px', '514px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['-1.5407', '1.45255']],
                            clip: 'rect(-76.595703125px 888.4677734375px 622.510498046875px 170.212890625px)',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '914px', '514px']
                        }
                    }
                },
                timeline: {
                    duration: 4471,
                    autoPlay: true,
                    labels: {
                        "g_media2": 3033
                    },
                    data: [
                        [
                            "eid195",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${glitch_media_bnw}",
                            'none',
                            'block'
                        ],
                        [
                            "eid210",
                            "display",
                            3250,
                            0,
                            "linear",
                            "${glitch_media_bnw}",
                            'block',
                            'none'
                        ],
                            [ "eid208", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${glitch_media_bnw}', [] ] ],
                            [ "eid211", "trigger", 3250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${glitch_media_bnw}', [] ] ]
                    ]
                }
            },
            "glitch_open": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM2',
                            rect: ['0px', '0px', '721px', '721px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM2Copy',
                            rect: ['640px', '0px', '721px', '721px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AM2Copy2',
                            rect: ['1194px', '0px', '721px', '721px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1440px', '720px']
                        }
                    }
                },
                timeline: {
                    duration: 4573,
                    autoPlay: true,
                    data: [
                        [
                            "eid92",
                            "display",
                            33,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid93",
                            "display",
                            60,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid94",
                            "display",
                            89,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid95",
                            "display",
                            143,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid96",
                            "display",
                            329,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'block',
                            'block'
                        ],
                        [
                            "eid97",
                            "display",
                            352,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid98",
                            "display",
                            948,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid99",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            33,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            60,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            89,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            143,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            329,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid58",
                            "display",
                            352,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid79",
                            "display",
                            948,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid80",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid100",
                            "display",
                            33,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid101",
                            "display",
                            60,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid102",
                            "display",
                            89,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid103",
                            "display",
                            143,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid104",
                            "display",
                            329,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid105",
                            "display",
                            352,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid106",
                            "display",
                            948,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid107",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AM2Copy2}",
                            'block',
                            'none'
                        ],
                            [ "eid60", "trigger", 33, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM2}', [] ] ],
                            [ "eid109", "trigger", 33, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM2Copy2}', [] ] ],
                            [ "eid108", "trigger", 33, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM2Copy}', [] ] ],
                            [ "eid110", "trigger", 143, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM2Copy}', [1.97] ] ],
                            [ "eid62", "trigger", 143, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM2}', [1.97] ] ],
                            [ "eid111", "trigger", 143, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AM2Copy2}', [1.97] ] ]
                    ]
                }
            },
            "g_bg": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy3',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['966px', '61px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy4',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['998px', '166px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy5',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['945px', '237px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy6',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['992px', '292px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy7',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['945px', '379px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy8',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1088px', '-8px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy9',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1031px', '-95px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy10',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1097px', '-172px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy11',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1046px', '-225px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy12',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1078px', '-277px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy13',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1053px', '431px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '0.13988']],
                            tag: 'video'
                        },
                        {
                            type: 'video',
                            source: ['media/Video%20Feb%2012%2C%201%2011%2028%20AM.mp4'],
                            id: 'Video_Feb_12_1_11_28_AMCopy14',
                            opacity: '1',
                            preload: 'auto',
                            rect: ['1097px', '-326px', '753px', '752px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['3.50911', '-0.13175']],
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '2795px', '860px']
                        }
                    }
                },
                timeline: {
                    duration: 9433,
                    autoPlay: true,
                    labels: {
                        "g_bg": 3033
                    },
                    data: [
                        [
                            "eid392",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid417",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid388",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid413",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid387",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid412",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy8}",
                            'block',
                            'none'
                        ],
                        [
                            "eid389",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid414",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid385",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid410",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid390",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid415",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy11}",
                            'block',
                            'none'
                        ],
                        [
                            "eid393",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid406",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy14}",
                            'block',
                            'none'
                        ],
                        [
                            "eid382",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid407",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid386",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid411",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid384",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid409",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid391",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid416",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy12}",
                            'block',
                            'none'
                        ],
                        [
                            "eid383",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid408",
                            "display",
                            4022,
                            0,
                            "linear",
                            "${Video_Feb_12_1_11_28_AMCopy4}",
                            'block',
                            'none'
                        ],
                            [ "eid398", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy3}', [] ] ],
                            [ "eid394", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy6}', [] ] ],
                            [ "eid396", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy5}', [] ] ],
                            [ "eid395", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy7}', [] ] ],
                            [ "eid397", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy4}', [] ] ],
                            [ "eid399", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy8}', [] ] ],
                            [ "eid401", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy9}', [] ] ],
                            [ "eid403", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy11}', [] ] ],
                            [ "eid402", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy12}', [] ] ],
                            [ "eid400", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy10}', [] ] ],
                            [ "eid404", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy13}', [] ] ],
                            [ "eid405", "trigger", 3033, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Video_Feb_12_1_11_28_AMCopy14}', [] ] ]
                    ]
                }
            },
            "anon_intro": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'audio',
                            source: ['media/anonaudiointro.mp3', 'media/anonaudiointro.ogg'],
                            id: 'anonaudiointro',
                            preload: 'auto',
                            rect: ['643', '346', '320px', '45px', 'auto', 'auto'],
                            volume: '0.42',
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    labels: {
                        "anonv1": 33
                    },
                    data: [
                            [ "eid497", "trigger", 33, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${anonaudiointro}', [0] ] ]
                    ]
                }
            },
            "codeblock": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            autoplay: 'autoplay',
                            type: 'video',
                            source: ['media/code_blocks_rain2.mp4'],
                            id: 'code_blocks_rain2',
                            preload: 'auto',
                            rect: ['-18px', '-22px', '1586px', '777px', 'auto', 'auto'],
                            loop: 'loop',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '1440px', '720px']
                        }
                    }
                },
                timeline: {
                    duration: 90000,
                    autoPlay: true,
                    labels: {
                        "codebg": 33
                    },
                    data: [
                            [ "eid616", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${code_blocks_rain2}', [0] ] ]
                    ]
                }
            },
            "prog_reg": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'progressplay',
                            rect: ['-90px', '-39', '569', '168', 'auto', 'auto'],
                            id: 'progressplay'
                        },
                        {
                            type: 'rect',
                            display: 'none',
                            symbolName: 'regressplay',
                            rect: ['-814px', '-27', '569', '168', 'auto', 'auto'],
                            id: 'regressplay'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '424px', '100px']
                        }
                    }
                },
                timeline: {
                    duration: 14216,
                    autoPlay: true,
                    labels: {
                        "buttons_load": 13000
                    },
                    data: [
                        [
                            "eid453",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${regressplay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid454",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${progressplay}",
                            'none',
                            'block'
                        ],
                        [
                            "eid565",
                            "left",
                            13000,
                            0,
                            "linear",
                            "${progressplay}",
                            '-90px',
                            '-90px'
                        ],
                            [ "eid448", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${progressplay}', [] ] ],
                            [ "eid447", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${regressplay}', [] ] ],
                            [ "eid450", "trigger", 13000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${progressplay}', [0] ] ],
                            [ "eid449", "trigger", 13000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${regressplay}', [0] ] ]
                    ]
                }
            },
            "enter": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [

                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '276px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 13750,
                    autoPlay: true,
                    labels: {
                        "play_enter": 13000
                    },
                    data: [

                    ]
                }
            },
            "regressplay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'regress3',
                            rect: ['0px', '0px', '569px', '168px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'media/regress.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '569px', '168px']
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
            "progressplay": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'progress2',
                            rect: ['0px', '0px', '569px', '168px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'media/progress.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '569px', '168px']
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
            "entersym": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            id: 'TextCopy2',
                            text: '<p style=\"margin: 0px;\">​FLAT EARTH INTERACTIVEENTER</p>',
                            font: ['Arial, Helvetica, sans-serif', [42, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            opacity: '0',
                            display: 'none',
                            rect: ['-228px', '0px', '731px', '77px', 'auto', 'auto'],
                            align: 'center',
                            textStyle: ['', '', '80px', '', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '276px', '77px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    labels: {
                        "ent": 3033
                    },
                    data: [
                        [
                            "eid471",
                            "display",
                            3033,
                            0,
                            "linear",
                            "${TextCopy2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid472",
                            "opacity",
                            3033,
                            467,
                            "linear",
                            "${TextCopy2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid546",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '-228px',
                            '-228px'
                        ],
                        [
                            "eid547",
                            "width",
                            3500,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '731px',
                            '731px'
                        ]
                    ]
                }
            },
            "meds": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/mediaaudio2.mp3', 'media/mediaaudio2.ogg'],
                            id: 'mediaaudio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 130523.542,
                    autoPlay: true,
                    labels: {
                        "medsLoop": 13000
                    },
                    data: [
                            [ "eid617", "trigger", 13000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${mediaaudio}', [0] ] ]
                    ]
                }
            },
            "hov_anon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/hover_anon.mp4'],
                            id: 'hover_anon',
                            rect: ['1px', '0px', '263px', '223px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '263px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 16000,
                    autoPlay: true,
                    labels: {
                        "hov": 13000,
                        "hov_out": 15500
                    },
                    data: [
                        [
                            "eid481",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${hover_anon}",
                            'none',
                            'block'
                        ],
                        [
                            "eid482",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${hover_anon}",
                            'block',
                            'none'
                        ],
                            [ "eid485", "trigger", 13000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${hover_anon}', [0] ] ]
                    ]
                }
            },
            "about_info": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            rect: ['-399px', '-18px', '1233px', '51px', 'auto', 'auto'],
                            source: ['media/aboutScroll.mp4'],
                            id: 'aboutScroll',
                            transform: [[], [], [], ['0.82', '0.82']],
                            type: 'video',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            rect: ['-288px', '-13px', '1011px', '42px', 'auto', 'auto'],
                            source: ['media/missionScroll.mp4'],
                            id: 'missionScroll',
                            type: 'video',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            rect: ['-288px', '-13px', '1011px', '42px', 'auto', 'auto'],
                            source: ['media/contactScroll.mp4'],
                            id: 'contactScroll',
                            type: 'video',
                            tag: 'video'
                        },
                        {
                            preload: 'auto',
                            type: 'video',
                            source: ['media/3dprintScroll.mp4'],
                            id: '_3dprintScroll',
                            rect: ['-288px', '-13px', '1011px', '42px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'video'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '723px', '16px']
                        }
                    }
                },
                timeline: {
                    duration: 99000,
                    autoPlay: true,
                    labels: {
                        "aboutScroll_enter": 1000,
                        "aboutScroll_leave": 13000,
                        "missionScroll_enter": 31000,
                        "missionScroll_leave": 43000,
                        "contactScroll_enter": 61000,
                        "contactScroll_leave": 73000,
                        "3dprintScroll_enter": 85000,
                        "3dprintScroll_leave": 98000
                    },
                    data: [
                        [
                            "eid749",
                            "display",
                            0,
                            0,
                            "linear",
                            "${aboutScroll}",
                            'none',
                            'none'
                        ],
                        [
                            "eid750",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${aboutScroll}",
                            'none',
                            'block'
                        ],
                        [
                            "eid751",
                            "display",
                            12011,
                            0,
                            "linear",
                            "${aboutScroll}",
                            'block',
                            'none'
                        ],
                        [
                            "eid683",
                            "display",
                            60000,
                            0,
                            "linear",
                            "${contactScroll}",
                            'none',
                            'none'
                        ],
                        [
                            "eid684",
                            "display",
                            61000,
                            0,
                            "linear",
                            "${contactScroll}",
                            'none',
                            'block'
                        ],
                        [
                            "eid685",
                            "display",
                            72011,
                            0,
                            "linear",
                            "${contactScroll}",
                            'block',
                            'none'
                        ],
                        [
                            "eid790",
                            "display",
                            84000,
                            0,
                            "linear",
                            "${_3dprintScroll}",
                            'none',
                            'none'
                        ],
                        [
                            "eid787",
                            "display",
                            85000,
                            0,
                            "linear",
                            "${_3dprintScroll}",
                            'none',
                            'block'
                        ],
                        [
                            "eid788",
                            "display",
                            96011,
                            0,
                            "linear",
                            "${_3dprintScroll}",
                            'block',
                            'none'
                        ],
                        [
                            "eid716",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${missionScroll}",
                            'none',
                            'none'
                        ],
                        [
                            "eid717",
                            "display",
                            31000,
                            0,
                            "linear",
                            "${missionScroll}",
                            'none',
                            'block'
                        ],
                        [
                            "eid718",
                            "display",
                            42011,
                            0,
                            "linear",
                            "${missionScroll}",
                            'block',
                            'none'
                        ],
                            [ "eid773", "trigger", 1000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${aboutScroll}', [0] ] ],
                            [ "eid777", "trigger", 31000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${missionScroll}', [0] ] ],
                            [ "eid782", "trigger", 61000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${contactScroll}', [0] ] ],
                            [ "eid791", "trigger", 85000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${_3dprintScroll}', [0] ] ]
                    ]
                }
            },
            "regHover": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'regbuttonHover',
                            stroke: [1, 'rgba(0,0,113,1.00)', 'solid'],
                            rect: ['0px', '0px', '586px', '99px', 'auto', 'auto'],
                            fill: ['rgba(33,33,33,0.19)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '588px', '101px']
                        }
                    }
                },
                timeline: {
                    duration: 36000,
                    autoPlay: true,
                    labels: {
                        "regHover_enter": 13000,
                        "regHover_leave": 30000
                    },
                    data: [
                        [
                            "eid609",
                            "display",
                            13000,
                            0,
                            "linear",
                            "${regbuttonHover}",
                            'none',
                            'block'
                        ],
                        [
                            "eid611",
                            "display",
                            18000,
                            0,
                            "linear",
                            "${regbuttonHover}",
                            'block',
                            'none'
                        ],
                        [
                            "eid610",
                            "display",
                            30000,
                            0,
                            "linear",
                            "${regbuttonHover}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "progHover": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'progbuttonHover',
                            stroke: [1, 'rgba(113,0,0,1.00)', 'solid'],
                            rect: ['0px', '0px', '586px', '97px', 'auto', 'auto'],
                            fill: ['rgba(33,33,33,0.19)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '588px', '99px']
                        }
                    }
                },
                timeline: {
                    duration: 37434,
                    autoPlay: true,
                    labels: {
                        "progHover_enter": 14434,
                        "progHover_leave": 31434
                    },
                    data: [
                        [
                            "eid613",
                            "display",
                            14434,
                            0,
                            "linear",
                            "${progbuttonHover}",
                            'none',
                            'block'
                        ],
                        [
                            "eid614",
                            "display",
                            19434,
                            0,
                            "linear",
                            "${progbuttonHover}",
                            'block',
                            'none'
                        ],
                        [
                            "eid615",
                            "display",
                            31434,
                            0,
                            "linear",
                            "${progbuttonHover}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "wearelegion": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/legionmotto.mp3', 'media/legionmotto.ogg'],
                            volume: '0.67',
                            id: 'legionmotto',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 114160.79826212,
                    autoPlay: true,
                    labels: {
                        "legionPlay": 105248
                    },
                    data: [
                            [ "eid648", "trigger", 105248.13126212, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${legionmotto}', [] ] ]
                    ]
                }
            },
            "quotesMod": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            preload: 'auto',
                            type: 'audio',
                            source: ['media/history%20quotes_broker%20mod.mp3'],
                            id: 'history_quotes_broker_mod',
                            rect: ['0px', '0px', '320px', '45px', 'auto', 'auto'],
                            display: 'none',
                            tag: 'audio'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '0px', '0px']
                        }
                    }
                },
                timeline: {
                    duration: 307164.8,
                    autoPlay: true,
                    labels: {
                        "quotesPlay": 180000
                    },
                    data: [
                            [ "eid870", "trigger", 180000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${history_quotes_broker_mod}', [] ] ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("flatEarth_edgeActions.js");
})("flat_earth_interactive");
