const allowedOrigins = (context.getVariable('private.allowed.origins') || '').split(',');
const httpReferer = context.getVariable('request.header.HTTP-Referer');
const origin = context.getVariable('request.header.Origin');
let isValidCors = false;

if (origin && httpReferer) {
            let inc = 0;

            for (const allowedOrigin of allowedOrigins) {
                            if (allowedOrigin === origin && allowedOrigin === httpReferer) {
                                                inc++;
                                            }
                        }

            if (inc > 0) {
                            isValidCors = true;
                        } else {
                                        context.setVariable("isValidCorshttp-referer", true);
                                        throw new Error('CORS Validation Failed.');
                                    }
}

context.setVariable('isValidCors', isValidCors);
