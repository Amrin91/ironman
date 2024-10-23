
const Pricing = () => {
  const ladiesItems = [
    { item: "Cardigan/Sweater/Pullover", laundry: "৳ 210", dryCleaning: "৳ 385" },
    { item: "Dress", laundry: "৳ 245", dryCleaning: "৳ 290" },
    { item: "Dupatta", laundry: "৳ 115", dryCleaning: "৳ 160" },
    { item: "Ladies Blazer", laundry: "৳ 0", dryCleaning: "৳ 510" },
    { item: "Kameez", laundry: "৳ 175", dryCleaning: "৳ 210" },
    { item: "Kameez + Shalwar", laundry: "৳ 275", dryCleaning: "৳ 310" },
    { item: "Kameez + Shalwar + Dupatta", laundry: "৳ 330", dryCleaning: "৳ 370" },
    { item: "Lahanga", laundry: "৳ 0", dryCleaning: "৳ 750" },
    { item: "Lahanga - Top", laundry: "৳ 0", dryCleaning: "৳ 380" },
    { item: "Overcoat", laundry: "৳ 0", dryCleaning: "৳ 685" },
    { item: "Saree - Banarasi katan", laundry: "৳ 0", dryCleaning: "৳ 760" },
    { item: "Saree - Cotton", laundry: "৳ 300", dryCleaning: "৳ 450" },
    { item: "Saree - Georgette", laundry: "৳ 0", dryCleaning: "৳ 425" },
    { item: "Saree - Jamdani Cotton", laundry: "৳ 250", dryCleaning: "৳ 415" },
    { item: "Saree - Silk", laundry: "৳ 0", dryCleaning: "৳ 385" },
  ];

  const gentsItems = [
    { item: "Blazer", laundry: "৳ 0", dryCleaning: "৳ 510" },
    { item: "Cardigan", laundry: "৳ 210", dryCleaning: "৳ 385" },
    { item: "Coat", laundry: "৳ 0", dryCleaning: "৳ 510" },
    { item: "Jacket", laundry: "৳ 385", dryCleaning: "৳ 510" },
    { item: "Jacket - leather", laundry: "৳ 0", dryCleaning: "৳ 865" },
    { item: "Kabli panjabi", laundry: "৳ 210", dryCleaning: "৳ 340" },
    { item: "Kabuli suit - 2pc", laundry: "৳ 265", dryCleaning: "৳ 425" },
    { item: "Overcoat/Overall", laundry: "৳ 510", dryCleaning: "৳ 680" },
    { item: "Pajama/Lungi", laundry: "৳ 160", dryCleaning: "৳ 215" },
    { item: "Panjabi - Cotton", laundry: "৳ 160", dryCleaning: "৳ 215" },
    { item: "Panjabi - Silk", laundry: "৳ 0", dryCleaning: "৳ 255" },
    { item: "Prince coat", laundry: "৳ 0", dryCleaning: "৳ 510" },
    { item: "Pullover", laundry: "৳ 210", dryCleaning: "৳ 385" },
    { item: "Safari suit - 2pc", laundry: "৳ 0", dryCleaning: "৳ 430" },
    { item: "Safari top", laundry: "৳ 0", dryCleaning: "৳ 255" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Ladies</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Laundry</th>
                <th className="px-4 py-2">Dry Cleaning</th>
              </tr>
            </thead>
            <tbody>
              {ladiesItems.map((item, index) => (
                <tr key={index} className="bg-blue-950 border-b text-white hover:bg-gray-100">
                  <td className="px-4 py-2">{item.item}</td>
                  <td className="px-4 py-2">{item.laundry}</td>
                  <td className="px-4 py-2">{item.dryCleaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Gents</h2>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Item</th>
                <th className="px-4 py-2">Laundry</th>
                <th className="px-4 py-2">Dry Cleaning</th>
              </tr>
            </thead>
            <tbody>
              {gentsItems.map((item, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-100">
                  <td className="px-4 py-2">{item.item}</td>
                  <td className="px-4 py-2">{item.laundry}</td>
                  <td className="px-4 py-2">{item.dryCleaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
