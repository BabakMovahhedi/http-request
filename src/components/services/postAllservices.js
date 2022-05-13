import http from "./httpServices";

export function posthttp(data){
return http.post('/comments',data);
}