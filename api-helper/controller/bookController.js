// import Book from "../model/Book";

const Book = require("../model/Book")

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log(books)
    if (!books) {
      return res.status(500).json({ message: "Internal Server error" });
    }
  
    if (books.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }
    return res.status(200).json({ books });
  } catch (err) {
    // return new Error(err);
    console.log(err)
    return res.status(500).json({error: "Something wen't wrong", err: err.message})
  }
};

exports.addBook = async (req, res) => {
  const { title, author, price, imagesURL, featured } = req.body;

  if (
    !title &&
    title.trim() === "" &&
    !author &&
    author.trim() === "" &&
    !price &&
    !imagesURL &&
    imagesURL.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  let book;
  try {
    book = new Book({ title, author, price, imagesURL, featured });
    book = await book.save()
  } catch (err) {
    return new Error(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Internal server error" });
  }
  return res.status(201).json({ book });
};


//update book

exports.updateBook = async (req, res) => {
    const id = req.query.id
    console.log(id)

    const { title, author, price, imagesURL, featured } = req.body;

    if (
      !title &&
      title.trim() === "" &&
      !author &&
      author.trim() === "" &&
      !price &&
      !imagesURL &&
      imagesURL.trim() === ""
    ) {
      return res.status(422).json({ message: "Invalid Inputs" });
    }

    let book;
    try{
        book= await Book.findByIdAndUpdate(id, {
            title, author, price, imagesURL, featured
        })
    }catch(err) {
        return console.log(err)
    }
    if (!book) {
        return res.status(500).json({ message: "Internal server error" });
      }
      return res.status(200).json({ message: "Successfully update" });
}

//delete book
exports.deleteBook = async (req, res) =>{
    const id = req.query.id;

    let book;

    try{
        book = await Book.findByIdAndRemove(id)
    }
    catch(err) {
        return new Error(err)
    }
    if(!book){
        return res.status(500).json({message: "Unable to delete"})
    }

    return res.status(200).json({message: "Successfully delete"})
}

exports.getBookFromId = async (req, res) => {
    const id = req.query.id;

    let book;
    try{
        book = await Book.findById(id)
    }catch(err) {
        return new Error(err)
    }
    if(!book){
        return res.status(404).json({message: "no book found"})
    }
    return res.status(200).json({book})
}