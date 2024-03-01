

function ServiceCard({ service }) {
    const { title, img, price } = service;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="text-xl text-orange-500">Price: ${price}</p>
                <div className="card-actions">
                    <button className="btn btn-error text-white">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard