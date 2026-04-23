import React from 'react';
import { useNavigate } from 'react-router-dom';

const WorkplaceDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col gap-section-margin max-w-2xl mx-auto w-full pb-[80px]">
      {/* Workplace Overview Card */}
      <section className="bg-surface-container-lowest border border-outline-variant rounded-xl p-container-padding architectural-shadow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="inline-flex items-center gap-1 bg-secondary-container text-on-secondary-container font-label-caps text-label-caps px-2 py-0.5 rounded-DEFAULT mb-2">
              <span className="material-symbols-outlined text-[12px]">verified</span>
              COMPLIANT
            </div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-1">Facility Alpha - North Wing</h2>
            <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]">location_on</span>
              1284 Industrial Pkwy, Sector 4
            </p>
          </div>
        </div>

        <div className="border-t border-outline-variant pt-3 mt-1 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
            <span className="material-symbols-outlined text-[18px]">badge</span>
            <span className="font-semibold text-on-surface">Site Manager:</span> Sarah Jenkins
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
            <span className="material-symbols-outlined text-[18px]">call</span>
            <span className="font-semibold text-on-surface">Contact:</span> +1 (555) 019-2834
          </div>
        </div>
      </section>

      {/* High-Level Metrics Bento Grid */}
      <section>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined">analytics</span>
          Compliance Overview
        </h3>

        <div className="grid grid-cols-2 gap-element-gap">
          {/* Overall Score */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-container-padding col-span-2 architectural-shadow flex justify-between items-center">
            <div>
              <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mb-1">Safety Index Score</p>
              <div className="font-stat-lg text-stat-lg text-primary flex items-baseline gap-1">
                94<span className="font-headline-md text-headline-md text-outline">/100</span>
              </div>
            </div>
            <div className="bg-surface-container-low inner-well rounded-lg p-2 flex items-center justify-center w-24 h-12">
              {/* Placeholder for sparkline well */}
              <div className="w-full h-1 border-b-2 border-primary border-dashed relative">
                <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-primary"></div>
              </div>
            </div>
          </div>

          {/* Open Hazards */}
          <div className="bg-error-container border border-[#ffb4ab] rounded-xl p-container-padding architectural-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-on-error-container">warning</span>
              <span className="bg-[#ffb4ab] text-[#690005] font-label-caps text-label-caps px-1.5 py-0.5 rounded-DEFAULT">+2</span>
            </div>
            <p className="font-label-caps text-label-caps text-[#93000a] uppercase opacity-90">Open Hazards</p>
            <p className="font-stat-lg text-stat-lg text-on-error-container">3</p>
          </div>

          {/* Pending Inspections */}
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-container-padding architectural-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="material-symbols-outlined text-on-surface-variant">assignment_late</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase">Pending Actions</p>
            <p className="font-stat-lg text-stat-lg text-on-surface">12</p>
          </div>
        </div>
      </section>

      {/* Structural Navigation */}
      <section>
        <h3 className="font-headline-md text-headline-md text-on-surface mb-3 flex items-center gap-2">
          <span className="material-symbols-outlined">account_tree</span>
          Structure & Records
        </h3>

        <div className="flex flex-col gap-element-gap">
          <button
            onClick={() => navigate('/workplace/subsections')}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl p-container-padding flex items-center justify-between hover:bg-surface-container-low transition-colors w-full text-left architectural-shadow group"
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary-container text-on-secondary-container p-2 rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">dataset</span>
              </div>
              <div>
                <p className="font-headline-md text-[16px] font-semibold text-on-surface leading-tight">Subsections</p>
                <p className="font-body-md text-[13px] text-on-surface-variant">Floors, zones, and distinct areas</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </button>

          <button
            onClick={() => navigate('/workers')}
            className="bg-surface-container-lowest border border-outline-variant rounded-xl p-container-padding flex items-center justify-between hover:bg-surface-container-low transition-colors w-full text-left architectural-shadow group"
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary-container text-on-secondary-container p-2 rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">engineering</span>
              </div>
              <div>
                <p className="font-headline-md text-[16px] font-semibold text-on-surface leading-tight">Workers</p>
                <p className="font-body-md text-[13px] text-on-surface-variant">Assigned personnel and certifications</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </button>

          <button className="bg-surface-container-lowest border border-outline-variant rounded-xl p-container-padding flex items-center justify-between hover:bg-surface-container-low transition-colors w-full text-left architectural-shadow group">
            <div className="flex items-center gap-3">
              <div className="bg-secondary-container text-on-secondary-container p-2 rounded-lg group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">fact_check</span>
              </div>
              <div>
                <p className="font-headline-md text-[16px] font-semibold text-on-surface leading-tight">Visits</p>
                <p className="font-body-md text-[13px] text-on-surface-variant">Inspection logs and external audits</p>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">chevron_right</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default WorkplaceDetails;
