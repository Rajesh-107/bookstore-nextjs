import { deleteBook, getBookFromId, updateBook } from "../../../api-helper/controller/bookController"
import { connectToDb } from "../../../api-helper/utils"


export default async function handle(req, res){
  await connectToDb()

  if(req.method === "PUT"){
    return updateBook(req, res)
  }
  else if(req.method === "DELETE"){
    return deleteBook(req, res)
  }
  else if(req.method === "GET"){
    return getBookFromId(req, res)
  }
}