import Logo from "../../Sharedpages/Header/Logo";

const AddProducts = () => {
    
  return (
    <div>
      <h2>This is private add products</h2>
      <Logo></Logo>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center py-8 font-bold text-5xl">Add a Product</h2>
        <form className="bg-base-300 max-w-xl mx-auto p-8">
          <div className="form-control max-w-xl">
            <label className="label">
              <span className="label-text">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
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
                placeholder="Product Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandname"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Type</span>
            </label>
            <label className="input-group">
              <select name="select" className="select select-bordered w-full ">
                <option disabled selected>
                  type
                </option>
                <option>Watch</option>
                <option>Shoes</option>
                <option>Jewellery</option>
                <option>Foundation</option>
                <option>Lipsticks</option>
                <option>Eye Shadow</option>
              </select>
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="rating"
                placeholder="Rating"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input type="submit" value="Add Product" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
