import React from 'react'

export const ProductDisplay = ({food}) => {
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Food for Thought</h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600 italic">"One cannot think well, love well, sleep well, if one has not dined well." - Virginia Woolf</p>
        </div>

        <div className="grid grid-cols-1 gap-6 px-4 mt-12 sm:px-0 xl:mt-20 xl:grid-cols-4 sm:grid-cols-2">
            {
                food.map(item => 
                    <div className="overflow-hidden bg-white rounded-md" key={item.id}>
                        <div className="px-5 py-6">
                            <div className="flex items-center justify-between">
                                <img className="flex-shrink-0 object-cover rounded-md" src={item.image} alt={item.title} />
                                <div className="min-w-0 ml-3 mr-auto">
                                    
                                </div>
                            </div>
                            <blockquote className="mt-5">
                                <p className="text-base font-bold text-gray-800">
                                    {item.title}
                                </p>
                            </blockquote>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
</section>

  )
}

export default ProductDisplay;
