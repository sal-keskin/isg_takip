import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkplacesDashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-grow p-container-padding max-w-7xl mx-auto w-full">
      {/* Search and Action Bar */}
      <div className="flex flex-col md:flex-row gap-element-gap mb-section-margin justify-between items-start md:items-center mt-4">
        <div className="relative w-full md:max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input
            className="w-full pl-10 pr-4 py-2 bg-surface-container-lowest border border-outline-variant rounded-lg text-body-md font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder-on-surface-variant"
            placeholder="Search workplaces, addresses..."
            type="text"
          />
        </div>
        <button className="flex items-center gap-2 bg-primary text-on-primary px-4 py-2 rounded-lg font-label-caps text-label-caps hover:opacity-90 transition-opacity shadow-[0_2px_4px_rgba(0,0,0,0.1)] w-full md:w-auto justify-center">
          <span className="material-symbols-outlined text-[18px]">add</span>
          NEW WORKPLACE
        </button>
      </div>

      {/* Dashboard Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-element-gap mb-section-margin">
        {/* Active Sites Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-container-padding shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Active Sites</h3>
            <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-full">business</span>
          </div>
          <div className="font-stat-lg text-stat-lg text-on-surface mb-2">24</div>
          <div className="flex items-center gap-1 text-tertiary font-label-caps text-label-caps">
            <span className="material-symbols-outlined text-[14px]">trending_up</span>
            <span>+2 THIS MONTH</span>
          </div>
        </div>

        {/* Total Workers Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-container-padding shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Total Workers</h3>
            <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-full">groups</span>
          </div>
          <div className="font-stat-lg text-stat-lg text-on-surface mb-2">1,842</div>
          <div className="w-full bg-surface-container-highest rounded-full h-1.5 mt-4">
            <div className="bg-primary h-1.5 rounded-full" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Open Hazards Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-container-padding shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">Critical Hazards</h3>
            <span className="material-symbols-outlined text-error bg-error-container p-2 rounded-full">warning</span>
          </div>
          <div className="font-stat-lg text-stat-lg text-error mb-2">7</div>
          <div className="flex items-center gap-1 text-outline font-label-caps text-label-caps">
            <span>ACROSS 3 SITES</span>
          </div>
        </div>
      </div>

      {/* Workplaces List (Bento-style Grid) */}
      <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Managed Workplaces</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-element-gap">

        {/* Workplace Card 1 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="border-b border-outline-variant p-container-padding flex justify-between items-center bg-surface-container-low">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">Northside Industrial Park</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1 text-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                1400 Industrial Pkwy, Sector 4
              </p>
            </div>
            <span className="bg-surface-container-highest text-on-surface font-label-caps text-label-caps px-2 py-1 rounded">ACTIVE</span>
          </div>
          <div className="p-container-padding">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-surface-container-low p-3 rounded-md inset-shadow-sm flex flex-col">
                <span className="block text-outline font-label-caps text-label-caps mb-1">WORKERS</span>
                <span className="font-headline-md text-headline-md text-on-surface">342</span>
              </div>
              <div className="bg-surface-container-low p-3 rounded-md inset-shadow-sm flex flex-col">
                <span className="block text-outline font-label-caps text-label-caps mb-1">INCIDENTS</span>
                <span className="font-headline-md text-headline-md text-on-surface">0</span>
              </div>
              <div className="bg-surface-container-low p-3 rounded-md inset-shadow-sm flex flex-col">
                <span className="block text-outline font-label-caps text-label-caps mb-1">COMPLIANCE</span>
                <span className="font-headline-md text-headline-md text-primary">98%</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
              <p className="font-table-cell text-table-cell text-on-surface-variant text-sm">Last inspected: Oct 12, 2023</p>
              <button
                onClick={() => navigate('/workplace/details')}
                className="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:underline"
              >
                VIEW DASHBOARD <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Workplace Card 2 */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="border-b border-outline-variant p-container-padding flex justify-between items-center bg-surface-container-low">
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface">West End Manufacturing Facility</h3>
              <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1 mt-1 text-sm">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                880 West Ave, Building B
              </p>
            </div>
            <span className="bg-error-container text-on-error-container font-label-caps text-label-caps px-2 py-1 rounded">ATTENTION</span>
          </div>
          <div className="p-container-padding">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-surface-container-low p-3 rounded-md inset-shadow-sm flex flex-col">
                <span className="block text-outline font-label-caps text-label-caps mb-1">WORKERS</span>
                <span className="font-headline-md text-headline-md text-on-surface">890</span>
              </div>
              <div className="bg-error-container/30 p-3 rounded-md inset-shadow-sm border border-error/20 flex flex-col">
                <span className="block text-error font-label-caps text-label-caps mb-1">INCIDENTS</span>
                <span className="font-headline-md text-headline-md text-error">3</span>
              </div>
              <div className="bg-surface-container-low p-3 rounded-md inset-shadow-sm flex flex-col">
                <span className="block text-outline font-label-caps text-label-caps mb-1">COMPLIANCE</span>
                <span className="font-headline-md text-headline-md text-tertiary">82%</span>
              </div>
            </div>
            <div className="flex justify-between items-center border-t border-outline-variant pt-4 mt-2">
              <p className="font-table-cell text-table-cell text-on-surface-variant text-sm">Last inspected: Sep 05, 2023</p>
              <button
                onClick={() => navigate('/workplace/details')}
                className="text-primary font-label-caps text-label-caps flex items-center gap-1 hover:underline"
              >
                VIEW DASHBOARD <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WorkplacesDashboard;
