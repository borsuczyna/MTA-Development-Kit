import { Function } from "../function";

export const clientSnippets: Function[] = [
    {
        "functionName": "getRadioChannel",
        "description": "The function is used to retrieve the ID of the current radio channel.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getRadioChannelName",
        "description": "This function gets the given radio channel name.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "id",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSFXStatus",
        "description": "In case of these invalid audio files, this function returns false.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "audioContainer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundBPM",
        "description": "This function gets the beats per minute of a specific sound element.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundBufferLength",
        "description": "This function gets the buffer playback length of the specified sound. Works only with streams.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundEffectParameters",
        "description": "This function gets the parameters of a sound effect.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "string",
                "name": "effectName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundEffects",
        "description": "Returns the states of all effects of a sound.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundFFTData",
        "description": "This function gets the fast fourier transform data for an audio stream which is a table of floats representing the current audio frame. This allows things like visualisations.\nA fast fourier transform generates a table of all the frequencies of the current audio frame which starts at the bass end of the spectrum to mids to highs in that order.\nShould you have any problems there is an example resource located on the resources repository:\nVisualiser",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "int",
                "name": "iSamples",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "iBands",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getSoundLength",
        "description": "This function is used to return the playback length of the specified sound element.\nIf the element is a player, this function will use the players voice.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundLevelData",
        "description": "This function gets the left/right level from a sound element.\nIf the element is a player, this function will use the players voice.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundMaxDistance",
        "description": "Gets a custom sound max distance at which the sound stops.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundMetaTags",
        "description": "Used to get the meta tags attached to a sound. These provide information about the sound, for instance the title or the artist.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "format",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "getSoundMinDistance",
        "description": "Gets a custom sound Minimum distance at which the sound stops getting louder.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundPan",
        "description": "This function is used to get the pan level of the specified sound element.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundPosition",
        "description": "This function is used to return the current seek position of the specified sound element.\nIf the element is a player, this function will use the players voice.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundProperties",
        "description": "This function gets the properties of a specific sound.",
        "returnValues": [
            "float",
            "float",
            "float",
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundSpeed",
        "description": "This function is used to return the playback speed of the specified sound element.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundVolume",
        "description": "This function is used to return the volume level of the specified sound element.\nIf the element is a player, this function will use the players voice.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSoundWaveData",
        "description": "This function gets the wave form data for an audio stream which is a table of floats representing the current audio frame as a wave.\nThis allows things like visualisations.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "int",
                "name": "iSamples",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isSoundLooped",
        "description": "This function is used to return the current loop state of the sound element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isSoundPanningEnabled",
        "description": "This function checks whether panning is enabled in a sound element or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isSoundPaused",
        "description": "This function is used to return the current pause state of the specified sound element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "playSFX3D",
        "description": "This function plays a sound in the GTA world from GTA's big sound containers.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "containerName",
                "default": null
            },
            {
                "type": "int",
                "name": "bankId",
                "default": null
            },
            {
                "type": "int",
                "name": "soundId",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "looped",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "playSFX",
        "description": "This function plays a sound from GTA's big sound containers.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "containerName",
                "default": null
            },
            {
                "type": "int",
                "name": "bankId",
                "default": null
            },
            {
                "type": "int",
                "name": "soundId",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "looped",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "playSound3D",
        "description": "Creates a sound element in the GTA world and plays it immediately after creation for the local player. setElementPosition can be used to move the sound element around after it has been created. Remember to use setElementDimension after creating the sound to play it outside of dimension 0.\nAdded the feature of playing WebM files.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "soundPath",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "looped",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "throttled",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "playSound",
        "description": "Creates a sound element and plays it immediately after creation for the local player.\nAdded the feature of playing WebM files.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "soundPath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "looped",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "throttled",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "setRadioChannel",
        "description": "This function sets the heard radio channel, even while not in a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "ID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundEffectEnabled",
        "description": "Used to enable or disable specific sound effects.\nUse a player element to control a players voice with this function.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound/thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "effectName",
                "default": null
            },
            {
                "type": "bool",
                "name": "bEnable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundEffectParameter",
        "description": "This function sets the parameter of a sound effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "string",
                "name": "effectName",
                "default": null
            },
            {
                "type": "string",
                "name": "effectParam",
                "default": null
            },
            {
                "type": "var",
                "name": "paramValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundLooped",
        "description": "This function is used to change the loop state of the sound element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            },
            {
                "type": "bool",
                "name": "loop",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundMaxDistance",
        "description": "Sets a custom sound max distance at which the sound stops.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "int",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundMinDistance",
        "description": "Sets a custom sound Minimum distance at which the sound stops getting louder.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "int",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundPan",
        "description": "This function is used to change the pan level of the specified sound element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            },
            {
                "type": "float",
                "name": "pan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundPanningEnabled",
        "description": "This function toggles the panning of a sound (hearing it closer to the left or right side of the speakers due to the camera position). By default a sound has its panning enabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundPaused",
        "description": "This function is used to either pause or unpause the playback of the specified sound element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            },
            {
                "type": "bool",
                "name": "paused",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundPosition",
        "description": "This function is used to change the seek position of the specified sound element.\nUse a player element to control a players voice with this function.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            },
            {
                "type": "float",
                "name": "pos",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundProperties",
        "description": "This function edits the properties of a specific sound.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "sound",
                "default": null
            },
            {
                "type": "float",
                "name": "fSampleRate",
                "default": null
            },
            {
                "type": "float",
                "name": "fTempo",
                "default": null
            },
            {
                "type": "float",
                "name": "fPitch",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "bReverse",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setSoundSpeed",
        "description": "This function can be used to change the playback speed of the specified sound element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            },
            {
                "type": "float",
                "name": "speed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSoundVolume",
        "description": "This function is used to change the volume level of the specified sound element.\nUse a player element to control a players voice with this function.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound/thePlayer",
                "default": null
            },
            {
                "type": "float",
                "name": "volume",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "stopSound",
        "description": "Stops the sound playback for specified sound element. The sound element is also destroyed.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theSound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "playSoundFrontEnd",
        "description": "This function plays a frontend sound for the specified player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "sound",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createBlip",
        "description": "This function creates a blip element, which is displayed as an icon on the client's radar.",
        "returnValues": [
            "blip"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "icon",
                "default": "0"
            },
            {
                "type": "int",
                "name": "size",
                "default": "2"
            },
            {
                "type": "int",
                "name": "r",
                "default": "255"
            },
            {
                "type": "int",
                "name": "g",
                "default": "0"
            },
            {
                "type": "int",
                "name": "b",
                "default": "0"
            },
            {
                "type": "int",
                "name": "a",
                "default": "255"
            },
            {
                "type": "int",
                "name": "ordering",
                "default": "0"
            },
            {
                "type": "float",
                "name": "visibleDistance",
                "default": "16383.0"
            },
            {
                "type": "element",
                "name": "visibleTo",
                "default": "getRootElement"
            }
        ]
    },
    {
        "functionName": "createBlipAttachedTo",
        "description": "This function creates a blip that is attached to an element. This blip is displayed as an icon on the client's radar and will 'follow' the element that it is attached to around.",
        "returnValues": [
            "blip"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "elementToAttachTo",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "icon",
                "default": "0"
            },
            {
                "type": "int",
                "name": "size",
                "default": "2"
            },
            {
                "type": "int",
                "name": "r",
                "default": "255"
            },
            {
                "type": "int",
                "name": "g",
                "default": "0"
            },
            {
                "type": "int",
                "name": "b",
                "default": "0"
            },
            {
                "type": "int",
                "name": "a",
                "default": "255"
            },
            {
                "type": "int",
                "name": "ordering",
                "default": "0"
            },
            {
                "type": "float",
                "name": "visibleDistance",
                "default": "16383.0"
            },
            {
                "type": "element",
                "name": "visibleTo",
                "default": "getRootElement"
            }
        ]
    },
    {
        "functionName": "getBlipColor",
        "description": "This function will tell you what color a blip is. This color is only applicable to the default blip icon (,    or ). All other icons will ignore this.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBlipIcon",
        "description": "This function returns the icon a blip currently has.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBlipOrdering",
        "description": "This function gets the Z ordering value of a blip. The Z ordering determines if a blip appears on top of or below other blips. Blips with a higher Z ordering value appear on top of blips with a lower value. The default value for all blips is 0.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBlipSize",
        "description": "This function gets the size of a blip..",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBlipVisibleDistance",
        "description": "This function will tell you what visible distance a blip has.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBlipColor",
        "description": "This function will let you change the color of a blip. This color is only applicable to the default blip icon (,    or ). All other icons will ignore this.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            },
            {
                "type": "int",
                "name": "red",
                "default": null
            },
            {
                "type": "int",
                "name": "green",
                "default": null
            },
            {
                "type": "int",
                "name": "blue",
                "default": null
            },
            {
                "type": "int",
                "name": "alpha",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBlipIcon",
        "description": "This function sets the icon for an existing blip element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            },
            {
                "type": "int",
                "name": "icon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBlipOrdering",
        "description": "This function sets the Z ordering of a blip. It allows you to make a blip appear on top of or below other blips.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            },
            {
                "type": "int",
                "name": "ordering",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBlipSize",
        "description": "This function sets the size of a blip's icon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            },
            {
                "type": "int",
                "name": "iconSize",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBlipVisibleDistance",
        "description": "This function will set the visible distance of a blip.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "blip",
                "name": "theBlip",
                "default": null
            },
            {
                "type": "float",
                "name": "theDistance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "canBrowserNavigateBack",
        "description": "This function checks if the browser can return to the previous page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "canBrowserNavigateForward",
        "description": "This function checks if the browser can go to the next page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createBrowser",
        "description": "This function creates a new web browser element.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "height",
                "default": null
            },
            {
                "type": "bool",
                "name": "isLocal",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "transparent",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "executeBrowserJavascript",
        "description": "This function executes a Javascript string to the specified browser. Works only with local browsers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "jsCode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "focusBrowser",
        "description": "This function will attempt to focus the browser or unfocus all browsers. The browser that is focused will retrieve keyboard input.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBrowserProperty",
        "description": "This function gets a given property of a specified browser.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "theBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBrowserSettings",
        "description": "This function returns a table containing the browser settings.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getBrowserSource",
        "description": "This function can be used to retrieve the source code of a website (asynchronously). The size of the source code is limited to 2 MiB (remaining bytes are cut).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBrowserTitle",
        "description": "This function returns the title of the passed browser.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBrowserURL",
        "description": "This function returns the URL of the specified browser.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "injectBrowserMouseDown",
        "description": "This function injects a mouse click (state: down).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "mouseButton",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "doubleClick",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "injectBrowserMouseMove",
        "description": "This function injects a mouse movement.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "int",
                "name": "posX",
                "default": null
            },
            {
                "type": "int",
                "name": "posY",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "injectBrowserMouseUp",
        "description": "This function injects a mouse click (state: up).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "mouseButton",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "injectBrowserMouseWheel",
        "description": "This function injects mouse wheel events.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "int",
                "name": "verticalScroll",
                "default": null
            },
            {
                "type": "int",
                "name": "horizontalScroll",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isBrowserDomainBlocked",
        "description": "This function checks if the specified URL is blocked from being loaded.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "address",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "isURL",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "isBrowserFocused",
        "description": "This function checks if a browser is focused.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isBrowserLoading",
        "description": "This function checks if a browser is currently loading a website.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isBrowserRenderingPaused",
        "description": "This function gets the rendering state of a browser element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "loadBrowserURL",
        "description": "This function loads the specified URL.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "url",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "postData",
                "default": "\"\""
            },
            {
                "type": "bool",
                "name": "urlEncoded",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "navigateBrowserBack",
        "description": "Returns the browser to the previous page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "navigateBrowserForward",
        "description": "This function takes the browser to the next page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "reloadBrowserPage",
        "description": "This function reloads the current browser's page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "ignoreCache",
                "default": null
            }
        ]
    },
    {
        "functionName": "requestBrowserDomains",
        "description": "This function opens a request window in order to accept the requested remote URLs.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "table",
                "name": "pages",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "parseAsURL",
                "default": "false"
            },
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "resizeBrowser",
        "description": "Allows resizing of CEF browsers at runtime.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBrowserAjaxHandler",
        "description": "This function provides a requestable ajax resource for Lua/Javascript communication for a browser.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "url",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "function",
                "name": "handler",
                "default": null
            }
        ]
    },
    {
        "functionName": "setBrowserProperty",
        "description": "This function sets a given property of a specified browser.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "theBrowser",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            },
            {
                "type": "string",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBrowserRenderingPaused",
        "description": "This function sets the rendering state of a browser.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "bool",
                "name": "paused",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBrowserVolume",
        "description": "This function sets either a specific browser's volume, or the overall volume for browsers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "float",
                "name": "volume",
                "default": null
            }
        ]
    },
    {
        "functionName": "toggleBrowserDevTools",
        "description": "This function toggles the visibility of the developer tools pane.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "browser",
                "name": "webBrowser",
                "default": null
            },
            {
                "type": "bool",
                "name": "visible",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isBrowserGPUEnabled",
        "description": "Note: this is a global setting, not specific to any browser instance and can only be changed by the client.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "createBuilding",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "building"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelId",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rx",
                "default": null
            },
            {
                "type": "float",
                "name": "ry",
                "default": null
            },
            {
                "type": "float",
                "name": "rz",
                "default": null
            },
            {
                "type": "int",
                "name": "interior",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getCamera",
        "description": "This function returns an element that corresponds to the game camera",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraClip",
        "description": "This function checks if the camera will \"collide\" with any objects or vehicles in its way. Read more about this here.",
        "returnValues": [
            "bool",
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraFieldOfView",
        "description": "This function returns the field of view of the dynamic camera as set by setCameraFieldOfView.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "cameraMode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraGoggleEffect",
        "description": "This function returns what goggle effect is currently affecting the camera.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraDrunkLevel",
        "description": "Returns an integer representing the camera drunk level, from 0 (no drunk effect) to 255 (maximum drunk effect). By default, the camera has no drunk effect. Drunk effect is a wavy motion of the camera depicting the player being drunk. This function used to be called getCameraShakeLevel which has since been deprecated.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraViewMode",
        "description": "This function allows you to get the active camera view modes. This indicates at what distance the camera will follow the player or vehicle.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setCameraClip",
        "description": "This function sets if the camera will \"collide\" with any objects or vehicles in its way. This means that if object clip is enabled an object is in the way of where the camera actually wants to be, the camera will try to be in front of it. This function can disable that.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "objects",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "vehicles",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "setCameraFieldOfView",
        "description": "This function sets the field of view of the dynamic camera - this is the field of view of the non-fixed camera - yes, the camera that the user can control whilst on foot or in a vehicle. The higher the field of view angle, the more you will be able to see to your sides.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "cameraMode",
                "default": null
            },
            {
                "type": "float",
                "name": "fieldOfView",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCameraGoggleEffect",
        "description": "This function allows you to set the camera's current goggle effect. This means you can activate nightvision or infrared effects by script",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "goggleEffect",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "noiseEnabled",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "setCameraDrunkLevel",
        "description": "Drunk effect is a wavy motion of the camera depicting the player being drunk. This function used to be called setCameraShakeLevel which has since been deprecated.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "shakeLevel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCameraViewMode",
        "description": "This function allows you to set the camera view modes. This indicates at what distance the camera will follow the player or vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "vehicleCameraMode",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "pedCameraMode",
                "default": null
            }
        ]
    },
    {
        "functionName": "shakeCamera",
        "description": "This function allows you to trigger camera shake effect (just like explosion does).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "force",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ]
    },
    {
        "functionName": "resetShakeCamera",
        "description": "This function cancels the chaking effect caused by shakeCamera",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "fadeCamera",
        "description": "This function will fade a player's camera to a color or back to normal over a specified time period. This will also affect the sound volume for the player (50% faded = 50% volume, full fade = no sound). For clientside scripts you can perform 2 fade ins or fade outs in a row, but for serverside scripts you must use one then the other.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "bool",
                "name": "fadeIn",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "timeToFade",
                "default": "1.0"
            },
            {
                "type": "int",
                "name": "red",
                "default": "0"
            },
            {
                "type": "int",
                "name": "green",
                "default": "0"
            },
            {
                "type": "int",
                "name": "blue",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getCameraInterior",
        "description": "Returns the interior of the local camera (independent of the interior of the local player).",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraMatrix",
        "description": "This function gets the position of the camera and the position of the point it is facing.",
        "returnValues": [
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getCameraTarget",
        "description": "This function returns an element that corresponds to the current target of the specified player's camera (i.e. what it is following).",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCameraInterior",
        "description": "Sets the interior of the local camera. Only the interior of the camera is changed, the local player stays in the interior he was in.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "interior",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCameraMatrix",
        "description": "This function sets the camera's position and direction. The first three arguments are the point at which the camera lies, the last three are the point the camera faces (or the point it \"looks at\").",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "float",
                "name": "positionX",
                "default": null
            },
            {
                "type": "float",
                "name": "positionY",
                "default": null
            },
            {
                "type": "float",
                "name": "positionZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "lookAtX",
                "default": null
            },
            {
                "type": "float",
                "name": "lookAtY",
                "default": null
            },
            {
                "type": "float",
                "name": "lookAtZ",
                "default": null
            },
            {
                "type": "float",
                "name": "roll",
                "default": "0"
            },
            {
                "type": "float",
                "name": "fov",
                "default": "70"
            }
        ]
    },
    {
        "functionName": "setCameraTarget",
        "description": "This function allows you to set a player's camera to follow other elements instead. Currently supported element type is:",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "element",
                "name": "target",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "addPedClothes",
        "description": "This function is used to set the current clothes on a ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesTexture",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesModel",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBodyPartName",
        "description": "This function is used to get the name of a body part on a player.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "bodyPartID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getClothesByTypeIndex",
        "description": "This function is used to get the texture and model of clothes by the clothes type and index.\n(Scans through the list of clothes for the specific type).",
        "returnValues": [
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getClothesTypeName",
        "description": "This function is used to get the name of a certain clothes type.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedClothes",
        "description": "This function is used to get the current clothes texture and model of a certain type on a ped.",
        "returnValues": [
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTypeIndexFromClothes",
        "description": "This function is used to get the clothes type and index from the texture and model.\n(Scans through the list of clothes for the specific type).",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "clothesTexture",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesModel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removePedClothes",
        "description": "This function is used to remove the current clothes of a certain type on a ped. It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "clothesTexture",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesModel",
                "default": null
            }
        ]
    },
    {
        "functionName": "addColPolygonPoint",
        "description": "This function is used to add a new point to an existing colshape polygon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "index",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "createColCircle",
        "description": "This function creates a collision circle. This is a shape that has a position and a radius and infinite height that you can use to detect a player's presence. Events will be triggered when a player enters or leaves it.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createColCuboid",
        "description": "This function creates a collision cuboid. This is a shape that has a position, width, depth and height. See Wikipedia for a definition of a cuboid. The XYZ of the col starts at the southwest bottom corner of the shape.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            },
            {
                "type": "float",
                "name": "fZ",
                "default": null
            },
            {
                "type": "float",
                "name": "fWidth",
                "default": null
            },
            {
                "type": "float",
                "name": "fDepth",
                "default": null
            },
            {
                "type": "float",
                "name": "fHeight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createColPolygon",
        "description": "This function creates a collision polygon. See Wikipedia for a definition of a polygon. The first set of X Y of this shape is not part of the colshape bounds, so can set anywhere in the game world, however for performance, place it as close to the centre of the polygon as you can. It should be noted this shape is 2D. There should be at least 3 bound points set.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fCenterX",
                "default": null
            },
            {
                "type": "float",
                "name": "fCenterY",
                "default": null
            },
            {
                "type": "float",
                "name": "fX1",
                "default": null
            },
            {
                "type": "float",
                "name": "fY1",
                "default": null
            },
            {
                "type": "float",
                "name": "fX2",
                "default": null
            },
            {
                "type": "float",
                "name": "fY2",
                "default": null
            },
            {
                "type": "float",
                "name": "fX3",
                "default": null
            },
            {
                "type": "float",
                "name": "fY3",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createColRectangle",
        "description": "This function creates a collision rectangle. This is a shape that has a position and a width and a depth. See Rectangle for a definition of a rectangle. XY marks on the south west corner of the colshape.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            },
            {
                "type": "float",
                "name": "fWidth",
                "default": null
            },
            {
                "type": "float",
                "name": "fHeight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createColSphere",
        "description": "This function creates a collision sphere. This is a shape that has a position and a radius. See Wikipedia for a definition of a sphere.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            },
            {
                "type": "float",
                "name": "fZ",
                "default": null
            },
            {
                "type": "float",
                "name": "fRadius",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createColTube",
        "description": "This function creates a collision tube. This is a shape that has a position and a 2D (X/Y) radius and a height. See Cylinder for a definition of a tube. A tube is similar to a colcircle, except that it has a limited height, this means you can limit the distance above the position defined by (fX, fY, fZ) that the collision is detected.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            },
            {
                "type": "float",
                "name": "fZ",
                "default": null
            },
            {
                "type": "float",
                "name": "fRadius",
                "default": null
            },
            {
                "type": "float",
                "name": "fHeight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getColPolygonHeight",
        "description": "This function is used to get the height of an existing colshape polygon.\nBy default, a colshape polygon is infinitely tall.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getColPolygonPoints",
        "description": "This function is used to get all bound points in a colshape polygon.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getColPolygonPointPosition",
        "description": "This function is used to get the position of a bound point in a colshape polygon.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getColShapeType",
        "description": "This function is used to retrieve the type of an colshape.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getColShapeRadius",
        "description": "This function is used to get the radius of a colshape. Valid types are circle, sphere and tube.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getColShapeSize",
        "description": "This function is used to get the size of a colshape. Valid types are rectangle, cuboid and tube.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementColShape",
        "description": "Some elements have an associated colshape, for example Marker and Pickup. This function is used to get the associated colshape.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementsWithinColShape",
        "description": "This function is used to retrieve a list of all elements in a colshape, of the specified type.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "theShape",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "elemType",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "isElementWithinColShape",
        "description": "This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "colshape",
                "name": "theShape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isInsideColShape",
        "description": "This function checks if a 3D position is inside a colshape or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "theShape",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeColPolygonPoint",
        "description": "This function is used to remove a point from an existing colshape polygon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setColPolygonHeight",
        "description": "This function is used to change the height of an existing colshape polygon.\nBy default, a colshape polygon is infinitely tall.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "float",
                "name": "floor",
                "default": null
            },
            {
                "type": "float",
                "name": "ceil",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setColPolygonPointPosition",
        "description": "This function is used to set the position of a bound point in a colshape polygon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            },
            {
                "type": "float",
                "name": "fX",
                "default": null
            },
            {
                "type": "float",
                "name": "fY",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setColShapeRadius",
        "description": "This function is used to set the radius of a colshape. Valid types are circle, sphere and tube.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setColShapeSize",
        "description": "This function is used to set the size of a colshape. Valid types are rectangle, cuboid and tube.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "shape",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "depth",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getCursorAlpha",
        "description": "This function is used to get the client's cursor alpha (transparency).",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getCursorPosition",
        "description": "This function gets the current position of the mouse cursor. Note that for performance reasons, the world position returned is always 300 units away. If you want the exact world point (similar to onClientClick), use processLineOfSight between the camera position and the worldX/Y/Z result of this function. (See example below)",
        "returnValues": [
            "float",
            "float",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setCursorAlpha",
        "description": "This function is used to change alpha (transparency) from the client's cursor.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "alpha",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCursorPosition",
        "description": "This function sets the current position of the mouse cursor.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "cursorX",
                "default": null
            },
            {
                "type": "int",
                "name": "cursorY",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isCursorShowing",
        "description": "This function determines the state of a player's cursor.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "playerElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "showCursor",
        "description": "This function is used to show or hide a player's cursor.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "bool",
                "name": "show",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "toggleControls",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "dxConvertPixels",
        "description": "This function converts pixels from one format to another.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pixels",
                "default": null
            },
            {
                "type": "string",
                "name": "newFormat",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "quality",
                "default": "80"
            }
        ]
    },
    {
        "functionName": "dxCreateFont",
        "description": "This function creates a DX font element that can be used in dxDrawText. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filepath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "size",
                "default": "9"
            },
            {
                "type": "bool",
                "name": "bold",
                "default": "false"
            },
            {
                "type": "string",
                "name": "quality",
                "default": "\"proof\""
            }
        ]
    },
    {
        "functionName": "dxCreateRenderTarget",
        "description": "This function creates a render target element, which is a special type of texture that can be drawn on with the dx functions. Successful render target creation is not guaranteed, and may fail due to hardware or memory limitations.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "withAlpha",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxCreateScreenSource",
        "description": "This function creates a screen source, which is a special type of texture that contains the screen as rendered by GTA",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxCreateShader",
        "description": "This function creates a shader element that can be used in the dxDraw functions. Successful shader creation is not guaranteed unless the Effect File contains a fallback technique which will work on every existing PC.",
        "returnValues": [
            "element",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filepath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "priority",
                "default": "0"
            },
            {
                "type": "float",
                "name": "maxDistance",
                "default": "0"
            },
            {
                "type": "bool",
                "name": "layered",
                "default": "false"
            },
            {
                "type": "string",
                "name": "elementTypes",
                "default": "\"world,ped,vehicle,object,other,all\""
            }
        ]
    },
    {
        "functionName": "dxCreateTexture",
        "description": "This function creates a texture element that can be used in the dxDraw functions.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pixels",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "textureFormat",
                "default": "\"argb\""
            },
            {
                "type": "bool",
                "name": "mipmaps",
                "default": "true"
            },
            {
                "type": "string",
                "name": "textureEdge",
                "default": "\"wrap\""
            }
        ]
    },
    {
        "functionName": "dxDrawCircle",
        "description": "This function draws a circle shape on the screen - rendered for one frame.    This should be used in conjunction with onClientRender in order to be display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "startAngle",
                "default": "0.0"
            },
            {
                "type": "float",
                "name": "stopAngle",
                "default": "360.0"
            },
            {
                "type": "int",
                "name": "theColor",
                "default": "white"
            },
            {
                "type": "int",
                "name": "theCenterColor",
                "default": "theColor"
            },
            {
                "type": "int",
                "name": "segments",
                "default": "32"
            },
            {
                "type": "int",
                "name": "ratio",
                "default": "1"
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxDrawImage",
        "description": "Draws an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).\nImage files should ideally have dimensions that are a power of two, to prevent possible blurring.\nPower of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "mixed",
                "name": "image",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rotation",
                "default": "0"
            },
            {
                "type": "float",
                "name": "rotationCenterOffsetX",
                "default": "0"
            },
            {
                "type": "float",
                "name": "rotationCenterOffsetY",
                "default": "0"
            },
            {
                "type": "int",
                "name": "color",
                "default": "tocolor"
            }
        ]
    },
    {
        "functionName": "dxDrawImageSection",
        "description": "Differing from dxDrawImage, this function only draws a part of an image on the screen for a single frame. In order for the image to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "float",
                "name": "u",
                "default": null
            },
            {
                "type": "float",
                "name": "v",
                "default": null
            },
            {
                "type": "float",
                "name": "usize",
                "default": null
            },
            {
                "type": "float",
                "name": "vsize",
                "default": null
            },
            {
                "type": "mixed",
                "name": "image",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rotation",
                "default": "0"
            },
            {
                "type": "float",
                "name": "rotationCenterOffsetX",
                "default": "0"
            },
            {
                "type": "float",
                "name": "rotationCenterOffsetY",
                "default": "0"
            },
            {
                "type": "int",
                "name": "color",
                "default": "white"
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxDrawLine",
        "description": "This function draws a 2D line across the screen - rendered for one frame.    This should be used in conjunction with onClientRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "startX",
                "default": null
            },
            {
                "type": "int",
                "name": "startY",
                "default": null
            },
            {
                "type": "int",
                "name": "endX",
                "default": null
            },
            {
                "type": "int",
                "name": "endY",
                "default": null
            },
            {
                "type": "int",
                "name": "color",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "width",
                "default": "1.0"
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxDrawLine3D",
        "description": "This function draws a 3D line between two points in the 3D world - rendered for one frame.    This should be used in conjunction with onClientRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "color",
                "default": "0xFFFFFFFF"
            },
            {
                "type": "float",
                "name": "width",
                "default": "1.0"
            },
            {
                "type": "string",
                "name": "stage",
                "default": "\"postfx\""
            }
        ]
    },
    {
        "functionName": "dxDrawMaterialLine3D",
        "description": "This function draws a textured 3D line between two points in the 3D world - rendered for one frame.    This should be used in conjunction with onClientPreRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "flipUV",
                "default": "false"
            },
            {
                "type": "element",
                "name": "material",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "color",
                "default": "white"
            },
            {
                "type": "string",
                "name": "stage",
                "default": "\"postfx\""
            },
            {
                "type": "float",
                "name": "faceTowardX",
                "default": null
            },
            {
                "type": "float",
                "name": "faceTowardY",
                "default": null
            },
            {
                "type": "float",
                "name": "faceTowardZ",
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawMaterialPrimitive",
        "description": "This function draws a 2D primitive shape with material applied to it across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.\nIf image file is used, it should ideally have dimensions that are a power of two, to prevent possible blurring.\nPower of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "primitiveType",
                "name": "pType",
                "default": null
            },
            {
                "type": "mixed",
                "name": "material",
                "default": null
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": null
            },
            {
                "type": "table",
                "name": "vertex1",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "vertex2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawMaterialPrimitive3D",
        "description": "This function draws a 3D primitive shape with material applied to it in the 3D world - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.\nIf image file is used, it should ideally have dimensions that are a power of two, to prevent possible blurring.\nPower of two: 2px, 4px, 8px, 16px, 32px, 64px, 128px, 256px, 512px, 1024px...",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "primitiveType",
                "name": "pType",
                "default": null
            },
            {
                "type": "mixed",
                "name": "material",
                "default": null
            },
            {
                "type": "string",
                "name": "stage",
                "default": null
            },
            {
                "type": "table",
                "name": "vertex1",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "vertex2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawMaterialSectionLine3D",
        "description": "This function draws a textured 3D line between two points in the 3D world - rendered for one frame.    This should be used in conjunction with onClientPreRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            },
            {
                "type": "float",
                "name": "u",
                "default": null
            },
            {
                "type": "float",
                "name": "v",
                "default": null
            },
            {
                "type": "float",
                "name": "usize",
                "default": null
            },
            {
                "type": "float",
                "name": "vsize",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "flipUV",
                "default": "false"
            },
            {
                "type": "element",
                "name": "material",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "color",
                "default": "white"
            },
            {
                "type": "bool",
                "name": "stage",
                "default": "\"postfx\""
            },
            {
                "type": "float",
                "name": "faceTowardX",
                "default": null
            },
            {
                "type": "float",
                "name": "faceTowardY",
                "default": null
            },
            {
                "type": "float",
                "name": "faceTowardZ",
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawModel3D",
        "description": "This function draws a 3D model - rendered for one frame. Drawn models are indistinguishable from this one created by createObject function. This should be used in conjunction with onClientRender or onClientPreRender in order to display continuously. Note that a model must be loaded at the time this function is called. A model can be loaded and unloaded with the help of engineStreamingRequestModel and engineStreamingReleaseModel functions.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelId",
                "default": null
            },
            {
                "type": "float",
                "name": "positionX",
                "default": null
            },
            {
                "type": "float",
                "name": "positionY",
                "default": null
            },
            {
                "type": "float",
                "name": "positionZ",
                "default": null
            },
            {
                "type": "float",
                "name": "rotationX",
                "default": null
            },
            {
                "type": "float",
                "name": "rotationY",
                "default": null
            },
            {
                "type": "float",
                "name": "rotationZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "scaleX",
                "default": null
            },
            {
                "type": "float",
                "name": "scaleY",
                "default": null
            },
            {
                "type": "float",
                "name": "scaleZ",
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawPrimitive",
        "description": "This function draws a 2D primitive shape across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pType",
                "default": null
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": null
            },
            {
                "type": "table",
                "name": "vertex1",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "vertex2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawPrimitive3D",
        "description": "This function draws a 3D primitive in the 3D world - rendered for one frame.    This should be used in conjunction with onClientRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "primitiveType",
                "default": null
            },
            {
                "type": "string",
                "name": "stage",
                "default": null
            },
            {
                "type": "table",
                "name": "vertex1",
                "default": null
            },
            {
                "type": "table",
                "name": "vertex2",
                "default": null
            },
            {
                "type": "table",
                "name": "vertex3",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "vertex4",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "dxDrawRectangle",
        "description": "This function draws a 2D rectangle across the screen - rendered for one frame. This should be used in conjunction with onClientRender in order to display continuously.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "color",
                "default": "white"
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "subPixelPositioning",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxDrawText",
        "description": "Draws a string of text on the screen for one frame. In order for the text to stay visible continuously, you need to call this function with the same parameters on each frame update (see onClientRender).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "float",
                "name": "leftX",
                "default": null
            },
            {
                "type": "float",
                "name": "topY",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rightX",
                "default": "leftX"
            },
            {
                "type": "float",
                "name": "bottomY",
                "default": "topY"
            },
            {
                "type": "int",
                "name": "color",
                "default": "white"
            },
            {
                "type": "float",
                "name": "scaleXY",
                "default": "1.0"
            },
            {
                "type": "float",
                "name": "scaleY",
                "default": "1.0"
            },
            {
                "type": "mixed",
                "name": "font",
                "default": "\"default\""
            },
            {
                "type": "string",
                "name": "alignX",
                "default": "\"left\""
            },
            {
                "type": "string",
                "name": "alignY",
                "default": "\"top\""
            },
            {
                "type": "bool",
                "name": "clip",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "wordBreak",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "postGUI",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "colorCoded",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "subPixelPositioning",
                "default": "false"
            },
            {
                "type": "float",
                "name": "fRotation",
                "default": "0.0"
            },
            {
                "type": "float",
                "name": "fRotationCenterX",
                "default": "0.0"
            },
            {
                "type": "float",
                "name": "fRotationCenterY",
                "default": "0.0"
            },
            {
                "type": "float",
                "name": "fLineSpacing",
                "default": "0.0"
            }
        ]
    },
    {
        "functionName": "dxDrawWiredSphere",
        "description": "This function drawn same sphere as /showcol. It provides 4 levels of iterations which mean density of sphere. Adjust radius to iterations to get optimum density of mesh. About 50 spheres with iterations = 4 can cause fps drop.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            },
            {
                "type": "int",
                "name": "theColor",
                "default": null
            },
            {
                "type": "float",
                "name": "fLineWidth",
                "default": null
            },
            {
                "type": "uint",
                "name": "iterations",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetBlendMode",
        "description": "This function returns the current blend mode for the dxDraw functions. The blend mode is set using dxSetBlendMode",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetFontHeight",
        "description": "This function retrieves the theoretical height of a certain piece of text, if it were to be drawn using dxDrawText.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "float",
                "name": "scale",
                "default": "1"
            },
            {
                "type": "mixed",
                "name": "font",
                "default": "\"default\""
            }
        ]
    },
    {
        "functionName": "dxGetMaterialSize",
        "description": "This gets the dimensions of the supplied material element.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "material",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetPixelColor",
        "description": "This function gets the color of a single pixel from pixels contained in a string. It only works with 'plain' format pixels.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pixels",
                "default": null
            },
            {
                "type": "int",
                "name": "x",
                "default": null
            },
            {
                "type": "int",
                "name": "y",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetPixelsSize",
        "description": "This function gets the dimensions of pixels contained in a string. It works with all pixel formats.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pixels",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetPixelsFormat",
        "description": "This function returns the format of pixels contained in a string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pixels",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetStatus",
        "description": "This function gets information about various internal datum.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "dxGetTextSize",
        "description": "This function retrieves the theoretical width and height (in pixels) of a certain piece of text, if it were to be drawn using dxDrawText.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "width",
                "default": "0"
            },
            {
                "type": "float",
                "name": "scaleXY",
                "default": "1.0"
            },
            {
                "type": "float",
                "name": "scaleY",
                "default": "1.0"
            },
            {
                "type": "mixed",
                "name": "font",
                "default": "\"default\""
            },
            {
                "type": "bool",
                "name": "wordBreak",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "colorCoded",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxGetTextWidth",
        "description": "This function retrieves the theoretical width (in pixels) of a certain piece of text, if it were to be drawn using dxDrawText.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "scale",
                "default": "1"
            },
            {
                "type": "mixed",
                "name": "font",
                "default": "\"default\""
            },
            {
                "type": "bool",
                "name": "bColorCoded",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxGetTexturePixels",
        "description": "This function fetches the pixels from a texture element. It can be used with a standard texture, render target or screen source.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "surfaceIndex",
                "default": "0"
            },
            {
                "type": "element",
                "name": "texture",
                "default": null
            },
            {
                "type": "string",
                "name": "pixelsFormat",
                "default": "\"plain\""
            },
            {
                "type": "string",
                "name": "textureFormat",
                "default": "\"unknown\""
            },
            {
                "type": "bool",
                "name": "mipmaps",
                "default": "true"
            },
            {
                "type": "int",
                "name": "x",
                "default": "0"
            },
            {
                "type": "int",
                "name": "y",
                "default": "0"
            },
            {
                "type": "int",
                "name": "width",
                "default": "0"
            },
            {
                "type": "int",
                "name": "height",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "dxIsAspectRatioAdjustmentEnabled",
        "description": "This function gets the current aspect ratio set by dxSetAspectRatioAdjustmentEnabled.",
        "returnValues": [
            "bool",
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "dxSetAspectRatioAdjustmentEnabled",
        "description": "This function allows for the positioning of dxDraw calls to be automatically adjusted according to the client's aspect ratio setting.    This lasts for a single execution of an event handler for one of the following events: onClientRender, onClientPreRender and onClientHUDRender. So the function has to be called every frame, just like dxDraws.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "bEnabled",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "sourceRatio",
                "default": "4/3"
            }
        ]
    },
    {
        "functionName": "dxSetBlendMode",
        "description": "This function sets the current blend mode for the dxDraw functions. Changing the blend mode can increase the quality when drawing text or certain other images to a render target. As a general guide use modulate_add when drawing text to a render target, and add when drawing the render target to the screen. Don't forget to restore the default blend at the end - See the example below.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "blendMode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxSetPixelColor",
        "description": "This function sets the color of a single pixel for pixels contained in a string. It only works with 'plain' format pixels.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pixels",
                "default": null
            },
            {
                "type": "int",
                "name": "x",
                "default": null
            },
            {
                "type": "int",
                "name": "y",
                "default": null
            },
            {
                "type": "int",
                "name": "r",
                "default": null
            },
            {
                "type": "int",
                "name": "g",
                "default": null
            },
            {
                "type": "int",
                "name": "b",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "a",
                "default": "255"
            }
        ]
    },
    {
        "functionName": "dxSetRenderTarget",
        "description": "This function changes the drawing destination for the dx functions. It can be used to select a previously created render target, or if called with no arguments, restore drawing directly to the screen.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "element",
                "name": "renderTarget",
                "default": null
            },
            {
                "type": "bool",
                "name": "clear",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxSetShaderValue",
        "description": "This sets a named parameter for a shader element",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theShader",
                "default": null
            },
            {
                "type": "string",
                "name": "parameterName",
                "default": null
            },
            {
                "type": "mixed",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxSetShaderTessellation",
        "description": "This function sets the amount of geometric sub-division to use when drawing a shader element with dxDrawImage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theShader",
                "default": null
            },
            {
                "type": "int",
                "name": "tessellationX",
                "default": null
            },
            {
                "type": "int",
                "name": "tessellationY",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxSetShaderTransform",
        "description": "This function applies a 3D transformation to a shader element when it is drawn with dxDrawImage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theShader",
                "default": null
            },
            {
                "type": "float",
                "name": "rotationX",
                "default": null
            },
            {
                "type": "float",
                "name": "rotationY",
                "default": null
            },
            {
                "type": "float",
                "name": "rotationZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rotationCenterOffsetX",
                "default": "0"
            },
            {
                "type": "float",
                "name": "rotationCenterOffsetY",
                "default": "0"
            },
            {
                "type": "float",
                "name": "rotationCenterOffsetZ",
                "default": "0"
            },
            {
                "type": "bool",
                "name": "bRotationCenterOffsetOriginIsScreen",
                "default": "false"
            },
            {
                "type": "float",
                "name": "perspectiveCenterOffsetX",
                "default": "0"
            },
            {
                "type": "float",
                "name": "perspectiveCenterOffsetY",
                "default": "0"
            },
            {
                "type": "bool",
                "name": "bPerspectiveCenterOffsetOriginIsScreen",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dxSetTestMode",
        "description": "This function is used for testing scripts written using guiCreateFont, dxCreateFont, dxCreateShader and dxCreateRenderTarget.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "testMode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dxSetTextureEdge",
        "description": "This functions allows you to change the edge handling after creating the texture.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "texture",
                "name": "theTexture",
                "default": null
            },
            {
                "type": "string",
                "name": "textureEdge",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "border-color",
                "default": null
            }
        ]
    },
    {
        "functionName": "dxSetTexturePixels",
        "description": "This function sets the pixels of a texture element. It can be used with a standard texture, render target or screen source. Only 'plain' format pixels please.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "surfaceIndex",
                "default": "0"
            },
            {
                "type": "element",
                "name": "texture",
                "default": null
            },
            {
                "type": "string",
                "name": "pixels",
                "default": null
            },
            {
                "type": "int",
                "name": "x",
                "default": "0"
            },
            {
                "type": "int",
                "name": "y",
                "default": "0"
            },
            {
                "type": "int",
                "name": "width",
                "default": "0"
            },
            {
                "type": "int",
                "name": "height",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "dxUpdateScreenSource",
        "description": "This function updates the contents of a screen source texture with the screen output from GTA",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "screenSource",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "resampleNow",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "isDiscordRichPresenceConnected",
        "description": "The function checks if the client has Discord Rich Presence enabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetDiscordRichPresenceData",
        "description": "The function resets the Discord Rich Presence configuration to default.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordApplicationID",
        "description": "The function can assign your own application to use in Rich Presence.\nYou can create an application here",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "applicationID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceAsset",
        "description": "Using this function you can set the large image asset of the application. The maximum size of assets is 1024x1024, the minimum is 512x512.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "assetImage",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceButton",
        "description": "The function sets a custom button through which we can access the website on Discord.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "index",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "string",
                "name": "url",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceDetails",
        "description": "This function sets the details text of Discord Rich Presence.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "details",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceSmallAsset",
        "description": "Using this function, you can set the small image asset of the application. The maximum size of assets is 1024x1024, the minimum 512x512.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "assetImage",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceState",
        "description": "This function sets the status of the Discord Rich Presence application.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresencePartySize",
        "description": "This function sets the party size of Discord Rich Presence.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "size",
                "default": null
            },
            {
                "type": "int",
                "name": "max",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceStartTime",
        "description": "This function sets the elapsed time of Discord Rich Presence.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "seconds",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDiscordRichPresenceEndTime",
        "description": "This function sets the remaining time of Discord Rich Presence.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "seconds",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getDiscordRichPresenceUserID",
        "description": "The function returns the client Discord UserID.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "createEffect",
        "description": "Creates an effect on specified position.",
        "returnValues": [
            "effect"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rX",
                "default": null
            },
            {
                "type": "float",
                "name": "rY",
                "default": null
            },
            {
                "type": "float",
                "name": "rZ",
                "default": null
            },
            {
                "type": "float",
                "name": "drawDistance",
                "default": "0"
            },
            {
                "type": "bool",
                "name": "soundEnable",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "fxAddBlood",
        "description": "Creates a blood splatter particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "count",
                "default": "1"
            },
            {
                "type": "float",
                "name": "brightness",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "fxAddBulletImpact",
        "description": "Creates a bullet impact particle effect, consisting of a small smoke cloud and a number of sparks.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "smokeSize",
                "default": "1"
            },
            {
                "type": "int",
                "name": "sparkCount",
                "default": "1"
            },
            {
                "type": "float",
                "name": "smokeIntensity",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "fxAddBulletSplash",
        "description": "This function creates a bullet splash particle effect, normally created when shooting into water.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddDebris",
        "description": "Creates a debris particle effect (e.g. bits that fly off a car when ramming a wall).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "colorR",
                "default": "255"
            },
            {
                "type": "int",
                "name": "colorG",
                "default": "0"
            },
            {
                "type": "int",
                "name": "colorB",
                "default": "0"
            },
            {
                "type": "int",
                "name": "colorA",
                "default": "255"
            },
            {
                "type": "float",
                "name": "scale",
                "default": "1.0"
            },
            {
                "type": "int",
                "name": "count",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "fxAddFootSplash",
        "description": "This function creates a foot splash particle effect, normally created when walking into water.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddGlass",
        "description": "This function creates a glass particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "colorR",
                "default": "255"
            },
            {
                "type": "int",
                "name": "colorG",
                "default": "0"
            },
            {
                "type": "int",
                "name": "colorB",
                "default": "0"
            },
            {
                "type": "int",
                "name": "colorA",
                "default": "255"
            },
            {
                "type": "float",
                "name": "scale",
                "default": "1.0"
            },
            {
                "type": "int",
                "name": "count",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "fxAddGunshot",
        "description": "This function creates a gunshot particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "includeSparks",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "fxAddPunchImpact",
        "description": "Creates a punch impact particle effect (a small dust cloud).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddSparks",
        "description": "Creates a number of sparks originating from a point or along a line.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "force",
                "default": "1.0"
            },
            {
                "type": "int",
                "name": "count",
                "default": "1"
            },
            {
                "type": "float",
                "name": "acrossLineX",
                "default": "0.0"
            },
            {
                "type": "float",
                "name": "acrossLineY",
                "default": "0.0"
            },
            {
                "type": "float",
                "name": "acrossLineZ",
                "default": "0.0"
            },
            {
                "type": "bool",
                "name": "blur",
                "default": "false"
            },
            {
                "type": "float",
                "name": "spread",
                "default": "1.0"
            },
            {
                "type": "float",
                "name": "life",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "fxAddTankFire",
        "description": "This function creates a tank firing particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddTyreBurst",
        "description": "Creates a tyre burst particle effect (a small white smoke puff).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddWaterHydrant",
        "description": "This function creates a water hydrant particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddWaterSplash",
        "description": "This function creates a water splash particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fxAddWood",
        "description": "Creates a wood splinter particle effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "count",
                "default": "1"
            },
            {
                "type": "float",
                "name": "brightness",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "fxCreateParticle",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "particle",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "dirX",
                "default": null
            },
            {
                "type": "float",
                "name": "dirY",
                "default": null
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": null
            },
            {
                "type": "float",
                "name": "r",
                "default": null
            },
            {
                "type": "float",
                "name": "g",
                "default": null
            },
            {
                "type": "float",
                "name": "b",
                "default": null
            },
            {
                "type": "float",
                "name": "a",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "randomizeColors",
                "default": "false"
            },
            {
                "type": "int",
                "name": "count",
                "default": "1"
            },
            {
                "type": "float",
                "name": "brightness",
                "default": "1.0"
            },
            {
                "type": "float",
                "name": "size",
                "default": "0.3"
            },
            {
                "type": "bool",
                "name": "randomSizes",
                "default": "false"
            },
            {
                "type": "float",
                "name": "life",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "getEffectDensity",
        "description": "This function gets the density of certain effect.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "effect",
                "name": "theEffect",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getEffectSpeed",
        "description": "This function gets the speed of a specified effect.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "effect",
                "name": "theEffect",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setEffectDensity",
        "description": "This function sets the density of a specified effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "effect",
                "name": "theEffect",
                "default": null
            },
            {
                "type": "float",
                "name": "density",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setEffectSpeed",
        "description": "This function sets the speed of a specified effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "effect",
                "name": "theEffect",
                "default": null
            },
            {
                "type": "float",
                "name": "speed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementBoneMatrix",
        "description": "This function returns the transformation matrix of a specific bone. Currently the Player and Ped element types are accepted.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "boneId",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementBonePosition",
        "description": "Returns the 3D world coordinates of a specific bone of a given element. Currently the Player and Ped element types are accepted.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "boneId",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementBoneRotation",
        "description": "Returns the orientation of a specific bone relative to the element. Currently the Player and Ped element types are accepted.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "boneId",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementBoneQuaternion",
        "description": "This function retrieves how a particular bone rotates in relation to the element.\nThe use of quaternions are more effective and do not generate issues like gimbal lock that might arise with Euler angles, so they are a preferable choice for rotation.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "ped",
                "default": null
            },
            {
                "type": "int",
                "name": "bone",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementBoundingBox",
        "description": "This function returns the minimum and maximum coordinates of an element's bounding box.",
        "returnValues": [
            "float",
            "float",
            "float",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementDistanceFromCentreOfMassToBaseOfModel",
        "description": "This function is used to retrieve the distance between a element's centre of mass to the base of the model. This can be used to calculate the position the element has to be set to, to have it on ground level.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementLighting",
        "description": "This function returns the lighting value for the specified element. This can be a player, ped, vehicle, object.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementRadius",
        "description": "This function gets the radius of an element. Normally, sphere or circle-shaped elements tend to return a more accurate and expected radius than others with another shapes.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementCollidableWith",
        "description": "This function can be used to check whether specified element is collidable with another element.\nNote: You can only use this function with the element types listed below.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "element",
                "name": "withElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementLocal",
        "description": "This function checks whether a clientside element is local to the client (doesn't exist in the server) or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementOnScreen",
        "description": "This function will check if an element is on the screen. Elements behind objects but still in the camera view count as being on screen.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementStreamable",
        "description": "This function checks whether an element is streamable as set by setElementStreamable or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementStreamedIn",
        "description": "This function checks whether an element is currently streamed in (not virtualized) and are actual GTA objects in the world. You can force an element to be streamed in using setElementStreamable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementSyncer",
        "description": "This function checks whether an element is synced by the local player or not. Accepted elements are peds and vehicles.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementWaitingForGroundToLoad",
        "description": "This function checks whether MTA has frozen an element because it is above map objects which are still loading or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementBoneMatrix",
        "description": "This function sets the transformation matrix of a specific bone. Currently the Player and Ped element types are accepted.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "boneId",
                "default": null
            },
            {
                "type": "matrix",
                "name": "matrix",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementBonePosition",
        "description": "This function sets the position of a bone to the specified coordinates. Currently the Player and Ped element types are accepted.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "bone",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementBoneRotation",
        "description": "This function sets the rotation of a specific bone relative to the element. Currently the Player and Ped element types are accepted.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "boneId",
                "default": null
            },
            {
                "type": "float",
                "name": "yaw",
                "default": null
            },
            {
                "type": "float",
                "name": "pitch",
                "default": null
            },
            {
                "type": "float",
                "name": "roll",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementBoneQuaternion",
        "description": "This function determines how a particular bone rotates in relation to the element.\nThe use of quaternions are more effective and do not generate issues like gimbal lock that might arise with Euler angles, so they are a preferable choice for rotation.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "ped",
                "default": null
            },
            {
                "type": "int",
                "name": "bone",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            },
            {
                "type": "float",
                "name": "w",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementCollidableWith",
        "description": "This function can be used to set an element to collide with another element. An element with collisions disabled does not interact physically with the other element.\nNote: You can only use this function with the element types listed below.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "element",
                "name": "withElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementStreamable",
        "description": "This function can be used to disable streaming for an element. This will make sure the element is not virtualized (streamed out from GTA) when the player moves far away from it. This function only works in elements with a physical representation in the world (entities), such as players, peds, vehicles and objects.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "streamable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "updateElementRpHAnim",
        "description": "This function updates GTA bone animation for a given element. Currently the Player and Ped element types are accepted. It must be called after setElementBoneRotation for changes to take effect. It should only be called once per frame, after you are done rotating bones on that element, as it is quite heavy.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "attachElements",
        "description": "This function attaches one element to another, so that the first one follows the second whenever it moves.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "element",
                "name": "theAttachToElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "xPosOffset",
                "default": "0"
            },
            {
                "type": "float",
                "name": "yPosOffset",
                "default": "0"
            },
            {
                "type": "float",
                "name": "zPosOffset",
                "default": "0"
            },
            {
                "type": "float",
                "name": "xRotOffset",
                "default": "0"
            },
            {
                "type": "float",
                "name": "yRotOffset",
                "default": "0"
            },
            {
                "type": "float",
                "name": "zRotOffset",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "createElement",
        "description": "This function is used to create a new dummy element in the element tree which do not necessarily represent an entity within the San Andreas world. A common use for this function is for creating custom elements, such as a Flag or a Base.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "elementType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "elementID",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "destroyElement",
        "description": "This function destroys an element and all elements within it in the hierarchy (its children, the children of those children etc). Player elements cannot be destroyed using this function. A player can only be removed from the hierarchy when they quit or are kicked. The root element also cannot be destroyed, however, passing the root as an argument will wipe all elements from the server, except for the players and clients, which will become direct descendants of the root node, and other elements that cannot be destroyed, such as resource root elements.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "elementToDestroy",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "detachElements",
        "description": "This function detaches attached elements from one another.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "element",
                "name": "theAttachToElement",
                "default": null
            }
        ]
    },
    {
        "functionName": "getAttachedElements",
        "description": "This function returns a table of all the elements attached to the specified element",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementAlpha",
        "description": "This function returns the alpha (transparency) value for the specified element. This can be a player, ped, object, vehicle or weapon.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementAttachedOffsets",
        "description": "This function returns the offsets of an element that has been attached to another element using attachElements.",
        "returnValues": [
            "float",
            "float",
            "float",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementAttachedTo",
        "description": "This function determines the element that the specified element is attached to.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementByIndex",
        "description": "This function returns an element of the specified type with the specified index.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementByID",
        "description": "This function returns an element from the specified ID. If more than one element with the same ID exists, only the first one in the order it appears in the XML tree will be returned by this function.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "id",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "index",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getElementChild",
        "description": "This function returns one of the child elements of a given parent element. The child element is selected by its index (0 for the first child, 1 for the second and so on).",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "parent",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementChildren",
        "description": "This function is used to retrieve a list of the child elements of a given parent element. Note that it will only return direct children and not elements that are further down the element tree.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "parent",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "getElementChildrenCount",
        "description": "This function returns the number of children an element has. Note that only the direct children are counted and not elements that are further down the element tree.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "parent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementCollisionsEnabled",
        "description": "This function indicates if a specific element is set to have collisions disabled. An element without collisions does not interact with the physical environment and remains static.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementColShape",
        "description": "Some elements have an associated colshape, for example Marker and Pickup. This function is used to get the associated colshape.",
        "returnValues": [
            "colshape"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementData",
        "description": "This function retrieves element data attached to an element under a certain key.",
        "returnValues": [
            "var"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "inherit",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getAllElementData",
        "description": "Returns a table of all element data of an element.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "hasElementData",
        "description": "This function checks if an element has element data available under a certain key.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "inherit",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getElementDimension",
        "description": "This function allows you to retrieve the dimension of an element. See Dimension for the list of valid element types. The dimension determines what/who the element is visible to.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementHealth",
        "description": "This function returns the current health for the specified element. This can be a player, a ped, a vehicle, or an object.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementID",
        "description": "This function gets the ID of an element. This is the \"id\" attribute of the element and is a string, NOT a number like a model ID, weapons ID or similar.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementInterior",
        "description": "This function allows you to retrieve the interior of any element. An interior is the current loaded place, 0 being outside.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementMatrix",
        "description": "This function gets an element's transform matrix. This contains 16 float values that multiplied to a point will give you the point transformed. It is most useful for matrix calculations such as calculating offsets. For further information, please refer to a tutorial of matrices in computer graphics programming.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "legacy",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getElementModel",
        "description": "Returns the model ID of a given element. This can be a player/ped skin, a pickup model, an object model or a vehicle model.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementParent",
        "description": "This function is used to determine the parent of an element.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementPosition",
        "description": "The getElementPosition function allows you to retrieve the position coordinates of an element.    This can be any real world element, including:",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementRotation",
        "description": "Retrieve the rotation of elements.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "rotOrder",
                "default": "\"default\""
            }
        ]
    },
    {
        "functionName": "getElementsByType",
        "description": "This function is used to retrieve a list of all elements of the specified type. This can be useful, as it disregards where in the element tree it is. It can be used with either the built in types (listed below) or with any custom type used in a .map file. For example, if there is an element of type \"flag\" (e.g. <flag />) in the .map file, the using \"flag\" as the type argument would find it.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "element",
                "name": "startat",
                "default": "getRootElement"
            }
        ]
    },
    {
        "functionName": "getElementsWithinColShape",
        "description": "This function is used to retrieve a list of all elements in a colshape, of the specified type.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "colshape",
                "name": "theShape",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "elemType",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "getElementsWithinRange",
        "description": "This function is used to retrieve a list of all elements of specified type within a range of 3D coordinates.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            },
            {
                "type": "float",
                "name": "range",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "elemType",
                "default": "\"\""
            },
            {
                "type": "int",
                "name": "interior",
                "default": null
            },
            {
                "type": "int",
                "name": "dimension",
                "default": null
            }
        ]
    },
    {
        "functionName": "getElementType",
        "description": "This function is used to retrieve the type of an element.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementVelocity",
        "description": "This function returns three floats containing the velocity (movement speeds) along the X, Y, and Z axis respectively. This means that velocity values can be positive and negative for each axis.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLowLODElement",
        "description": "This function return the low LOD element that an element is associated with.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getRootElement",
        "description": "This function returns the root node of the element tree, called root. This node contains every other element: all resource root elements, players and remote clients. It is never destroyed and cannot be destroyed using destroyElement.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isElement",
        "description": "This function checks if a value is an element or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "var",
                "name": "theValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementAttached",
        "description": "This functions checks whether or not an element is attached to another element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementCallPropagationEnabled",
        "description": "This functions checks if certain element has call propagation enabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementDoubleSided",
        "description": "This function checks whether an element is double-sided as set by setElementDoubleSided or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementFrozen",
        "description": "This function checks if element has been frozen.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementInWater",
        "description": "This function checks whether an element is submerged in water.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementLowLOD",
        "description": "This function reveals if an element is low LOD.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementWithinColShape",
        "description": "This function is used to determine if an element is within a collision shape. Please note that for legacy reasons, a colshape created on the client does not collide with elements already existing at that location until they first move. Please also note that before 1.0.3, this did not function correctly when moving a colshape.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "colshape",
                "name": "theShape",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementWithinMarker",
        "description": "This function is used to determine if an element is within a marker.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementAlpha",
        "description": "This function sets the alpha (transparency) value for the specified element. This can be a player, ped, object, vehicle or weapon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "alpha",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementAngularVelocity",
        "description": "Sets the angular velocity of a specified, supported element (Applies a spin to it).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "float",
                "name": "rx",
                "default": null
            },
            {
                "type": "float",
                "name": "ry",
                "default": null
            },
            {
                "type": "float",
                "name": "rz",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getElementAngularVelocity",
        "description": "Gets the current angular velocity of a specified, supported element.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementAttachedOffsets",
        "description": "This function updates the offsets of an element that has been attached to another element using attachElements.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "xPosOffset",
                "default": null
            },
            {
                "type": "float",
                "name": "yPosOffset",
                "default": null
            },
            {
                "type": "float",
                "name": "zPosOffset",
                "default": null
            },
            {
                "type": "float",
                "name": "xRotOffset",
                "default": null
            },
            {
                "type": "float",
                "name": "yRotOffset",
                "default": null
            },
            {
                "type": "float",
                "name": "zRotOffset",
                "default": null
            }
        ]
    },
    {
        "functionName": "setElementCallPropagationEnabled",
        "description": "This function enables/disables call propagation on a certain element. Look at the example for a practical application.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementCollisionsEnabled",
        "description": "This function can disable or enable an element's collisions. An element without collisions does not interact with the physical environment and remains static.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementData",
        "description": "This function stores element data under a certain key, attached to an element. Element data set using this is then synced with all clients and the server. The data can contain server-created elements, but you should avoid passing data that is not able to be synced such as xmlnodes, acls, aclgroups etc.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            },
            {
                "type": "var",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "synchronize",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "setElementDimension",
        "description": "This function allows you to set the dimension of an element. See Dimension for the in-depth explanation and the list of valid element types.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "dimension",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementDoubleSided",
        "description": "This function allows you to set the double-sidedness of an element's model. When an element's model is double-sided, it's back facing triangles become visible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementFrozen",
        "description": "This function freezes an element (stops it in its position and disables movement) or unfreezes it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "freezeStatus",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementHealth",
        "description": "This function sets the health for the specified element. This can be a ped, object or a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "float",
                "name": "newHealth",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementID",
        "description": "This function sets the ID of an element to a string. This can be anything from an identifying number, to a name.\nYou can only change the ID of an element clientside if that element has been created clientside as well.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementInterior",
        "description": "This function allows you to set the interior of any element. An interior is the current loaded place, 0 being outside.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "interior",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ]
    },
    {
        "functionName": "setElementModel",
        "description": "Sets the model of a given element. This allows you to change the model of a player (or ped), a vehicle or an object.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "model",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementParent",
        "description": "This function is used for setting an element as the parent of another element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "element",
                "name": "parent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementPosition",
        "description": "This function sets the position of an element to the specified coordinates.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "warp",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "setElementRotation",
        "description": "Sets the rotation of elements according to the world (does not work with players that are on the ground).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "float",
                "name": "rotX",
                "default": null
            },
            {
                "type": "float",
                "name": "rotY",
                "default": null
            },
            {
                "type": "float",
                "name": "rotZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "rotOrder",
                "default": "\"default\""
            },
            {
                "type": "bool",
                "name": "conformPedRotation",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setElementVelocity",
        "description": "This function sets the velocity (movement speeds) along each axis, for an element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "float",
                "name": "speedX",
                "default": null
            },
            {
                "type": "float",
                "name": "speedY",
                "default": null
            },
            {
                "type": "float",
                "name": "speedZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setLowLODElement",
        "description": "This function assigns a low LOD element to an element. The low LOD element is displayed when its associated element is not fully visible. If a low LOD element is assigned to several elements, it will be displayed when any of these elements are not fully visible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "element",
                "name": "lowLODElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedContactElement",
        "description": "This function detects the element a ped is standing on. This can be a vehicle or an object.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceDynamicElementRoot",
        "description": "This function retrieves the dynamic element root of a specified resource. The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceRootElement",
        "description": "This function retrieves a resource's root element. The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere). You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": "getThisResource"
            }
        ]
    },
    {
        "functionName": "engineAddImage",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "imgArchive",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineApplyShaderToWorldTexture",
        "description": "This function applies a shader to one or more world textures.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "shader",
                "default": null
            },
            {
                "type": "string",
                "name": "textureName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "element",
                "name": "targetElement",
                "default": "nil"
            },
            {
                "type": "bool",
                "name": "appendLayers",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "engineFreeModel",
        "description": "This function is used to un-assign the specified model ID from the engineRequestModel assignment.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineFreeTXD",
        "description": "Returns true if the TXD was successfully freed, false otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "txdID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelFlags",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelIDFromName",
        "description": "This function gets the model ID of an object model from object name. This function is the counterpart of engineGetModelNameFromID.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "modelName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelLODDistance",
        "description": "This function gets the LOD distance for any object / model ID.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "model",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelNameFromID",
        "description": "This function gets the model name of an object model from model ID. This function is the counterpart of engineGetModelIDFromName.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelPhysicalPropertiesGroup",
        "description": "This function gets physical properties group id used by given model.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelTextureNames",
        "description": "This function returns a table of the world textures which are applied to the specified model.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "string",
                "name": "modelId",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "engineGetModelTextures",
        "description": "This function allows you to get the textures of any model.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string/int",
                "name": "modelName/modelID",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string/table",
                "name": "textureNames",
                "default": null
            }
        ]
    },
    {
        "functionName": "engineGetModelTXDID",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "number"
        ],
        "requiredArguments": [
            {
                "type": "number",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetModelVisibleTime",
        "description": "This function returns a model's visibility time, this is used for example for building lights being shown after 23:00.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelId",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetObjectGroupPhysicalProperty",
        "description": "This function gets physical property of given properties group.",
        "returnValues": [
            "var"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "groupID",
                "default": null
            },
            {
                "type": "objectgroup-modifiable",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetSurfaceProperties",
        "description": "This function retrieves the value of a surface property.",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "surfaceID",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetVisibleTextureNames",
        "description": "This function returns a list of the world textures which are being used to draw the current scene.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "string",
                "name": "nameFilter",
                "default": "\"*\""
            },
            {
                "type": "string",
                "name": "modelId",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "engineImageGetFilesCount",
        "description": "This function returns the number of files an IMG file has.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "imgArchive",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineImageGetFiles",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "imgArchive",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineImageGetFile",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "img_file",
                "default": null
            },
            {
                "type": "string/number",
                "name": "file",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineImageLinkDFF",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "img_file",
                "default": null
            },
            {
                "type": "string",
                "name": "file_path",
                "default": null
            },
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineImageLinkTXD",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "img_file",
                "default": null
            },
            {
                "type": "string",
                "name": "file_path",
                "default": null
            },
            {
                "type": "int",
                "name": "txdID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineImportTXD",
        "description": "This function imports (adds) a loaded RenderWare Texture Dictionary into a specific model. This is necessary in order for the DFF loader to find any new textures. Please call this function before loading the DFF model file, in order to allow the DFF loading process to find the new textures. This function can also replace default GTA textures, so that it becomes possible to e.g. put custom images on existing billboards. Ped and weapon textures are also supported.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "txd",
                "name": "texture",
                "default": null
            },
            {
                "type": "int",
                "name": "model_id",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineLoadCOL",
        "description": "This function loads a RenderWare Collision (COL 1/2/3) file into GTA. The collisions can then be used to provide collisions for in-game objects.",
        "returnValues": [
            "col"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "col_file",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineLoadDFF",
        "description": "This function loads a RenderWare Model (DFF) file into GTA.",
        "returnValues": [
            "dff"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "dff_file",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineLoadIMG",
        "description": "If you're experiencing crashes/game hangs with default values, try to adjust memory/buffer/cache sizes with engineStreamingSetMemorySize, engineStreamingSetBufferSize and/or engineStreamingSetModelCacheLimits.",
        "returnValues": [
            "img"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "img_file",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineLoadIFP",
        "description": "This function loads an animation library (IFP) file into GTA with a custom block name. All three IFP formats are supported ANPK, ANP2, and ANP3. Unfortunately, GTA 3 animations are not supported, however, you can load GTA:VC IFP files using this function. You don't have to replace any animation to play a custom one, to play a custom animation, load the IFP file using this function, then use setPedAnimation.",
        "returnValues": [
            "ifp"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "ifp_file",
                "default": null
            },
            {
                "type": "string",
                "name": "custom_block_name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineLoadTXD",
        "description": "This function loads a RenderWare Texture Dictionary (TXD) file into GTA. The texture dictionary can then be used to provide textures.",
        "returnValues": [
            "txd"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "txd_file",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "filteringEnabled",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "enginePreloadWorldArea",
        "description": "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.",
        "returnValues": [
            "nil"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "loadingOption",
                "default": "\"all\""
            }
        ]
    },
    {
        "functionName": "engineRemoveImage",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "img",
                "name": "img_file",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRemoveShaderFromWorldTexture",
        "description": "This function removes a shader from one or more world textures.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "shader",
                "default": null
            },
            {
                "type": "string",
                "name": "textureName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "element",
                "name": "targetElement",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "engineReplaceAnimation",
        "description": "This function replaces a specific internal (default) animation with a custom one that has been loaded using engineLoadIFP function. This function only affects a specific player or ped, the internal animation is not replaced for everyone, for instance, different players and peds are able to have completely different crouching, walking, and fighting etc., animations running simultaneously at the same time. Also, it's not synchronized, you'll need to execute this function on every client in Lua to synchronize it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "InternalBlockName",
                "default": null
            },
            {
                "type": "string",
                "name": "InternalAnimName",
                "default": null
            },
            {
                "type": "string",
                "name": "CustomBlockName",
                "default": null
            },
            {
                "type": "string",
                "name": "CustomAnimName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineReplaceCOL",
        "description": "This function replaces the collision file of the given model id to the collision file passed. Use engineLoadCOL to load the collision file first.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "col",
                "name": "theCol",
                "default": null
            },
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineReplaceModel",
        "description": "This function replaces the given model ID with the model contained in a DFF file loaded by engineLoadDFF. This function supports vehicles, objects, peds and players but not CJ clothing and body parts.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "dff",
                "name": "theModel",
                "default": null
            },
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "alphaTransparency",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "engineRequestModel",
        "description": "This function is used to assign the next available model ID to a certain element type.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "elementType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "parentID",
                "default": null
            }
        ]
    },
    {
        "functionName": "engineRequestTXD",
        "description": "Returns an integer of the TXD ID that was available to be assigned to game models, false if no free TXD ID available.\nDo not rely on the id numbers returned being consistent across multiple clients or multiple runs of resources. There is no guarantee for the order of the numbers.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineResetModelFlags",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineResetModelLODDistance",
        "description": "This function resets the LOD distance for an object / model ID.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "model",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineResetModelTXDID",
        "description": "This function restores the original TXD ID of the given model ID. Reverses the effect of EngineSetModelTXDID.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineResetSurfaceProperties",
        "description": "This function resets a surface property to its default value. If no ID is provided, it will reset all surfaces' properties to their original values.",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "surfaceID",
                "default": null
            }
        ]
    },
    {
        "functionName": "engineRestoreAnimation",
        "description": "This function restores internal (default) animations that were replaced using engineReplaceAnimation function. This function only affects a specific player or ped just like engineReplaceAnimation.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "InternalBlockName",
                "default": null
            },
            {
                "type": "string",
                "name": "InternalAnimName",
                "default": null
            }
        ]
    },
    {
        "functionName": "engineRestoreCOL",
        "description": "This function restores the original collision model of the given model ID. Reverses the effect of engineReplaceCOL.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRestoreDFFImage",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRestoreModel",
        "description": "This function restores the visual DFF model of the given model ID. This restores the result of engineReplaceModel.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRestoreModelPhysicalPropertiesGroup",
        "description": "This function restores original physical properties group used by given model.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRestoreObjectGroupPhysicalProperties",
        "description": "This function restores all physical properties of given properties group.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "groupID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRestoreTXDImage",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineRestreamWorld",
        "description": "This function re-streams everything in the GTA world. Read this pull request to understand what it is for.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetAsynchronousLoading",
        "description": "This function enables or disables asynchronous model loading. Enabling asynchronous model loading may reduce the small pauses that occur when a new model is displayed for the first time. However, it can cause the new models to appear slightly later than they might have otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enable",
                "default": null
            },
            {
                "type": "bool",
                "name": "force",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetModelFlag",
        "description": "This function changes specific model flag.",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "string",
                "name": "flagName",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetModelFlags",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "int",
                "name": "flags",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "ideFlags",
                "default": null
            }
        ]
    },
    {
        "functionName": "engineSetModelLODDistance",
        "description": "This function sets a custom LOD distance for any object / model ID. This is the distance at which objects of that model ID are switched to their LOD model, or (if there is no LOD model) become invisible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "model",
                "default": null
            },
            {
                "type": "float",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "extendedLod",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "engineSetModelPhysicalPropertiesGroup",
        "description": "This function sets physical properties group id used by given model.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "int",
                "name": "groupID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetModelTXDID",
        "description": "This function changes the TXD ID of the given model ID.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "int",
                "name": "txdID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetModelVisibleTime",
        "description": "This function changes model visibility time, this is used for example for building lights being shown after 23:00.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "int",
                "name": "timeOn",
                "default": null
            },
            {
                "type": "int",
                "name": "timeOff",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetObjectGroupPhysicalProperty",
        "description": "This function sets physical property of given properties group.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "groupID",
                "default": null
            },
            {
                "type": "objectgroup-modifiable",
                "name": "property",
                "default": null
            },
            {
                "type": "var",
                "name": "newValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetSurfaceProperties",
        "description": "This function changes a property of a surface.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "surfaceID",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "mixed",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingFreeUpMemory",
        "description": "This function frees up the streaming RAM memory.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "bytes",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingGetUsedMemory",
        "description": "This function gets the amount of memory (in bytes) used by the GTA streamer.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingSetMemorySize",
        "description": "Sets the maximum amount of RAM [in bytes] that can be used for streaming",
        "returnValues": [
            "nil"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "sizeBytes",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingGetMemorySize",
        "description": "Gets the maximum amount of RAM [in bytes] that can be used for streaming",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingSetMemorySize",
        "description": "Restores the maximum amount of RAM [in bytes] that can be used for streaming to the default value",
        "returnValues": [
            "nil"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingSetBufferSize",
        "description": "Set the streaming buffer size. The larger it is, the more models can be loaded in one go BUT increases the RAM    [not streaming memory!] usage. Can help with custom IMG loading speed by reducing pop-in.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "sizeBytes",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingGetBufferSize",
        "description": "Get the streaming buffer size [not maximum memory size]",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingRestoreBufferSize",
        "description": "This function resets the streaming buffer. The value is automatically reset when disconnected.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingSetModelCacheLimits",
        "description": "This function sets custom cache limits for vehicle and pedestrian models based on provided values. The arguments that receive zero mean complete deactivation.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "numVehicles",
                "default": null
            },
            {
                "type": "int",
                "name": "numPeds",
                "default": null
            }
        ]
    },
    {
        "functionName": "engineGetPoolCapacity",
        "description": "The capacity of the provided pool as positive number",
        "returnValues": [
            "number"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pool",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineSetPoolCapacity",
        "description": "true if the pool capacity was changed and false if not. Throws an error if the pool is invalid.",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pool",
                "default": null
            },
            {
                "type": "number",
                "name": "capacity",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetPoolDefaultCapacity",
        "description": "The default capacity of the provided pool as positive number",
        "returnValues": [
            "number"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pool",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineGetPoolUsedCapacity",
        "description": "The used capacity of the provided pool as positive number",
        "returnValues": [
            "number"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "pool",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "engineStreamingRequestModel",
        "description": "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "number",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "boolean",
                "name": "addRef",
                "default": "false"
            },
            {
                "type": "boolean",
                "name": "isBlocking",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "engineStreamingReleaseModel",
        "description": "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.",
        "returnValues": [
            "boolean"
        ],
        "requiredArguments": [
            {
                "type": "number",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "boolean",
                "name": "removeRef",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "engineStreamingGetModelLoadState",
        "description": "Returns string with model load state.\nPossible load states:",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "number",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "triggerLatentServerEvent",
        "description": "This function is the same as triggerServerEvent except the transmission rate of the data contained in the arguments can be limited and other network traffic is not blocked while the data is being transferred.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "event",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "bandwidth",
                "default": "5000"
            },
            {
                "type": "bool",
                "name": "persist",
                "default": "false"
            },
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "arguments...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "triggerServerEvent",
        "description": "This function triggers an event previously registered on the server. This is the primary means of passing information between the client and the server. Servers have a similar triggerClientEvent function that can do the reverse. You can treat this function as if it was an asynchronous function call, using triggerClientEvent to pass back any returned information if necessary.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "event",
                "default": null
            },
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "arguments...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "addEvent",
        "description": "This function allows you to register a custom event. Custom events function exactly like the built-in events. See event system for more information on the event system.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "eventName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "allowRemoteTrigger",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "addEventHandler",
        "description": "This function will add an event handler. An event handler is a function that will be called when the event it's attached to is triggered. See event system for more information on how the event system works.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "eventName",
                "default": null
            },
            {
                "type": "element",
                "name": "attachedTo",
                "default": null
            },
            {
                "type": "function",
                "name": "handlerFunction",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "propagate",
                "default": "true"
            },
            {
                "type": "string",
                "name": "priority",
                "default": "\"normal\""
            }
        ]
    },
    {
        "functionName": "cancelEvent",
        "description": "This function is used to stop the automatic internal handling of events, for example this can be used to prevent an item being given to a player when they walk over a pickup, by canceling the onPickupUse event.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "cancel",
                "default": "true"
            },
            {
                "type": "string",
                "name": "reason",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "cancelLatentEvent",
        "description": "Stops a latent event from completing",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "handle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getEventHandlers",
        "description": "This function gets the attached functions from the event and attached element from current lua script.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "eventName",
                "default": null
            },
            {
                "type": "element",
                "name": "attachedTo",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLatentEventHandles",
        "description": "Gets the currently queued latent events. The last one in the table is always the latest event queued. Each returned handle can be used with getLatentEventStatus or cancelLatentEvent",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLatentEventStatus",
        "description": "Gets the status of one queued latent event.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "handle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeEventHandler",
        "description": "This functions removes a handler function from an event, so that the function is not called anymore when the event is triggered. See event system for more information on how the event system works.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "eventName",
                "default": null
            },
            {
                "type": "element",
                "name": "attachedTo",
                "default": null
            },
            {
                "type": "function",
                "name": "functionVar",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "triggerEvent",
        "description": "This function will trigger a named event on a specific element in the element tree. See event system for more information on how the event system works.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "eventName",
                "default": null
            },
            {
                "type": "element",
                "name": "baseElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "var",
                "name": "argument1",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "wasEventCancelled",
        "description": "This function checks if the last completed event was cancelled. This is mainly useful for custom events created by scripts.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "createExplosion",
        "description": "Creates an explosion of a certain type at a specified point in the world. If creator is specified, the explosion will occur only in its dimension.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            },
            {
                "type": "int",
                "name": "theType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "player",
                "name": "creator",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "fileClose",
        "description": "Closes a file handle obtained by fileCreate or fileOpen.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileCopy",
        "description": "This function copies a file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            },
            {
                "type": "string",
                "name": "copyToFilePath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "overwrite",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "fileCreate",
        "description": "Creates a new file in a directory of a resource. If there already exists a file with the specified name, it is overwritten with an empty file.",
        "returnValues": [
            "file"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileDelete",
        "description": "Deletes the specified file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileExists",
        "description": "This functions checks whether a specified file exists inside a resource.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileFlush",
        "description": "Forces pending disk writes to be executed. fileWrite doesn't directly write to the hard disk but places the data in a temporary buffer; only when there is enough data in the buffer it is actually written to disk. Call this function if you need the data written right now without closing the file. This is useful for log files that might want to be read while the resource is still executing. fileFlush can be called after each log entry is written. Without this, the file may appear empty or outdated to the user.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileGetContents",
        "description": "Reads the entire contents of the file, optionally verifies the read contents by computing and comparing the checksum with the expected one, and returns the content as string. The file cursor position is not modified by calls to this function. File must be added in the meta.xml.",
        "returnValues": [
            "nil|string"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "verifyContents",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "fileGetPath",
        "description": "This function retrieves the path of the given file.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileGetPos",
        "description": "Returns the current read/write position in the given file.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileGetSize",
        "description": "Returns the total size in bytes of the given file.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileIsEOF",
        "description": "Checks if the file position is at the end of the file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileOpen",
        "description": "Opens an existing file for reading and writing.",
        "returnValues": [
            "file"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "readOnly",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "fileRead",
        "description": "Reads the specified number of bytes from the given file starting at its current read/write position, and returns them as a string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            },
            {
                "type": "int",
                "name": "count",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileRename",
        "description": "Renames the specified file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            },
            {
                "type": "string",
                "name": "newFilePath",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileSetPos",
        "description": "Sets the current read/write position in the file.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            },
            {
                "type": "int",
                "name": "offset",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fileWrite",
        "description": "Writes one or more strings to a given file, starting at the current read/write position. Advances the position over the number of bytes that were written.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "file",
                "name": "theFile",
                "default": null
            },
            {
                "type": "string",
                "name": "string1",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "string2",
                "default": null
            },
            {
                "type": "string",
                "name": "string3",
                "default": null
            }
        ]
    },
    {
        "functionName": "createFire",
        "description": "Creates a patch of fire that will spread a bit and die out after a while. Because it's a client side only function, other players won't see it, so custom events or custom objects will be needed to make a fire visible to some players.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "size",
                "default": "1.8"
            }
        ]
    },
    {
        "functionName": "extinguishFire",
        "description": "This function is used to extinguish all spreading fire, or spreading fire at specified coordinates.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "guiBringToFront",
        "description": "This function brings a GUI element on top of others.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getChatboxLayout",
        "description": "Returns information about how the chatbox looks.",
        "returnValues": [
            "bool|int|table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "string",
                "name": "CVar",
                "default": null
            }
        ]
    },
    {
        "functionName": "getChatboxCharacterLimit",
        "description": "Gets the current maximum amount of characters that can be input via chatbox",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateFont",
        "description": "This function creates a GUI font element that can be used in guiSetFont. Successful font creation is not guaranteed, and may fail due to hardware or memory limitations.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filepath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "size",
                "default": "9"
            }
        ]
    },
    {
        "functionName": "guiBlur",
        "description": "This function defocuses a focused GUI element. Used primarily for edit fields and memos.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiFocus",
        "description": "This function focuses a defocused GUI element. Used primarily for edit fields and memos.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetAlpha",
        "description": "Alpha represents the transparency of a gui element.    This function allows retrieval of a gui element's current alpha.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetCursorType",
        "description": "This function is used to get the type of the current cursor image.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetEnabled",
        "description": "This function determines if a GUI element is enabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetFont",
        "description": "This function is used to get the current font that is used to draw text in GUI elements.",
        "returnValues": [
            "string",
            "element"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetInputEnabled",
        "description": "This function checks whether user input is focused on the GUI or the game.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetInputMode",
        "description": "This function returns the current input mode as set by guiSetInputMode.\nDefault mode is \"allow_binds\".",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetPosition",
        "description": "This function allows retrieval of a GUI element's current position, relative to its parent.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "relative",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetProperties",
        "description": "This function gets a list of the CEGUI property names and values of a GUI element. To find out what the different properties mean, check out the CEGUI properties page.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetProperty",
        "description": "This function gets the value of a specific CEGUI property of a GUI element. For a list of properties and their meaning, see the CEGUI properties page.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetScreenSize",
        "description": "This function retrieves the local screen size according to the resolution they are using.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetSize",
        "description": "This function gets the size of a GUI element.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "relative",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetText",
        "description": "This function is used to get the text of GUI elements like edit boxes, labels, buttons etc.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGetVisible",
        "description": "This function determines if a GUI element is visible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiMoveToBack",
        "description": "This function moves a GUI element to the very back of all other GUI elements.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetAlpha",
        "description": "This changes the alpha level (the visibleness/transparency) of a GUI element",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guielement",
                "default": null
            },
            {
                "type": "float",
                "name": "alpha",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetEnabled",
        "description": "This function enables/disables a GUI element. A disabled GUI element can't be used, gets a gray aspect and doesn't receive any events.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetFont",
        "description": "This function sets the font of a GUI element to be used when drawing text.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "mixed",
                "name": "font",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetInputEnabled",
        "description": "This function enables or disables input focus for the GUI.    This means that any keybinds or MTA binds are overidden so that text can be input into an editbox, for example.    In other words, keys such as t and y which activate the chatbox are disabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetInputMode",
        "description": "This function controls the input mode to define whether or not (and when) keybinds or MTA binds are overridden (disabled) so that text can be input into an editbox, for example.\nAvailable input modes are:",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "mode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetPosition",
        "description": "This function sets the position of a GUI element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "bool",
                "name": "relative",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetProperty",
        "description": "This function sets the value of a specific CEGUI property of a GUI element. For a list of properties and their meaning, see the CEGUI properties page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "string",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetSize",
        "description": "This function sets the dimensions (size) of a GUI element. It refers to the bounding box size for GUI elements. It does not make GUI elements smaller or larger in appearance.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "bool",
                "name": "relative",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetText",
        "description": "This function sets the text of a GUI element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetVisible",
        "description": "This function changes the visibility state of a GUI element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isChatBoxInputActive",
        "description": "This function returns whether the ingame chatbox is being used (accepting chatbox input) or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isConsoleActive",
        "description": "This function returns whether the ingame console window is visible or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isDebugViewActive",
        "description": "This function returns whether the ingame debug window is visible or not. This is the debugwindow visible using the \"debugscript <level>\" command.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isMainMenuActive",
        "description": "This function returns whether the user is in the mainmenu or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isMTAWindowActive",
        "description": "This function returns whether any system windows that take focus are active. This includes:",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isTransferBoxActive",
        "description": "This function returns whether the file downloading dialog box is active or not. This appears when a resource is started and the client doesn't have all the files that resource requires the client to have.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setChatboxCharacterLimit",
        "description": "Sets the maximum amount of characters that can be input via chatbox",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "charLimit",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDebugViewActive",
        "description": "This function enables or disables the debug window.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateBrowser",
        "description": "This function creates a new CEGUI web browser element.\nThe difference between this and createBrowser is that this function handles inputs internally, and it can be attached to GUI windows. So the createBrowser function is more suitable for custom dx based interfaces, while this one is favorable for CEGUI all-in-all integration.\nYou can learn more about the differences [here].",
        "returnValues": [
            "gui-browser"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "bool",
                "name": "isLocal",
                "default": null
            },
            {
                "type": "bool",
                "name": "isTransparent",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "isRelative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiGetBrowser",
        "description": "This function gets the browser element behind a gui-browser (a browser that has been created via guiCreateBrowser).",
        "returnValues": [
            "browser"
        ],
        "requiredArguments": [
            {
                "type": "gui-browser",
                "name": "theBrowser",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateButton",
        "description": "This function allows creation of a GUI Button, which is a clickable item as part of GUI.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiCheckBoxGetSelected",
        "description": "This function gets a checkbox's selection state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theCheckbox",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCheckBoxSetSelected",
        "description": "This function selects (ticks) or unselects a checkbox.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theCheckbox",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateCheckBox",
        "description": "This function creates a checkbox.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "bool",
                "name": "selected",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiCreateComboBox",
        "description": "This function creates a combobox GUI element, which you can compare to a gridlist with a dropdown feature.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "caption",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiComboBoxAddItem",
        "description": "Adds an item to a combobox.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            },
            {
                "type": "string",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxClear",
        "description": "This function removes all the items from a combobox.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxGetItemCount",
        "description": "This function returns the number of items in a combo box.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxGetItemText",
        "description": "This function retrieves the text from a specific combobox item.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            },
            {
                "type": "int",
                "name": "itemId",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxGetSelected",
        "description": "This function returns the index of the selected combobox item.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxIsOpen",
        "description": "This function returns the state of combobox.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxRemoveItem",
        "description": "This function removes an item from a combobox.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            },
            {
                "type": "int",
                "name": "itemId",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxSetItemText",
        "description": "This function changes the text of a combobox item.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            },
            {
                "type": "int",
                "name": "itemId",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxSetOpen",
        "description": "This function set combo box state as open or close.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiComboBoxSetSelected",
        "description": "This function sets the selected item from a combobox.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "comboBox",
                "default": null
            },
            {
                "type": "int",
                "name": "itemIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateEdit",
        "description": "This function is for creating a new GUI edit box. This is a text box in which the user can input text. Edit boxes only allow a single line of text. If you want to allow multiple lines of text create a memo box using guiCreateMemo.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiEditGetCaretIndex",
        "description": "This function returns the caret (the text cursor) position within the editbox.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditGetMaxLength",
        "description": "This function returns the maximum text length that can be typed within an edit box.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "gui-edit",
                "name": "guiEdit",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditIsMasked",
        "description": "This function checks if an edit box is masked.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-edit",
                "name": "guiEdit",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditIsReadOnly",
        "description": "This function checks if an edit box is read-only.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-edit",
                "name": "guiEdit",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditSetCaretIndex",
        "description": "This function sets the current position of the caret (the text cursor) within the edit box.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditSetMasked",
        "description": "This function sets or removes masking (covering up the text being typed) for password text fields.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "status",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditSetMaxLength",
        "description": "This function sets the maximum text length that can be typed into an edit box.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiEdit",
                "default": null
            },
            {
                "type": "int",
                "name": "length",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiEditSetReadOnly",
        "description": "This function allows you to set or remove read-only status for an edit box. If read-only is set to true, the box is not editable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "editField",
                "default": null
            },
            {
                "type": "bool",
                "name": "status",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateGridList",
        "description": "This function creates a grid list GUI element.    These are menu's which are designed in lists and can have multiple columns.    A good example of a gridlist element can be found in MTA's settings box, under Controls.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiGridListAddColumn",
        "description": "This function is used to create columns in grid lists.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "string",
                "name": "title",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListAddRow",
        "description": "Adds a row to a grid list, and optionally add simple text items with your rows.    Use guiGridListSetItemText to add row headers.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int/string",
                "name": "itemText1",
                "default": null
            },
            {
                "type": "int/string",
                "name": "itemText2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "guiGridListAutoSizeColumn",
        "description": "This allows you to automatically size a column to display everything in it correctly, with the most minimal width.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListClear",
        "description": "This function clears all the data from a grid list.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetColumnCount",
        "description": "This allows you to get the count of existing columns in a gridlist.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetColumnTitle",
        "description": "This function is used to get the column title of a gridlist column.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetColumnWidth",
        "description": "This allows you to get the width of an existing column in a gridlist.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            },
            {
                "type": "bool",
                "name": "relative",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetHorizontalScrollPosition",
        "description": "This function is used to get the horizontal scroll position from a grid list",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetItemColor",
        "description": "This function gets the color of a gridlist item.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetItemData",
        "description": "With this function you can retrieve the string data associated with an item in a grid list. This is not the text that is displayed on the item, but an internal string that you can use to hold extra information about the item.\nNote: This function will only work after you set the item's text using guiGridListSetItemText!",
        "returnValues": [
            "var"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetItemText",
        "description": "This function retrieves the text from a specific grid list item.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetRowCount",
        "description": "This function returns the number of rows in a grid list.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetSelectedCount",
        "description": "This function returns the amount of options selected in the specified grid list.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetSelectedItem",
        "description": "This function returns the row and column indexes of the selected item in a grid list. First selected row and column is (0, 0).",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetSelectedItems",
        "description": "This function returns the items selected in the specified grid list.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetSelectionMode",
        "description": "This function retrieves the current selection mode of a gui gridlist.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "gui-Element",
                "name": "gridlist",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListIsSortingEnabled",
        "description": "This function checks whether the gridlist sorting is enabled or disabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListGetVerticalScrollPosition",
        "description": "This function is used to get the vertical scroll position from a grid list",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListInsertRowAfter",
        "description": "This allows you to insert a new row after a specified row, and simultaneously set text. Good for inserting new rows in the middle of existing rows. To insert at the top use -1 as row index.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListRemoveColumn",
        "description": "This allows you to delete columns that exist in grid lists.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListRemoveRow",
        "description": "This allows you to delete rows that exist in grid lists.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetColumnTitle",
        "description": "This function is used to change the column title of a gridlist column.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            },
            {
                "type": "string",
                "name": "title",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetColumnWidth",
        "description": "This allows you to set the width of an existing column in a gridlist.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            },
            {
                "type": "number",
                "name": "width",
                "default": null
            },
            {
                "type": "bool",
                "name": "relative",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetHorizontalScrollPosition",
        "description": "This function is used to set the horizontal scroll position from a grid list",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            },
            {
                "type": "float",
                "name": "fPosition",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetItemColor",
        "description": "This function changes the color of a gridlist item.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "red",
                "default": null
            },
            {
                "type": "int",
                "name": "green",
                "default": null
            },
            {
                "type": "int",
                "name": "blue",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "alpha",
                "default": "255"
            }
        ]
    },
    {
        "functionName": "guiGridListSetItemData",
        "description": "This function sets a Item Data associated to a grid list item.\nNote: This function will only work after you set the item's text using guiGridListSetItemText!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            },
            {
                "type": "var",
                "name": "data",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetItemText",
        "description": "This function changes the text of a gridlist item.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "bool",
                "name": "section",
                "default": null
            },
            {
                "type": "bool",
                "name": "number",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetScrollBars",
        "description": "This function allows a gridlist's scrollbar to be forced on, or returned to default.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            },
            {
                "type": "bool",
                "name": "horizontalBar",
                "default": null
            },
            {
                "type": "bool",
                "name": "verticalBar",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetSelectedItem",
        "description": "This function selects an item from a gridlist. If you wish to deselect whatever item is selected, pass 0 as both the rowIndex and    columnIndex arguments.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "gridList",
                "default": null
            },
            {
                "type": "int",
                "name": "rowIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "columnIndex",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "bReset",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "guiGridListSetSelectionMode",
        "description": "This function sets the selection mode of a gui gridlist.    For example, the MTA server browser selects a whole row, while the Controls dialog selects a single cell. To select multiple items you must be holding down 'ctrl'.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-Element",
                "name": "gridlist",
                "default": null
            },
            {
                "type": "int",
                "name": "mode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetSortingEnabled",
        "description": "This function allows the disabling or enabling of sorting within a gridlist.    Sorting is achieved by clicking a column header.    Gridlist items will be sorted according to the clicked column.    By default, gridlists have sorting enabled.    This function will allow you to toggle this.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiGridListSetVerticalScrollPosition",
        "description": "This function is used to set the vertical scroll position from a grid list",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiGridlist",
                "default": null
            },
            {
                "type": "float",
                "name": "fPosition",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateMemo",
        "description": "This function creates a new GUI memo.    This is a multiline edit box in which the user can input text.",
        "returnValues": [
            "gui-memo"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiMemoGetCaretIndex",
        "description": "This function returns the caret (the text cursor) position within the memo box.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiMemoGetVerticalScrollPosition",
        "description": "This function is used to get the vertical scroll position of a memo as a percentage.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "gui-memo",
                "name": "theMemo",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiMemoSetVerticalScrollPosition",
        "description": "This function is used to set the vertical scroll position of a memo as a percentage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-memo",
                "name": "theMemo",
                "default": null
            },
            {
                "type": "float",
                "name": "position",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiMemoIsReadOnly",
        "description": "This function checking if memo is read only or no.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-memo",
                "name": "theMemo",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiMemoSetCaretIndex",
        "description": "This function sets the current position of the caret (the text cursor) within the memo.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-memo",
                "name": "theMemo",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiMemoSetReadOnly",
        "description": "This function allows you to set or remove read-only status for a GUI memo. If read-only is set to true, the contents are not editable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-memo",
                "name": "theMemo",
                "default": null
            },
            {
                "type": "bool",
                "name": "status",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateProgressBar",
        "description": "This function creates a progress bar.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiProgressBarGetProgress",
        "description": "This function gets the progress of a progress bar as a percentage.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "progressBar",
                "name": "theProgressbar",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiProgressBarSetProgress",
        "description": "This function is used to set the progress of a progressbar as a percentage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "progressBar",
                "name": "theProgressbar",
                "default": null
            },
            {
                "type": "float",
                "name": "progress",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateRadioButton",
        "description": "This function creates a radio button.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiRadioButtonGetSelected",
        "description": "This function gets a radio button's selection state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiRadioButton",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiRadioButtonSetSelected",
        "description": "This function selects or unselects a radio button.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "guiRadioButton",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateScrollBar",
        "description": "This function creates a GUI scrollbar. You can use the functions guiScrollPaneSetHorizontalScrollPosition, guiScrollPaneSetVerticalScrollPosition, guiScrollPaneGetHorizontalScrollPosition and guiScrollPaneGetVerticalScrollPosition to read and modify the scrollbar's scroll.",
        "returnValues": [
            "gui-scrollbar"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "bool",
                "name": "horizontal",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiScrollBarGetScrollPosition",
        "description": "This function gets the scroll amount of a scrollbar as a percentage.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "gui-scrollBar",
                "name": "theScrollBar",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiScrollBarSetScrollPosition",
        "description": "This function is used to set the scroll amount of a scrollbar as a percentage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-scrollBar",
                "name": "theScrollBar",
                "default": null
            },
            {
                "type": "float",
                "name": "amount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateScrollPane",
        "description": "This creates a GUI scroll pane.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiScrollPaneGetHorizontalScrollPosition",
        "description": "This function is used to get the position of a horizontal scroll pane as a percentage.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "horizontalScrollPane",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiScrollPaneGetVerticalScrollPosition",
        "description": "This function is used to get the position of a vertical scroll pane as a percentage.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "verticalScrollPane",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiScrollPaneSetHorizontalScrollPosition",
        "description": "This function is used to set the position of a horizontal scroll pane as a percentage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "horizontalScrollPane",
                "default": null
            },
            {
                "type": "float",
                "name": "position",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiScrollPaneSetScrollBars",
        "description": "This function allows a scrollpane's scrollbars to be forced on, or returned to default.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "scrollPane",
                "default": null
            },
            {
                "type": "bool",
                "name": "horizontal",
                "default": null
            },
            {
                "type": "bool",
                "name": "vertical",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiScrollPaneSetVerticalScrollPosition",
        "description": "This function is used to set the position of a vertical scroll pane as a percentage.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "verticalScrollPane",
                "default": null
            },
            {
                "type": "float",
                "name": "position",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateStaticImage",
        "description": "This function creates a static image using a .png image in the resource.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "path",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiStaticImageGetNativeSize",
        "description": "This function gets the native size of image. That means the original size in pixels of the image file.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theImage",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiStaticImageLoadImage",
        "description": "This function allows you to change the image in GUI static image element to another one. Tip: If you set other images as children you will have to use setElementCallPropagationEnabled to only affect the parent image.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "string",
                "name": "filename",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateTabPanel",
        "description": "This function creates a Tab Panel, which acts as a template to create Tabs upon.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiGetSelectedTab",
        "description": "This function returns the currently selected tab in the specified tab panel.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "tabPanel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiSetSelectedTab",
        "description": "This function is used to change the currently selected tab in a tab panel.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "tabPanel",
                "default": null
            },
            {
                "type": "element",
                "name": "theTab",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateTab",
        "description": "This function creates a tab on a pre-existing tab panel. A tab is a button as well as a 'dimension' that can be used to switch between information by clicking on the tabs.    Tabs are sorted on a tab panel in the order that they are created.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiDeleteTab",
        "description": "This function deletes a tab from a tab panel.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "tabToDelete",
                "default": null
            },
            {
                "type": "element",
                "name": "tabPanel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateLabel",
        "description": "This function is for creating a new GUI label.    A label is simply a piece of text that cannot be edited by the user. If you would like to have a bigger text you'd have to change its font because font size is not supported.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            },
            {
                "type": "gui-element",
                "name": "parent",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "guiLabelGetColor",
        "description": "This function gets the color of a label.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "gui-element",
                "name": "theLabel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiLabelGetFontHeight",
        "description": "This function returns the height of the font currently used in a GUI text label.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theLabel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiLabelGetTextExtent",
        "description": "This function returns the extent, or width, of the current text inside a GUI text label.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theLabel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiLabelSetColor",
        "description": "This function allows you to set the color of a GUI label.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "int",
                "name": "red",
                "default": null
            },
            {
                "type": "int",
                "name": "green",
                "default": null
            },
            {
                "type": "int",
                "name": "blue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiLabelSetHorizontalAlign",
        "description": "This function sets the horizontal alignment of a text label.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theLabel",
                "default": null
            },
            {
                "type": "string",
                "name": "align",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "wordwrap",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "guiLabelSetVerticalAlign",
        "description": "This function sets the vertical alignment of a text label.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theLabel",
                "default": null
            },
            {
                "type": "string",
                "name": "align",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiCreateWindow",
        "description": "This function is for creating a new GUI window.    This provides a base for other gui elements to be created within.    However, windows do not have a parent and cannot be created in any GUI elements.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "width",
                "default": null
            },
            {
                "type": "float",
                "name": "height",
                "default": null
            },
            {
                "type": "string",
                "name": "titleBarText",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "relative",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "guiWindowIsMovable",
        "description": "This function checks if a GUI window is movable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-window",
                "name": "guiWindow",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiWindowIsSizable",
        "description": "This function checks if a GUI window is sizable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "gui-window",
                "name": "guiWindow",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiWindowSetMovable",
        "description": "This function allows you to specify whether or not a user can move a GUI window.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "status",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "guiWindowSetSizable",
        "description": "This function enables or disables user resizing of a GUI window.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "bool",
                "name": "status",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAnalogControlState",
        "description": "This retrieves the analog control state of a control.    This is useful for detecting sensitive controls, such as those used on a joypad.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "control",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "rawValue",
                "default": null
            }
        ]
    },
    {
        "functionName": "getBoundKeys",
        "description": "Returns a list of key names that are bound to the specified game control or console command.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "command/control",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getCommandsBoundToKey",
        "description": "Gets the commands bound to a key.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theKey",
                "default": null
            },
            {
                "type": "string",
                "name": "keyState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getKeyBoundToCommand",
        "description": "This function allow you get first key bound to command.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "command",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getKeyState",
        "description": "This function determines if a certain key is pressed or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "keyName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isCapsLockEnabled",
        "description": "Returns true if caps lock is toggled (on), false otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setAnalogControlState",
        "description": "This sets the analog control state of a control for the local player. To change the analog controls for a ped, please use setPedAnalogControlState.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "control",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "state",
                "default": null
            },
            {
                "type": "bool",
                "name": "forceOverrideNextFrame",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "addCommandHandler",
        "description": "This function will attach a scripting function (handler) to a console command, so that whenever a player or administrator uses the command the function is called.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "commandName",
                "default": null
            },
            {
                "type": "function",
                "name": "handlerFunction",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "restricted",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "caseSensitive",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "bindKey",
        "description": "Binds a player's key to a handler function or command, which will be called when the key is pressed.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            },
            {
                "type": "string",
                "name": "keyState",
                "default": null
            },
            {
                "type": "function",
                "name": "handlerFunction",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "var",
                "name": "arguments",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "executeCommandHandler",
        "description": "This function will call all the attached functions of an existing console command, for a specified player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "commandName",
                "default": null
            },
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "args",
                "default": null
            }
        ]
    },
    {
        "functionName": "getCommandHandlers",
        "description": "This function is used to retrieve a list of all the registered command handlers of a given resource (or of all resources).\nFunction also added client-side.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            }
        ]
    },
    {
        "functionName": "getFunctionsBoundToKey",
        "description": "Gets the functions bound to a key. To bind a function to a key use the bindKey function",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            },
            {
                "type": "string",
                "name": "keyState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getKeyBoundToFunction",
        "description": "getKeyBoundToFunction allows retrieval of the first key bound to a function.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "function",
                "name": "theFunction",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isControlEnabled",
        "description": "Checks whether a GTA control is enabled or disabled for a certain player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "control",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeCommandHandler",
        "description": "This function removes a command handler, that is one that has been added using addCommandHandler. This function can only remove command handlers that were added by the resource that it is called in.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "commandName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "function",
                "name": "handler",
                "default": null
            }
        ]
    },
    {
        "functionName": "toggleAllControls",
        "description": "Enables or disables the use of all GTA controls for a specified player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "gtaControls",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "mtaControls",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "toggleControl",
        "description": "Enables or disables the use of a GTA control for a specific player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "control",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "unbindKey",
        "description": "Removes an existing key bind from the specified player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            },
            {
                "type": "string",
                "name": "keyState",
                "default": null
            },
            {
                "type": "string",
                "name": "command",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createLight",
        "description": "This function creates a 3D light in the world.",
        "returnValues": [
            "light"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "lightType",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "radius",
                "default": "3"
            },
            {
                "type": "int",
                "name": "r",
                "default": "255"
            },
            {
                "type": "int",
                "name": "g",
                "default": "0"
            },
            {
                "type": "int",
                "name": "b",
                "default": "0"
            },
            {
                "type": "float",
                "name": "dirX",
                "default": "0"
            },
            {
                "type": "float",
                "name": "dirY",
                "default": "0"
            },
            {
                "type": "float",
                "name": "dirZ",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getLightColor",
        "description": "This function returns the color for a light element.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLightDirection",
        "description": "This function returns the direction for a light element.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLightRadius",
        "description": "This function returns the radius for a light element.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLightType",
        "description": "This function returns the type for a light element.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setLightColor",
        "description": "This function sets the color for a light element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            },
            {
                "type": "float",
                "name": "r",
                "default": null
            },
            {
                "type": "float",
                "name": "g",
                "default": null
            },
            {
                "type": "float",
                "name": "b",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setLightDirection",
        "description": "This function sets the direction for a light element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setLightRadius",
        "description": "This function sets the radius for a light element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "light",
                "name": "theLight",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isCoronaReflectionEnabled",
        "description": "This function gets visibility of corona reflection.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCoronaReflectionEnabled",
        "description": "This function sets visibility of corona reflection.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createMarker",
        "description": "This function creates a marker. A marker is a 3D model in the world that can highlight a particular point or area, often used to instruct players where to go to perform actions such as entering buildings.",
        "returnValues": [
            "marker"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": "\"checkpoint\""
            },
            {
                "type": "float",
                "name": "size",
                "default": "4.0"
            },
            {
                "type": "int",
                "name": "r",
                "default": "0"
            },
            {
                "type": "int",
                "name": "g",
                "default": "0"
            },
            {
                "type": "int",
                "name": "b",
                "default": "255"
            },
            {
                "type": "int",
                "name": "a",
                "default": "255"
            },
            {
                "type": "element",
                "name": "visibleTo",
                "default": "getRootElement"
            }
        ]
    },
    {
        "functionName": "getMarkerColor",
        "description": "This function returns the color and transparency for a marker element.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getMarkerCount",
        "description": "Returns the number of markers that currently exist in the world.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getMarkerIcon",
        "description": "This function returns the icon name for a marker.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getMarkerSize",
        "description": "This function returns a float containing the size of the specified marker.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "myMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getMarkerTarget",
        "description": "This function returns the position of the specified marker's target, the position it points to. This only works for checkpoint markers and ring markers. For checkpoints it returns the position the arrow is pointing to, for ring markers it returns the position the ring is facing. You can set this target with setMarkerTarget.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getMarkerTargetArrowProperties",
        "description": "Returns five ints corresponding to the amount of red, green, blue, alpha and size of the marker's target arrow, false if invalid arguments were passed.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getMarkerType",
        "description": "This function returns a marker's type.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMarkerColor",
        "description": "This function sets the color of the specified marker by modifying the values for red, green, blue and alpha.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            },
            {
                "type": "int",
                "name": "r",
                "default": null
            },
            {
                "type": "int",
                "name": "g",
                "default": null
            },
            {
                "type": "int",
                "name": "b",
                "default": null
            },
            {
                "type": "int",
                "name": "a",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMarkerIcon",
        "description": "This function allows changing the icon of a checkpoint marker.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            },
            {
                "type": "string",
                "name": "icon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMarkerSize",
        "description": "This function sets the size of the specified marker.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            },
            {
                "type": "float",
                "name": "size",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMarkerTarget",
        "description": "This function sets the 'target' for a marker. Only the checkpoint and ring marker types can have a target.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMarkerTargetArrowProperties",
        "description": "This function changes the color and size of the checkpoint marker's target arrow.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "marker",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "r",
                "default": "255"
            },
            {
                "type": "int",
                "name": "g",
                "default": "64"
            },
            {
                "type": "int",
                "name": "b",
                "default": "64"
            },
            {
                "type": "int",
                "name": "a",
                "default": "255"
            },
            {
                "type": "float",
                "name": "size",
                "default": "markerSize * 0.625"
            }
        ]
    },
    {
        "functionName": "setMarkerType",
        "description": "This function changes a marker's type. The type controls how the marker is displayed in the game. It's important that you use marker types that users are used to from the single player game. For example, checkpoints are used in races, rings are used for aircraft races, arrows are used for entering buildings etc.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            },
            {
                "type": "string",
                "name": "markerType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementWithinMarker",
        "description": "This function is used to determine if an element is within a marker.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theElement",
                "default": null
            },
            {
                "type": "marker",
                "name": "theMarker",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "Matrix",
        "description": "Matrices are one of the most powerful features of MTA OOP. We did have a presence of Matrices before with getElementMatrix, but we were given an ugly disgusting table to play with. Now, with the new Matrix class, we can make and magically manipulate Matrices.",
        "returnValues": [
            "matrix"
        ],
        "requiredArguments": [
            {
                "type": "Vector3",
                "name": "position",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "Vector3",
                "name": "rotation",
                "default": null
            }
        ]
    },
    {
        "functionName": "Vector2",
        "description": "This is the default constructor for the Vector2 class and returns a Vector2 object.",
        "returnValues": [
            "vector2"
        ],
        "requiredArguments": [
            {
                "type": "mixed",
                "name": "vectorOrX",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "y",
                "default": null
            }
        ]
    },
    {
        "functionName": "Vector3",
        "description": "The vector3 class represents a three-dimensional vector.",
        "returnValues": [
            "vector3"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "float",
                "name": "x",
                "default": "0"
            },
            {
                "type": "float",
                "name": "y",
                "default": "0"
            },
            {
                "type": "float",
                "name": "z",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "Vector4",
        "description": "The Vector4 class is a class introduced in 1.4",
        "returnValues": [
            "vector4"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": "0"
            },
            {
                "type": "float",
                "name": "y",
                "default": "0"
            },
            {
                "type": "float",
                "name": "z",
                "default": "0"
            },
            {
                "type": "float",
                "name": "w",
                "default": "0"
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createObject",
        "description": "Creates an object element at a given position and rotation.",
        "returnValues": [
            "object"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelId",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rx",
                "default": null
            },
            {
                "type": "float",
                "name": "ry",
                "default": null
            },
            {
                "type": "float",
                "name": "rz",
                "default": null
            },
            {
                "type": "bool",
                "name": "isLowLOD",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "breakObject",
        "description": "This function breaks a specific object.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getObjectScale",
        "description": "This function returns the visible size of an object.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "moveObject",
        "description": "This function will smoothly move an object from its current position to a specified rotation and position.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "int",
                "name": "time",
                "default": null
            },
            {
                "type": "float",
                "name": "targetx",
                "default": null
            },
            {
                "type": "float",
                "name": "targety",
                "default": null
            },
            {
                "type": "float",
                "name": "targetz",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "moverx",
                "default": null
            },
            {
                "type": "float",
                "name": "movery",
                "default": null
            },
            {
                "type": "float",
                "name": "moverz",
                "default": null
            },
            {
                "type": "string",
                "name": "strEasingType",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingPeriod",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingAmplitude",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingOvershoot",
                "default": null
            }
        ]
    },
    {
        "functionName": "respawnObject",
        "description": "This function respawns a specific object.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "toggleObjectRespawn",
        "description": "This function is used to toggle if an object should respawn after it got destroyed",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "bool",
                "name": "respawn",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isObjectRespawnable",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setObjectScale",
        "description": "This function changes the visible size of an object.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "float",
                "name": "scale",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "scaleY",
                "default": "scale"
            },
            {
                "type": "float",
                "name": "scaleZ",
                "default": "scale"
            }
        ]
    },
    {
        "functionName": "isObjectMoving",
        "description": "This function checks if an object is moving.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isObjectBreakable",
        "description": "This function checks if an object / model ID is breakable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setObjectBreakable",
        "description": "This function sets an object to be breakable/unbreakable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "bool",
                "name": "breakable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "stopObject",
        "description": "This will allow you to stop an object that is currently moving.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getObjectMass",
        "description": "This function returns the mass of a specified object.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getObjectProperty",
        "description": "This function gets a property of the specified object.",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setObjectMass",
        "description": "This function sets the mass of a specified object. Changing the mass leads to a different movement behavior for especially dynamic objects.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "float",
                "name": "mass",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setObjectProperty",
        "description": "This function sets a property of the specified object.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "object",
                "name": "theObject",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "var",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "clearDebugBox",
        "description": "This function clears the debug box.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isChatInputBlocked",
        "description": "This function checks if the player's chat input is blocked.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isChatVisible",
        "description": "This function checks if player's chat is visible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "clearChatBox",
        "description": "This function clears the chatbox. It does not clear the console (F8)",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "outputChatBox",
        "description": "This outputs the specified text string to the chatbox. It can be specified as a message to certain player(s) or all players.",
        "returnValues": [],
        "requiredArguments": [
            {
                "type": "string",
                "name": "message",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "number",
                "name": "r",
                "default": "255"
            },
            {
                "type": "number",
                "name": "g",
                "default": "255"
            },
            {
                "type": "number",
                "name": "b",
                "default": "255"
            },
            {
                "type": "bool",
                "name": "colorCoded",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "outputConsole",
        "description": "This outputs the specified text string to the console window (accessed with F8 or ~ key). It can be specified as a message to certain player(s) or all players.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "outputDebugString",
        "description": "This function outputs scripting debug messages, which can be read by enabling the debug textbox. The debug display level can then be set so that info or warning messages get filtered out.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "level",
                "default": "3"
            },
            {
                "type": "int",
                "name": "red",
                "default": "255"
            },
            {
                "type": "int",
                "name": "green",
                "default": "255"
            },
            {
                "type": "int",
                "name": "blue",
                "default": "255"
            }
        ]
    },
    {
        "functionName": "showChat",
        "description": "This function is used to show or hide the player's chat.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "show",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "inputBlocked",
                "default": null
            }
        ]
    },
    {
        "functionName": "canPedBeKnockedOffBike",
        "description": "This function checks if the given ped can fall off bikes.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedAnalogControlState",
        "description": "This function retrieves the analog control state of a ped, as set by setPedAnalogControlState.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "controlName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "rawValue",
                "default": null
            }
        ]
    },
    {
        "functionName": "getPedAnimation",
        "description": "Gets the animation of a player or ped that was set using setPedAnimation.",
        "returnValues": [
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedBonePosition",
        "description": "Returns the 3D world coordinates of a specific bone of a given ped.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "bone",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedCameraRotation",
        "description": "This function gets the current camera rotation of a ped.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedControlState",
        "description": "Checks whether a ped or the localplayer has a certain control pressed.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "control",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedMoveState",
        "description": "This function returns the current move state for the specified ped.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedOxygenLevel",
        "description": "This function returns the current oxygen level of the specified ped.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedSimplestTask",
        "description": "This function is used to get the name of a specified ped's current simplest task.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedTargetCollision",
        "description": "This function allows retrieval of where a ped's target is blocked. It will only be blocked if there is an obstacle within a ped's target range.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "targetingPed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedTargetEnd",
        "description": "This function allows retrieval of the position where a ped's target range ends, when he is aiming with a weapon.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "targetingPed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedTargetStart",
        "description": "This function allows retrieval of the position a ped's target range begins, when he is aiming with a weapon.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "targetingPed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedTask",
        "description": "This function is used to get any simple or complex task of a certain type for a ped.",
        "returnValues": [
            "string",
            "string",
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "priority",
                "default": null
            },
            {
                "type": "int",
                "name": "taskType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedVoice",
        "description": "Gets the current voice of a ped.",
        "returnValues": [
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedWeaponMuzzlePosition",
        "description": "Returns the world position of the muzzle of the weapon that a ped is currently carrying. The weapon muzzle is the end of the gun barrel where the bullets/rockets/... come out.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "givePedWeapon",
        "description": "This function gives the specified weapon to the specified ped. This function can't be used on players, use giveWeapon for that.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "weapon",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "ammo",
                "default": "30"
            },
            {
                "type": "bool",
                "name": "setAsCurrent",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "isPedBleeding",
        "description": "This function gets the state of a player's or ped's bleeding effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedDoingTask",
        "description": "This function checks if the specified ped is carrying out a certain task.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "taskName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedReloadingWeapon",
        "description": "This function is used to determine whether or not a ped is currently reloading their weapon. Useful to stop certain quick reload exploits.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedTargetingMarkerEnabled",
        "description": "This function checks whether health target markers are drawn as set by setPedTargetingMarkerEnabled or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetPedVoice",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setAnalogControlState",
        "description": "This sets the analog control state of a control for the local player. To change the analog controls for a ped, please use setPedAnalogControlState.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "control",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "state",
                "default": null
            },
            {
                "type": "bool",
                "name": "forceOverrideNextFrame",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setPedAimTarget",
        "description": "This function allows you to set a ped's aim target to a specific point. If a ped is within a certain range defined by getPedTargetStart and getPedTargetEnd he will be targeted and shot.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedAnalogControlState",
        "description": "Sets an analog state of a specified ped's control, as if they pressed or released it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "control",
                "default": null
            },
            {
                "type": "float",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedBleeding",
        "description": "This function allows you to set player's or ped's bleeding effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "bool",
                "name": "bleeding",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedCameraRotation",
        "description": "This function sets the camera rotation of a ped, e.g. where its camera will look at. Don't confuse this with getCameraMatrix, because that function is designed for fixed (scripted) camera moves.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "float",
                "name": "cameraRotation",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedCanBeKnockedOffBike",
        "description": "This function controls if a ped can fall of his bike by accident - namely by banging into a wall.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "bool",
                "name": "canBeKnockedOffBike",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedControlState",
        "description": "This function makes a ped or player press or release a certain control.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "control",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedEnterVehicle",
        "description": "This function makes a ped enter a vehicle, similar to the enter_exit control state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": "nil"
            },
            {
                "type": "bool",
                "name": "passenger",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setPedExitVehicle",
        "description": "This function makes a ped exit a vehicle, similar to the enter_exit control state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedFootBloodEnabled",
        "description": "This function checks if player feets are bleeding.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedFootBloodEnabled",
        "description": "This function makes a ped's footprints bloody.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedLookAt",
        "description": "Makes a ped turn his head and look at a specific world position or element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "time",
                "default": "3000"
            },
            {
                "type": "int",
                "name": "blend",
                "default": "1000"
            },
            {
                "type": "element",
                "name": "target",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "setPedOxygenLevel",
        "description": "This function allows you to set the oxygen level of a ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "float",
                "name": "oxygen",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedTargetingMarkerEnabled",
        "description": "This function is used to toggle the health target marker on top of all pedestrians.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedVoice",
        "description": "Changes the voice of a ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "voiceType",
                "default": null
            },
            {
                "type": "string",
                "name": "voiceName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "addPedClothes",
        "description": "This function is used to set the current clothes on a ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesTexture",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesModel",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedClothes",
        "description": "This function is used to get the current clothes texture and model of a certain type on a ped.",
        "returnValues": [
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removePedClothes",
        "description": "This function is used to remove the current clothes of a certain type on a ped. It will remove them if the clothesTexture and clothesModel aren't specified, or if they match the current clothes on that slot.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "clothesType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "clothesTexture",
                "default": null
            },
            {
                "type": "string",
                "name": "clothesModel",
                "default": null
            }
        ]
    },
    {
        "functionName": "createPed",
        "description": "Creates a Ped in the GTA world.",
        "returnValues": [
            "ped"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelid",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rot",
                "default": "0.0"
            },
            {
                "type": "bool",
                "name": "synced",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getPedAmmoInClip",
        "description": "This function returns an integer that contains the ammo in a specified ped's weapon. See Weapon Info",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "weaponSlot",
                "default": "current"
            }
        ]
    },
    {
        "functionName": "getPedArmor",
        "description": "This function returns the current armor of the specified ped.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedFightingStyle",
        "description": "Retrieves the fighting style a player/ped is currently using.\nFunction also added client-side.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedOccupiedVehicle",
        "description": "This function gets the vehicle that the ped is currently in or is trying to enter, if any.",
        "returnValues": [
            "vehicle"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedOccupiedVehicleSeat",
        "description": "This function gets the seat that a specific ped is sitting in in a vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedStat",
        "description": "This function returns the value of the specified statistic of a specific ped.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "stat",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedTarget",
        "description": "This function is used to get the element a ped is currently targeting.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedTotalAmmo",
        "description": "This function returns an integer that contains the total ammo in a specified ped's weapon. See Weapon Info",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "weaponSlot",
                "default": "current"
            }
        ]
    },
    {
        "functionName": "getPedWalkingStyle",
        "description": "Returns the walking style ID of a ped. This ID determines the set of animations that is used for walking, running etc.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedWeapon",
        "description": "This function tells you which weapon type is in a certain weapon slot of a ped.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "weaponSlot",
                "default": "current"
            }
        ]
    },
    {
        "functionName": "getPedWeaponSlot",
        "description": "This function gets a ped's selected weapon slot.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPedContactElement",
        "description": "This function detects the element a ped is standing on. This can be a vehicle or an object.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getValidPedModels",
        "description": "This function returns all valid ped models. The syntax is different for server and client sides.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "includeCustom",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "isPedChoking",
        "description": "This function checks if the specified ped is choking (coughing) or not. This happens as a result of weapons that produce smoke - smoke grenades, fire extinguisher and the spray can.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedDead",
        "description": "This function checks if the specified ped is dead or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedDoingGangDriveby",
        "description": "This function checks if the ped is in the driveby state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedDucked",
        "description": "This function checks if the specified ped is ducked (crouched) or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedHeadless",
        "description": "With this function, you can check if a ped has a head or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedInVehicle",
        "description": "Checks whether or not a given ped is currently in a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedOnFire",
        "description": "This function checks if the specified ped is on fire or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedOnGround",
        "description": "This function is used to determine whether or not a ped is on the ground. This is for on-foot usage only.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPedWearingJetpack",
        "description": "Checks whether or not a ped is currently wearing a jetpack.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "killPed",
        "description": "This function kills the specified ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "ped",
                "name": "theKiller",
                "default": "nil"
            },
            {
                "type": "int",
                "name": "weapon",
                "default": "255"
            },
            {
                "type": "int",
                "name": "bodyPart",
                "default": "255"
            },
            {
                "type": "bool",
                "name": "stealth",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "removePedFromVehicle",
        "description": "This function removes a ped from a vehicle immediately. This works for drivers and passengers. Note that this removes the ped from the vehicle and puts him in the exact position where the command was initiated.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedAnimation",
        "description": "Sets the current animation of a player or ped. Not specifying the type of animation will automatically cancel the current one.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "block",
                "default": "nil"
            },
            {
                "type": "string",
                "name": "anim",
                "default": "nil"
            },
            {
                "type": "int",
                "name": "time",
                "default": "-1"
            },
            {
                "type": "bool",
                "name": "loop",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "updatePosition",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "interruptable",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "freezeLastFrame",
                "default": "true"
            },
            {
                "type": "int",
                "name": "blendTime",
                "default": "250"
            },
            {
                "type": "bool",
                "name": "retainPedState",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setPedAnimationProgress",
        "description": "Sets the current animation progress of a player or ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "anim",
                "default": null
            },
            {
                "type": "float",
                "name": "progress",
                "default": null
            }
        ]
    },
    {
        "functionName": "setPedAnimationSpeed",
        "description": "Sets the speed of a currently running animation for a particular player or ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "anim",
                "default": "\"\""
            },
            {
                "type": "float",
                "name": "speed",
                "default": "1.0"
            }
        ]
    },
    {
        "functionName": "setPedArmor",
        "description": "This function allows you to set the armor value of a ped.\nFunction also added client-side.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "float",
                "name": "armor",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedDoingGangDriveby",
        "description": "This function sets the driveby state of a ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedFightingStyle",
        "description": "Changes a ped's fighting style. Most styles only change the 'special attack' which is done using the Aim and Enter keys.\nFunction also added client-side.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "style",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedHeadless",
        "description": "With this function, you can set if a ped has a head or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "bool",
                "name": "headState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedOnFire",
        "description": "This function can be used to set a ped on fire or extinguish a fire on it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "bool",
                "name": "isOnFire",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedStat",
        "description": "This function allows you to set the value of a specific statistic for a ped. Visual stats (FAT and BODY_MUSCLE) can only be used on the CJ skin, they have no effect on other skins. When this function is used client-side, it can only be used on client-side created peds.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "stat",
                "default": null
            },
            {
                "type": "float",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedWalkingStyle",
        "description": "Sets the walking style of a ped. A walking style consists of a set of animations that are used for walking, running etc.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "style",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedWeaponSlot",
        "description": "This function changes the selected weapon slot of a ped.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "int",
                "name": "weaponSlot",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "warpPedIntoVehicle",
        "description": "This function is used to warp or force a ped into a vehicle.    There are no animations involved when this happens.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePed",
                "default": null
            },
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "seat",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "createPickup",
        "description": "This function creates a pickup element, which is placed in the GTA world and can be picked up to retrieve a health, armour or a weapon.",
        "returnValues": [
            "pickup"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            },
            {
                "type": "int",
                "name": "theType",
                "default": null
            },
            {
                "type": "int",
                "name": "amount/weapon/model",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "respawnTime",
                "default": "30000"
            },
            {
                "type": "int",
                "name": "ammo",
                "default": "50"
            }
        ]
    },
    {
        "functionName": "getPickupAmmo",
        "description": "This function retrieves the amount of ammo in a weapon pickup.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "pickup",
                "name": "thePickup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPickupAmount",
        "description": "This function retrieves the amount of health or armor given from a pickup.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "pickup",
                "name": "thePickup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPickupType",
        "description": "This function retrieves the type of a pickup, either a health, armour or weapon pickup.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "pickup",
                "name": "thePickup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPickupType",
        "description": "This function allows changing the type of a pickup to a Weapon, Armour or Health pickup, and allows you to set the health points or the weapon and ammo that the pickup will give.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "pickup",
                "name": "thePickup",
                "default": null
            },
            {
                "type": "int",
                "name": "theType",
                "default": null
            },
            {
                "type": "int",
                "name": "amount/weapon/model",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "ammo",
                "default": null
            }
        ]
    },
    {
        "functionName": "getPickupWeapon",
        "description": "This function retrieves the weapon ID of a weapon pickup.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "pickup",
                "name": "thePickup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getLocalPlayer",
        "description": "This function gets the player element of the client running the current script.",
        "returnValues": [
            "player"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerMapBoundingBox",
        "description": "This function gets the GUI bounding box of the player map (F11) texture.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerMapOpacity",
        "description": "This function allows to get the opacity of the player map (F11).",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isPlayerMapVisible",
        "description": "This function checks if the local player has their map showing (F11).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetBlurLevel",
        "description": "Resets the motion blur level on the client's screen to default value (36).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isPlayerHudComponentVisible",
        "description": "This function can be used to check whether an hud component is visable or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "component",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPlayerCrosshairVisible",
        "description": "Returns true if the player has the crosshair visible, false otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerTeam",
        "description": "This function gets the current team a player is on.",
        "returnValues": [
            "team"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerBlurLevel",
        "description": "This function allows you to check the current blur level of a specified player.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerBlurLevel",
        "description": "Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "level",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerSerial",
        "description": "This function returns the serial for a specified player.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "forcePlayerMap",
        "description": "This function is used to forcefully show a player's map (F11).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "bool",
                "name": "forceOn",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerScriptDebugLevel",
        "description": "This will allow you to retrieve the player current debug script level.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerFromName",
        "description": "This function returns a player element for the player with the name passed to the function.",
        "returnValues": [
            "player"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "playerName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerMoney",
        "description": "Returns the amount of money a player currently has.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerName",
        "description": "This function returns a string containing the name of the specified player.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerNametagColor",
        "description": "This function gets the current color of a player's name tag as RGB values. These are in the range 0-255.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerNametagText",
        "description": "This will allow you to retrieve the name tag a player is currently using.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerPing",
        "description": "This function returns the ping of a specified player. The ping is the number of milliseconds that data takes to travel from the player's client to the server or vice versa. If a player is using a VPN their ping will still be returned correctly.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerWantedLevel",
        "description": "This function gets a player's current wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "givePlayerMoney",
        "description": "This function adds money to a player's current money amount.    To set absolute values, setPlayerMoney can be used.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "amount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPlayerMapForced",
        "description": "This function checks if the specified player's map (F11) has been forced on or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isPlayerNametagShowing",
        "description": "This function will allow you to determine if a player's name tag is currently showing.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerHudComponentVisible",
        "description": "This function will show or hide a part of the player's HUD.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "component",
                "default": null
            },
            {
                "type": "bool",
                "name": "show",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerMoney",
        "description": "Sets a player's money to a certain value, regardless of current player money. It should be noted that setting negative values does not work and in fact gives the player large amounts of money.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "amount",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "instant",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setPlayerNametagColor",
        "description": "This allows you to change the RGB color mixture in the name tags of players.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "r",
                "default": null
            },
            {
                "type": "int",
                "name": "g",
                "default": null
            },
            {
                "type": "int",
                "name": "b",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerNametagShowing",
        "description": "This function allows you to set whether a player's nametag visibility both clientside and serverside",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "bool",
                "name": "showing",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerNametagText",
        "description": "This will change the text of a player's nickname in the world to something besides the nickname he chose. This will not change the player's actual nickname, it only changes the visible aspect inside the world (you will see his original nickname in the scoreboard and will refer to his original name in scripts).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "text",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "takePlayerMoney",
        "description": "This function subtracts money from a player's current money amount.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "amount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "countPlayersInTeam",
        "description": "This function is for returning the number of players in the specified team.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayersInTeam",
        "description": "This function retrieves all the players of the specified team.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVoiceEnabled",
        "description": "Added to client side.\nThis function allows you to make the server reveal whether or not voice is currently enabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setControlState",
        "description": "Sets a state of a specified player's control, as if they pressed or released it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "control",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getControlState",
        "description": "This function will check if a player is pressing a particular control. Controls are those that affect GTA. If you wish to get the state of another key, use bindKey and a command function.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "controlName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createProjectile",
        "description": "This function creates a projectile of the specified type on the specified coordinates.",
        "returnValues": [
            "projectile"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "creator",
                "default": null
            },
            {
                "type": "int",
                "name": "weaponType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "force",
                "default": "1.0"
            },
            {
                "type": "element",
                "name": "target",
                "default": "nil"
            },
            {
                "type": "float",
                "name": "rotX",
                "default": null
            },
            {
                "type": "float",
                "name": "rotY",
                "default": null
            },
            {
                "type": "float",
                "name": "rotZ",
                "default": null
            },
            {
                "type": "float",
                "name": "velX",
                "default": null
            },
            {
                "type": "float",
                "name": "velY",
                "default": null
            },
            {
                "type": "float",
                "name": "velZ",
                "default": null
            },
            {
                "type": "int",
                "name": "model",
                "default": null
            }
        ]
    },
    {
        "functionName": "getProjectileCounter",
        "description": "Get the time left before a projectile detonates.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "projectile",
                "name": "projectile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getProjectileCreator",
        "description": "This function returns the creator of the specified projectile.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "projectile",
                "name": "theProjectile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getProjectileForce",
        "description": "This function returns the force of the specified projectile.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "projectile",
                "name": "theProjectile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getProjectileTarget",
        "description": "This function returns the target of the specified projectile.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "projectile",
                "name": "theProjectile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getProjectileType",
        "description": "This function returns the type of the specified projectile.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "projectile",
                "name": "theProjectile",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setProjectileCounter",
        "description": "Will change the projectile counter timer which depending on the projectile type will do different things:",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "projectile",
                "name": "projectile",
                "default": null
            },
            {
                "type": "int",
                "name": "timeToDetonate",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "detonateSatchels",
        "description": "This function can be used to detonate a players satchels.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "createRadarArea",
        "description": "This function can be used to create custom radar areas on the radar.",
        "returnValues": [
            "radararea"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startPosX",
                "default": null
            },
            {
                "type": "float",
                "name": "startPosY",
                "default": null
            },
            {
                "type": "float",
                "name": "sizeX",
                "default": null
            },
            {
                "type": "float",
                "name": "sizeY",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "r",
                "default": "255"
            },
            {
                "type": "int",
                "name": "g",
                "default": "0"
            },
            {
                "type": "int",
                "name": "b",
                "default": "0"
            },
            {
                "type": "int",
                "name": "a",
                "default": "255"
            },
            {
                "type": "element",
                "name": "visibleTo",
                "default": "root"
            }
        ]
    },
    {
        "functionName": "getRadarAreaColor",
        "description": "This function can be used to retrieve the current color of a radar area.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theRadararea",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getRadarAreaSize",
        "description": "This function is used for getting the X and Y size of an existing radar area.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theRadararea",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isInsideRadarArea",
        "description": "This function checks if a 2D position is inside a radar area or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theArea",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isRadarAreaFlashing",
        "description": "This function allows detection of whether a radar area is flashing or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theRadararea",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setRadarAreaColor",
        "description": "Sets the color of an existing radar area.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theRadarArea",
                "default": null
            },
            {
                "type": "int",
                "name": "r",
                "default": null
            },
            {
                "type": "int",
                "name": "g",
                "default": null
            },
            {
                "type": "int",
                "name": "b",
                "default": null
            },
            {
                "type": "int",
                "name": "a",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setRadarAreaFlashing",
        "description": "This function makes an existing radar area flash in transparency.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theRadarArea",
                "default": null
            },
            {
                "type": "bool",
                "name": "flash",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setRadarAreaSize",
        "description": "This function changes the size of an existing radar area.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "radararea",
                "name": "theRadararea",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceGUIElement",
        "description": "This function retrieves a resource's GUI element. The resource's GUI element is the element in the element tree which is the default parent of all GUI elements that belong to a particular resource. It has a predefined variable called guiRoot, and each resource has one of these. You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": "getThisResource"
            }
        ]
    },
    {
        "functionName": "abortRemoteRequest",
        "description": "Aborts a fetchRemote or callRemote request.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "request",
                "name": "theRequest",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "call",
        "description": "This function is used to call a function from another resource (which must be running).",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "functionName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ]
    },
    {
        "functionName": "fetchRemote",
        "description": "This function allows you to post and receive data from HTTP servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the download completes.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "URL",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "options",
                "default": null
            },
            {
                "type": "callback",
                "name": "callbackFunction",
                "default": null
            },
            {
                "type": "table",
                "name": "callbackArguments",
                "default": null
            }
        ]
    },
    {
        "functionName": "getResourceConfig",
        "description": "This function is used to return the root node of a configuration file. Config files must be predefined in a resource's meta file.    An alternative way to load XML files is to use xmlLoadFile.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceDynamicElementRoot",
        "description": "This function retrieves the dynamic element root of a specified resource. The dynamic element root is the parent of elements that are created by scripts (e.g. with createObject) unless they specify a different parent.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceExportedFunctions",
        "description": "Returns a table containing the names of the functions that a resource exports. It will return the exports of the current resource if there is no argument passed in.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": "getThisResource"
            }
        ]
    },
    {
        "functionName": "getResourceFromName",
        "description": "This function is used to retrieve a resource from its name. A resource's name is the same as its folder or file archive name on the server (without the extension).",
        "returnValues": [
            "resource"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "resourceName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceName",
        "description": "This function gets the name of the specified resource.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "res",
                "default": "getThisResource"
            }
        ]
    },
    {
        "functionName": "getResourceRootElement",
        "description": "This function retrieves a resource's root element. The resource's root element is the element in the element tree which is the parent of all elements that belong to a particular resource (except for elements specifically created elsewhere). You can attach event handlers to this element to easily capture events that originate from your resource (and global events that originate from the root element).",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": "getThisResource"
            }
        ]
    },
    {
        "functionName": "getResourceState",
        "description": "This function returns the state of a given resource",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getThisResource",
        "description": "This function retrieves the resource from which the function call was made.",
        "returnValues": [
            "resource"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getRemoteRequests",
        "description": "Gets all fetchRemote and callRemote requests currently running.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "getRemoteRequestInfo",
        "description": "Gets informations of an fetchRemote or callRemote request info.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "request",
                "name": "theRequest",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "postDataLength",
                "default": "0"
            },
            {
                "type": "bool",
                "name": "includeHeaders",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "createSearchLight",
        "description": "This function creates a searchlight. A searchlight is a spotlight which looks like the one available in the Police Maverick.",
        "returnValues": [
            "searchlight"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            },
            {
                "type": "float",
                "name": "startRadius",
                "default": null
            },
            {
                "type": "float",
                "name": "endRadius",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "renderSpot",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getSearchLightEndPosition",
        "description": "This function gets the end position of a searchlight element.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSearchLightEndRadius",
        "description": "This function gets the end radius of a searchlight element.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSearchLightStartPosition",
        "description": "This function gets the start position of a searchlight element.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSearchLightStartRadius",
        "description": "This function gets the start radius of a searchlight element.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchLight",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSearchLightEndPosition",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchLight",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSearchLightEndRadius",
        "description": "This function sets the end radius of a searchlight element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchlight",
                "default": null
            },
            {
                "type": "float",
                "name": "endRadius",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSearchLightStartPosition",
        "description": "This function sets the start position of a searchlight element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchLight",
                "default": null
            },
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSearchLightStartRadius",
        "description": "This function sets the start radius of a searchlight element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "searchlight",
                "name": "theSearchlight",
                "default": null
            },
            {
                "type": "float",
                "name": "startRadius",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "svgCreate",
        "description": "Creates an svg from size (blank document), filepath or raw data.",
        "returnValues": [
            "svg"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "pathOrRawData",
                "default": null
            },
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "svgGetDocumentXML",
        "description": "Gets the underlying XML document from an SVG element.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "svg",
                "name": "svgElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "svgGetSize",
        "description": "Gets the underlying XML document from an SVG element.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "svg",
                "name": "svgElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "svgSetDocumentXML",
        "description": "Sets the underlying XML document of an SVG element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "svg",
                "name": "svgElement",
                "default": null
            },
            {
                "type": "xmlnode",
                "name": "xmlDocument",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "svgSetSize",
        "description": "Sets the underlying XML document from an SVG element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "svg",
                "name": "svgElement",
                "default": null
            },
            {
                "type": "int",
                "name": "width",
                "default": null
            },
            {
                "type": "int",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "svgSetUpdateCallback",
        "description": "Sets the update callback of an svg element",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "svg",
                "name": "svgElement",
                "default": null
            },
            {
                "type": "function",
                "name": "/",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "countPlayersInTeam",
        "description": "This function is for returning the number of players in the specified team.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerTeam",
        "description": "This function gets the current team a player is on.",
        "returnValues": [
            "team"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayersInTeam",
        "description": "This function retrieves all the players of the specified team.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTeamColor",
        "description": "This function retrieves the color of a team.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTeamFriendlyFire",
        "description": "This function tells you if friendly fire is turned on for the specified team.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTeamFromName",
        "description": "This function finds a team element using the provided team name.",
        "returnValues": [
            "team"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "teamName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTeamName",
        "description": "This function gets the team name of a team object.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createTrayNotification",
        "description": "This function creates a notification balloon on the desktop.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "notificationText",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "iconType",
                "default": "\"default\""
            },
            {
                "type": "bool",
                "name": "useSound",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "downloadFile",
        "description": "This function ensures the requested resource file is correct and then triggers onClientFileDownloadComplete.    If the file has been previously downloaded and the CRC matches, the file will not be downloaded again but onClientFileDownloadComplete will still run. The file should also be included in the resource meta.xml with the download attribute set to \"false\", see meta.xml for more details.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "fileName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getDevelopmentMode",
        "description": "This function is used to get the development mode of the client or whole server. For more information see setDevelopmentMode",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getKeyboardLayout",
        "description": "This function gets the player's keyboard layout settings, which they are currently (keyboard layout can be changed at any moment) using at the time of invocation.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getLocalization",
        "description": "This function gets the player's localization setting as set in the MTA client.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isShowCollisionsEnabled",
        "description": "This function gets the collision previews state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isShowSoundEnabled",
        "description": "This function indicates if world sound IDs should be printed in the debug window or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isTransferBoxAlwaysVisible",
        "description": "Determines if the transfer box should be always visible during downloads. Players can forcefully show the transfer box through a user setting, even if disabled by scripts.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isTransferBoxVisible",
        "description": "Determines if the transfer box is visible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isTrayNotificationEnabled",
        "description": "This function returns a boolean value whether the client has enabled tray notifications in his settings or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setClipboard",
        "description": "This function sets the players clipboard text (what appears when you paste with CTRL + V)",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theText",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDevelopmentMode",
        "description": "This function is used to set the development mode. Setting development mode allows access to special commands which can assist with script debugging.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "enableWeb",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setTransferBoxVisible",
        "description": "Determines whether or not the transfer box should appear to players.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "visible",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWindowFlashing",
        "description": "This function allows the window to flash in the Windows taskbar.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "shouldFlash",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "count",
                "default": "10"
            }
        ]
    },
    {
        "functionName": "showCol",
        "description": "Shows collision previews for developers (colshapes in wireframe, useful when writing scripts).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "showSound",
        "description": "Prints world sound IDs in the debug output window to help when writing scripts with setWorldSoundEnabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "addDebugHook",
        "description": "This function allows tracing of MTA functions and events. It should only be used when debugging scripts as it may degrade script performance.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "hookType",
                "default": null
            },
            {
                "type": "function",
                "name": "callbackFunction",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "nameList",
                "default": null
            }
        ]
    },
    {
        "functionName": "base64Decode",
        "description": "This function returns the decrypted data from base64 representation of the encrypted block",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "data",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "base64Encode",
        "description": "This function returns the base64 representation of the encoded block of data",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "data",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "debugSleep",
        "description": "debugSleep freezes the client/server for the specified time. This means that all synchronization, rendering and script execution will stop except HTTP processing invoked by fetchRemote. This function only works, if development mode is enabled by setDevelopmentMode and can be utilised to build a debugger that communicates via HTTP requests with the editor/IDE.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "sleep",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "decodeString",
        "description": "This function decodes an encoded string using the specified algorithm. The counterpart of this function is encodeString.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "algorithm",
                "default": null
            },
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "options",
                "default": null
            },
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "encodeString",
        "description": "This function encodes a string using the specified algorithm. The counterpart of this function is decodeString.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "algorithm",
                "default": null
            },
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "options",
                "default": null
            },
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "fromJSON",
        "description": "This function parses a JSON formatted string into variables. You can use toJSON to encode variables into a JSON string that can be read by this function.",
        "returnValues": [
            "var"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "json",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "generateKeyPair",
        "description": "This function creates a new public key and private key for encrypting data",
        "returnValues": [
            "string",
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "algorithm",
                "default": null
            },
            {
                "type": "table",
                "name": "options",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "getColorFromString",
        "description": "This function will extract Red, Green, Blue and Alpha values from a hex string you provide it. These strings follow the same format as used in HTML, with addition of the Alpha values.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theColor",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getDevelopmentMode",
        "description": "This function is used to get the development mode of the client or whole server. For more information see setDevelopmentMode",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getDistanceBetweenPoints2D",
        "description": "This function returns the distance between two 2 dimensional points using the pythagorean theorem.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x1",
                "default": null
            },
            {
                "type": "float",
                "name": "y1",
                "default": null
            },
            {
                "type": "float",
                "name": "x2",
                "default": null
            },
            {
                "type": "float",
                "name": "y2",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getDistanceBetweenPoints3D",
        "description": "This function returns the distance between two 3 dimensional points using the pythagorean theorem.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x1",
                "default": null
            },
            {
                "type": "float",
                "name": "y1",
                "default": null
            },
            {
                "type": "float",
                "name": "z1",
                "default": null
            },
            {
                "type": "float",
                "name": "x2",
                "default": null
            },
            {
                "type": "float",
                "name": "y2",
                "default": null
            },
            {
                "type": "float",
                "name": "z2",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getEasingValue",
        "description": "Used for custom Lua based interpolation, returns the easing value (animation time to use in your custom interpolation) given a progress and an easing function.\nIn most cases, either moveObject or interpolateBetween can do the job. getEasingValue is only provided in case you want to do your own custom interpolation based on easing.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fProgress",
                "default": null
            },
            {
                "type": "string",
                "name": "strEasingType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "fEasingPeriod",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingAmplitude",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingOvershoot",
                "default": null
            }
        ]
    },
    {
        "functionName": "getNetworkStats",
        "description": "This function returns network status information.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getNetworkUsageData",
        "description": "This function returns a table containing network usage information about inbound and outbound packets.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPerformanceStats",
        "description": "This function returns performance information.",
        "returnValues": [
            "table",
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "category",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "options",
                "default": "\"\""
            },
            {
                "type": "string",
                "name": "filter",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "getRealTime",
        "description": "This function gets the server or client (if used client sided it returns time as set on client's computer) real time and returns it in a table. If you want to get the in-game time (shown on GTA's clock) use getTime.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "seconds",
                "default": "current"
            },
            {
                "type": "bool",
                "name": "localTime",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getTickCount",
        "description": "This function returns amount of time that your system has been running in milliseconds. By comparing two values of getTickCount, you can determine how much time has passed (in milliseconds) between two events. This could be used to determine how efficient your code is, or to time how long a player takes to complete a task.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getTimerDetails",
        "description": "This function is for getting the details of a running timer.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "timer",
                "name": "theTimer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTimers",
        "description": "This function returns a table of all active timers that the resource that calls it has created. Alternatively, only the timers with a remaining time less than or equal to a certain value can be retrieved.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "theTime",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "getFPSLimit",
        "description": "This function retrieves the maximum FPS (Frames per second) that players on the server can run their game at.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getUserdataType",
        "description": "This function gets the type of a userdata value, which is not always a element in the element tree.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "userdata",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVersion",
        "description": "This function gives you various version information about MTA and the operating system.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "gettok",
        "description": "This function splits a string using the given separating character and returns one specified substring.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "int",
                "name": "tokenNumber",
                "default": null
            },
            {
                "type": "string",
                "name": "/",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isTransferBoxVisible",
        "description": "Determines if the transfer box is visible.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setTransferBoxVisible",
        "description": "Determines whether or not the transfer box should appear to players.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "visible",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "hash",
        "description": "This function returns a hash of the specified string in the specified algorithm.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "algorithm",
                "default": null
            },
            {
                "type": "string",
                "name": "dataToHash",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "options",
                "default": null
            }
        ]
    },
    {
        "functionName": "inspect",
        "description": "This function returns human-readable representations of tables and MTA datatypes as a string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "mixed",
                "name": "var",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "options",
                "default": null
            }
        ]
    },
    {
        "functionName": "interpolateBetween",
        "description": "Interpolates a 3D Vector between a source value and a target value using either linear interpolation or any other easing function.\nIt can also be used to interpolate 2D vectors or scalars by only setting some of the x, y, z values and putting 0 to the others.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x1",
                "default": null
            },
            {
                "type": "float",
                "name": "y1",
                "default": null
            },
            {
                "type": "float",
                "name": "z1",
                "default": null
            },
            {
                "type": "float",
                "name": "x2",
                "default": null
            },
            {
                "type": "float",
                "name": "y2",
                "default": null
            },
            {
                "type": "float",
                "name": "z2",
                "default": null
            },
            {
                "type": "float",
                "name": "fProgress",
                "default": null
            },
            {
                "type": "string",
                "name": "strEasingType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "fEasingPeriod",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingAmplitude",
                "default": null
            },
            {
                "type": "float",
                "name": "fEasingOvershoot",
                "default": null
            }
        ]
    },
    {
        "functionName": "iprint",
        "description": "This function intelligently outputs debug messages into the Debug Console.    It is similar to outputDebugString, but outputs useful information for any variable type, and does not require use of Lua's tostring.    This includes information about element types, and table structures.    It is especially useful for quick debug tasks.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "mixed",
                "name": "var1",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "mixed",
                "name": "var2",
                "default": null
            },
            {
                "type": "mixed",
                "name": "var3...",
                "default": null
            }
        ]
    },
    {
        "functionName": "isOOPEnabled",
        "description": "This function checks whether OOP (Object Oriented Programming) is enabled in the current resource or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isTimer",
        "description": "This function checks if a variable is a timer.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "timer",
                "name": "theTimer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isTimerPaused",
        "description": "This function allows you to check whether a timer is paused.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "timer",
                "name": "theTimer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTimerPaused",
        "description": "This function is used to either pause or resume a timer.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "timer",
                "name": "theTimer",
                "default": null
            },
            {
                "type": "bool",
                "name": "paused",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "killTimer",
        "description": "This function allows you to kill/halt existing timers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "timer",
                "name": "theTimer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "md5",
        "description": "Calculates the MD5 hash of the specified string and returns its hexadecimal representation.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "str",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "passwordHash",
        "description": "This function creates a new password hash using a specified hashing algorithm.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "password",
                "default": null
            },
            {
                "type": "string",
                "name": "algorithm",
                "default": null
            },
            {
                "type": "table",
                "name": "options",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "passwordVerify",
        "description": "This function verifies whether a password matches a password hash.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "password",
                "default": null
            },
            {
                "type": "string",
                "name": "hash",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "table",
                "name": "options",
                "default": null
            },
            {
                "type": "function",
                "name": "callback",
                "default": null
            }
        ]
    },
    {
        "functionName": "pregFind",
        "description": "This function stops at the first occurrence of the pattern in the input string and returns the result of the search.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "subject",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int/string",
                "name": "flags",
                "default": null
            }
        ]
    },
    {
        "functionName": "pregMatch",
        "description": "This function returns all matches.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "base",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int/string",
                "name": "flags",
                "default": "0"
            },
            {
                "type": "int",
                "name": "maxResults",
                "default": "100000"
            }
        ]
    },
    {
        "functionName": "pregReplace",
        "description": "This function performs a regular expression search and replace and returns the replaced string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "subject",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            },
            {
                "type": "string",
                "name": "replacement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int/string",
                "name": "flags",
                "default": null
            }
        ]
    },
    {
        "functionName": "removeDebugHook",
        "description": "This function removes hooks added by addDebugHook",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "hookType",
                "default": null
            },
            {
                "type": "function",
                "name": "callbackFunction",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetTimer",
        "description": "This function allows you to reset the elapsed time in existing timers to zero. The function does not reset the 'times to execute' count on timers which have a limited amout of repetitions.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "timer",
                "name": "theTimer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setDevelopmentMode",
        "description": "This function is used to set the development mode. Setting development mode allows access to special commands which can assist with script debugging.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "enableWeb",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setFPSLimit",
        "description": "This function sets the maximum FPS (Frames per second) that players on the server can run their game at.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "fpsLimit",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTimer",
        "description": "This function allows you to trigger a function after a number of milliseconds have elapsed. You can call one of your own functions or a built-in function. For example, you could set a timer to spawn a player after a number of seconds have elapsed.",
        "returnValues": [],
        "requiredArguments": [
            {
                "type": "theFunction",
                "name": null,
                "default": null
            },
            {
                "type": "0",
                "name": null,
                "default": null
            },
            {
                "type": "0",
                "name": null,
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "ref",
        "description": "This function will create a reference to the given argument.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "mixed",
                "name": "objectToReference",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "deref",
        "description": "This function will take a reference obtained by the ref function and returns its Lua element.",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "reference",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "sha256",
        "description": "Calculates the sha256 hash of the specified string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "str",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "split",
        "description": "This function splits a string into substrings. You specify a character that will act as a separating character; this will determine where to split the sub-strings. For example, it can split the string \"Hello World\" into two strings containing the two words, by spliting using a space as a separator.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "stringToSplit",
                "default": null
            },
            {
                "type": "string",
                "name": "/",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "teaDecode",
        "description": "This function decrypts given base64 representation of encrypted data using the Tiny Encryption Algorithm.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "data",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "teaEncode",
        "description": "This functions performs the Tiny Encryption Algorithm on the given string and returns the base64 representation of the encrypted string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
                "default": null
            },
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "toJSON",
        "description": "This function converts a single value (preferably a Lua table) into a JSON encoded string. You can use this to store the data and then load it again using fromJSON.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "var",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "compact",
                "default": "false"
            },
            {
                "type": "string",
                "name": "prettyType",
                "default": "\"none\""
            }
        ]
    },
    {
        "functionName": "tocolor",
        "description": "This function retrieves the hex number of a specified color, useful for the dx functions.\nAdded server-side.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "red",
                "default": null
            },
            {
                "type": "int",
                "name": "green",
                "default": null
            },
            {
                "type": "int",
                "name": "blue",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "alpha",
                "default": "255"
            }
        ]
    },
    {
        "functionName": "getProcessMemoryStats",
        "description": "This function returns a breakdown of the process memory usage. The reported numbers are always byte units and these numbers can be inaccurate.",
        "returnValues": [
            "table|nil"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "utfChar",
        "description": "The function returns the string of the specified UTF code.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "characterCode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utfCode",
        "description": "The function returns the UTF codes of the given string.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theString",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utfLen",
        "description": "The function gets the real length of a string, in characters.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theString",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utfSeek",
        "description": "The function returns the byte position at specified character position.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theString",
                "default": null
            },
            {
                "type": "int",
                "name": "position",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utfSub",
        "description": "The function returns a sub string, from the specified positions on a character.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theString",
                "default": null
            },
            {
                "type": "int",
                "name": "Start",
                "default": null
            },
            {
                "type": "int",
                "name": "End",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitAnd",
        "description": "This function performs a bitwise AND-conjunction on two or more (unsigned) 32-bit integers. See Bitwise operation for more details.",
        "returnValues": [
            "uint"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var1",
                "default": null
            },
            {
                "type": "uint",
                "name": "var2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitNot",
        "description": "This function performs a bitwise NOT on an (unsigned) 32-bit integer. See Bitwise operation for more details.",
        "returnValues": [
            "uint"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitOr",
        "description": "This function performs a bitwise OR-conjunction on two or more (unsigned) 32-bit integers. See Bitwise operation for more details.",
        "returnValues": [
            "uint"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var1",
                "default": null
            },
            {
                "type": "uint",
                "name": "var2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitXor",
        "description": "This function performs a bitwise XOR-conjunction (exclusive OR) on two or more (unsigned) 32-bit integers. See Bitwise operation for more details.",
        "returnValues": [
            "uint"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var1",
                "default": null
            },
            {
                "type": "uint",
                "name": "var2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitTest",
        "description": "This function performs an AND-conjunction on two or more (unsigned) 32-bit integers and checks, whether the conjuncted value is zero or not. See Bitwise operation for more details.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var1",
                "default": null
            },
            {
                "type": "uint",
                "name": "var2",
                "default": null
            },
            {
                "type": "...",
                "name": null,
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitLRotate",
        "description": "This functions performs a bitwise circular left-rotation on the integer value by integer n positions.\nSee Bitwise operation for more details.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "value",
                "default": null
            },
            {
                "type": "int",
                "name": "n",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitRRotate",
        "description": "This functions performs a bitwise circular right-rotation on the integer value by integer n positions.\nSee Bitwise operation for more details.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "value",
                "default": null
            },
            {
                "type": "int",
                "name": "n",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitLShift",
        "description": "This functions performs a logical left shift on the integer value by integer n positions. In a logical shift, zeros are shifted in to replace the discarded bits.\nSee Bitwise operation for more details.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "value",
                "default": null
            },
            {
                "type": "int",
                "name": "n",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitRShift",
        "description": "This functions performs a logical right shift on the integer value by integer n positions. In a logical shift, zeros are shifted in to replace the discarded bits.\nSee Bitwise operation for more details.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "value",
                "default": null
            },
            {
                "type": "int",
                "name": "n",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitArShift",
        "description": "This functions performs an arithmetic shift on the integer value by integer n positions. In an arithmetic shift, zeros are shifted in to replace the discarded bits. In a right arithmetic shift, the sign bit is shifted in on the left, thus preserving the sign of the operand.\nSee Bitwise operation for more details.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "value",
                "default": null
            },
            {
                "type": "int",
                "name": "n",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "bitExtract",
        "description": "This function returns the unsigned number formed by the bits field to field + width - 1 (range: 0-31).",
        "returnValues": [
            "uint"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var",
                "default": null
            },
            {
                "type": "int",
                "name": "field",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "width",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "bitReplace",
        "description": "This function returns the unsigned number formed by var value with replacement specified at bits field to field + width - 1",
        "returnValues": [
            "uint"
        ],
        "requiredArguments": [
            {
                "type": "uint",
                "name": "var",
                "default": null
            },
            {
                "type": "uint",
                "name": "replaceValue",
                "default": null
            },
            {
                "type": "int",
                "name": "field",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "width",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "utf8.byte",
        "description": "Returns the codepoints for the i-th through j-th character of the string passed.",
        "returnValues": [
            "int",
            "..."
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "i",
                "default": "1"
            },
            {
                "type": "int",
                "name": "j",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "utf8.char",
        "description": "Generates a string representing the character codepoints as arguments.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "codepoints...",
                "default": null
            }
        ]
    },
    {
        "functionName": "utf8.charpos",
        "description": "Converts the UTF-8 codepoint position to byte-string position.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "charpos",
                "default": "0"
            },
            {
                "type": "int",
                "name": "offset",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "utf8.escape",
        "description": "Escapes a string to a UTF-8 format string. It supports several escape formats, see the formatting table.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.find",
        "description": "Finds the first occurrence of the pattern in the string passed. If an instance of the pattern is found, a pair of values representing the start and the end of the matched string is returned.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "startpos",
                "default": "1"
            },
            {
                "type": "boolean",
                "name": "plain",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "utf8.fold",
        "description": "Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings. If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.",
        "returnValues": [
            "string|int"
        ],
        "requiredArguments": [
            {
                "type": "string|int",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.gmatch",
        "description": "This function returns a pattern finding iterator for UTF-8 strings. The iterator will search through the string input looking for instances of the pattern you passed. For more information on iterators read the ForTutorial and IteratorsTutorial.",
        "returnValues": [
            "iterator"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.gsub",
        "description": "Returns a copy of the original input string with replaced matches from the pattern by the replacement value.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            },
            {
                "type": "mixed",
                "name": "replace",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "match_limit",
                "default": "utf8.len"
            }
        ]
    },
    {
        "functionName": "utf8.insert",
        "description": "Inserts a substring into input string. If insert-position is given, the substring will be inserted before the character at this index, otherwise the substring will concatenate to input. The insert position may be negative.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "insert_pos",
                "default": "utf8.len"
            }
        ]
    },
    {
        "functionName": "utf8.len",
        "description": "Returns the length of the string passed.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "i",
                "default": "1"
            },
            {
                "type": "int",
                "name": "j",
                "default": "utf8.len"
            }
        ]
    },
    {
        "functionName": "utf8.fold",
        "description": "Converts a UTF-8 string to folded case (lowercase), which can be used to compare two strings. If input is an integer, it's treat as a codepoint and a convert codepoint (integer) is returned.",
        "returnValues": [
            "string|int"
        ],
        "requiredArguments": [
            {
                "type": "string|int",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.match",
        "description": "Extract substrings by matching patterns in the input string. This function can be used to extract specific information from a string.",
        "returnValues": [
            "string",
            "..."
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            },
            {
                "type": "string",
                "name": "pattern",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "index",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "utf8.ncasecmp",
        "description": "Compares two strings in lower-case and returns the difference indicator (see table below) as an integer value.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "a",
                "default": null
            },
            {
                "type": "string",
                "name": "b",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.next",
        "description": "This is an iteration function to traverse each single codepoint of a UTF-8 string.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "charpos",
                "default": "0"
            },
            {
                "type": "int",
                "name": "offset",
                "default": "1"
            }
        ]
    },
    {
        "functionName": "utf8.remove",
        "description": "This function removes a substring in a UTF-8 string by using a position range.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            },
            {
                "type": "int",
                "name": "start",
                "default": "1"
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "stop",
                "default": "-1"
            }
        ]
    },
    {
        "functionName": "utf8.reverse",
        "description": "Reverses the input string.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.sub",
        "description": "Returns a substring of the string passed. The substring starts at i. If the third argument j is not given, the substring will end at the end of the string. If the third argument is given, the substring ends at and includes j.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "i",
                "default": "1"
            },
            {
                "type": "int",
                "name": "j",
                "default": "utf8.len"
            }
        ]
    },
    {
        "functionName": "utf8.title",
        "description": "Converts a UTF-8 string to title case (uppercase). If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string|int",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.title",
        "description": "Converts a UTF-8 string to title case (uppercase). If input is an integer, it is treated as a codepoint and a converted codepoint (integer) is returned.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string|int",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "utf8.width",
        "description": "Calculates the width of UTF-8 strings with special/unprintable characters, which require special width treatment.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string|int",
                "name": "input",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "ambi_is_double",
                "default": "false"
            },
            {
                "type": "int",
                "name": "default_width",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "utf8.widthindex",
        "description": "Returns the location, offset and width of the character at the given location in the UTF-8 string.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "input",
                "default": null
            },
            {
                "type": "int",
                "name": "location",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "ambi_is_double",
                "default": "false"
            },
            {
                "type": "int",
                "name": "default_width",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "areVehicleLightsOn",
        "description": "This function is used to find out whether the lights of the vehicle are on.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getHeliBladeCollisionsEnabled",
        "description": "This function gets the state of the helicopter blades collisions on the specified vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getHelicopterRotorSpeed",
        "description": "Retrieves the speed at which the rotor of a helicopter rotates.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "heli",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleRotorSpeed",
        "description": "Retrieves the speed at which the rotor of a helicopter or plane rotates.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleAdjustableProperty",
        "description": "Use this to get the value of a vehicles adjustable property. This property relates to movable parts of a model, for example hydra jets or dump truck tray.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleComponentPosition",
        "description": "This function gets the component position of a vehicle. The vehicle must be streamed in.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "base",
                "default": "\"root\""
            }
        ]
    },
    {
        "functionName": "getVehicleComponentRotation",
        "description": "This function gets the component rotation of a vehicle.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "base",
                "default": "\"parent\""
            }
        ]
    },
    {
        "functionName": "getVehicleComponents",
        "description": "This function gets a table of the components currently on a vehicle.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleComponentScale",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "base",
                "default": "\"root\""
            }
        ]
    },
    {
        "functionName": "getVehicleComponentVisible",
        "description": "This function get component visibility for vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleCurrentGear",
        "description": "Gets the specified vehicle's current gear.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleDummyPosition",
        "description": "This function returns the position of the dummy for the given vehicle.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "dummy",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleEntryPoints",
        "description": "This function returns a table containing the positions to 4 possible entry points to a vehicle. This function can be used alongside setPedEnterVehicle to make a ped enter a specific seat by first moving the ped to a entry point retrieved through getVehicleEntryPoints and then using setPedEnterVehicle to make them enter.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleGravity",
        "description": "Retrieves the current gravity vector of a vehicle. This is the direction in which the vehicle falls, also the cameras of any passengers will be rotated to match it.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleLandingGearDown",
        "description": "This function is used to check whether a vehicle's landing gear is down or not. Only planes can be used with this function.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleModelDummyDefaultPosition",
        "description": "This function gets the default position of the dummies contained in a vehicle model.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelId",
                "default": null
            },
            {
                "type": "string",
                "name": "dummy",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleModelDummyPosition",
        "description": "This function gets position of the dummies contained in a vehicle model.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "string",
                "name": "dummy",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleModelExhaustFumesPosition",
        "description": "This function returns the position of the exhaust fumes the vehicle model emits.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleModelWheelSize",
        "description": "This function gets the size of a group of wheels for a vehicle model.",
        "returnValues": [
            "float|table"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "vehicleModel",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "wheelGroup",
                "default": null
            }
        ]
    },
    {
        "functionName": "getVehicleNitroCount",
        "description": "This function gets the nitro count of the vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleNitroLevel",
        "description": "This function gets the nitro level of the vehicle.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleWheelFrictionState",
        "description": "This function returns the current wheel friction state of the vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "wheel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleWheelScale",
        "description": "This function gets the scale of all the wheels of a vehicle.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isTrainChainEngine",
        "description": "This function checks if a train is a chain engine (moves the rest of the chain's carriages) or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theTrain",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleNitroActivated",
        "description": "This function checks if nitro is activated on the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleNitroRecharging",
        "description": "This function checks if nitro is recharging on the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleOnGround",
        "description": "Checks to see if a vehicle has contact with the ground.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleWheelOnGround",
        "description": "This function returns a boolean whether the vehicle's wheel is on ground (true) or in air (false).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string/int",
                "name": "wheel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleWindowOpen",
        "description": "This function gets the vehicle window state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "window",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetVehicleComponentPosition",
        "description": "This function reset to default component position for vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetVehicleComponentRotation",
        "description": "This function reset to default component rotation for vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetVehicleComponentScale",
        "description": "This function reset to default component scale for vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetVehicleDummyPositions",
        "description": "This function resets the vehicle dependent dummy positions to the vehicle's current model dummy positions.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setHeliBladeCollisionsEnabled",
        "description": "This function changes the state of the helicopter blades collisions on the specified vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "collisions",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setHelicopterRotorSpeed",
        "description": "Sets the rotor speed of a helicopter.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "heli",
                "default": null
            },
            {
                "type": "float",
                "name": "speed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleRotorSpeed",
        "description": "Sets the rotor speed of a helicopter or plane. This function now applies to both helicopters and planes.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "speed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleAdjustableProperty",
        "description": "This function is used for adjusting the movable parts of a model, for example hydra jets or dump truck tray.\nThis function only works on vehicles with adjustable properties.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleComponentPosition",
        "description": "This function sets the component position of a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "base",
                "default": "\"root\""
            }
        ]
    },
    {
        "functionName": "setVehicleComponentRotation",
        "description": "This function sets the component rotation of a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            },
            {
                "type": "float",
                "name": "rotX",
                "default": null
            },
            {
                "type": "float",
                "name": "rotY",
                "default": null
            },
            {
                "type": "float",
                "name": "rotZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "base",
                "default": "\"parent\""
            }
        ]
    },
    {
        "functionName": "setVehicleComponentScale",
        "description": "This function sets the component scale of a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            },
            {
                "type": "float",
                "name": "scaleX",
                "default": null
            },
            {
                "type": "float",
                "name": "scaleY",
                "default": null
            },
            {
                "type": "float",
                "name": "scaleZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "base",
                "default": "\"parent\""
            }
        ]
    },
    {
        "functionName": "setVehicleComponentVisible",
        "description": "This function sets component visibility for vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "theComponent",
                "default": null
            },
            {
                "type": "bool",
                "name": "visible",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleDummyPosition",
        "description": "This function sets the position of the dummy for the given vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "dummy",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleGravity",
        "description": "Sets the gravity vector of a vehicle. The vehicle will fall in this direction, and the camera of any occupants will also be rotated to match it. Can be used for e.g. driving on walls or upside down on ceilings.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleLandingGearDown",
        "description": "This function is used to set the landing gear state of certain vehicles.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "gearState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleModelDummyPosition",
        "description": "This function sets the position of the dummies contained in a vehicle model. Use setVehicleComponentPosition to adjust the vehicle component positions.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "string",
                "name": "dummy",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleModelExhaustFumesPosition",
        "description": "This function sets the position of the exhaust fumes the vehicle model emits. Use setVehicleComponentPosition to adjust the exhaust position.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleModelWheelSize",
        "description": "This function sets the size of a group of wheels for a vehicle model. The wheel size mainly determines their width, collision box (used to check if a bullet hits a tire, for example) and the ground clearance of vehicles with that model (i.e., the minimum distance from the center of the car geometry to the ground). It also changes the visual scale and rotation of the wheels, if not all the wheel groups have equal size. The visual scaling is applied before the per-vehicle wheel scale.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "vehicleModel",
                "default": null
            },
            {
                "type": "string",
                "name": "wheelGroup",
                "default": null
            },
            {
                "type": "float",
                "name": "wheelSize",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleNitroActivated",
        "description": "This function activates or deactivates the nitro on the specified vehicle, like if a player pressed the button for activating nitro.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleNitroCount",
        "description": "This function sets how many times a player can activate the nitro on a specified vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "count",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleNitroLevel",
        "description": "This function sets the nitro level of the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "level",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleWheelScale",
        "description": "This function sets the scale of all the wheels of a vehicle. The wheel scale multiplies the visible height and length (but not width) of all the wheels in a vehicle, without affecting their collisions or the handling, similarly to setVehicleComponentScale. The wheel scale is applied after the model wheel size.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "wheelScale",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleWheelStates",
        "description": "This function sets the state of wheels on the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "frontLeft",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "rearLeft",
                "default": "-1"
            },
            {
                "type": "int",
                "name": "frontRight",
                "default": "-1"
            },
            {
                "type": "int",
                "name": "rearRight",
                "default": "-1"
            }
        ]
    },
    {
        "functionName": "setVehicleWindowOpen",
        "description": "This function sets the vehicle window state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "window",
                "default": null
            },
            {
                "type": "bool",
                "name": "open",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleWheelsRotation",
        "description": "This function is used to manipulate the wheel rotation of a vehicle. Cars, Bikes (including BMX) and Trailers are supported.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "rotation",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "addVehicleUpgrade",
        "description": "This function adds an upgrade to a vehicle, e.g. nitrous, hydraulics.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string/int",
                "name": "upgrade",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "attachTrailerToVehicle",
        "description": "This function attaches a trailer type vehicle to a trailer-towing-type vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "vehicle",
                "name": "theTrailer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "blowVehicle",
        "description": "This function will blow up a vehicle. This will cause an explosion and will kill the driver and any passengers inside it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "vehicleToBlow",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "explode",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "createVehicle",
        "description": "This function creates a vehicle at the specified location.",
        "returnValues": [
            "vehicle"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "model",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "rx",
                "default": null
            },
            {
                "type": "float",
                "name": "ry",
                "default": null
            },
            {
                "type": "float",
                "name": "rz",
                "default": null
            },
            {
                "type": "string",
                "name": "numberplate",
                "default": null
            },
            {
                "type": "bool",
                "name": "bDirection",
                "default": null
            },
            {
                "type": "int",
                "name": "variant1",
                "default": null
            },
            {
                "type": "int",
                "name": "variant2",
                "default": null
            },
            {
                "type": "bool",
                "name": "synced",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "detachTrailerFromVehicle",
        "description": "This function detaches an already attached trailer from a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "vehicle",
                "name": "theTrailer",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "fixVehicle",
        "description": "This function will set a vehicle's health to full and fix its damage model. If you wish to only change the vehicle's health, without affecting its damage model, use setElementHealth.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getOriginalHandling",
        "description": "This function returns a table of the original vehicle handling. Use getVehicleHandling if you wish to get the current handling of a vehicle, or getModelHandling for a specific vehicle model.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTrainDirection",
        "description": "Gets the direction in which a train is driving (clockwise or counterclockwise).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTrainPosition",
        "description": "Gets the position the train is currently on the track",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTrainSpeed",
        "description": "Gets the speed at which a train is traveling on the rails.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getTrainTrack",
        "description": "Gets the track of a train",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleColor",
        "description": "This function returns the color of the specified vehicle. A vehicle can have up to four colors.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "bRGB",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleCompatibleUpgrades",
        "description": "This function returns a table of all the compatible upgrades (or all for a specified slot, optionally) for a specified vehicle.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "slot",
                "default": null
            }
        ]
    },
    {
        "functionName": "getVehicleController",
        "description": "This function is used to get the player in control of the specified vehicle which includes somebody who is trying to enter the drivers seat.",
        "returnValues": [
            "player"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleDoorOpenRatio",
        "description": "This function tells you how open a door is (the 'open ratio'). Doors include boots/trunks and bonnets on vehicles that have them.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "door",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleDoorState",
        "description": "This function returns the current state of the specifed door on the vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "door",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleEngineState",
        "description": "This function returns a vehicle's engine state (on or off).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleHandling",
        "description": "This function returns a table of the current vehicle handling data.",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ]
    },
    {
        "functionName": "getVehicleHeadLightColor",
        "description": "This function will get the headlight color of a vehicle.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleLandingGearDown",
        "description": "This function is used to check whether a vehicle's landing gear is down or not. Only planes can be used with this function.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleLightState",
        "description": "This function returns the current state of the specified light on the vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "light",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleMaxPassengers",
        "description": "This function returns the maximum number of passengers that a specified vehicle can hold. Only passenger seats are counted, the driver seat is excluded.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleModelFromName",
        "description": "This function retrieves the model ID of a vehicle as an integer value from its name.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleName",
        "description": "This function returns a string containing the name of the vehicle",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleNameFromModel",
        "description": "Gets the name of a vehicle by its model ID.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "model",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleOccupant",
        "description": "This function gets the player sitting/trying to enter the specified vehicle.",
        "returnValues": [
            "player"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "seat",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getVehicleOccupants",
        "description": "This function gets all peds sitting in the specified vehicle.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleOverrideLights",
        "description": "This function is used to find out the current state of the override-lights setting of a vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehiclePaintjob",
        "description": "This function gets the current paintjob on the specified vehicle.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehiclePanelState",
        "description": "This function returns the current state of a specifed panel on the vehicle. A vehicle can have up to 7 panels.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "panel",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehiclePlateText",
        "description": "This function is used to retrieve the text on the number plate of a specified vehicle.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleSirenParams",
        "description": "This function get the parameters of a vehicles siren.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleSirens",
        "description": "This function gets the properties of a vehicle's sirens.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleSirensOn",
        "description": "This function returns whether the sirens are turned on for the specified vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleTowedByVehicle",
        "description": "This function is used to get the vehicle being towed by another.",
        "returnValues": [
            "vehicle"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleTowingVehicle",
        "description": "This function is used to get the vehicle that is towing another.",
        "returnValues": [
            "vehicle"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleTurretPosition",
        "description": "This function gets the position of a vehicle's turret, if it has one. Vehicles with turrets include firetrucks and tanks.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "turretVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleTurnVelocity",
        "description": "This function is used to retrieve a vehicle's turning velocity for each axis.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleType",
        "description": "This function retrieves the type of a vehicle (such as if it is a car or a boat).",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleUpgradeOnSlot",
        "description": "This function returns the current upgrade id on the specified vehicle's 'upgrade slot'\nAn upgrade slot is a certain type of upgrade (eg: exhaust, spoiler), there are 17 slots (0 to 16).",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "slot",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleUpgradeSlotName",
        "description": "This function returns the name of an upgrade slot name (e.g. roof, spoiler).",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "slot/upgrade",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleUpgrades",
        "description": "This function returns a table of all the upgrades on a specifed vehicle.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleVariant",
        "description": "This function gets the variant of a specified vehicle. In GTA: San Andreas some vehicles are different; for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike. For the default variant list see: Vehicle variants.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getVehicleWheelStates",
        "description": "This function returns the current states of all the wheels on the vehicle.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isTrainDerailable",
        "description": "This function will check if a train or tram is derailable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "vehicleToCheck",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isTrainDerailed",
        "description": "This function will check if a train or tram is derailed.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "vehicleToCheck",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleBlown",
        "description": "This function allows you to determine whether a vehicle is blown or still intact.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleDamageProof",
        "description": "This function checks if a vehicle is damage proof (set with setVehicleDamageProof).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleFuelTankExplodable",
        "description": "This will tell you if a vehicle's petrol tank is explodable.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleLocked",
        "description": "This will tell you if a vehicle is locked.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleOnGround",
        "description": "Checks to see if a vehicle has contact with the ground.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isVehicleTaxiLightOn",
        "description": "This function will get the taxi light state of a taxi (vehicle IDs 420 and 438)",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "taxi",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeVehicleUpgrade",
        "description": "This function removes an already existing upgrade from the specified vehicle, eg: nos, hydraulics. Defined in San Andreas\\data\\maps\\veh_mods\\veh_mods.ide.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "upgrade",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrainDerailable",
        "description": "This function will set a train or tram as derailable. This is, if it can derail when it goes above the maximum speed.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "derailableVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "derailable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrainDerailed",
        "description": "This function will set a train or tram as derailed.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "vehicleToDerail",
                "default": null
            },
            {
                "type": "bool",
                "name": "derailed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrainDirection",
        "description": "Sets the direction in which a train or tram drives over the rails (clockwise or counterclockwise).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            },
            {
                "type": "bool",
                "name": "clockwise",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrainPosition",
        "description": "Sets the position the train is currently on the track",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            },
            {
                "type": "float",
                "name": "position",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrainSpeed",
        "description": "Sets the on-track speed of a train.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            },
            {
                "type": "float",
                "name": "speed",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrainTrack",
        "description": "Sets the track of a train",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "train",
                "default": null
            },
            {
                "type": "int",
                "name": "track",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleColor",
        "description": "This function will set the color of a vehicle using either a RGB format, or the standard San Andreas color IDs. Vehicles can have up to 3 colors, most of the vehicles have 2 colors only.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "veh",
                "default": null
            },
            {
                "type": "int",
                "name": "r1",
                "default": null
            },
            {
                "type": "int",
                "name": "g1",
                "default": null
            },
            {
                "type": "int",
                "name": "b1",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "r2",
                "default": null
            },
            {
                "type": "int",
                "name": "g2",
                "default": null
            },
            {
                "type": "int",
                "name": "b2",
                "default": null
            },
            {
                "type": "int",
                "name": "r3",
                "default": null
            },
            {
                "type": "int",
                "name": "g3",
                "default": null
            },
            {
                "type": "int",
                "name": "b3",
                "default": null
            },
            {
                "type": "int",
                "name": "r4",
                "default": null
            },
            {
                "type": "int",
                "name": "g4",
                "default": null
            },
            {
                "type": "int",
                "name": "b4",
                "default": null
            }
        ]
    },
    {
        "functionName": "setVehicleDamageProof",
        "description": "This functions makes a vehicle damage proof, so it won't take damage from bullets, hits, explosions or fire. A damage proof's vehicle health can still be changed via script.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "damageProof",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleDoorOpenRatio",
        "description": "This function sets how much a vehicle's door is open. Doors include the boot/trunk and the bonnet of the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "door",
                "default": null
            },
            {
                "type": "float",
                "name": "ratio",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "time",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "setVehicleDoorState",
        "description": "This function sets the state of the specified door on a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "door",
                "default": null
            },
            {
                "type": "int",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleDoorsUndamageable",
        "description": "This function makes a vehicle's doors undamageable, so they won't fall off when they're hit. Note that the vehicle has to be locked using setVehicleLocked for this setting to have any effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleEngineState",
        "description": "This function turns a vehicle's engine on or off. Note that the engine will always be turned on when someone enters the driver seat, unless you override that behaviour with scripts.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "engineState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleFuelTankExplodable",
        "description": "This function changes the 'explodable state' of a vehicle's fuel tank, which toggles the ability to blow the vehicle up by shooting the tank. This function will have no effect on vehicles with tanks that cannot be shot in single player.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "explodable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleHandling",
        "description": "This function is used to change the handling data of a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "var",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleHeadLightColor",
        "description": "This function will set the headlight color of a vehicle. valid Red Green and Blue arguments range from 0-255",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "red",
                "default": null
            },
            {
                "type": "int",
                "name": "green",
                "default": null
            },
            {
                "type": "int",
                "name": "blue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleLandingGearDown",
        "description": "This function is used to set the landing gear state of certain vehicles.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "gearState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleLightState",
        "description": "This function sets the state of the light on the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "light",
                "default": null
            },
            {
                "type": "int",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleLocked",
        "description": "This function can be used to set the vehicle's doors to be locked or unlocked.    Locking a vehicle restricts access to the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "locked",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleOverrideLights",
        "description": "This function changes the light overriding setting on a vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehiclePaintjob",
        "description": "This function changes the paintjob on the specified vehicle. \nSee paintjob for list of supported vehicles.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehiclePanelState",
        "description": "This function allows you to change the state of one of the six panels vehicle's can have. When executed on the server-side resources, the damage will be synched for all players, whereas the change is only client-side if the function is used in a client resource.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "panelID",
                "default": null
            },
            {
                "type": "int",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehiclePlateText",
        "description": "This function can be used to set the numberplate text of a vehicle.\nAll non ascii characters will be replaced by spaces.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "string",
                "name": "numberplate",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleSirens",
        "description": "This function changes the properties of a vehicles siren point.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "sirenPoint",
                "default": null
            },
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            },
            {
                "type": "float",
                "name": "red",
                "default": null
            },
            {
                "type": "float",
                "name": "green",
                "default": null
            },
            {
                "type": "float",
                "name": "blue",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "alpha",
                "default": "255"
            },
            {
                "type": "float",
                "name": "minAlpha",
                "default": "0.0"
            }
        ]
    },
    {
        "functionName": "setVehicleSirensOn",
        "description": "This function changes the state of the sirens on the specified vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "bool",
                "name": "sirensOn",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleTaxiLightOn",
        "description": "This function will set the taxi light on in a taxi (vehicle ID's 420 and 438)",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "taxi",
                "default": null
            },
            {
                "type": "bool",
                "name": "LightState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleTurnVelocity",
        "description": "Sets the angular velocity of a vehicle. Basically applies a spin to it.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "rx",
                "default": null
            },
            {
                "type": "float",
                "name": "ry",
                "default": null
            },
            {
                "type": "float",
                "name": "rz",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleTurretPosition",
        "description": "This function sets the position of a vehicle's turret, if it has one. This can be used to influence the turret's rotation, so it doesn't follow the camera. Vehicles with turrets include firetrucks and tanks.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "turretVehicle",
                "default": null
            },
            {
                "type": "float",
                "name": "positionX",
                "default": null
            },
            {
                "type": "float",
                "name": "positionY",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleVariant",
        "description": "This function sets the variant of a specified vehicle. In GTA: San Andreas some vehicles are different; for example the labelling on trucks or the contents of a pick-up truck and the varying types of a motor bike. For the default variant list see: Vehicle variants.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "variant1",
                "default": null
            },
            {
                "type": "int",
                "name": "variant2",
                "default": null
            }
        ]
    },
    {
        "functionName": "setVehicleWheelStates",
        "description": "This function sets the state of wheels on the vehicle.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "int",
                "name": "frontLeft",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "rearLeft",
                "default": "-1"
            },
            {
                "type": "int",
                "name": "frontRight",
                "default": "-1"
            },
            {
                "type": "int",
                "name": "rearRight",
                "default": "-1"
            }
        ]
    },
    {
        "functionName": "spawnVehicleFlyingComponent",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "vehicle",
                "name": "theVehicle",
                "default": null
            },
            {
                "type": "number",
                "name": "nodeIndex",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "number",
                "name": "collisionType",
                "default": null
            },
            {
                "type": "number",
                "name": "removalTime",
                "default": null
            }
        ]
    },
    {
        "functionName": "getWaterLevel",
        "description": "This function allows you to retrieve the water level from a certain location. The water level is 0 in most places though it can vary (e.g. it's higher near the dam).",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "posX",
                "default": null
            },
            {
                "type": "float",
                "name": "posY",
                "default": null
            },
            {
                "type": "float",
                "name": "posZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "ignoreDistanceToWaterThreshold",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "isWaterDrawnLast",
        "description": "This function determines whether water is drawn last in the rendering order.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setWaterDrawnLast",
        "description": "This function changes the water rendering order.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "bEnabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createWater",
        "description": "Creates an area of water.",
        "returnValues": [
            "water"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x1",
                "default": null
            },
            {
                "type": "float",
                "name": "y1",
                "default": null
            },
            {
                "type": "float",
                "name": "z1",
                "default": null
            },
            {
                "type": "float",
                "name": "x2",
                "default": null
            },
            {
                "type": "float",
                "name": "y2",
                "default": null
            },
            {
                "type": "float",
                "name": "z2",
                "default": null
            },
            {
                "type": "float",
                "name": "x3",
                "default": null
            },
            {
                "type": "float",
                "name": "y3",
                "default": null
            },
            {
                "type": "float",
                "name": "z3",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "x4",
                "default": null
            },
            {
                "type": "float",
                "name": "y4",
                "default": null
            },
            {
                "type": "float",
                "name": "z4",
                "default": null
            },
            {
                "type": "bool",
                "name": "bShallow",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "getWaterColor",
        "description": "This function returns the water color of the GTA world.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getWaterVertexPosition",
        "description": "Gets the world position of a vertex (i.e. corner) of a water area. Each water area is either a triangle or quad (rectangle) so each has 3 or 4 corners.",
        "returnValues": [
            "int",
            "int",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "water",
                "name": "theWater",
                "default": null
            },
            {
                "type": "int",
                "name": "vertexIndex",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWaveHeight",
        "description": "This function returns the current wave height.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetWaterColor",
        "description": "This function reset the water color of the GTA world to default.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetWaterLevel",
        "description": "This function resets the water of the GTA world back to its default level. Water elements are not affected.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setWaterColor",
        "description": "This function changes the water color of the GTA world.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "red",
                "default": null
            },
            {
                "type": "int",
                "name": "green",
                "default": null
            },
            {
                "type": "int",
                "name": "blue",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "alpha",
                "default": "200"
            }
        ]
    },
    {
        "functionName": "setWaterLevel",
        "description": "Sets the height of some or all the water in the game world.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "water",
                "name": "theWater",
                "default": null
            },
            {
                "type": "float",
                "name": "level",
                "default": null
            }
        ]
    },
    {
        "functionName": "setWaterVertexPosition",
        "description": "Sets the world position of a corner point of a water area.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "water",
                "name": "theWater",
                "default": null
            },
            {
                "type": "int",
                "name": "vertexIndex",
                "default": null
            },
            {
                "type": "int",
                "name": "x",
                "default": null
            },
            {
                "type": "int",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWaveHeight",
        "description": "This function sets the wave height to the desired value, the default is 0.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "height",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponProperty",
        "description": "This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weaponID/string",
                "default": null
            },
            {
                "type": "string",
                "name": "weaponSkill",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPickupWeapon",
        "description": "This function retrieves the weapon ID of a weapon pickup.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "pickup",
                "name": "thePickup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getOriginalWeaponProperty",
        "description": "This function gets the original weapon property of the specified weapons specified weapon type.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weaponID/string",
                "default": null
            },
            {
                "type": "string",
                "name": "weaponSkill",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getSlotFromWeapon",
        "description": "This function allows you to identify the weapon slot that a weapon belongs to.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weaponid",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponIDFromName",
        "description": "This function will obtain the ID of a particular weapon from its name.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponNameFromID",
        "description": "This function allows you to retrieve the name of a weapon from an ID.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "id",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponAmmo",
        "description": "Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "weapon",
                "default": null
            },
            {
                "type": "int",
                "name": "totalAmmo",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "ammoInClip",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "setWeaponProperty",
        "description": "This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weaponID/string",
                "default": null
            },
            {
                "type": "string",
                "name": "weaponSkill",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "int/float",
                "name": "theValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "createWeapon",
        "description": "Creates a custom weapon that can fire bullets. Do not confuse this with player held weapons.",
        "returnValues": [
            "weapon"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "fireWeapon",
        "description": "Fires one shot from a custom weapon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponAmmo",
        "description": "This function gets the total ammo a custom weapon has.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponClipAmmo",
        "description": "This function gets the amount of ammo left in a custom weapon's magazine/clip.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponFiringRate",
        "description": "This gets the firing rate to be used when a custom weapon opens fire.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponFlags",
        "description": "This function gets the flags of a custom weapon.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            },
            {
                "type": "string",
                "name": "theFlag",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponOwner",
        "description": "This function gets the owner of a custom weapon. Weapon ownership system was, however, disabled, so this function always returns false. Please refer to setWeaponOwner for details.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponProperty",
        "description": "This function gets a weapon property of the specified custom weapon (clientside only) or specified player-held weapon (both client and server).",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weaponID/string",
                "default": null
            },
            {
                "type": "string",
                "name": "weaponSkill",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponState",
        "description": "This function gets the state of a custom weapon.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWeaponTarget",
        "description": "This functions gets the target of a custom weapon.",
        "returnValues": [
            "nil/element/float"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetWeaponFiringRate",
        "description": "This function resets the firing rate of a custom weapon to the default one.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponAmmo",
        "description": "Sets the ammo to a certain amount for a specified weapon (if they already have it), regardless of current ammo.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "weapon",
                "default": null
            },
            {
                "type": "int",
                "name": "totalAmmo",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "ammoInClip",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "setWeaponClipAmmo",
        "description": "This function sets the ammo left in a custom weapon's magazine/clip.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            },
            {
                "type": "int",
                "name": "clipAmmo",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponFiringRate",
        "description": "This function sets the firing rate to be used when a custom weapon is in firing state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            },
            {
                "type": "int",
                "name": "firingRate",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponFlags",
        "description": "This function sets a custom weapon flags, used to change how it behaves or finds a possible target to shoot.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            },
            {
                "type": "string",
                "name": "theFlag",
                "default": null
            },
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponProperty",
        "description": "This function sets the weapon property of the specified weapons specified weapon type. See lower down the page for documentation related to weapon creation.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weaponID/string",
                "default": null
            },
            {
                "type": "string",
                "name": "weaponSkill",
                "default": null
            },
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "int/float",
                "name": "theValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponState",
        "description": "This function sets a custom weapon's state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            },
            {
                "type": "string",
                "name": "theState",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeaponTarget",
        "description": "This function sets the target of a custom weapon. There are 3 different targeting modes, which are explained below.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "weapon",
                "name": "theWeapon",
                "default": null
            },
            {
                "type": "element",
                "name": "theTarget",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "theComponent",
                "default": "255"
            }
        ]
    },
    {
        "functionName": "createSWATRope",
        "description": "Creates a SWAT rope like that of the rope in single player used by SWAT Teams abseiling from the Police Maverick.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "fx",
                "default": null
            },
            {
                "type": "float",
                "name": "fy",
                "default": null
            },
            {
                "type": "float",
                "name": "fZ",
                "default": null
            },
            {
                "type": "int",
                "name": "duration",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBirdsEnabled",
        "description": "This function will tell you if the birds are enabled or disabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getColorFilter",
        "description": "This function is used to get the values of color filtering.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "isOriginal",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getCoronaReflectionsEnabled",
        "description": "This function gets visibility of corona reflections.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getGarageBoundingBox",
        "description": "This function outputs the bounding box of a garage.",
        "returnValues": [
            "float",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "garageID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getGaragePosition",
        "description": "This function outputs X, Y and Z position of given garage.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "garageID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getGarageSize",
        "description": "This function outputs the size of garage.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "garageID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getGroundPosition",
        "description": "This function gets the Z level of the highest ground below a point.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getInteriorFurnitureEnabled",
        "description": "This function will tell you if interior furniture are enabled or disabled in a specified room ID.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "roomID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getNearClipDistance",
        "description": "This function gets the distance from the camera at which the world starts rendering. For more information about this please refer to setNearClipDistance.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPedsLODDistance",
        "description": "This function gets the peds LOD distance.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getRoofPosition",
        "description": "This function gets the Z level of the lowest roof above a point. It is required that the point is near enough to the local player so that it's within the area where collision data is loaded.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getScreenFromWorldPosition",
        "description": "This function gets the screen position of a point in the world. This is useful for attaching 2D gui elements to parts of the world (e.g. players) or detecting if a point is on the screen (though it does not check if it is actually visible, you should use processLineOfSight for that).",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "edgeTolerance",
                "default": "0.0"
            },
            {
                "type": "bool",
                "name": "relative",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getVehiclesLODDistance",
        "description": "Returns the distance of vehicles LOD.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getWorldFromScreenPosition",
        "description": "This function allows you to retrieve the world position corresponding to a 2D position on the screen, at a certain depth.",
        "returnValues": [
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "depth",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getWorldProperty",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "mixed"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isAmbientSoundEnabled",
        "description": "This function allows you to check if some background sound effects are enabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isLineOfSightClear",
        "description": "This function checks if there are obstacles between two points of the game world, optionally ignoring certain kinds of elements. Use processLineOfSight if you want more information about what the ray hits.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "checkBuildings",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkVehicles",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkPeds",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkObjects",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkDummies",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "seeThroughStuff",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "ignoreSomeObjectsForCamera",
                "default": "false"
            },
            {
                "type": "element",
                "name": "ignoredElement",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "isTimeFrozen",
        "description": "This function allows you to check whether time has been frozen using setTimeFrozen.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isVolumetricShadowsEnabled",
        "description": "This function is used to check whether the shadow enabled or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isWorldSoundEnabled",
        "description": "This function allows you to check if certain world sound effects have not been disabled by setWorldSoundEnabled",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "group",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "index",
                "default": "-1"
            }
        ]
    },
    {
        "functionName": "processLineAgainstMesh",
        "description": "Does a raycast against an element's renderable mesh model [not the collision model!].\nThe same functionality is already present in processLineOfSight, but the latter is a little buggy due to the fact that the collision model is always simplified, and not exactly the same as the mesh, which leads to situations where no hit is detected, even though the visible mesh is hittable [or vice versa].\nAlso, when one is interested in a specific element the overhead is a lot smaller [as we can skip all the collision detection done by the before-mentioned function].",
        "returnValues": [
            "bool",
            "float",
            "float",
            "string",
            "string",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "toTest",
                "default": null
            },
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "processLineOfSight",
        "description": "This function casts a ray between two points in the world, and tells you information about the point that was hit, if any. The two positions must be within the local player's draw distance as the collision data is not loaded outside this area, and the call will just fail as if the ray didn't hit.",
        "returnValues": [
            "bool",
            "float",
            "float",
            "float",
            "element",
            "float",
            "float",
            "float",
            "int",
            "float",
            "int",
            "int",
            "float",
            "float",
            "float",
            "float",
            "float",
            "float",
            "int",
            "float",
            "float",
            "string",
            "string",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "checkBuildings",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkVehicles",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkPlayers",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkObjects",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "checkDummies",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "seeThroughStuff",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "ignoreSomeObjectsForCamera",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "shootThroughStuff",
                "default": "false"
            },
            {
                "type": "element",
                "name": "ignoredElement",
                "default": "nil"
            },
            {
                "type": "bool",
                "name": "includeWorldModelInformation",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "bIncludeCarTyres",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "bIncludeExtraMateriaInfo",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "resetAmbientSounds",
        "description": "This function is used to reset the background sounds to the default setting.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetBlurLevel",
        "description": "Resets the motion blur level on the client's screen to default value (36).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetColorFilter",
        "description": "This function is used to reset the color filtering to its default values.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetCoronaReflectionsEnabled",
        "description": "This function resets visibility of corona reflections. Default value depends on client setting. If client has enabled corona rain reflections in video options, value will be reset to 1, otherwise to 0. You can check value of this option using dxGetStatus (SettingCoronaReflections).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetNearClipDistance",
        "description": "This function resets near clip distance set by setNearClipDistance.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetPedsLODDistance",
        "description": "Resets the distance of peds LOD to default. Default values depends on client setting. If client has enabled high detail peds in video options, value will be reset to 500 - otherwise to 60.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetTimeFrozen",
        "description": "This function unfreezes time frozen using setTimeFrozen. This is equivalent to using setTimeFrozen to false.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetVolumetricShadows",
        "description": "This function is used to reset the volumetric shadows to the game video setting.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetVehiclesLODDistance",
        "description": "Resets the distance of vehicles LOD to default. Default values depends on client setting. If client has enabled high detail vehicles in video options, value will be reset to (500, 500) - otherwise to (70, 150). You can check value of this option using dxGetStatus (SettingHighDetailVehicles).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetWorldProperty",
        "description": "Returns true if successful, false otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "property",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetWorldSounds",
        "description": "This function is used to reset the world sounds to the default setting.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "setAmbientSoundEnabled",
        "description": "This function allows you to disable some background sound effects. See also: setWorldSoundEnabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theType",
                "default": null
            },
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBirdsEnabled",
        "description": "This function allows you to disable the flying birds.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setColorFilter",
        "description": "This function is used to override the default color filtering values.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "aRed",
                "default": null
            },
            {
                "type": "int",
                "name": "aGreen",
                "default": null
            },
            {
                "type": "int",
                "name": "aBlue",
                "default": null
            },
            {
                "type": "int",
                "name": "aAlpha",
                "default": null
            },
            {
                "type": "int",
                "name": "bRed",
                "default": null
            },
            {
                "type": "int",
                "name": "bGreen",
                "default": null
            },
            {
                "type": "int",
                "name": "bBlue",
                "default": null
            },
            {
                "type": "int",
                "name": "bAlpha",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCoronaReflectionsEnabled",
        "description": "This function sets visibility of corona reflections.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setInteriorFurnitureEnabled",
        "description": "This function toggles furniture generation in interiors with the specified room ID.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "roomID",
                "default": null
            },
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setInteriorSoundsEnabled",
        "description": "This function disables or enables the ambient sounds played by GTA in most interiors, like restaurants, casinos, clubs, houses, etc.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setNearClipDistance",
        "description": "This function sets the distance from the camera at which the world starts rendering. Do not use this function unless you have a specific reason to do so, as any values can cause artifacts and flickering problems. It can be used in many ways, including: reducing Z-fighting, creating more sophisticated first person views, allowing the camera to fly closer to the ground without passing through it, etcetera.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedsLODDistance",
        "description": "This function sets the peds LOD distance.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTimeFrozen",
        "description": "This function will freeze the game time. It will affect the sky as well prevent it from changes.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehiclesLODDistance",
        "description": "Sets the distance of vehicles LOD.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "vehiclesDistance",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "float",
                "name": "trainsAndPlanesDistance",
                "default": "vehiclesDistance * 2.14"
            }
        ]
    },
    {
        "functionName": "setWorldProperty",
        "description": "The downside of overriding is the need to implement custom blending (to change weather properties over time creating night / day cycle).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "property",
                "default": null
            },
            {
                "type": "var",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "var",
                "name": "value",
                "default": null
            },
            {
                "type": "var",
                "name": "value",
                "default": null
            }
        ]
    },
    {
        "functionName": "setWorldSoundEnabled",
        "description": "This function allows you to disable world sounds. A world sound is a sound effect which has not been caused by playSound or playSound3D.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "group",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "index",
                "default": "-1"
            },
            {
                "type": "bool",
                "name": "enable",
                "default": null
            },
            {
                "type": "bool",
                "name": "immediate",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setGrainLevel",
        "description": "Returns true if the grain level was set, false otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "level",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setGrainMultiplier",
        "description": "Returns true if the grain multiplier was set, false otherwise.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "modifierName",
                "default": null
            },
            {
                "type": "float",
                "name": "multiplier",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "testLineAgainstWater",
        "description": "This function checks to see if a line between two points collides with the water. This is similar to processLineOfSight, but only collides with water. Waves are not taken into account when testing the line.",
        "returnValues": [
            "bool",
            "float",
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "startX",
                "default": null
            },
            {
                "type": "float",
                "name": "startY",
                "default": null
            },
            {
                "type": "float",
                "name": "startZ",
                "default": null
            },
            {
                "type": "float",
                "name": "endX",
                "default": null
            },
            {
                "type": "float",
                "name": "endY",
                "default": null
            },
            {
                "type": "float",
                "name": "endZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVolumetricShadowsEnabled",
        "description": "This function used to enable or disable volumetric shadows.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "areTrafficLightsLocked",
        "description": "Gets whether the traffic lights are currently locked or not. If the lights are locked, it means they won't change unless you do setTrafficLightState.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getAircraftMaxHeight",
        "description": "This function gets the maximum height at which aircraft can fly without their engines turning off.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getAircraftMaxVelocity",
        "description": "This function returns the maximum velocity at which aircrafts could fly. Using this function server-side will return the server-side value, not necessarily the same that is set client-side.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getCloudsEnabled",
        "description": "This function will tell you if clouds are enabled or disabled.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getFarClipDistance",
        "description": "This function will tell you what is the current render distance.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getFogDistance",
        "description": "This function will tell you what is the current fog render distance.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getGameSpeed",
        "description": "This function gets the current game speed value.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getGravity",
        "description": "This function returns the current gravity level for the context in which it is called (server or client).",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getHeatHaze",
        "description": "This function will return the current heat haze effect settings.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "int",
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getInteriorSoundsEnabled",
        "description": "This function checks to see if the music played by default in clubs is disabled or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getJetpackMaxHeight",
        "description": "This function gets the maximum height at which your jetpack can fly without failing to go higher.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getMinuteDuration",
        "description": "Tells you how long an ingame minute takes in real-world milliseconds. The default GTA value is 1000.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getMoonSize",
        "description": "This function returns the moon size.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getOcclusionsEnabled",
        "description": "This function is used to get \"occlusions enabled\" state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getRainLevel",
        "description": "This function is used to get the current rain level.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getSunColor",
        "description": "This function is used to get the color of the sun.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getSunSize",
        "description": "This function is used to get the size of the sun.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getTime",
        "description": "This function is used to get the current time in the game. If you want to get the real server time, use getRealTime.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getTrafficLightState",
        "description": "Gets the current traffic light state. This state controls the traffic light colors. For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getWeather",
        "description": "This function returns the current Weather ID.",
        "returnValues": [
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getWindVelocity",
        "description": "This function gets the wind velocity in San Andreas.",
        "returnValues": [
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getSkyGradient",
        "description": "This function will return the current sky color.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerBlurLevel",
        "description": "This function allows you to check the current blur level of a specified player.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isWorldSpecialPropertyEnabled",
        "description": "Checks if a special world property (cheat) is enabled or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "propname",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getZoneName",
        "description": "This function allows you to retrieve the zone name of a certain location.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "citiesonly",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "isGarageOpen",
        "description": "This function checks whether or not a specific garage door is open.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "garageID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeWorldModel",
        "description": "This function is used to remove a world object. Use restoreWorldModel to reverse this action.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "interior",
                "default": "-1"
            }
        ]
    },
    {
        "functionName": "resetFarClipDistance",
        "description": "This function resets the far clip distance to its default state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetFogDistance",
        "description": "This function resets the fog render distance to its default state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetHeatHaze",
        "description": "This function restores the default heat haze.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetMoonSize",
        "description": "This function is used to reset the size of the moon to its normal size.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetRainLevel",
        "description": "This function resets the rain level of the current weather to its default.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetSkyGradient",
        "description": "This function allows restoring of a changed sky gradient as a result of setSkyGradient.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetSunColor",
        "description": "This function is used to reset the color of the sun to its normal color.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetSunSize",
        "description": "This function is used to reset the size of the sun to its normal size.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "resetWindVelocity",
        "description": "This function resets the wind velocity in San Andreas to its default state.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "restoreAllWorldModels",
        "description": "This function allows restoring of all world objects, which were removed with removeWorldModel.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "restoreWorldModel",
        "description": "This function restoring a removed world object, reversing the effect of removeWorldModel.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "modelID",
                "default": null
            },
            {
                "type": "float",
                "name": "radius",
                "default": null
            },
            {
                "type": "float",
                "name": "x",
                "default": null
            },
            {
                "type": "float",
                "name": "y",
                "default": null
            },
            {
                "type": "float",
                "name": "z",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "iInterior",
                "default": "-1"
            }
        ]
    },
    {
        "functionName": "setAircraftMaxHeight",
        "description": "This function changes the maximum flying height of aircraft.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "Height",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setAircraftMaxVelocity",
        "description": "This function sets the maximum velocity at which aircrafts could fly. Using this function server-side will overwrite the value that was previously set client-side.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "velocity",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setCloudsEnabled",
        "description": "This function will enable or disable clouds. This is useful for race maps which are placed high up as clouds can cause low FPS.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setFarClipDistance",
        "description": "This function is used to set the distance of render. Areas beyond the specified distance will not be rendered.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setFogDistance",
        "description": "This function changes the distance at which fog appears. Keep in mind that this function doesn't change the distance of render.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "distance",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setGameSpeed",
        "description": "This function sets the game speed to the given value.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setGarageOpen",
        "description": "This function opens or closes the specified garage door in the world.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "garageID",
                "default": null
            },
            {
                "type": "bool",
                "name": "open",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setGravity",
        "description": "This function sets the server's gravity level.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "level",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setHeatHaze",
        "description": "This function changes the heat haze effect.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "intensity",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "randomShift",
                "default": "0"
            },
            {
                "type": "int",
                "name": "speedMin",
                "default": "12"
            },
            {
                "type": "int",
                "name": "speedMax",
                "default": "18"
            },
            {
                "type": "int",
                "name": "scanSizeX",
                "default": "75"
            },
            {
                "type": "int",
                "name": "scanSizeY",
                "default": "80"
            },
            {
                "type": "int",
                "name": "renderSizeX",
                "default": "80"
            },
            {
                "type": "int",
                "name": "renderSizeY",
                "default": "85"
            },
            {
                "type": "bool",
                "name": "bShowInside",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setInteriorSoundsEnabled",
        "description": "This function disables or enables the ambient sounds played by GTA in most interiors, like restaurants, casinos, clubs, houses, etc.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMinuteDuration",
        "description": "Sets the real-world duration of an ingame minute. The GTA default is 1000.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "milliseconds",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMoonSize",
        "description": "This function sets the moon size. Using this function server-side will overwrite the value that was previously set client-side.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "size",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setOcclusionsEnabled",
        "description": "This function is used to enable or disable occlusions. Occlusions are used by GTA to enhance performance by hiding objects that are (normally) obscured by certain large buildings. However when removeWorldModel is used they may also have the undesired effect of making parts of the map disappear. Disabling occlusions will fix that.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "enabled",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setRainLevel",
        "description": "This function sets the rain level to any weather available in GTA. Use resetRainLevel to undo the changes.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "level",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSkyGradient",
        "description": "This function changes the sky color to a two-color gradient.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "int",
                "name": "topRed",
                "default": "0"
            },
            {
                "type": "int",
                "name": "topGreen",
                "default": "0"
            },
            {
                "type": "int",
                "name": "topBlue",
                "default": "0"
            },
            {
                "type": "int",
                "name": "bottomRed",
                "default": "0"
            },
            {
                "type": "int",
                "name": "bottomGreen",
                "default": "0"
            },
            {
                "type": "int",
                "name": "bottomBlue",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "setSunColor",
        "description": "This function is used to set the color of the sun.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "aRed",
                "default": null
            },
            {
                "type": "int",
                "name": "aGreen",
                "default": null
            },
            {
                "type": "int",
                "name": "aBlue",
                "default": null
            },
            {
                "type": "int",
                "name": "bRed",
                "default": null
            },
            {
                "type": "int",
                "name": "bGreen",
                "default": null
            },
            {
                "type": "int",
                "name": "bBlue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setSunSize",
        "description": "This function is used to set the size of the sun.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "Size",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTime",
        "description": "This function sets the current GTA time to the given time.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "hour",
                "default": null
            },
            {
                "type": "int",
                "name": "minute",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrafficLightState",
        "description": "Sets the current traffic light state. This state controls the traffic light colors. For instance, state 1 will cause the north and south traffic lights to be amber, and the ones left and east will turn red.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTrafficLightsLocked",
        "description": "Toggles whether you want the traffic lights to be locked. If the lights are locked, it means they won't change unless you do setTrafficLightState.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "bool",
                "name": "toggle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeather",
        "description": "This function sets the current weather to the given valid value. To change the weather gradually, see setWeatherBlended.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weatherID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWeatherBlended",
        "description": "This function will change the current weather to another in a smooth manner, over the period of 1-2 in-game hours (unlike setWeather, which sets a new weather instantly). To ensure this transition performs as expected, you should not call this function until getWeather indicates that no transition is already being done.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "weatherID",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWindVelocity",
        "description": "This function changes the wind velocity. The wind shakes the vegetation and makes particles fly in a direction. The intensity and direction of the effect deppends of the wind velocity in each axis.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "velocityX",
                "default": null
            },
            {
                "type": "float",
                "name": "velocityY",
                "default": null
            },
            {
                "type": "float",
                "name": "velocityZ",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setJetpackMaxHeight",
        "description": "This function changes the maximum flying height of jetpack.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "float",
                "name": "Height",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerBlurLevel",
        "description": "Sets the motion blur level on the clients screen. Accepts a value between 0 and 255.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            },
            {
                "type": "int",
                "name": "level",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setWorldSpecialPropertyEnabled",
        "description": "Enables or disables a special world property.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "propname",
                "default": null
            },
            {
                "type": "bool",
                "name": "enable",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "resetWorldProperties",
        "description": "NOTE: When using optional arguments, you might need to supply all arguments before the one you wish to use. For more information on optional arguments, see optional arguments.",
        "returnValues": [
            "nil"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "resetSpecialProperties",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "resetWorldProperties",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "resetWeatherProperties",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "resetLODs",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "resetSounds",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "resetGlitches",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "resetJetpackWeapons",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "xmlCopyFile",
        "description": "This function copies all contents of a certain node in a XML document to a new document file, so the copied node becomes the new file's root node.\nThe new file will not be saved to file system until xmlSaveFile() is called",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "nodeToCopy",
                "default": null
            },
            {
                "type": "string",
                "name": "newFilePath",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlCreateChild",
        "description": "This function creates a new child node under an XML node.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "parentNode",
                "default": null
            },
            {
                "type": "string",
                "name": "tagName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlCreateFile",
        "description": "This function creates a new XML document, which can later be saved to a file by using xmlSaveFile. This function will overwrite the file specified if it already exists.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            },
            {
                "type": "string",
                "name": "rootNodeName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlDestroyNode",
        "description": "This function destroys a XML node from the XML node tree.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "theXMLNode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlFindChild",
        "description": "This function returns a named child node of an XML node.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "parent",
                "default": null
            },
            {
                "type": "string",
                "name": "tagName",
                "default": null
            },
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlLoadFile",
        "description": "This function provides an alternative way to load XML files to getResourceConfig.\nThis function loads an XML file and returns the node by specifying a specific file path, while getResourceConfig allows for loading an XML file from a resource.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "filePath",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "readOnly",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "xmlLoadString",
        "description": "This function creates an Xmlnode from a string input.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "xmlString",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeGetAttribute",
        "description": "This function is used to return an attribute of a node in a configuration file.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            },
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeGetAttributes",
        "description": "Returns all the attributes of a specific XML node.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeGetChildren",
        "description": "This function returns all children of a particular XML node, or a particular child node.",
        "returnValues": [
            "table/xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "parent",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "index",
                "default": null
            }
        ]
    },
    {
        "functionName": "xmlNodeGetName",
        "description": "Gets the tag name of the specified XML node.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeGetParent",
        "description": "Returns the parent node of an xml node.",
        "returnValues": [
            "xmlnode"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeGetValue",
        "description": "This function is made to be able to read tag values in XML files (eg. <something>anything</something>).",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "theXMLNode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeSetAttribute",
        "description": "This function is used to edit an attribute of a node in a configuration file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            },
            {
                "type": "string",
                "name": "name",
                "default": null
            },
            {
                "type": "string/float",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeSetName",
        "description": "Sets the tag name of the specified XML node.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            },
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlNodeSetValue",
        "description": "This function is made to be able to assign values to tags in XML files (eg. <something>anything</something>).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "theXMLNode",
                "default": null
            },
            {
                "type": "string",
                "name": "value",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "setCDATA",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "xmlSaveFile",
        "description": "This function saves a loaded XML file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "rootNode",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "xmlUnloadFile",
        "description": "Unloads an XML document from memory.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
                "default": null
            }
        ],
        "optionalArguments": []
    }
];