import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Logo from '../../Sharedpages/Header/Logo';
import swal from 'sweetalert';

const Cart = () => {
  const cartItem = useLoaderData();
  const { image, name, type, brandname, price } = cartItem;

  const [formData, setFormData] = useState({ image, name, type, brandname, price });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const confirmCart = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://b8a10-brandshop-server-side-ct1feotw0-fahmida-khans-projects.vercel.app/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Cart item confirmed successfully.');
        swal("Successfully", "Added to Cart!", "success");
        // Add further actions here if needed, such as updating UI.
      } else {
        console.error('Failed to confirm cart item.');
        // Handle the error as needed.
      }
    } catch (error) {
      console.error('Error confirming cart item:', error);
      // Handle the error as needed.
    }
  };

  return (
    <div>
      <Logo></Logo>
      <form
        onSubmit={confirmCart}
        className="bg-base-300 max-w-xl mx-auto p-8 mt-10"
      >
        <div className="form-control max-w-xl">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div className="form-control max-w-xl">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="brandname"
              value={formData.brandname}
              onChange={handleChange}
              placeholder="Brand Name"
              className="input input-bordered w-full"
            />
          </label>
        </div>
       


        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Product Name"
              className="input input-bordered w-full "
            />
          </label>
        </div>

        <div className="form-control max-w-xl">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="type"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div className="form-control max-w-xl">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <div>
          <input className='btn btn-block mt-4 bg-slate-500' type="submit" value="Confirm Add to Cart" />
        </div>
      </form>
    </div>
  );
};

export default Cart;