import React from 'react';

const WorkplaceSubsections: React.FC = () => {
  return (
    <div className="flex-1 px-container-padding pt-4 pb-24 flex flex-col gap-section-margin max-w-4xl mx-auto w-full">
      {/* Context Header */}
      <div className="flex flex-col gap-unit">
        <div className="font-table-cell text-table-cell text-on-surface-variant flex items-center gap-1">
          <span className="material-symbols-outlined text-[16px]">domain</span> Main Manufacturing Facility
        </div>
        <h1 className="font-headline-lg text-headline-lg text-on-surface">Subsections & Visits</h1>
      </div>

      {/* Subsection Card: Warehouse */}
      <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
        <div className="bg-surface-container-low border-b border-outline-variant px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">inventory_2</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Warehouse Zone A</h2>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-3 py-element-gap border-b border-surface-container last:border-b-0 hover:bg-surface-bright transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-body-md text-body-md text-on-surface font-semibold">Routine Safety Sweep</span>
              <div className="flex items-center gap-2 font-table-cell text-table-cell text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Oct 12, 2023</span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">badge</span> Insp. Davis</span>
              </div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-label-caps text-label-caps tracking-wider border border-secondary-fixed">
              PASSED
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-element-gap border-b border-surface-container last:border-b-0 hover:bg-surface-bright transition-colors bg-surface-container-low/30">
            <div className="flex flex-col gap-1">
              <span className="font-body-md text-body-md text-on-surface font-semibold">Forklift Operational Audit</span>
              <div className="flex items-center gap-2 font-table-cell text-table-cell text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Nov 05, 2023</span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">badge</span> Insp. Miller</span>
              </div>
            </div>
            <div className="bg-surface-variant text-on-surface-variant px-2 py-1 rounded font-label-caps text-label-caps tracking-wider border border-outline-variant">
              PENDING
            </div>
          </div>
        </div>
      </article>

      {/* Subsection Card: Loading Dock */}
      <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
        <div className="bg-surface-container-low border-b border-outline-variant px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">local_shipping</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">South Loading Dock</h2>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-3 py-element-gap border-b border-surface-container last:border-b-0 hover:bg-surface-bright transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-body-md text-body-md text-on-surface font-semibold">Spill Containment Review</span>
              <div className="flex items-center gap-2 font-table-cell text-table-cell text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Sep 28, 2023</span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">badge</span> Insp. Chen</span>
              </div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-label-caps text-label-caps tracking-wider border border-secondary-fixed">
              PASSED
            </div>
          </div>
          <div className="flex items-center justify-between px-3 py-element-gap border-b border-surface-container last:border-b-0 hover:bg-surface-bright transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-body-md text-body-md text-on-surface font-semibold">Ventilation Follow-up</span>
              <div className="flex items-center gap-2 font-table-cell text-table-cell text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Aug 14, 2023</span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">badge</span> Insp. Davis</span>
              </div>
            </div>
            <div className="bg-error-container text-on-error-container px-2 py-1 rounded font-label-caps text-label-caps tracking-wider border border-error/30">
              OVERDUE
            </div>
          </div>
        </div>
      </article>

      {/* Subsection Card: Office */}
      <article className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden flex flex-col">
        <div className="bg-surface-container-low border-b border-outline-variant px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined">desk</span>
            <h2 className="font-headline-md text-headline-md text-on-surface">Administrative Offices</h2>
          </div>
          <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined">more_vert</span>
          </button>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between px-3 py-element-gap border-b border-surface-container last:border-b-0 hover:bg-surface-bright transition-colors">
            <div className="flex flex-col gap-1">
              <span className="font-body-md text-body-md text-on-surface font-semibold">Ergonomics Assessment</span>
              <div className="flex items-center gap-2 font-table-cell text-table-cell text-on-surface-variant">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">calendar_today</span> Jul 02, 2023</span>
                <span className="text-outline-variant">|</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">badge</span> Insp. Miller</span>
              </div>
            </div>
            <div className="bg-secondary-container text-on-secondary-container px-2 py-1 rounded font-label-caps text-label-caps tracking-wider border border-secondary-fixed">
              PASSED
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WorkplaceSubsections;
