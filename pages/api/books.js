// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {
  addBook,
  getAllBooks,
} from "../../api-helper/controller/bookController";
import { connectToDb } from "../../api-helper/utils";

export default async function handler(req, res) {
  await connectToDb();

  if (req.method === "GET") {
    return getAllBooks(req, res);
  } else if(req.method === "POST"){
    return addBook(req, res)
  }
}