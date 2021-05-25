import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { utf8Encode } from '@angular/compiler/src/util';
/**
 * Prefixes all requests not starting with `http[s]` with `environment.serverUrl`.
 */
@Injectable({
	providedIn: 'root' 
})
export class ApiHeaderInterceptorApiHeaderInterceptor implements HttpInterceptor {
	constructor() {

	}
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		

		if (!request.url.includes("company/")) {
			let token = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..RTxka37ILpiBaCA3jmJnlw.AQZpcR4XkbN5Fo_5K4Zv5jf7AWJC7LfJh5J3A7CUsg33Sc65rYJXenLr7s-ts-6arnhdV7gHfig1gbkzcT5p9xDNOWfNSCw3vzR7OLaoI9T0-pigdiAUO_StX6CCjkCZr6XK6JI8YkarqPY8CzkKIfnDDEEBTgZzZ0qt7H5kFq1195EK4A-DD4rNmmo2h8aA6v8EqmQNeut1K0aN0ItrK2n1qq6ZacZRW056KS6wav34b9Bvh54H5aKERMb5GnDeMObcHorWaay2WzoVAu4RZqXzkzoIqbcBdQpMNnmjCqSxtA6OIGauA2rUCDR6q4nVxx8egIfQ01KhuCSUDqwnwJOb9PIpi5psI6APPMge1y7ehplQ1jLEPJFZKHEh-tl1Wsofr7A7rpLtleHov3ghmt4NzxgcaUPpMJpLK0yATZgY5FEnDRSZhFnfmcSvMfWiRb9xZ8OP0gZShr3OX94o8Fxk8IOhDYsUBFkADHipRCOvJOG5jIkDAjKL5-a2FcvqfqCIhhXpKqpJ7AlOUeDxo4qOM4sXwxIpl2n68GYbqzlH_5CzSUdXhv2Wk194Nr4v9W5YQSSXb3glCfSZ-80kdvNLIPE6t_G1cedMcgsaXPrzi2DExsBEm-hUft1cgaRSWF4E4PRo2wE7qOoCf30l1W3JSu5tsofcyr-1Ml9lXNy9i0eph_jCNUlhEhUxkfwd5cr2M08W4a_-8wy1ydxsmKVecj1rqyMP1txbJNCV_rBHFgp853KDEoUhnZU03X52.zTG2Gl9bHT5v-VqKR9mXVg"
			if (token) {
				request = request.clone({
					setHeaders: {
						Authorization: `Bearer ${token}`,
						responseType: "JSON",
						// ContentSecurityPolicy: "default-src 'self'",
						//  segment: currentUser != null ? this.credentialsService.encryptdata(currentUser.userName) : this.credentialsService.encryptdata("44reyy") ,
						// CacheControl: "no-cache, no-store, must-revalidate, post- check=0, pre-check=0",
						// Pragma: 'no-cache', Expires: '0'
					}, url: environment.endPoint + request.url,
				});
				request = request.clone({ url: request.url });
			} else {
				request = request.clone({ url: request.url  });
			}
		}
		return next.handle(request);
	}
}
