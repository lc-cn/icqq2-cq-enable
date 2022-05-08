import {Client,Group,Discuss,Friend} from "oicq";
import {fromCqcode, toCqcode} from "@/utils";
declare module 'oicq'{
    class Message{
        cqCode:string
    }
}
function bindFromCqcode(target){
    const oldSendMsg=target.prototype.sendMsg
    target.prototype.sendMsg=function (content,quote){
        content=[].concat(content).map(msg=>typeof msg==='string'?fromCqcode(msg):msg).flat()
        return oldSendMsg.apply(this,[content,quote])
    }
}
bindFromCqcode(Group)
bindFromCqcode(Discuss)
bindFromCqcode(Friend)
const oldEmit=Client.prototype.emit
Client.prototype.emit=function (event,data,...args){
    if(typeof event!=='string' || !event.startsWith('message'))return oldEmit.apply(this,[event,data,...args])
    if(typeof data==='object' && ('message' in data) && Array.isArray(data.message)){
        data.cqCode=toCqcode(data)
    }
    return oldEmit.apply(this,[event,data,...args])
}
