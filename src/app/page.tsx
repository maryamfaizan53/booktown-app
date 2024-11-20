'use client';
import Footer from "./components/footer"

import  { useState } from 'react';
import Image from 'next/image';
import Cards from './components/page';
import { IBooks } from './components/index';
import bootstrap from 'bootstrap'


const Home = () => {
  // State to manage the list of books
  const [books, setBooks] = useState<IBooks[]>([
    {
      id: 1,
      title: "Cinderella",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/2.jpg",
    },
    {
      id: 2,
      title: "The Ugly Duckling",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/4.jpg",
    },
    {
      id: 3,
      title: "Sleeping Beauty",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/sb1.jpeg",
    },
    {
      id: 4,
      title: "Thumbelina",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/t.jpg",
    },
    {
      id: 5,
      title: "Little Red Riding Hood",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/11.jpeg",
    },
    {
      id: 6,
      title: "The Jungle Book",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/junglebook.jpg",
    },
    {
      id: 7,
      title: "Bob The Builder",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/7.0.jpeg",
    },
    {
      id: 8,
      title: "Mickey Mouse Fun House",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/6.jpeg",
    },
    {
      id: 9,
      title: "Rapunzel",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/9.jpeg",
    },
    {
      id: 10,
      title: "The Search For the Sundrop",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/8.jpeg",
    },
    {
      id: 11,
      title: "Mickey and Friends",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/7.jpeg",
    },
    {
      id: 12,
      title: "Jack and The Beanstalk",
      discription: "Kids bedtime story",
      author: "abc",
      status: "Available",
      image: "/3.0.jpeg",
    }
  ]);

  // State to manage form inputs
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    discription: '',
    author: '',
    status: 'Available',
    image: '',
  });

  // State to manage search input
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Function to handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, image: URL.createObjectURL(file) });
    }
  };

  // Function to add a new book
  const handleAddBook = () => {
    if (formData.title && formData.author && formData.discription) {
      const newBook = { ...formData, id: books.length + 1 };
      setBooks([...books, newBook]);
      resetForm();
    } else {
      alert("Please fill in all the fields.");
    }
  };

  // Function to update an existing book
  const handleUpdateBook = () => {
    if (formData.title && formData.author && formData.discription) {
      setBooks(
        books.map(book => (book.id === formData.id ? { ...formData } : book))
      );
      resetForm();
    } else {
      alert("Please fill in all the fields.");
    }
  };

  // Function to delete a book
  const handleDeleteBook = () => {
    setBooks(books.filter(book => book.id !== formData.id));
    resetForm();
  };

  // Function to populate form with book data for editing
  const handleEditBook = (bookId: number) => {
    const bookToEdit = books.find(book => book.id === bookId);
    if (bookToEdit) {
      setFormData(bookToEdit);
    }
  };

  // Function to reset the form
  const resetForm = () => {
    setFormData({ id: 0, title: '', discription: '', author: '', status: 'Available', image: '' });
  };

  // Function to handle search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar bg-blend-soft-light bg-blue-500 z-10">
        <div className="container-fluid">
          <a className="navbar-brand">
            <b className='text-3xl text-yellow-500 drop-shadow-[4px_4px_2px_rgba(0,0,0,1)]'>BookTown</b>
          </a>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-warning text-white bg-yellow-400" type="button">
              Search
            </button>
          </form>
        </div>
      </nav>
 

{/* Hero Section */}
<div className="relative h-screen w-screen">
  {/* Background Image */}
  <Image 
    src="/bg.jpeg" 
    alt="hero image" 
    objectFit="cover"
    fill 
    className="mt-0"
  />

  {/* Overlay */}
  <div className="absolute inset-10 mt-40 bg-transparent bg-opacity-50 flex items-center justify-center">
    {/* Text Overlay for Hero */}
    <div className="text-center text-yellow-500 max-w-4xl p-6">
      {/* <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"> */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-[4px_4px_2px_rgba(0,0,0,1)] text-[#FFC107]">
        Booktown Wonderland <br />
         A Magical Book Hub for Toddlers
      </h1>
      {/* <p className="text-lg md:text-xl font-bold text-white drop-shadow-md leading-relaxed"> */}
      <p className="text-lg md:text-xl font-extrabold leading-relaxed
     text-slate-100 drop-shadow-[4px_4px_2px_rgba(0,0,0,1)]
       ">
        Welcome to Booktown Wonderland, a delightful and easy-to-use book management app designed especially for toddlers. With a carefully curated collection of enchanting bedtime stories, this app lets parents and caregivers effortlessly manage, discover, and share the best bedtime stories for young children. 
      </p>
    </div>
  </div>
</div>




      {/* Cards Section */}
      <div className="d-flex flex-wrap gap-4 m-2">
        <Cards books={filteredBooks} onEditBook={handleEditBook} />
      </div>

      {/* Edit or Delete Form */}
      <div className="flex justify-center m-24">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Book Title
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Title"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="author">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              value={formData.author}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Author"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="discription">
              Description
            </label>
            <input
              type="text"
              id="discription"
              value={formData.discription}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileInput">
              Choose File
            </label>
            <input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={formData.id ? handleUpdateBook : handleAddBook}
            >
              {formData.id ? 'Update Book' : 'Add Book'}
            </button>
            {formData.id !== 0 && (
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={handleDeleteBook}
              >
                Delete Book
              </button>
            )}
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
