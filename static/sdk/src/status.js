;
(function () {

    exports.code = {
        WEBIM_CONNCTION_USER_NOT_ASSIGN_ERROR: 0,
        WEBIM_CONNCTION_OPEN_ERROR: 1,
        WEBIM_CONNCTION_AUTH_ERROR: 2,
        WEBIM_CONNCTION_OPEN_USERGRID_ERROR: 3,
        WEBIM_CONNCTION_ATTACH_ERROR: 4,
        WEBIM_CONNCTION_ATTACH_USERGRID_ERROR: 5,
        WEBIM_CONNCTION_REOPEN_ERROR: 6,
        WEBIM_CONNCTION_SERVER_CLOSE_ERROR: 7,  //7: client-side network offline (net::ERR_INTERNET_DISCONNECTED)
        WEBIM_CONNCTION_SERVER_ERROR: 8,        //8: offline by multi login
        WEBIM_CONNCTION_IQ_ERROR: 9,

        WEBIM_CONNCTION_PING_ERROR: 10,
        WEBIM_CONNCTION_NOTIFYVERSION_ERROR: 11,
        WEBIM_CONNCTION_GETROSTER_ERROR: 12,
        WEBIM_CONNCTION_CROSSDOMAIN_ERROR: 13,
        WEBIM_CONNCTION_LISTENING_OUTOF_MAXRETRIES: 14,
        WEBIM_CONNCTION_RECEIVEMSG_CONTENTERROR: 15,
        WEBIM_CONNCTION_DISCONNECTED: 16,    //16: server-side close the websocket connection
        WEBIM_CONNCTION_AJAX_ERROR: 17,
        WEBIM_CONNCTION_JOINROOM_ERROR: 18,
        WEBIM_CONNCTION_GETROOM_ERROR: 19,

        WEBIM_CONNCTION_GETROOMINFO_ERROR: 20,
        WEBIM_CONNCTION_GETROOMMEMBER_ERROR: 21,
        WEBIM_CONNCTION_GETROOMOCCUPANTS_ERROR: 22,
        WEBIM_CONNCTION_LOAD_CHATROOM_ERROR: 23,
        WEBIM_CONNCTION_NOT_SUPPORT_CHATROOM_ERROR: 24,
        WEBIM_CONNCTION_JOINCHATROOM_ERROR: 25,
        WEBIM_CONNCTION_QUITCHATROOM_ERROR: 26,
        WEBIM_CONNCTION_APPKEY_NOT_ASSIGN_ERROR: 27,
        WEBIM_CONNCTION_TOKEN_NOT_ASSIGN_ERROR: 28,
        WEBIM_CONNCTION_SESSIONID_NOT_ASSIGN_ERROR: 29,

        WEBIM_CONNCTION_RID_NOT_ASSIGN_ERROR: 30,
        WEBIM_CONNCTION_CALLBACK_INNER_ERROR: 31,  //31: 处理下行消息出错 try/catch抛出异常
        WEBIM_CONNCTION_CLIENT_OFFLINE: 32,        //32: client offline
        WEBIM_CONNCTION_CLIENT_LOGOUT: 33,        //33: client logout
        WEBIM_CONNCTION_CLIENT_TOO_MUCH_ERROR: 34, // 34: Over amount of the tabs a user opened in the same browser
        WEBIM_CONNECTION_ACCEPT_INVITATION_FROM_GROUP: 35,
        WEBIM_CONNECTION_DECLINE_INVITATION_FROM_GROUP: 36,
        WEBIM_CONNECTION_ACCEPT_JOIN_GROUP: 37,
        WEBIM_CONNECTION_DECLINE_JOIN_GROUP: 38,
        WEBIM_CONNECTION_CLOSED: 39,


        WEBIM_UPLOADFILE_BROWSER_ERROR: 100,
        WEBIM_UPLOADFILE_ERROR: 101,
        WEBIM_UPLOADFILE_NO_LOGIN: 102,
        WEBIM_UPLOADFILE_NO_FILE: 103,


        WEBIM_DOWNLOADFILE_ERROR: 200,
        WEBIM_DOWNLOADFILE_NO_LOGIN: 201,
        WEBIM_DOWNLOADFILE_BROWSER_ERROR: 202,


        WEBIM_MESSAGE_REC_TEXT: 300,
        WEBIM_MESSAGE_REC_TEXT_ERROR: 301,
        WEBIM_MESSAGE_REC_EMOTION: 302,
        WEBIM_MESSAGE_REC_PHOTO: 303,
        WEBIM_MESSAGE_REC_AUDIO: 304,
        WEBIM_MESSAGE_REC_AUDIO_FILE: 305,
        WEBIM_MESSAGE_REC_VEDIO: 306,
        WEBIM_MESSAGE_REC_VEDIO_FILE: 307,
        WEBIM_MESSAGE_REC_FILE: 308,
        WEBIM_MESSAGE_SED_TEXT: 309,
        WEBIM_MESSAGE_SED_EMOTION: 310,
        WEBIM_MESSAGE_SED_PHOTO: 311,
        WEBIM_MESSAGE_SED_AUDIO: 312,
        WEBIM_MESSAGE_SED_AUDIO_FILE: 313,
        WEBIM_MESSAGE_SED_VEDIO: 314,
        WEBIM_MESSAGE_SED_VEDIO_FILE: 315,
        WEBIM_MESSAGE_SED_FILE: 316,
        WEBIM_MESSAGE_SED_ERROR: 317,


        STATUS_INIT: 400,
        STATUS_DOLOGIN_USERGRID: 401,
        STATUS_DOLOGIN_IM: 402,
        STATUS_OPENED: 403,
        STATUS_CLOSING: 404,
        STATUS_CLOSED: 405,
        STATUS_ERROR: 406
    };
}());
