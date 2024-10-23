import React from 'react';

const DataTable = ({ data }) => {
    if (!data || data.length === 0 || !data[0].table_headers || !data[0].table_data) {
        return <div>No data available</div>;
    }
    return (
        <div className="bg-white rounded-lg shadow-md overflow-auto">
            <table className="min-w-full text-sm text-gray-600">
                <thead className="bg-gray-200">
                    <tr>
                        {data[0].table_headers.map((header, index) => (
                            <th key={index} className="p-6 border-b border-gray-300">
                                <div className="flex flex-col items-center">
                                    <div className="pb-2 border-b border-gray-400 w-full flex justify-center  items-end">
                                        <span className="mr-2">{header.name}</span>
                                        <img
                                            src="https://cdn-icons-png.flaticon.com/512/1632/1632602.png"
                                            alt="Delete icon"
                                            className="w-4 h-4"
                                            title="Delete icons created by feen - Flaticon"
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <select
                                            className="p-2 border rounded text-gray-700 bg-white"
                                            disabled
                                        >
                                            <option value="">Select</option>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                        </select>
                                    </div>
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data[0].table_data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="border-t border-gray-300">
                            {row.map((value, cellIndex) => (
                                <td key={cellIndex} className="p-2 font-bold border-b border-r border-gray-300 last:border-r-0">
                                    {typeof value === 'number' ? value.toFixed(2) : value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
