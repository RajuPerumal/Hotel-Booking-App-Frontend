import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Signup } from "./signup";

const propertyData = [
  {
    name: "TreeHouse Neptune",
    rating: 4.5,
    location: "Panjim | 4 minutes walk to Deltin Royale",
    coupleFriendly: true,
    offer: "10% Discount on F&B services",
    reviews: 952,
    oldPrice: 5000,
    newPrice: 3374,
    taxes: 936,
    image: "https://tools-api.webcrumbs.org/image-placeholder/150/100/hotel/5",
  },
  {
    name: "Ginger Goa, Panjim",
    rating: 3.9,
    location: "Panjim | 1.8 km drive to Deltin Royale",
    coupleFriendly: true,
    offer: "Prime location near Panjim bus stand, courteous staff",
    reviews: 5805,
    oldPrice: 5000,
    newPrice: 4499,
    taxes: 540,
    image: "https://tools-api.webcrumbs.org/image-placeholder/150/100/hotel/2",
  },
  {
    name: "Hotel Rajdhani",
    rating: 3.7,
    location: "Panjim | 4 minutes walk to Deltin Royale",
    coupleFriendly: true,
    offer: "Prime location, nearby casinos access, pure vegetarian food",
    reviews: 681,
    oldPrice: 4000,
    newPrice: 3081,
    taxes: 828,
    image: "https://tools-api.webcrumbs.org/image-placeholder/150/100/hotel/3",
  },
  {
    name: "Marriott Resort & Spa",
    rating: 4.7,
    location: "Miramar | Beachfront property with stunning views",
    coupleFriendly: true,
    offer: "Free breakfast for two",
    reviews: 1205,
    oldPrice: 7000,
    newPrice: 5899,
    taxes: 900,
    image: "https://tools-api.webcrumbs.org/image-placeholder/150/100/hotel/1",
  },
  {
    name: "The Leela Goa",
    rating: 4.8,
    location: "Cavelossim | Luxurious stay with private beach",
    coupleFriendly: true,
    offer: "20% off on spa services",
    reviews: 950,
    oldPrice: 12000,
    newPrice: 9500,
    taxes: 1500,
    image: "https://tools-api.webcrumbs.org/image-placeholder/150/100/hotel/7",
  },
  {
    name: "Taj Exotica Resort & Spa",
    rating: 4.6,
    location: "Benaulim | Opulent stay amidst lush gardens",
    coupleFriendly: true,
    offer: "Complimentary cocktail upon arrival",
    reviews: 3000,
    oldPrice: 11000,
    newPrice: 8700,
    taxes: 1300,
    image: "https://tools-api.webcrumbs.org/image-placeholder/150/100/hotel/8",
  },
];

const PropertyCard = ({ property }) => (
  <div className="card mb-4 shadow-sm">
    <div className="row g-0 rowcard">
      <div className="col-md-4">
        <img
          src={property.image}
          alt={property.name}
          className="img-fluid rounded-start"
        />
      </div>
      
      <div className="col-md-4">
        <div className="card-body">
          <h5 className="card-title">{property.name} ★★★★☆</h5>
          <p className="card-text">{property.location}</p>
          {property.coupleFriendly && (
            <p className="text-success">Couple Friendly</p>
          )}
          <p className="card-text">{property.offer}</p>
        </div>
      </div>

      <div className="col-md-4">
        <p className="card-text">
          <strong className="text-primary">Very Good {property.rating}</strong>{" "}
          <span className="text-muted">({property.reviews} Ratings)</span>
        </p>
        <p className="text-muted text-decoration-line-through">
          ₹ {property.oldPrice}
        </p>
        <p className="card-text">
          <strong className="fs-5">₹ {property.newPrice}</strong>
        </p>
        <p className="text-muted">+ ₹{property.taxes} taxes & fees Per Night</p>
        <a href="#" className="btn btn-link">
          Login to Book Now & Pay Later!
        </a>
      </div>
    </div>
  </div>
);

const App = () => {
  // State to manage the signup modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal
  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container my-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex gap-3">
          <div>
            <label className="fw-semibold">City, Area or Property</label>
            <div className="border p-2 rounded">Goa</div>
          </div>
          <div>
            <label className="fw-semibold">Check-in</label>
            <div className="border p-2 rounded">Thu, 3 Oct 2024</div>
          </div>
          <div>
            <label className="fw-semibold">Check-out</label>
            <div className="border p-2 rounded">Fri, 4 Oct 2024</div>
          </div>
          <div>
            <label className="fw-semibold">Rooms & Guests</label>
            <div className="border p-2 rounded">1 Room, 2 Adults</div>
          </div>
        </div>
        <button className="btn btn-primary">Search</button>
        <button className="btn btn-primary" onClick={handleModalToggle}>
          Signup
        </button>
        <button className="btn btn-primary" onClick={handleModalToggle}>
          Login
        </button>
      </header>

      <div className="row">
        <aside className="col-md-3">
          <button className="btn btn-outline-info w-100 mb-4">
            <i className="fas fa-map"></i> Explore on Map
          </button>

          <h5 className="fw-bold mb-3">Select Filters</h5>
          <div className="mb-3">
            <h6>Suggested For You</h6>
            <div>
              <label>
                <input type="checkbox" /> Last Minute Deals (158)
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> 5 Star (408)
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> North Goa (343)
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Unmarried Couples Allowed (2460)
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Free Cancellation (736)
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" /> Calangute (408)
              </label>
            </div>
          </div>
          <div>
            <h6>Price per night</h6>
            <label>
              <input type="checkbox" /> ₹ 0 - ₹ 2000 (635)
            </label>
            <label>
              <input type="checkbox" /> ₹ 2000 - ₹ 4000 (835)
            </label>
            <label>
              <input type="checkbox" /> ₹ 4000 - ₹ 7500 (465)
            </label>
            <label>
              <input type="checkbox" /> ₹ 7500 - ₹ 11000 (253)
            </label>
          </div>
        </aside>

        <main className="col-md-9">
          <h4 className="mb-4">Showing Properties in Goa</h4>
          {propertyData.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </main>
      </div>

      {/* Modal for Sign Up */}
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: "block" }}
          aria-labelledby="signupModalLabel"
          aria-modal="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signupModalLabel">
                  Sign Up
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleModalToggle}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <Signup />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay for modal */}
      {showModal && (
        <div
          className="modal-backdrop fade show"
          onClick={handleModalToggle}
        ></div>
      )}
    </div>
  );
};

export default App;
