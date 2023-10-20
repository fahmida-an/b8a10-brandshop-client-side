import Logo from '../../Sharedpages/Header/Logo';
import { useLoaderData } from 'react-router-dom';
import swal from 'sweetalert';

const UpdateAddidasProduct = () => {

    const addidasProduct = useLoaderData();
    const { _id, name, brandname, type, price, image, rating, details } = addidasProduct;

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandname = form.brandname.value;
        const type = form.select.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const updatedProduct = {
          image,
          name,
          brandname,
          type,
          price,
          rating,
          details,
        };
        // console.log(updatedProduct);

    fetch(`http://localhost:4000/products/Addidas/${_id}`, {
        method: "PUT",
        headers: {
            "content-type" : "application/json"
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        //reset form here option
        // if(data.insertedId > 0){
        //   alert('Success');
        // }

        if(data.matchedCount > 0){
            swal("Successfully", "Updated data!", "success");
        }
    })

};
    return (
        <div>
                  <Logo></Logo>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center py-8 font-bold text-5xl">Update Product</h2>
        <form
          onSubmit={handleUpdateProduct}
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
                defaultValue={image}
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
                defaultValue={name}
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
                <option disabled selected defaultValue={brandname}>
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
                <option disabled selected defaultValue={type}>
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
                defaultValue={price}
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
                defaultValue={rating}
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
                defaultValue={details}
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input type="submit" value="Update Product" className="btn btn-block" />
        </form>
      </div>
        </div>
    );
};

export default UpdateAddidasProduct;