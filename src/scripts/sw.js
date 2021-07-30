import 'regenerator-runtime';

import {
    precacheAndRoute,
    cleanupOutdatedCaches
} from 'workbox-precaching';
import {
    setCacheNameDetails,
    clientsClaim,
} from 'workbox-core';
import {
    registerRoute
} from 'workbox-routing';
import {
    CacheFirst,
    NetworkFirst
} from 'workbox-strategies';
import {
    ExpirationPlugin
} from 'workbox-expiration';
import {
    CacheableResponsePlugin
} from 'workbox-cacheable-response';
import CONFIG from './globals/config';

self.skipWaiting();
clientsClaim();

const {
    PRECACHE_NAME,
    PRECACHE_PREFIX,
    PRECACHE_SUFFIX,
    API_CACHE_NAME,
    IMAGE_CACHE_NAME,
} = CONFIG;

setCacheNameDetails({
    prefix: PRECACHE_PREFIX,
    suffix: PRECACHE_SUFFIX,
    precache: PRECACHE_NAME,
});

precacheAndRoute(
    [
        ...self.__WB_MANIFEST,
        {
            url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap',
            revision: 1,
        },
        {
            url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
            revision: 1,
        },
    ], {
        ignoreURLParametersMatching: [/.*/],
    },
);

registerRoute(
    /^https:\/\/restaurant-api\.dicoding\.dev\/(?:(list|detail))/,
    new NetworkFirst({
        cacheName: API_CACHE_NAME,
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200]
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 30,
                maxEntries: 100,
            }),
        ],
    }),
);

registerRoute(
    ({
        request
    }) => request.destination === 'image',
    new CacheFirst({
        cacheName: IMAGE_CACHE_NAME,
        plugins: [
            new CacheableResponsePlugin({
                statuses: [0, 200]
            }),
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 24 * 60 * 60,
                maxEntries: 40,
            }),
        ],
    }),
);

cleanupOutdatedCaches();