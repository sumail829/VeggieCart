import React, { useState } from 'react';
import { card_attribute } from '@/lib/data'; // Assuming card_attribute contains an array of data
import { Card } from './Card';

interface CardAttribute {
  id: number;
  title: string;
  imgDescription: string;
  imgAlt: string;
  imgSrc: string;
}

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<CardAttribute[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        if (searchTerm) {
            const filtered = card_attribute.filter(card =>
                card.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleSuggestionClick = (title: string) => {
        setSearchTerm(title);
        setFilteredProducts([]);
    };

    return (
        <>
            <div style={{ position: 'relative', width: '500px' }}>
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    style={{ padding: '10px', width: '100%' }}
                    className="dark:border-black"
                />
                
                {searchTerm && filteredProducts.length > 0 && (
                    <div style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        zIndex: 10,
                        maxHeight: '150px',
                        overflowY: 'auto'
                    }}>
                        {filteredProducts.map(({ id, title }) => (
                            <div 
                                key={id} 
                                onClick={() => handleSuggestionClick(title)}
                                style={{
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                                onMouseDown={(e) => e.preventDefault()} // To prevent input blur on click
                            >
                                {title}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="flex flex-wrap gap-5 mt-5">
                {
                    filteredProducts.map(({ id, title, imgAlt, imgDescription, imgSrc }) => (
                        <Card 
                            key={id} 
                            id={id}
                            title={title}
                            imgAlt={imgAlt}
                            imgDescription={imgDescription}
                            imgSrc={imgSrc} 
                        />
                    ))
                }
            </div>
        </>
    );
};

export default Search;
