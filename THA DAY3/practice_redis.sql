//////////------------------------ THA- DAY 3 ------------- PRACTICE REDIS --------------------------//////////


/////------------------------- [ CHAT APPLICATION ] ----------------------/////

COMMAND PROMT A:

Subscriber:

SUBCRIBE <channel_name>
SUBSCRIBE  devsnest


COMMAND PROMT B:

publisher:

PUBLISH <channel_name> <message>
PUBLISH  devsnest  welcome


COMMAND PROMT A:

Subscriber:

(1) "message"
(2) "devsnest"
(3) "welcome"


/////////--------------------MULTIPLE SUBCRIPTION ----------------------------///////

PSUBSCRIBE d*                  //---- (SUBCRIBE TO EVERY PUBLISHERS STARTING WITH d) -----///
UNSUBCRIBE devsnest            //----- UNSUBCRIBE FROM CHANNEL ----------//
PUNSUBSCRIBE d*


/////----------------------------REDIS STREAMS----------------------------/////

XADD <stream_name> <id> <key_value>      //------LIKE DATABASE ROWS----------//
XADD mystream 10000 name Ankit           //------SAVING Anna STREAM IN mystream AT ID 10000----//
XADD mystream 10001 name Boy
XADD mystream 10002 name Cathy
