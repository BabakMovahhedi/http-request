import http from "./httpServices";

export function deletehttp(commentId){
return http.delete(`comments/${commentId}`);
}