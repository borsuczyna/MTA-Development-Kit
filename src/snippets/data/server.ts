import { Function } from "../function";

export const serverSnippets: Function[] = [
    {
        "functionName": "addAccount",
        "description": "This function adds an account to the list of registered accounts of the current server.",
        "returnValues": [
            "account"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
                "default": null
            },
            {
                "type": "string",
                "name": "pass",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "allowCaseVariations",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "copyAccountData",
        "description": "This function copies all of the data from one account to another.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            },
            {
                "type": "account",
                "name": "fromAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccount",
        "description": "This function returns an account for a specific user.",
        "returnValues": [
            "account"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "username",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "password",
                "default": null
            },
            {
                "type": "bool",
                "name": "caseSensitive",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "getAccountData",
        "description": "This function retrieves a string that has been stored using setAccountData. Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
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
        "functionName": "getAccountName",
        "description": "This function retrieves the name of an account.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccountPlayer",
        "description": "This function returns the player element that is currently using a specified account, i.e. is logged into it. Only one player can use an account at a time.",
        "returnValues": [
            "player"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccountSerial",
        "description": "This function returns the last serial that logged onto the specified account.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccounts",
        "description": "This function returns a table over all the accounts that exist in the server internal.db file. (Note: accounts.xml is no longer used after version 1.0.4)",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getAccountsBySerial",
        "description": "This function returns a table containing all accounts that were logged onto from specified serial. If the serial is empty string, it will return all accounts that were never logged onto.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "serial",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAllAccountData",
        "description": "This function returns a table containing all the user data for the account provided",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerAccount",
        "description": "This function returns the specified player's account object.",
        "returnValues": [
            "account"
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
        "functionName": "isGuestAccount",
        "description": "This function checks to see if an account is a guest account. A guest account is an account automatically created for a user when they join the server and deleted when they quit or login to another account. Data stored in a guest account is not stored after the player has left the server. As a consequence, this function will check if a player is logged in or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "logIn",
        "description": "This functions logs the given player in to the given account. You need to provide the password needed to log into that account.",
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
                "type": "account",
                "name": "theAccount",
                "default": null
            },
            {
                "type": "string",
                "name": "thePassword",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "logOut",
        "description": "This function logs the given player out of his current account.",
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
        "functionName": "removeAccount",
        "description": "This function is used to delete existing player accounts.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setAccountData",
        "description": "This function sets a string to be stored in an account. This can then be retrieved using getAccountData. Data stored as account data is persistent across user's sessions and maps, unless they are logged into a guest account. Even if logged into a guest account, account data can be useful as a way to store a reference to your own account system, though it's persistence is equivalent to that of using setElementData on the player's element.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
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
        "optionalArguments": []
    },
    {
        "functionName": "setAccountPassword",
        "description": "This function sets the password of the specified account.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            },
            {
                "type": "string",
                "name": "password",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccountByID",
        "description": "This function returns the account with the specific ID.",
        "returnValues": [
            "account"
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
        "functionName": "getAccountID",
        "description": "This function retrieves the ID of an account.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccountIP",
        "description": "This function retrieves the IP address of an account.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getAccountsByData",
        "description": "This function returns a table containing all accounts with specified dataName and value (set with setAccountData).",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "dataName",
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
        "functionName": "getAccountsByIP",
        "description": "This function returns a table containing all accounts that were logged onto from specified IP-address.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "ip",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setAccountName",
        "description": "This function sets the name of an account.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            },
            {
                "type": "string",
                "name": "name",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "allowCaseVariations",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "getAccountType",
        "description": "OOP Syntax Help! I don't understand this!",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "account",
                "name": "theAccount",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclCreate",
        "description": "This function creates an ACL entry in the Access Control List system with the specified name.",
        "returnValues": [
            "acl"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "aclName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclCreateGroup",
        "description": "This function creates a group in the ACL. An ACL group can contain objects like players and resources. They specify who has access to the ACL's in this group.",
        "returnValues": [
            "aclgroup"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "groupName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclDestroy",
        "description": "This function destroys the ACL passed. The destroyed ACL will no longer be valid.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "acl",
                "name": "theACL",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclDestroyGroup",
        "description": "This function destroys the given ACL group. The destroyed ACL group will no longer be valid.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "aclGroup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGet",
        "description": "Get the ACL with the given name. If need to get most of the ACL's, you should consider using aclList to get a table of them all.",
        "returnValues": [
            "acl"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "aclName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGetGroup",
        "description": "This function is used to get the ACL group with the given name. If you need most of the groups you should consider using aclGroupList instead to get a table containing them all.",
        "returnValues": [
            "aclgroup"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "groupName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGetName",
        "description": "Get the name of given ACL.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "acl",
                "name": "theAcl",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGetRight",
        "description": "This function returns whether the access for the given right is set to true or false in the ACL.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "acl",
                "name": "theAcl",
                "default": null
            },
            {
                "type": "string",
                "name": "rightName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupAddACL",
        "description": "This function adds the given ACL to the given ACL group. This makes the resources and players in the given ACL group have access to what's specified in the given ACL. The rights for something in the different ACL's in a group are OR-ed together, which means if one ACL gives access to something, this ACL group will have access to that.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            },
            {
                "type": "acl",
                "name": "theACL",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupAddObject",
        "description": "This function adds an object to the given ACL group. An object can be a player's account, specified as:",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            },
            {
                "type": "string",
                "name": "theObjectName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupGetName",
        "description": "This function is used to get the name of the given ACL group.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "aclGroup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupList",
        "description": "This function returns a table of all the ACL groups.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupListACL",
        "description": "This function returns a table over all the ACL's that exist in a given ACL group.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupListObjects",
        "description": "This function returns a table over all the objects that exist in a given ACL group. These are objects like players and resources.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupRemoveACL",
        "description": "This function removes the given ACL from the given ACL group.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            },
            {
                "type": "acl",
                "name": "theACL",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclObjectGetGroups",
        "description": "This function returns a table of all groups the object is in.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "object",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclGroupRemoveObject",
        "description": "This function removes the given object from the given ACL group. The object can be a resource or a player. See aclGroupAddObject for more details.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            },
            {
                "type": "string",
                "name": "theObjectString",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclList",
        "description": "This function returns a list of all the ACLs.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "aclListRights",
        "description": "This function returns a table of all the rights that a given ACL has.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "acl",
                "name": "theACL",
                "default": null
            },
            {
                "type": "string",
                "name": "allowedType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclReload",
        "description": "This function reloads the ACL's and the ACL groups from the ACL XML file. All ACL and ACL group elements are invalid after a call to this and should not be used anymore.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "aclRemoveRight",
        "description": "This function removes the given right (string) from the given ACL.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "acl",
                "name": "theAcl",
                "default": null
            },
            {
                "type": "string",
                "name": "rightName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "aclSave",
        "description": "The ACL XML file is automatically saved whenever the ACL is modified, but the automatic save can be delayed by up to 10 seconds for performance reasons. Calling this function will force an immediate save.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "aclSetRight",
        "description": "This functions changes or adds the given right in the given ACL. The access can be true or false and specifies whether the ACL gives access to the right or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "acl",
                "name": "theAcl",
                "default": null
            },
            {
                "type": "string",
                "name": "rightName",
                "default": null
            },
            {
                "type": "bool",
                "name": "hasAccess",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "hasObjectPermissionTo",
        "description": "This function returns whether or not the given object has access to perform the given action.",
        "returnValues": [
            "if"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": null,
                "default": null
            },
            {
                "type": "\"resource.YourResourceName.accessPrivateArea\"",
                "name": null,
                "default": null
            },
            {
                "type": "false",
                "name": "then\n--",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isObjectInACLGroup",
        "description": "This function is used to determine if an object is in a group.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "theObjectName",
                "default": null
            },
            {
                "type": "aclgroup",
                "name": "theGroup",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "addBan",
        "description": "This function will add a ban for the specified IP/username/serial to the server.",
        "returnValues": [
            "ban"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "string",
                "name": "IP",
                "default": null
            },
            {
                "type": "string",
                "name": "Username",
                "default": null
            },
            {
                "type": "string",
                "name": "Serial",
                "default": null
            },
            {
                "type": "player",
                "name": "responsibleElement",
                "default": null
            },
            {
                "type": "string",
                "name": "reason",
                "default": null
            },
            {
                "type": "int",
                "name": "seconds",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "banPlayer",
        "description": "This function will ban the specified player by either IP, serial or username",
        "returnValues": [
            "ban"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "bannedPlayer",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "IP",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "Username",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "Serial",
                "default": "false"
            },
            {
                "type": "player/string",
                "name": "responsiblePlayer",
                "default": "nil"
            },
            {
                "type": "string",
                "name": "reason",
                "default": "nil"
            },
            {
                "type": "int",
                "name": "seconds",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "getBanAdmin",
        "description": "This function will return the responsible admin (nickname of the admin) of the specified ban.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBanIP",
        "description": "This function will return the IP of the specified ban.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBanNick",
        "description": "This function will return the nickname (nickname that the player had when he was banned) of the specified ban.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBanReason",
        "description": "This function will return the ban reason of the specified ban.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBanSerial",
        "description": "This function will return the serial of the specified ban.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBanTime",
        "description": "This function will return the time the specified ban was created, in seconds.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBanUsername",
        "description": "This function will return the username of the specified ban.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getBans",
        "description": "This function will return a table containing all the bans present in the server's banlist.xml.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getUnbanTime",
        "description": "This function will return the unbanning time of the specified ban in seconds.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isBan",
        "description": "This function checks whether the passed value is valid ban or not.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "kickPlayer",
        "description": "This function will kick the specified player from the server.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "player",
                "name": "kickedPlayer",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "player/string",
                "name": "responsiblePlayer",
                "default": null
            },
            {
                "type": "string",
                "name": "reason",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "setBanAdmin",
        "description": "This function sets a new admin for a ban.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            },
            {
                "type": "string",
                "name": "theAdmin",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBanNick",
        "description": "This function sets a new nick for a ban.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            },
            {
                "type": "string",
                "name": "theNick",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setBanReason",
        "description": "This function sets the reason for the specified ban.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            },
            {
                "type": "string",
                "name": "theReason",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setUnbanTime",
        "description": "This function sets a new unban time of a given ban using unix timestamp (seconds since Jan 01 1970).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            },
            {
                "type": "int",
                "name": "theTime",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "reloadBans",
        "description": "This function will reload the server ban list file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "removeBan",
        "description": "This function will remove a specific ban.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ban",
                "name": "theBan",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "player",
                "name": "responsibleElement",
                "default": "nil"
            }
        ]
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
        "functionName": "getGameType",
        "description": "This function retrieves the current gametype as set by setGameType. The game type is displayed in the server browser next to the server's name.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getMapName",
        "description": "This function retrieves the current mapname as set by setMapName.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getRuleValue",
        "description": "This function gets a rule value. A rule value is a string that can be viewed by server browsers and used for filtering the server list.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeRuleValue",
        "description": "This function removes a set rule value that can be viewed by server browsers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "key",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setGameType",
        "description": "This function sets a string containing a name for the game type. This should be the game-mode that is active, for example \"Capture The Flag\" or \"Deathmatch\". This is then displayed in the server browser and external server browsers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "gameType",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setMapName",
        "description": "This function is used to set a map name that will be visible in the server browser. In practice you should generally rely on the mapmanager to do this for you.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "mapName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setRuleValue",
        "description": "This function sets a rule value that can be viewed by server browsers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
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
        "functionName": "addElementDataSubscriber",
        "description": "This function subscribes a player to specific element data.\nThis function is used together with setElementData in \"subscribe\" mode.",
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
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "clearElementVisibleTo",
        "description": "This function clears any settings added by setElementVisibleTo and restores an element to its default visibility.",
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
        "functionName": "cloneElement",
        "description": "This function clones (creates an exact copy of) an already existing element. The root node, and player elements, cannot be cloned. If a player element is a child of an element that is cloned, it will be skipped, along with the elements that exist as a child to the player element.",
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
        "optionalArguments": [
            {
                "type": "float",
                "name": "xPos",
                "default": "0"
            },
            {
                "type": "float",
                "name": "yPos",
                "default": "0"
            },
            {
                "type": "float",
                "name": "zPos",
                "default": "0"
            },
            {
                "type": "bool",
                "name": "cloneChildren",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "getElementSyncer",
        "description": "This function gets the syncer of an element. The syncer is the player who is in control of the element.",
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
        "functionName": "getElementZoneName",
        "description": "This function allows you to retrieve the zone name of an element (eg. Verdant Bluffs or Ocean Docks)",
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
        "optionalArguments": [
            {
                "type": "bool",
                "name": "citiesonly",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "hasElementDataSubscriber",
        "description": "This function returns whether a player is subscribed to specific element data.\nThis function is used together with setElementData in \"subscribe\" mode.",
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
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isElementVisibleTo",
        "description": "This checks if an element is visible to a player. This does not check if the player can literally see the element, just that they are aware that it exists. Some so-called per-player elements are able to be visible only to some players, as such this checks if this is the case for a particular element/player combination.",
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
                "name": "visibleTo",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "removeElementData",
        "description": "This function removes the element data with the given key for that element. The element data removal is synced with all the clients.",
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
        "optionalArguments": []
    },
    {
        "functionName": "removeElementDataSubscriber",
        "description": "This function unsubscribes a player from specific element data.\nThis function is used together with setElementData in \"subscribe\" mode.",
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
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setElementSyncer",
        "description": "This function can be used to change the syncer (player) of an element. The syncer is the player who is responsible for informing the server about the state of that element - it's position, orientation and other state information. The function can be also used to remove an element's syncer.",
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
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "persist",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setElementVisibleTo",
        "description": "This function can change an element's visibility.",
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
                "name": "visibleTo",
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
        "functionName": "getCancelReason",
        "description": "Gets the reason for cancelling an event.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "triggerClientEvent",
        "description": "This function triggers an event previously registered on a client. This is the primary means of passing information between the server and the client. Clients have a similar triggerServerEvent function that can do the reverse. You can treat this function as if it was an asynchronous function call, using triggerServerEvent to pass back any returned information if necessary.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "table/element",
                "name": "sendTo",
                "default": "getRootElement"
            }
        ]
    },
    {
        "functionName": "triggerLatentClientEvent",
        "description": "This function is the same as triggerClientEvent    except the transmission rate of the data contained in the arguments can be limited\nand other network traffic is not blocked while the data is being transferred.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "table/element",
                "name": "sendTo",
                "default": "getRootElement"
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
        "functionName": "httpClear",
        "description": "This function removes all text from the current HTML output.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "httpRequestLogin",
        "description": "This function makes the user's browser show a 'basic authentication' login box. The result of the login is handled automatically by the server. If the user has not logged in satisfactorily, you should just call the httpRequestLogin function again. It is the script's responsibility to judge when the user is logged in satisfactorily - you can use the user variable can be used to check if the user has logged in with an account you are happy with. If the logged in user doesn't meet whatever criteria you have, you can just call httpRequestLogin again and they will be re-promoted for their password.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "httpSetResponseCode",
        "description": "This function sets the HTTP status code that will be sent for the current HTML page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "code",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "httpSetResponseCookie",
        "description": "This function sets the value for the specified HTTP cookie of the current HTML page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "cookieName",
                "default": null
            },
            {
                "type": "string",
                "name": "cookieValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "httpSetResponseHeader",
        "description": "This function sets the value for the specified HTTP response header of the current HTML page.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "headerName",
                "default": null
            },
            {
                "type": "string",
                "name": "headerValue",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "httpWrite",
        "description": "This function adds text to the output of the current HTTP file of the HTTP interface. The function can only be used on parsed (i.e not marked as raw) HTTP pages. httpWrite can support outputing binary data, if you specify the length of the data you are outtputing. If you do this, you should ensure you set an accurate content-type using httpSetResponseHeader otherwise it may be displayed inconsistently by browsers.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "data",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "int",
                "name": "length",
                "default": null
            }
        ]
    },
    {
        "functionName": "isKeyBound",
        "description": "This function can be used to find out if a key has already been bound. If you do not specify a keyState or handler, any instances of key being bound will cause isKeyBound to return true.",
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
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "keyState",
                "default": null
            },
            {
                "type": "function",
                "name": "handler",
                "default": null
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
        "functionName": "loadMapData",
        "description": "This function is intended to load data from a loaded XML file into the element tree. This could be used for loading an external map, or part of another map.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "xmlnode",
                "name": "node",
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
        "functionName": "resetMapInfo",
        "description": "This function is used to reset the state of a player.    It is intended to restore a player to his default state as if he had just joined the server, without any scripts affecting him.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "player",
                "name": "thePlayer",
                "default": "root"
            }
        ]
    },
    {
        "functionName": "saveMapData",
        "description": "This converts a set of elements in the element tree into XML. This is a format that can then be loaded as a map file. Each element represents a single XML node.",
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
                "type": "element",
                "name": "baseElement",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "childrenOnly",
                "default": "false"
            }
        ]
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
        "functionName": "getLoadedModules",
        "description": "This function returns all the currently loaded modules of the server.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getModuleInfo",
        "description": "This function returns information about the specified module.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "moduleName",
                "default": null
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
        "functionName": "outputServerLog",
        "description": "This outputs a line of text to the server's log. This could be useful for debugging.",
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
                "type": "element",
                "name": "visibleTo",
                "default": "root"
            },
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
        "functionName": "getPedGravity",
        "description": "This function returns the current gravity for the specified ped. The default gravity is 0.008.",
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
        "functionName": "reloadPedWeapon",
        "description": "This function makes a pedestrian reload their weapon.",
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
        "functionName": "setPedChoking",
        "description": "This function can be used to force the ped to do the choking (coughing) animation until he respawns or toggled off using this function. The animation can not be cancelled by a player it's applied to, and he will not loose health.",
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
                "name": "choking",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedGravity",
        "description": "This function sets the gravity level of a ped.",
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
                "name": "gravity",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPedWearingJetpack",
        "description": "This function is used to give or take a jetpack from a ped, it won't work if the ped is in a vehicle.",
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
        "functionName": "getPickupRespawnInterval",
        "description": "Returns the time it takes before a pickup respawns after a player picked it up. The time is specified in milliseconds.",
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
        "functionName": "isPickupSpawned",
        "description": "This function checks if a pickup is currently spawned (is visible and can be picked up) or not (a player picked it up recently).",
        "returnValues": [
            "bool"
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
        "functionName": "setPickupRespawnInterval",
        "description": "Sets the time it takes for a pickup to respawn after a player picked it up.",
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
                "name": "ms",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "usePickup",
        "description": "This function is used to simulate the player using a pickup",
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
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
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
        "functionName": "getAlivePlayers",
        "description": "This function returns a table of all the alive players on the server. Opposite function of getDeadPlayers.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getDeadPlayers",
        "description": "This function returns a table of all currently dead players on the server.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerACInfo",
        "description": "This function returns anti-cheat info for a player. The info returned by this function can change over time, so use the server event onPlayerACInfo instead.",
        "returnValues": [
            "table"
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
        "functionName": "getPlayerAnnounceValue",
        "description": "This function retrieves a players ASE announce value under a certain key.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "thePlayer",
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
        "functionName": "getPlayerCount",
        "description": "This function returns the number of players currently connected to the server.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getPlayerIdleTime",
        "description": "This function gets the amount of time in milliseconds that a players position has not changed.",
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
        "functionName": "getPlayerIP",
        "description": "This function returns a string containing the IP address of the player.",
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
        "functionName": "getPlayerVersion",
        "description": "mta -> 1.6\nnetcode -> 474\nnumber -> 352\nsortable -> 1.6.0-9.22279.0\ntag -> 1.6-release-22279\ntype -> Release",
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
        "functionName": "getRandomPlayer",
        "description": "This function returns a random player.",
        "returnValues": [
            "player"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isPlayerMuted",
        "description": "Use this function to check if a player has been muted.",
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
        "functionName": "redirectPlayer",
        "description": "This function redirects the player to a specified server.",
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
                "name": "serverIP",
                "default": "\"\""
            },
            {
                "type": "int",
                "name": "serverPort",
                "default": "0"
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "serverPassword",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "resendPlayerACInfo",
        "description": "This function will force the specified player to resend their AC info, triggering the onPlayerACInfo event again.",
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
        "functionName": "resendPlayerModInfo",
        "description": "This function will force the specified player to resend their mod info, triggering the onPlayerModInfo event again.",
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
        "functionName": "setPlayerAnnounceValue",
        "description": "This function allows you to change ASE announce values for any player using a specified key.\nAs an example this can be used to change the \"score\" value which will be shown at game-state.com's server list.",
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
        "functionName": "setPlayerMuted",
        "description": "Use this function to mute or unmute the player. Muted player won't be able to say anything in chat.",
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
                "name": "state",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerScriptDebugLevel",
        "description": "This will set player's debug level, equivalent to debugscript <level>.",
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
        "functionName": "setPlayerTeam",
        "description": "This function adds a player to an existing team. The player will automatically be removed from his current team if he's on one.",
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
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerVoiceBroadcastTo",
        "description": "This function allows you to change who can hear the voice of a player.",
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
                "type": "mixed",
                "name": "broadcastTo",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerVoiceIgnoreFrom",
        "description": "This function allows you to mute voices for a player.",
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
                "type": "mixed",
                "name": "ignoreFrom",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setPlayerWantedLevel",
        "description": "This function is used to set a player's wanted level. The wanted level is indicated by the amount of stars a player has on the GTA HUD.",
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
                "name": "stars",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "spawnPlayer",
        "description": "This function spawns the player at an arbitrary point on the map.",
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
                "name": "rotation",
                "default": "0"
            },
            {
                "type": "int",
                "name": "skinID",
                "default": "0"
            },
            {
                "type": "int",
                "name": "interior",
                "default": "0"
            },
            {
                "type": "int",
                "name": "dimension",
                "default": "0"
            },
            {
                "type": "team",
                "name": "theTeam",
                "default": "getPlayerTeam"
            }
        ]
    },
    {
        "functionName": "takePlayerScreenShot",
        "description": "This function forces a client to capture the current screen output and send it back to the server. The image will contain the GTA HUD and the output of any dxDraw functions that are not flagged as 'post GUI'. The image specifically excludes the chat box and all GUI (including the client console). The result is received with the event onPlayerScreenShot.",
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
                "name": "tag",
                "default": "\"\""
            },
            {
                "type": "int",
                "name": "quality",
                "default": "30"
            },
            {
                "type": "int",
                "name": "maxBandwidth",
                "default": "5000"
            },
            {
                "type": "int",
                "name": "maxPacketSize",
                "default": "500"
            }
        ]
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
        "functionName": "addResourceConfig",
        "description": "This function adds a new empty config file to an existing resource.",
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
                "type": "string",
                "name": "filetype",
                "default": "\"server\""
            }
        ]
    },
    {
        "functionName": "addResourceMap",
        "description": "This function adds a new empty mapfile to an existing resource.",
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
                "type": "int",
                "name": "dimension",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "callRemote",
        "description": "This function allows you to call functions that have been exported with HTTP access by other MTA servers. The calls are asynchronous so you do not get an immediate result from the call, instead a callback function you specify is called when the call returns.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "host",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "queueName",
                "default": "\"default\""
            },
            {
                "type": "int",
                "name": "connectionAttempts",
                "default": "10"
            },
            {
                "type": "int",
                "name": "connectTimeout",
                "default": "10000"
            },
            {
                "type": "string",
                "name": "resourceName",
                "default": null
            },
            {
                "type": "string",
                "name": "functionName",
                "default": null
            },
            {
                "type": "callback",
                "name": "callbackFunction",
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
        "functionName": "copyResource",
        "description": "This function copies a specified resource with a new name.",
        "returnValues": [
            "resource"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "newResourceName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "organizationalDir",
                "default": null
            }
        ]
    },
    {
        "functionName": "createResource",
        "description": "This function creates an new, empty resource. This creates a directory matching the name you specify on disk, then creates an empty meta.xml file with a <meta> element in it.",
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
        "optionalArguments": [
            {
                "type": "string",
                "name": "organizationalDir",
                "default": null
            }
        ]
    },
    {
        "functionName": "deleteResource",
        "description": "This function deletes a resource from the MTA memory and moves it to the /resources-cache/trash/ directory.",
        "returnValues": [
            "bool"
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
        "functionName": "getResourceACLRequests",
        "description": "This function retrieves the ACL request section from the meta.xml file of the given resource.",
        "returnValues": [
            "table"
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
        "functionName": "getResourceInfo",
        "description": "This function retrieves the value of any attribute in a resource info tag.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "attribute",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceLastStartTime",
        "description": "Used to check the last starting time and date of a resource",
        "returnValues": [
            "int"
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
        "functionName": "getResourceLoadFailureReason",
        "description": "This function retrieves the reason why a resource failed to start.",
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
        "functionName": "getResourceLoadTime",
        "description": "Gets the date and time at which a resource was last loaded in the server.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "res",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceMapRootElement",
        "description": "This function retrieves the root element of a certain map in a specified resource.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "mapName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "getResourceOrganizationalPath",
        "description": "This function returns the organizational file path (e.g. [admin]) of a resource.",
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
        "functionName": "getResources",
        "description": "This function retrieves a table of all the resources that exist on the server.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isResourceArchived",
        "description": "Checks whether the specified resource is archived. (Currently running from a ZIP file)",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "resourceElement",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "isResourceProtected",
        "description": "This will check if a resource is currently protected, as defined in mtaserver.conf.",
        "returnValues": [
            "bool"
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
        "functionName": "refreshResources",
        "description": "This function finds new resources and checks for changes to the current ones.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "refreshAll",
                "default": "false"
            },
            {
                "type": "resource",
                "name": "targetResource",
                "default": "nil"
            }
        ]
    },
    {
        "functionName": "removeResourceFile",
        "description": "This function removes a file from the resource.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "fileName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "renameResource",
        "description": "This function renames a resource.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string/resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "newResourceName",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "organizationalPath",
                "default": null
            }
        ]
    },
    {
        "functionName": "restartResource",
        "description": "This function restarts a running resource. Restarting will destroy all the elements that the resource has created (as stopping the resource does).",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "persistent",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "configs",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "maps",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "scripts",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "html",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "clientConfigs",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "clientScripts",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "clientFiles",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "setResourceInfo",
        "description": "This function sets the value of any attribute in a resource info tag.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "attribute",
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
        "functionName": "startResource",
        "description": "This function starts a resource either persistently or as a dependency of the current resource. If you start the resource persistently, the resource will run until stopped either using stopResource or by the server admin. A resource started as a dependency will stop when your resource stops, if no other resources have it as a depdendency. This is the same effect as using an include in your meta.xml file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "resourceToStart",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "persistent",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "startIncludedResources",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadServerConfigs",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadMaps",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadServerScripts",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadHTML",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadClientConfigs",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadClientScripts",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "loadFiles",
                "default": "true"
            }
        ]
    },
    {
        "functionName": "stopResource",
        "description": "This function stops a running resource.",
        "returnValues": [
            "bool"
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
        "functionName": "updateResourceACLRequest",
        "description": "This function changes the access for one ACL request of the given resource.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "resource",
                "name": "theResource",
                "default": null
            },
            {
                "type": "string",
                "name": "rightName",
                "default": null
            },
            {
                "type": "bool",
                "name": "access",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "byWho",
                "default": "\"\""
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
        "functionName": "getMaxPlayers",
        "description": "This function returns the maximum number of player slots on the server.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getServerConfigSetting",
        "description": "This function retrieves server settings which are usually stored in the mtaserver.conf file.",
        "returnValues": [
            "mixed"
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
        "functionName": "getServerHttpPort",
        "description": "This function retrieves the server's HTTP port.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getServerName",
        "description": "This function retrieves the server's name.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getServerPassword",
        "description": "This function returns the current password required to join the server.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "getServerPort",
        "description": "This function retrieves the server's port.",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "isGlitchEnabled",
        "description": "This function retrieves whether San Andreas game glitches are enabled or not, set by using setGlitchEnabled",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "glitchName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setGlitchEnabled",
        "description": "This function enables or disables glitches that are found in the original Single Player game that can be used to gain an advantage in multiplayer.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "glitchName",
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
        "functionName": "setMaxPlayers",
        "description": "This function sets the maximum number of player slots on the server.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "int",
                "name": "slots",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setServerConfigSetting",
        "description": "This function sets server settings which are stored in the mtaserver.conf file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
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
                "name": "bSave",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "setServerPassword",
        "description": "This function changes the password required to join the server to the given string.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "thePassword",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "shutdown",
        "description": "This function shuts down the server.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "string",
                "name": "reason",
                "default": "\"No reason specified\""
            },
            {
                "type": "number",
                "name": "exitCode",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "get",
        "description": "This function gets a setting's value, or a group of settings' values, from the settings registry.",
        "returnValues": [
            "var"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "settingName",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "set",
        "description": "This function is used to save arbitrary data under a certain name on the settings registry.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "settingName",
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
        "functionName": "executeSQLQuery",
        "description": "This function executes an arbitrary SQL query and returns the result rows if there are any. It allows parameter binding for security (SQL injection is rendered impossible).",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "query",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "var",
                "name": "param1",
                "default": null
            },
            {
                "type": "var",
                "name": "param2",
                "default": null
            }
        ]
    },
    {
        "functionName": "dbConnect",
        "description": "This function opens a connection to a database and returns an element that can be used with dbQuery. To disconnect use destroyElement.",
        "returnValues": [
            "element"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "databaseType",
                "default": null
            },
            {
                "type": "string",
                "name": "host",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "string",
                "name": "username",
                "default": "\"\""
            },
            {
                "type": "string",
                "name": "password",
                "default": "\"\""
            },
            {
                "type": "string",
                "name": "options",
                "default": "\"\""
            }
        ]
    },
    {
        "functionName": "dbExec",
        "description": "This function executes a database query using the supplied connection. No query result is returned.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "databaseConnection",
                "default": null
            },
            {
                "type": "string",
                "name": "query",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "var",
                "name": "param1",
                "default": null
            },
            {
                "type": "var",
                "name": "param2",
                "default": null
            }
        ]
    },
    {
        "functionName": "dbFree",
        "description": "This function frees a database query handle. dbFree only needs to be used if a result has not been obtained with dbPoll",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "handle",
                "name": "queryHandle",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "dbPoll",
        "description": "This function checks the progress of a database query.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "handle",
                "name": "queryHandle",
                "default": null
            },
            {
                "type": "int",
                "name": "timeout",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "multipleResults",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "dbPrepareString",
        "description": "This function escapes arguments in the same way as dbQuery, except dbPrepareString returns the query string instead of processing the query. This allows you to safely build complex query strings from component parts and help prevent (one class of) SQL injection.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "element",
                "name": "databaseConnection",
                "default": null
            },
            {
                "type": "string",
                "name": "query",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "var",
                "name": "param1",
                "default": null
            },
            {
                "type": "var",
                "name": "param2",
                "default": null
            }
        ]
    },
    {
        "functionName": "dbQuery",
        "description": "This function starts a database query using the supplied connection. Use the returned query handle with dbPoll to get the result, or dbFree if you don't want the result.",
        "returnValues": [
            "handle"
        ],
        "requiredArguments": [],
        "optionalArguments": [
            {
                "type": "function",
                "name": "callbackFunction",
                "default": null
            },
            {
                "type": "table",
                "name": "callbackArguments",
                "default": null
            },
            {
                "type": "element",
                "name": "databaseConnection",
                "default": null
            },
            {
                "type": "string",
                "name": "query",
                "default": null
            },
            {
                "type": "var",
                "name": "param1",
                "default": null
            },
            {
                "type": "var",
                "name": "param2",
                "default": null
            }
        ]
    },
    {
        "functionName": "createTeam",
        "description": "This function is for creating a new team, which can be used to group players. Players will not join the team until they are respawned.",
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
        "optionalArguments": [
            {
                "type": "int",
                "name": "colorR",
                "default": "255"
            },
            {
                "type": "int",
                "name": "colorG",
                "default": "255"
            },
            {
                "type": "int",
                "name": "colorB",
                "default": "255"
            }
        ]
    },
    {
        "functionName": "setPlayerTeam",
        "description": "This function adds a player to an existing team. The player will automatically be removed from his current team if he's on one.",
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
                "type": "team",
                "name": "theTeam",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTeamColor",
        "description": "This function is for setting the color of a specified team. This color is shown, for example, in the team players' nametags.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            },
            {
                "type": "int",
                "name": "colorR",
                "default": null
            },
            {
                "type": "int",
                "name": "colorG",
                "default": null
            },
            {
                "type": "int",
                "name": "colorB",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTeamFriendlyFire",
        "description": "This function sets the friendly fire value for the specified team.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            },
            {
                "type": "bool",
                "name": "friendlyFire",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setTeamName",
        "description": "This function is used to set a team's name.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "team",
                "name": "theTeam",
                "default": null
            },
            {
                "type": "string",
                "name": "newName",
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
        "functionName": "textCreateDisplay",
        "description": "A text display is like a canvas that can contain many items of text. Each display can be seen by multiple observers (players) and each player can see multiple displays.",
        "returnValues": [
            "textdisplay"
        ],
        "requiredArguments": [],
        "optionalArguments": []
    },
    {
        "functionName": "textCreateTextItem",
        "description": "This function creates a text item. A text item represents a single area of text, much like a label does in standard GUI programming. A text item can only be seen by players if it is added to a textdisplay using textDisplayAddText. Each text item can be added to multiple displays, if need be.",
        "returnValues": [
            "textitem"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "text",
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
        "optionalArguments": [
            {
                "type": "string",
                "name": "priority",
                "default": null
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
            },
            {
                "type": "int",
                "name": "alpha",
                "default": "255"
            },
            {
                "type": "float",
                "name": "scale",
                "default": "1"
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
                "type": "int",
                "name": "shadowAlpha",
                "default": "0"
            }
        ]
    },
    {
        "functionName": "textDestroyDisplay",
        "description": "This function destroys a text display and will unlink all the textitems on it. This does not stop the textitems existing, but anyone who was observing the textitems through this display will stop seeing them.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "display",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDestroyTextItem",
        "description": "This function destroys a textitem object.",
        "returnValues": [
            "void"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextitem",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDisplayAddObserver",
        "description": "This function adds a player as an observer of a textdisplay. This allows the player to see any textitems that the textdisplay contains.",
        "returnValues": [
            "void"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "display",
                "default": null
            },
            {
                "type": "player",
                "name": "playerToAdd",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDisplayAddText",
        "description": "This function adds a textitem to a textdisplay. This allows any observers of the textdisplay to see the textitem.",
        "returnValues": [
            "void"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "displayToAddTo",
                "default": null
            },
            {
                "type": "textitem",
                "name": "itemToAdd",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDisplayGetObservers",
        "description": "This function can be used to retrieve all the players    currently observing a specified textdisplay.",
        "returnValues": [
            "table"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "theDisplay",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDisplayIsObserver",
        "description": "This function checks if a player can see the specified textdisplay.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "display",
                "default": null
            },
            {
                "type": "player",
                "name": "thePlayer",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDisplayRemoveObserver",
        "description": "This function removes a player observer of a textdisplay. This stops the player from being able to see textitems that the textdisplay contains.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "display",
                "default": null
            },
            {
                "type": "player",
                "name": "playerToRemove",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textDisplayRemoveText",
        "description": "This function removes a textitem from a textdisplay. This stops any observers of the textdisplay from being able to see the textitem.",
        "returnValues": [
            "void"
        ],
        "requiredArguments": [
            {
                "type": "textdisplay",
                "name": "displayToRemoveFrom",
                "default": null
            },
            {
                "type": "textitem",
                "name": "itemToRemove",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemGetColor",
        "description": "This function allows you to retrieve the color of a text item.",
        "returnValues": [
            "int",
            "int",
            "int",
            "int"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextItem",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemGetPosition",
        "description": "This function allows retrieval of the position of a text item.",
        "returnValues": [
            "float",
            "float"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextItem",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemGetPriority",
        "description": "This function retrieves the priority of a text item.    Priority defines the rate at whihc a text item is updated",
        "returnValues": [
            "int"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "textitemToCheck",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemGetScale",
        "description": "This function allows retrieval of the scale or size of a text item.",
        "returnValues": [
            "float"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextitem",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemGetText",
        "description": "This function returns the current text of the specified textitem.",
        "returnValues": [
            "string"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextitem",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemSetColor",
        "description": "This function sets the color of a text item.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextItem",
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
        "functionName": "textItemSetPosition",
        "description": "This function allows the setting of the position of a text item.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextItem",
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
        "functionName": "textItemSetPriority",
        "description": "This function sets the priority for a text item.    Priority is the importance of sending updated text to the client. The system is implemented as 3 queues, with the high queue being emptied before the medium queue is processed, and with one update sent per server frame. Hence, if you set all your text items to medium priority it has the same effect as if you set them all to high or low.",
        "returnValues": [
            "void"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextItem",
                "default": null
            },
            {
                "type": "string",
                "name": "priority",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemSetScale",
        "description": "This function allows the setting of the scale of a text item.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextitem",
                "default": null
            },
            {
                "type": "float",
                "name": "scale",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "textItemSetText",
        "description": "Overwrites a previously created text item with the specified text.",
        "returnValues": [
            "void"
        ],
        "requiredArguments": [
            {
                "type": "textitem",
                "name": "theTextitem",
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
        "functionName": "setServerConfigSetting",
        "description": "This function sets server settings which are stored in the mtaserver.conf file.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "name",
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
                "name": "bSave",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "getServerConfigSetting",
        "description": "This function retrieves server settings which are usually stored in the mtaserver.conf file.",
        "returnValues": [
            "mixed"
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
        "functionName": "addVehicleSirens",
        "description": "This function adds sirens to a vehicle.",
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
                "name": "sirenCount",
                "default": null
            },
            {
                "type": "int",
                "name": "sirenType",
                "default": null
            }
        ],
        "optionalArguments": [
            {
                "type": "bool",
                "name": "flag360",
                "default": "false"
            },
            {
                "type": "bool",
                "name": "checkLosFlag",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "useRandomiser",
                "default": "true"
            },
            {
                "type": "bool",
                "name": "silentFlag",
                "default": "false"
            }
        ]
    },
    {
        "functionName": "getModelHandling",
        "description": "This function returns a table containing the handling data of the specified vehicle model.",
        "returnValues": [
            "table"
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
        "functionName": "getVehicleIdleRespawnDelay",
        "description": "OOP Syntax Help! I don't understand this!",
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
        "functionName": "getVehicleRespawnDelay",
        "description": "OOP Syntax Help! I don't understand this!",
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
        "functionName": "getVehicleRespawnPosition",
        "description": "This function retrieves the respawn coordinates of a vehicle.",
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
        "functionName": "getVehicleRespawnRotation",
        "description": "This function retrieves the respawn rotation of a vehicle.",
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
        "functionName": "getVehiclesOfType",
        "description": "This function scans through all the current vehicles and returns the ones matching the given model.",
        "returnValues": [
            "table"
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
        "functionName": "isVehicleRespawnable",
        "description": "OOP Syntax Help! I don't understand this!",
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
        "functionName": "removeVehicleSirens",
        "description": "This function removes sirens from a vehicle.",
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
        "functionName": "resetVehicleExplosionTime",
        "description": "Resets the vehicle explosion time. This is the point in time at which the vehicle last exploded: at this time plus the vehicle's respawn delay, the vehicle is respawned. You can use this function to prevent the vehicle from respawning.",
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
        "functionName": "resetVehicleIdleTime",
        "description": "Resets the vehicle idle time",
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
        "functionName": "respawnVehicle",
        "description": "This function respawns a vehicle according to its set respawn position, set by setVehicleRespawnPosition or the position and rotation it was created on. To spawn a vehicle to a specific location just once, spawnVehicle can be used.",
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
        "functionName": "setModelHandling",
        "description": "This function is used to change the handling data of all vehicles of a specified model.",
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
        "functionName": "setVehicleIdleRespawnDelay",
        "description": "This function sets the time delay (in milliseconds) the vehicle will remain at its position while empty.",
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
                "name": "timeDelay",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleRespawnDelay",
        "description": "This function sets the time delay (in milliseconds) the vehicle will remain wrecked before respawning.",
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
                "name": "timeDelay",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setVehicleRespawnPosition",
        "description": "This function sets the position (and rotation) the vehicle will respawn to.",
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
            }
        ]
    },
    {
        "functionName": "setVehicleRespawnRotation",
        "description": "This function sets the rotation the vehicle will respawn to.",
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
        "functionName": "spawnVehicle",
        "description": "Spawns a vehicle at any given position and rotation",
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
            }
        ]
    },
    {
        "functionName": "toggleVehicleRespawn",
        "description": "This function toggles whether or not the vehicle will be respawned after blown or idle.",
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
                "name": "Respawn",
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
        "functionName": "giveWeapon",
        "description": "giveWeapon gives a specified weapon to a certain player or ped. There is an optional argument to specify ammunition. For example, a melee weapon doesn't need an ammo argument.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "ped",
                "name": "thePlayer",
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
        "functionName": "takeAllWeapons",
        "description": "This function removes every weapons from a specified ped, rendering it unarmed.",
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
        "functionName": "takeWeapon",
        "description": "This function removes a specified weapon or ammo from a certain player's inventory.",
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
                "name": "weaponId",
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
        "functionName": "getJetpackWeaponEnabled",
        "description": "This function checks if a weapon is usable while on a Jetpack.",
        "returnValues": [
            "bool"
        ],
        "requiredArguments": [
            {
                "type": "string",
                "name": "weapon",
                "default": null
            }
        ],
        "optionalArguments": []
    },
    {
        "functionName": "setJetpackWeaponEnabled",
        "description": "This function sets a weapon usable while using the Jetpack.",
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
                "type": "bool",
                "name": "enabled",
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