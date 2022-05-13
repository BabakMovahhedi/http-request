import http from "./httpServices";

export function getone(commentId){
return http.get(`comments/${commentId}`);
}