"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WikiSummary = void 0;
const mongoose_1 = require("mongoose");
const WikiSummarySchema = new mongoose_1.Schema({
    normalized_query: String,
    ns: Number,
    index: Number,
    type: String,
    title: String,
    displaytitle: String,
    namespace: {
        id: Number,
        text: String,
    },
    wikibase_item: String,
    titles: {
        canonical: String,
        normalized: String,
        display: String,
    },
    pageid: Number,
    thumbnail: {
        source: String,
        width: Number,
        height: Number,
    },
    originalimage: {
        source: String,
        width: Number,
        height: Number,
    },
    lang: String,
    dir: String,
    revision: String,
    tid: String,
    timestamp: String,
    description: String,
    description_source: String,
    content_urls: {
        desktop: {
            page: String,
            revisions: String,
            edit: String,
            talk: String,
        },
        mobile: {
            page: String,
            revisions: String,
            edit: String,
            talk: String,
        },
    },
    extract: String,
    extract_html: String,
    normalizedtitle: String,
    coordinates: {
        lat: Number,
        lon: Number,
    },
});
exports.WikiSummary = (0, mongoose_1.model)("WikiSummary", WikiSummarySchema);
