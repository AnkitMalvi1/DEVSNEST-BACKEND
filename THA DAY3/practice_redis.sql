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

XADD mystream * name Cathy    //------HERE ID IS BASED ON THE TIME STAMP----//
XADD mystream * name Cathy


//--------------------------------LIMITING THE ENTRIES------------------------------// 

XADD mystream MAXLEN 10000 * name Bingo


//---------------------- to READ values FROM THE STREAM FROM ZERO TO 200 ID --------------//

XREAD COUNT 200 STREAMS mystream 0
XREAD COUNT 200 STREAMS mystream 10002-0


//-----------WAIT TILL 10000 MILLI SECONDS AND CLOSE IT AFTER 10000 MILLI SEC i.e. 10 SECS-------//

XREAD BLOCK 10000 STREAMS mystream 0
XREAD BLOCK 0 STREAMS mystream 0 //ALL THE DATA WITHOUT DISCONNECTION
XREAD BLOCK 10000 STREAMS mystream 10002-0 //DATA AFTER THE ID 10002-0


//----------------MAX CONNECT TO 10 SECS TO SUBCRIBE------------------//

Term 1: SUBSCRIBE
XREAD BLOCK 10000 STREAMS mystream $

Term 2: PUBLISH
XADD mystream * name devsnest


//-------------------------LOOPING THROUGH STREAM IDs-------------------------//

XRANGE mystream START END
XRANGE mystream 10001-0 1630334456611-0


//----------------ALSO COUNT ONLY 3 ROWS BETWEEN START AND END---------//

XRANGE mystream START END COUNT 3
XRANGE mystream 10001-0 1630334456611-0 COUNT 3


//---------------WHEN WE DONT KNOW THE START AND END ID-----------------//

XRANGE mystream - + COUNT 2


//---------------------READ IN REVERSE ORDER---------------------------//

XREVRANGE mystream + - COUNT 2

