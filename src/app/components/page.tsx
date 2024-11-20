
'use client';


import React from 'react';
import Image from 'next/image';


interface IBooks {
  id: number;
  title: string;
  discription: string;
  author: string;
  status: string;
  image: string;
}

interface CardsProps {
  books: IBooks[];
  onEditBook: (id: number) => void;
}

const Cards: React.FC<CardsProps> = ({ books, onEditBook }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
      {books.map((book) => (
        <div
          key={book.id}
          className="card border rounded-lg overflow-hidden shadow-lg hover={{ scale: 1.05 }}"
        
          style={{ width: '15rem', margin: '1rem', display: 'inline-block' }}
          // hover={{ scale: 1.05 }}
          onClick={() => onEditBook(book.id)} // Edit book on card click
        >
          <div className='relative w-full h-48'>
            <Image src={book.image} alt="book cover" layout='fill' objectFit='cover' className='rounded-t-lg' />
          </div>
          <div className="card-body p-4">
            <h3 className='text-lg font-semibold mb-2'>{book.title}</h3>
            <h6 className='text-sm text-gray-600 mb-1'>{book.discription}</h6>
            <h6 className='text-sm text-gray-700 font-medium'>Author: {book.author}</h6>
            <h6 className='text-sm text-gray-700'>Status: {book.status}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;


