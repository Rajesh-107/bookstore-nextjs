import axios from "axios"


export const getAllbooks = async () => {
    const res = await axios.get("http://localhost:3000/api/books")
  
    console.log(res)
    if(res.status !== 200){
        return new Error("Internsal Server error")
    }
    const data = await res.data?.books;
    return data;
}

export const getFeaturedBooks = async () => {
    const books = await getAllbooks();
    
    if(books.length == 0){
        return [];
    }

    const feacturedBooks = books.filter((book) => book.featured === true)

    return feacturedBooks;
}