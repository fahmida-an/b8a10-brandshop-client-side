import Logo from "../../Sharedpages/Header/Logo";
import swal from 'sweetalert';
const AddProducts = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandname = form.brandname.value;
    const type = form.select.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const details = form.details.value;
    const newProducts = {
      image,
      name,
      brandname,
      type,
      price,
      rating,
      details,
    };
    console.log(newProducts);

    //server connection 
    fetch('http://localhost:4000/products', {
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(newProducts)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId > 0){
            swal("Successfully", "Product Added!", "success");

        }
    })
  };

  return (
    <div>
      <h2>This is private add products</h2>
      <Logo></Logo>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center py-8 font-bold text-5xl">Add a Product</h2>
        <form
          onSubmit={handleAddProduct}
          className="bg-base-300 max-w-xl mx-auto p-8"
        >
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
              <select name="brandname" className="select select-bordered w-full ">
                <option disabled selected>
                  Brand Name
                </option>
                <option value="Dior">Dior</option>
                <option value="Addidas">Addidas</option>
                <option value="Nike">Nike</option>
                <option value="Aarong">Aarong</option>
                <option value="Zara">Zara</option>
                <option value="Gucci">Gucci</option>
              </select>
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
                <option value="Watch">Watch</option>
                <option value="Shoes">Shoes</option>
                <option value="Jewellery">Jewellery</option>
                <option value="Foundation">Foundation</option>
                <option value="Lipsticks">Lipsticks</option>
                <option value="Eye Shadow">Eye Shadow</option>
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
