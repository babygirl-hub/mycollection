import React, { useState } from "react";

export default function HairCollectionApp() {
  const [formData, setFormData] = useState({
    name: "",
    hairType: "",
    length: "",
    comment: ""
  });

  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({ name: "", hairType: "", length: "", comment: "" });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hair Collection Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Hair Type</label>
          <input
            type="text"
            name="hairType"
            value={formData.hairType}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Length (inches)</label>
          <input
            type="number"
            name="length"
            value={formData.length}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Comments</label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Submitted Entries</h2>
        <ul className="space-y-2">
          {submittedData.map((entry, index) => (
            <li key={index} className="border p-2 rounded">
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Hair Type:</strong> {entry.hairType}</p>
              <p><strong>Length:</strong> {entry.length} inches</p>
              <p><strong>Comments:</strong> {entry.comment}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
