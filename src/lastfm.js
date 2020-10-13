"use strict";

const dotenv = require('dotenv');
const LAST_FM_USERS = 'https://last.fm/user/'
const API = 'https://ws.audioscrobbler.com/2.0/'
const API_FORMAT = '&format=json'

/**
 * Get's data from my Last.fm
 */
class Lastfm
{
    constructor()
    {
        dotenv.config();

        this.username = process.env.LAST_FM_USER;
        this.userlink = LAST_FM_USERS + process.env.LAST_FM_USER;
        this.apiKey = process.env.LAST_FM_API_KEY;
        this.apiPath = API;
        this.apiFormat = API_FORMAT;
    }
}

module.exports = Lastfm
