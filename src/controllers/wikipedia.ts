import { RequestHandler } from "express";
import wiki, { wikiSummary } from "wikipedia";

import { IWikiSummary, WikiSummary } from "../models/WikiSummary";
import { WikipediaReqQuery } from "../types";

export const getSummary: RequestHandler<
  unknown,
  IWikiSummary | { message: string },
  unknown,
  WikipediaReqQuery
> = async (req, res, next) => {
  try {
    const { query } = req.query;
    if (!query) {
      res.status(400).json({
        message: "query parameter is required.",
      });
      return;
    }
    const normalized_query = query.toLowerCase();
    const doc = await WikiSummary.findOne({
      normalized_query,
    });
    if (!doc) {
      const page = await wiki.page(query);
      const summary = await page.summary();
      const result: IWikiSummary = { normalized_query, ...summary };
      const newSummary = new WikiSummary(result);
      newSummary.save();
      res.send(result);
      return;
    }
    res.send(doc);
    return;
  } catch (err) {
    next(err);
  }
};
