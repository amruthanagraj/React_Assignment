import React from 'react';

const Header = () => {
  return (
    <div className="mb-6 ">
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="flex  ">
          <div className="bg-purple-600 text-white rounded-s ">
            <button className="text-lg font-semibold bg-transparent w-full py-2 px-4">Data</button>
          </div>
          <div className="bg-white border border-gray-300 rounded-md">
            <button className="text-lg font-semibold text-gray-500 w-full py-2 px-4">Summary</button>
          </div>
          <div className="bg-white border border-gray-300 rounded-md">
            <button className="text-lg font-semibold text-gray-500 w-full py-2 px-4">Logs</button>
          </div>
        </div>
        <div className="text-gray-500">Download</div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
        <div className="flex space-x-4">
          <div>
            <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-md">PROJECT NAME:</span>
            <span> ETL New Demo 2</span>
          </div>
          <div>
            <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-md">OUTPUT DATASET NAME:</span>
            <span> ETL N_D2</span>
          </div>
          <div>
            <span className="bg-purple-100 text-purple-700 px-4 py-1 rounded-md">LAST RUN:</span>
            <span> Not Available</span>
          </div>
        </div>
        <div className="flex space-x-4">Rows: 500</div>
      </div>
    </div>
  );
}

export default Header;
