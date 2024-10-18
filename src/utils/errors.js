export function ErrorResponse(response) {

    if( response.status === 404 )
        return '/404';

    return "";

}