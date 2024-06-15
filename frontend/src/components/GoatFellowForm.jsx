import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <div className="container my-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1 className="display-4 fw-normal text-body-emphasis font-weight-bold">Enter the Information For Goat</h1>
      </div>

      <div className="container mx-auto mt-2">
        <form action="/contact" method="POST" style={{ border: '1px dotted gray' }} className="px-5 py-5">
          <div className="form-group">
            <label htmlFor="Name">Milk In Litres</label>
            <input type="number" className="form-control" id="Milk" name="Milk" placeholder="Enter Milk in Litres" />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="Name">Age of Goat</label>
            <input type="number" className="form-control" id="Age" name="Age" placeholder="Enter Age" />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="Name">Height (cm)</label>
            <input type="number" className="form-control" id="Height" name="Height" placeholder="Enter Height" />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="Name">Weight (kg)</label>
            <input type="number" className="form-control" id="Weight" name="Weight" placeholder="Enter Weight" />
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Select Pregnancy Status</label>
            <select className="form-control" id="PregnancyStatus" name="PregnancyStatus">
              <option>No</option>
              <option>Yes</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Select Behaviour</label>
            <select className="form-control" id="Behaviour" name="Behaviour">
              <option>Docile</option>
              <option>Normal</option>
              <option>Aggressive</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="exampleFormControlSelect2">Select Gender</label>
            <select className="form-control" id="Gender" name="Gender">
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <br />

          <div className="form-group">
            <label htmlFor="Name">HayGrass Intake (kg's)</label>
            <input type="number" className="form-control" id="Intake" name="Intake" placeholder="Enter HayGrass Intake" />
          </div>
          <br />

          


          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
