﻿/*
* Copyright (C) 2012 Doubango Telecom <http://www.doubango.org>
*
* Contact: Mamadou Diop <diopmamadou(at)doubango[dot]org>
*	
* This file is part of Open Source sipML5 solution <http://www.sipml5.org>
*
* sipML5 is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as publishd by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*	
* sipML5 is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*	
* You should have received a copy of the GNU General Public License
* along with sipML5.
*/
function tsip_api_add_js_scripts(s_elt) {
    var tag_hdr = document.getElementsByTagName(s_elt)[0];
    for (var i = 1; i < arguments.length; ++i) {
        var tag_script = document.createElement('script');
        tag_script.setAttribute('type', 'text/javascript');
        tag_script.setAttribute('src', arguments[i]);
        tag_hdr.appendChild(tag_script);
    }
};

// add tinySAK API
tsip_api_add_js_scripts('head', 'src/tinySAK/src/tsk_api.js');

// add tinyMEDIA API
tsip_api_add_js_scripts('head', 'src/tinyMEDIA/src/tmedia_api.js');

// add tinySDP API
tsip_api_add_js_scripts('head', 'src/tinySDP/src/tsdp_api.js');

// add tinySIP API
tsip_api_add_js_scripts('head',
'src/tinySIP/src/tsip_action.js',
'src/tinySIP/src/tsip_event.js',
'src/tinySIP/src/tsip_message.js',
'src/tinySIP/src/tsip_session.js',
'src/tinySIP/src/tsip_stack.js',
'src/tinySIP/src/tsip_timers.js',
'src/tinySIP/src/tsip_uri.js'
);

tsip_api_add_js_scripts('head'
// 'src/tinySIP/src/api/tsip_api_common.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_info.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_invite.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_message.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_options.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_publish.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_register.js', #include_in<tsip_session.js>
// 'src/tinySIP/src/api/tsip_api_subscribe.js' #include_in<tsip_session.js>
);

tsip_api_add_js_scripts('head',
'src/tinySIP/src/authentication/tsip_auth.js',
'src/tinySIP/src/authentication/tsip_challenge.js'
);

tsip_api_add_js_scripts('head', 
'src/tinySIP/src/dialogs/tsip_dialog.js',
'src/tinySIP/src/dialogs/tsip_dialog_generic.js',
// 'src/tinySIP/src/dialogs/tsip_dialog_generic__message.js', #include_in<tsip_dialog_generic.js>
'src/tinySIP/src/dialogs/tsip_dialog_invite.js',
// 'src/tinySIP/src/dialogs/tsip_dialog_invite__client.js', #include_in<tsip_dialog_invite.js>
// 'src/tinySIP/src/dialogs/tsip_dialog_invite__ect.js', #include_in<tsip_dialog_invite.js>
// 'src/tinySIP/src/dialogs/tsip_dialog_invite__hold.js', #include_in<tsip_dialog_invite.js>
// 'src/tinySIP/src/dialogs/tsip_dialog_invite__server.js', #include_in<tsip_dialog_invite.js>
// 'src/tinySIP/src/dialogs/tsip_dialog_invite__timers.js' #include_in<tsip_dialog_invite.js>
'src/tinySIP/src/dialogs/tsip_dialog_layer.js',
'src/tinySIP/src/dialogs/tsip_dialog_publish.js',
'src/tinySIP/src/dialogs/tsip_dialog_register.js',
'src/tinySIP/src/dialogs/tsip_dialog_subscribe.js'
);

tsip_api_add_js_scripts('head',
'src/tinySIP/src/headers/tsip_header.js',
'src/tinySIP/src/headers/tsip_header_Allow.js',
'src/tinySIP/src/headers/tsip_header_Allow_Events.js',
'src/tinySIP/src/headers/tsip_header_Authorization.js',
'src/tinySIP/src/headers/tsip_header_Call_ID.js',
'src/tinySIP/src/headers/tsip_header_Contact.js',
'src/tinySIP/src/headers/tsip_header_Content_Length.js',
'src/tinySIP/src/headers/tsip_header_Content_Type.js',
'src/tinySIP/src/headers/tsip_header_CSeq.js',
'src/tinySIP/src/headers/tsip_header_Date.js',
'src/tinySIP/src/headers/tsip_header_Dummy.js',
'src/tinySIP/src/headers/tsip_header_Event.js',
'src/tinySIP/src/headers/tsip_header_Expires.js',
'src/tinySIP/src/headers/tsip_header_From.js',
'src/tinySIP/src/headers/tsip_header_Max_Forwards.js',
'src/tinySIP/src/headers/tsip_header_Min_Expires.js',
'src/tinySIP/src/headers/tsip_header_Min_SE.js',
'src/tinySIP/src/headers/tsip_header_P_Access_Network_Info.js',
'src/tinySIP/src/headers/tsip_header_P_Asserted_Identity.js',
'src/tinySIP/src/headers/tsip_header_P_Associated_URI.js',
'src/tinySIP/src/headers/tsip_header_P_Charging_Function_Addresses.js',
'src/tinySIP/src/headers/tsip_header_P_Preferred_Identity.js',
'src/tinySIP/src/headers/tsip_header_Path.js',
'src/tinySIP/src/headers/tsip_header_Privacy.js',
'src/tinySIP/src/headers/tsip_header_RAck.js',
'src/tinySIP/src/headers/tsip_header_Record_Route.js',
'src/tinySIP/src/headers/tsip_header_Refer_Sub.js',
'src/tinySIP/src/headers/tsip_header_Refer_To.js',
'src/tinySIP/src/headers/tsip_header_Referred_By.js',
'src/tinySIP/src/headers/tsip_header_Require.js',
'src/tinySIP/src/headers/tsip_header_Route.js',
'src/tinySIP/src/headers/tsip_header_RSeq.js',
'src/tinySIP/src/headers/tsip_header_Server.js',
'src/tinySIP/src/headers/tsip_header_Service_Route.js',
'src/tinySIP/src/headers/tsip_header_Session_Expires.js',
'src/tinySIP/src/headers/tsip_header_SIP_ETag.js',
'src/tinySIP/src/headers/tsip_header_SIP_If_Match.js',
'src/tinySIP/src/headers/tsip_header_Subscription_State.js',
'src/tinySIP/src/headers/tsip_header_Supported.js',
'src/tinySIP/src/headers/tsip_header_To.js',
'src/tinySIP/src/headers/tsip_header_User_Agent.js',
'src/tinySIP/src/headers/tsip_header_Via.js',
'src/tinySIP/src/headers/tsip_header_Warning.js',
'src/tinySIP/src/headers/tsip_header_WWW_Authenticate.js'
);

tsip_api_add_js_scripts('head',
'src/tinySIP/src/parsers/tsip_parser_header.js'
//'src/tinySIP/src/parsers/tsip_parser_message.js', #include_in<tsip_message.js>
//'src/tinySIP/src/parsers/tsip_parser_uri.js' #include_in<tsip_uri.js>
);

tsip_api_add_js_scripts('head',
'src/tinySIP/src/transactions/tsip_transac.js',
'src/tinySIP/src/transactions/tsip_transac_ict.js',
'src/tinySIP/src/transactions/tsip_transac_ist.js',
'src/tinySIP/src/transactions/tsip_transac_layer.js',
'src/tinySIP/src/transactions/tsip_transac_nict.js',
'src/tinySIP/src/transactions/tsip_transac_nist.js'
);

tsip_api_add_js_scripts('head',
'src/tinySIP/src/transports/tsip_transport.js',
'src/tinySIP/src/transports/tsip_transport_layer.js'
);