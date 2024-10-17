"use client"
import React, { useState } from 'react';
import { BeakerIcon, LeafIcon, AtomIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ChemicalCompanyPage() {
  const productDetails = {
    1: { name: "Chemical1", description: "This is a general chemical used in various industrial applications." },
    2: { name: "Methanol", description: "Methanol is a common solvent and fuel used in chemical processes and as an antifreeze." },
    3: { name: "Sulphur Chloride", description: "Sulphur chloride is used in chemical reactions and as a reagent in laboratory experiments." },
    4: { name: "Cement", description: "Cement is a key material in construction used for building and civil engineering projects." },
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const handleViewProduct = (productId: number) => {
    setSelectedProduct(productId);
    setShowModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Cement Mixture</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-blue-300">HOME</a></li>
              <li><a href="#product" className="hover:text-blue-300">PRODUCTS</a></li>
              <li><a href="#about" className="hover:text-blue-300">ABOUT US</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative h-[500px] bg-blue-600 text-white">
        <div className="absolute inset-0 opacity-15"></div>
        <div className="relative container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-4">Monochrome Chemicals Lorem ipsum is simply dummy text.</h1>
          <p className="mb-6 max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button onClick={(e) => {
            e.preventDefault();
            document.getElementById('essential')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }} className="hover:bg-white rounded-lg cursor-pointer text-white hover:text-blue-900 py-2 px-4 border border-white hover:border-blue-900">
            VIEW MORE
          </button>
        </div>
      </section>

      <section className="py-16 text-black" id='essential'>
        <div className="container mx-auto px-4 relative">
          <div className='flex justify-center'>
            <h2 className="text-3xl font-bold">Essential Components of <span className="text-blue-500">Our Cement Production Process</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start m-10">
              <BeakerIcon className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Chemical Additives</h3>
                <p className="text-gray-600">In cement production, chemical additives like gypsum and calcium sulfate help control the setting time and improve the durability of the final product.</p>
              </div>
            </div>
            <div className="flex items-start m-10">
              <LeafIcon className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Limestone & Clay</h3>
                <p className="text-gray-600">Limestone and clay are the fundamental raw materials used in cement manufacturing, providing the necessary calcium and silica that form the cement's structure.</p>
              </div>
            </div>
            <div className="flex items-start m-10">
              <AtomIcon className="w-12 h-12 text-blue-500 mr-4" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Heat Treatment</h3>
                <p className="text-gray-600">High temperatures in the kiln facilitate the chemical reaction between the raw materials, transforming them into clinker, the key ingredient of cement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white" id='product'>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">OUR PRODUCTS</h2>
          <p className="mb-8 max-w-2xl mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <button onClick={(e) => {
            e.preventDefault();
            document.getElementById('product')?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
          }} className="bg-transparent hover:bg-white text-white hover:text-blue-900 py-2 px-4 border border-white hover:border-transparent rounded">
            DISCOVER PRODUCTS
          </button>
        </div>
      </section>

      <section className="py-16 text-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.keys(productDetails).map((item) => (
              <div key={item} className="text-center">
                <Image
                  src={`/${item}.jpeg`}
                  alt={`Product Image`}
                  width={300}
                  height={200}
                  className="w-full h-auto mb-4"
                />
                <h3 className="text-xl text-black font-semibold mb-2">{productDetails[parseInt(item)].name}</h3>
                <p className="text-gray-600 mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                <button
                  onClick={() => handleViewProduct(parseInt(item))}
                  className="text-blue-500 hover:underline"
                >
                  VIEW PRODUCT →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showModal && selectedProduct !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50 text-black">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            {/* Product Content */}
            <h2 className="text-2xl font-bold mb-4">{productDetails[selectedProduct].name}</h2>
            <p className="text-gray-600 mb-4">{productDetails[selectedProduct].description}</p>
            <div className="flex justify-center">
              <Image
                src={`/${selectedProduct}.jpeg`}
                alt={`Product Image`}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-100 py-8" id='about'>
        <div className="container mx-auto px-4 text-center">
          {/* Social Links */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">About Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-gray-600">Production Manager</p>
                <p className="text-gray-600">Email: john.doe@example.com</p>
                <p className="text-gray-600">Room No: 101</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Jane Smith</h4>
                <p className="text-gray-600">Sales Manager</p>
                <p className="text-gray-600">Email: jane.smith@example.com</p>
                <p className="text-gray-600">Room No: 102</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold">Anna Williams</h4>
                <p className="text-gray-600">Marketing Head</p>
                <p className="text-gray-600">Email: anna.williams@example.com</p>
                <p className="text-gray-600">Room No: 103</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
