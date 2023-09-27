import { Button, Link } from "@nextui-org/react";

const AboutPage = () => (
  <div className="container mx-auto pt-20 h-screen">
    <div className="text-left text-2xl my-10">
      <h1 className="text-3xl font-bold mb-4">Take Action</h1>
      <p className="mb-4">What can I do with this?</p>

      <ul className="list-disc pl-6 mb-6">
        <li>Removing trash and debris</li>
        <li>Grading the land</li>
        <li>Planting a small number of trees to create a park-like setting</li>
        <li>Installing low-perimeter (about 1 meter high) fences with multiple ungated entrances to encourage use</li>
        <li>Regularly maintaining the lot</li>
      </ul>

      <p className="mb-4">
        This approach has been shown to be inexpensive and cost-effective, with costs averaging about $5 per square meter and maintenance averaging $0.50 per square meter thereafter. If you’re not able to take on a full intervention, it’s still worthwhile to install a fence, plant trees, or even simply keep the lot free of trash, which can be done on your own.
      </p>

      <p className="mb-4">Where can I get help?</p>

      <p className="mb-4">
        To carry out something like this, try getting in touch with your local Neighborhood Advisory Committee, a nearby Community Development Corporation, or your local representative. Explain to them what you want to do and why. Show them this map to support your explanation!
      </p>
      
    </div>
    <div className="flex justify-between space-x-2.5">
      {/* Add buttons or other UI elements here */}
    </div>
  </div>
);

export default AboutPage;