
import Profile from './Dashboard/Profile';

import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Muncipality = () => {
  const pieData = {
    labels: ['0-5 months', '6-11 months', '12-23 months', '24-35 months', '36-47 months', '48-59 months'],
    datasets: [
      {
        label: 'Malnutrition by Age Groups',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  const schemesPieData = {
    labels: ['Scheme 1', 'Scheme 2', 'Scheme 3', 'Scheme 4', 'Scheme 5'],
    datasets: [
      {
        label: 'Active Government Schemes',
        data: [65, 59, 80, 81, 56],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        borderColor: '#ffffff',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex w-full">

      <main className="flex-1 p-5 bg-gray-100">
        <Profile />

        <section>
          <div className="mb-6 flex space-x-4 h-16">
            <button className="bg-blue-950 text-white py-2 px-4 rounded-2xl w-40">
              Malnutrition Prevalence Rate
            </button>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-2xl w-40">
              Total Malnutrition Cases
            </button>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-2xl w-40">
              Real-time Updates
            </button>
            <button className="bg-blue-950 text-white py-2 px-4 rounded-2xl w-40">
              Geographical Heatmap
            </button>
          </div>
          <div className="mb-6">
            <h3 className="mb-4 text-lg font-bold">Geographical Heat map for Malnutrition</h3>
            <div className="h-80 w-3/5 bg-gray-300 text-center flex items-center justify-center">
              [Map Placeholder]
            </div>
          </div>

          <div className="flex justify-around float-end mb-6 flex-col">
            <div className="bg-white p-5 rounded shadow w-5/5 mr-3 h-auto -mt-96">
              <h3 className="mb-4 text-lg font-bold">Malnutrition by Age Groups</h3>
              <div className="h-72 bg-gray-300 text-center flex items-center justify-center">
                <Pie data={pieData} />
              </div>
            </div>

            <div className="bg-white p-5 rounded shadow h-auto mt-6">
              <h3 className="text-lg font-bold mb-4">Active Government Schemes</h3>
              <div className="flex items-center justify-between">
                <div className="h-80 w-72  bg-gray-300 text-center flex items-center justify-center">
                  <Pie data={schemesPieData} />
                </div>
              </div>
            </div>
          </div>

          <div className='w-full'>
            <h3 className="mb-4 text-lg font-bold">Real Time Updates</h3>
            <table className="w-40 bg-white rounded shadow">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Location</th>
                  <th className="py-2 px-4 border-b">Time</th>
                  <th className="py-2 px-4 border-b">Case</th>
                  <th className="py-2 px-4 border-b">Gender</th>
                  <th className="py-2 px-4 border-b">Age/Months</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='text-sm'>
                  <td className="py-2 px-4 border-b">Waghodia, Gujarat, Vadodara</td>
                  <td className="py-2 px-4 border-b">12pm, 4 April, 2024</td>
                  <td className="py-2 px-4 border-b">Severe Malnutrition</td>
                  <td className="py-2 px-6 border-b">Male</td>
                  <td className="py-2 px-10 border-b">3</td>
                  <td className="py-1 px-1 border-b">
                    <button className="bg-blue-950 text-white py-1 px-3 w-28 rounded">
                      Mark As Read
                    </button>
                  </td>
                </tr>
                <tr className='text-sm'>
                  <td className="py-2 px-4 border-b">Waghodia, Gujarat, Vadodara</td>
                  <td className="py-2 px-4 border-b">12pm, 4 April, 2024</td>
                  <td className="py-2 px-4 border-b">Severe Malnutrition</td>
                  <td className="py-2 px-4 border-b">Female</td>
                  <td className="py-2 px-10 border-b">3</td>
                  <td className="py-1 px-1 border-b">
                    <button className="bg-blue-950 text-white py-1 px-3 w-28 rounded">
                      Mark As Read
                    </button>
                  </td>
                </tr>
                <tr className='text-sm'>
                  <td className="py-2 px-4 border-b">Waghodia, Gujarat, Vadodara</td>
                  <td className="py-2 px-4 border-b">12pm, 4 April, 2024</td>
                  <td className="py-2 px-4 border-b">Severe Malnutrition</td>
                  <td className="py-2 px-6 border-b">Male</td>
                  <td className="py-2 px-10 border-b">3</td>
                  <td className="py-1 px-1 border-b">
                    <button className="bg-blue-950 text-white py-1 px-3 w-28 rounded">
                      Mark As Read
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Muncipality;
