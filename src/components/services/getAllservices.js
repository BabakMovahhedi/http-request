import http from "./httpServices";

export function gethttp(){
return http.get('/comments');
}