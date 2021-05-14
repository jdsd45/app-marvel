// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiUrl: 'https://gateway.marvel.com',
    apiRessources: {
        comics: '/v1/public/comics'
    },
    apiPrivateKey: '55b06e4d4d03a3a8984f853abf90e18b967a8e03',
    apiPublicKey: 'a5a0013bca6f119629675f89e7518ecf'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
