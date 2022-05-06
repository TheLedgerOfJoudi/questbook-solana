
export const idl = {
    "version": "0.1.0",
    "name": "questbook",
    "instructions": [
        {
            "name": "initialize",
            "accounts": [
                {
                    "name": "programInfo",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "authority",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "createWorkspace",
            "accounts": [
                {
                    "name": "workspace",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "workspaceOwner",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "metadataHash",
                    "type": "string"
                },
                {
                    "name": "adminEmail",
                    "type": "string"
                }
            ]
        },
        {
            "name": "updateWorkspace",
            "accounts": [
                {
                    "name": "workspace",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "metadataHash",
                    "type": "string"
                },
                {
                    "name": "adminId",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "addWorkspaceAdmin",
            "accounts": [
                {
                    "name": "workspace",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "newWorkspaceAdmin",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "workspaceAdminId",
                    "type": "u32"
                },
                {
                    "name": "adminEmail",
                    "type": "string"
                },
                {
                    "name": "adminAuthority",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "removeWorkspaceAdmin",
            "accounts": [
                {
                    "name": "workspace",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "removeWorkspaceAdmin",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "adminId",
                    "type": "u32"
                },
                {
                    "name": "removeAdminId",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "createGrant",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "workspace",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "adminId",
                    "type": "u32"
                },
                {
                    "name": "metadataHash",
                    "type": "string"
                }
            ]
        },
        {
            "name": "updateGrant",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "workspace",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "adminId",
                    "type": "u32"
                },
                {
                    "name": "metadataHash",
                    "type": "string"
                }
            ]
        },
        {
            "name": "updateGrantAccessibility",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "workspace",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "adminId",
                    "type": "u32"
                },
                {
                    "name": "canAcceptApplication",
                    "type": "bool"
                }
            ]
        },
        {
            "name": "submitApplication",
            "accounts": [
                {
                    "name": "application",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "grant",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "payer",
                    "isMut": true,
                    "isSigner": true
                },
                {
                    "name": "systemProgram",
                    "isMut": false,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "metadataHash",
                    "type": "string"
                },
                {
                    "name": "milestoneCount",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "updateApplicationState",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "application",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "adminId",
                    "type": "u32"
                },
                {
                    "name": "applicationState",
                    "type": {
                        "defined": "ApplicationState"
                    }
                },
                {
                    "name": "applicationAuthority",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "completeApplication",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "workspaceAdmin",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                },
                {
                    "name": "application",
                    "isMut": true,
                    "isSigner": false
                }
            ],
            "args": [
                {
                    "name": "adminId",
                    "type": "u32"
                },
                {
                    "name": "applicationAuthority",
                    "type": "publicKey"
                }
            ]
        },
        {
            "name": "updateApplicationMetadata",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "application",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "metadataHash",
                    "type": "string"
                },
                {
                    "name": "milestoneCount",
                    "type": "u32"
                }
            ]
        },
        {
            "name": "requestMilestoneApproval",
            "accounts": [
                {
                    "name": "grant",
                    "isMut": false,
                    "isSigner": false
                },
                {
                    "name": "application",
                    "isMut": true,
                    "isSigner": false
                },
                {
                    "name": "authority",
                    "isMut": false,
                    "isSigner": true
                }
            ],
            "args": [
                {
                    "name": "milestoneId",
                    "type": "u32"
                },
                {
                    "name": "reasonMetadataHash",
                    "type": "string"
                }
            ]
        }
    ],
    "accounts": [
        {
            "name": "Application",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "grant",
                        "type": "publicKey"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "milestonesCount",
                        "type": "u32"
                    },
                    {
                        "name": "milestonesDone",
                        "type": "u32"
                    },
                    {
                        "name": "milestoneStates",
                        "type": {
                            "array": [
                                {
                                    "defined": "MilestoneState"
                                },
                                20
                            ]
                        }
                    },
                    {
                        "name": "metadataHash",
                        "type": "string"
                    },
                    {
                        "name": "state",
                        "type": {
                            "defined": "ApplicationState"
                        }
                    },
                    {
                        "name": "createdAt",
                        "type": "i64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "Grant",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "workspace",
                        "type": "publicKey"
                    },
                    {
                        "name": "metadataHash",
                        "type": "string"
                    },
                    {
                        "name": "active",
                        "type": "bool"
                    },
                    {
                        "name": "createdAt",
                        "type": "i64"
                    }
                ]
            }
        },
        {
            "name": "ProgramInfo",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "version",
                        "type": "u16"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "Workspace",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "metadataHash",
                        "type": "string"
                    },
                    {
                        "name": "adminCount",
                        "type": "u32"
                    },
                    {
                        "name": "adminIndex",
                        "type": "u32"
                    },
                    {
                        "name": "createdAt",
                        "type": "i64"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        },
        {
            "name": "WorkspaceAdmin",
            "type": {
                "kind": "struct",
                "fields": [
                    {
                        "name": "workspace",
                        "type": "publicKey"
                    },
                    {
                        "name": "authority",
                        "type": "publicKey"
                    },
                    {
                        "name": "adminId",
                        "type": "u32"
                    },
                    {
                        "name": "isAdmin",
                        "type": "bool"
                    },
                    {
                        "name": "email",
                        "type": "string"
                    },
                    {
                        "name": "bump",
                        "type": "u8"
                    }
                ]
            }
        }
    ],
    "types": [
        {
            "name": "MilestoneState",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Uninitialized"
                    },
                    {
                        "name": "Submitted"
                    },
                    {
                        "name": "Requested"
                    },
                    {
                        "name": "Approved"
                    }
                ]
            }
        },
        {
            "name": "ApplicationState",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "Submitted"
                    },
                    {
                        "name": "Resubmit"
                    },
                    {
                        "name": "Approved"
                    },
                    {
                        "name": "Rejected"
                    },
                    {
                        "name": "Complete"
                    }
                ]
            }
        },
        {
            "name": "DisbursalType",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "LockedAmount"
                    },
                    {
                        "name": "P2P"
                    }
                ]
            }
        },
        {
            "name": "ErrorCode",
            "type": {
                "kind": "enum",
                "variants": [
                    {
                        "name": "NotSupported"
                    },
                    {
                        "name": "AdminNotInWorkspace"
                    },
                    {
                        "name": "NotAuthorized"
                    },
                    {
                        "name": "InvalidStateTransition"
                    },
                    {
                        "name": "MilestonesNotComplete"
                    }
                ]
            }
        }
    ],
    "metadata": {
        "address": "8TedDGUNCD8b2y8ePC2dRpGFF5Wjfd9wiQZ9qoezEwGu"
    }
}