import React, { useState } from "react";

export const ProductsDisplay = ({ food }) => {
  const [item, setItem] = useState([]);

  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Food for Thought
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 italic">
            "One cannot think well, love well, sleep well, if one has not dined
            well." - Virginia Woolf
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
          {food.map((item) => (
            <div
              className="overflow-y-hidden bg-white rounded-md relative"
              key={item.id}
            >
              <div className="px-5 py-6">
                <div className="hidden lg:block top-4 left-5 drawer-content">
                  <label
                    className="px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase bg-green-700 rounded-md drawer-button"
                    htmlFor="my-drawer-4"
                    onClick={() => setItem(item.id, item.title)}
                  >
                    View Recipe
                  </label>
                </div>
                <div className="flex items-center justify-between flex-col">
                  <img
                    className="flex-1 object-cover rounded-md"
                    src={item.image}
                    alt={item.title}
                  />

                  <button
                    className="w-full lg:hidden bg-green-700 text-white p-2 rounded-md"
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal();
                      setItem(item.id, item.title);
                    }}
                  >
                    Show Recipe
                  </button>
                </div>
                <blockquote className="mt-5">
                  <p className="text-base font-bold text-gray-800">
                    {item.title}
                  </p>
                </blockquote>
              </div>
            </div>
          ))}
          {/* test commit for setting up the global username */}

          {/* for tablet and small screens */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Recipe for {item.title}</h3>
              <p className="py-4">{item.id}</p>
            </div>
          </dialog>

          {/* for laptop and larger screens */}
          <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <h3>Recipe for {item.title}</h3>
                <li>
                  <a>{item}</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDisplay;
