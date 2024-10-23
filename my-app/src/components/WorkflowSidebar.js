import React from 'react';
const WorkflowSidebar = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-64">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-purple-700 text-lg">WORKFLOW</h2>
       
      </div>

      <div className="bg-purple-100 p-4 rounded-lg mb-6">
        <h3 className="text-purple-700 font-semibold text-sm">DATASET SELECTION</h3>
        <p className="text-xs text-gray-700 mt-1">name: Brick Data</p>
      </div>

      <ul className="space-y-4">
        <li>
          <button className="w-full bg-purple-100 text-purple-700 px-4 py-2 rounded-md text-left text-sm font-semibold hover:bg-purple-200 transition duration-150">
            + NEW
          </button>
        </li>
        <li>
          <button className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-left text-sm font-semibold hover:bg-gray-100 transition duration-150">
            + AGGREGATE
          </button>
        </li>
        <li>
          <button className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-left text-sm font-semibold hover:bg-gray-100 transition duration-150">
            + CLEAN
          </button>
        </li>
        <li>
          <button className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-left text-sm font-semibold hover:bg-gray-100 transition duration-150">
            + DEDUPE
          </button>
        </li>
        <li>
          <button className="w-full bg-white text-gray-700 px-4 py-2 border border-gray-300 rounded-md text-left text-sm font-semibold hover:bg-gray-100 transition duration-150">
            + JOIN
          </button>
        </li>
      </ul>
    </div>
  );
}

export default WorkflowSidebar;
