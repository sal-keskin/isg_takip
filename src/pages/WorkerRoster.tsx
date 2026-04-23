import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';

const WorkerRoster: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('W-8492');
  const { workers, loadInitialData } = useStore();

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  return (
    <div className="flex-1 px-container-padding py-section-margin max-w-4xl mx-auto w-full">
      {/* Header & Search */}
      <div className="mb-section-margin flex flex-col gap-element-gap">
        <div>
          <h1 className="font-headline-lg text-headline-lg text-on-surface">Worker Roster</h1>
          <p className="font-table-cell text-table-cell text-on-surface-variant">Facility 4B • {workers.length} Active Personnel</p>
        </div>

        <div className="bg-surface-container-lowest border border-outline-variant rounded-DEFAULT flex items-center px-unit py-2 shadow-sm focus-within:border-primary-container focus-within:ring-1 focus-within:ring-primary-container transition-all">
          <span className="material-symbols-outlined text-outline mx-2">search</span>
          <input
            className="w-full bg-transparent border-none focus:ring-0 font-table-cell text-table-cell text-on-surface placeholder-outline-variant p-0 outline-none"
            placeholder="Search by name or ID..."
            type="text"
          />
          <button className="text-outline hover:text-primary p-1 flex items-center justify-center">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      {/* Worker List */}
      <div className="flex flex-col gap-element-gap">
        {workers.map((worker) => {
          const isExpanded = expandedId === worker.id;

          if (isExpanded) {
            return (
              <div key={worker.id} className="bg-surface-container-lowest border border-error rounded-lg flex flex-col overflow-hidden shadow-sm">
                <div className="p-container-padding flex justify-between items-start bg-error-container/10 cursor-pointer" onClick={() => setExpandedId(null)}>
                  <div className="flex gap-container-padding items-center">
                    <img alt={worker.name} className="w-12 h-12 rounded-full border border-error object-cover" src={worker.image}/>
                    <div>
                      <h2 className="font-headline-md text-headline-md text-on-surface">{worker.name}</h2>
                      <p className="font-table-cell text-table-cell text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">badge</span> ID: {worker.id} • {worker.role}
                      </p>
                    </div>
                  </div>
                  <div className="bg-error-container text-on-error-container font-label-caps text-label-caps px-2 py-1 rounded-DEFAULT border border-error/20 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">warning</span>
                    ACTION REQUIRED
                  </div>
                </div>

                <div className="h-[1px] bg-outline-variant w-full"></div>

                <div className="p-container-padding flex flex-col gap-element-gap bg-surface-container-lowest">
                  <div className="flex justify-between items-center mb-unit">
                    <h3 className="font-table-cell text-table-cell font-semibold text-on-surface uppercase tracking-wider">Medical Clearance Status</h3>
                    <span className="font-label-caps text-label-caps text-on-surface-variant">Last updated: Today</span>
                  </div>

                  <div className="flex flex-col gap-gutter">
                    {worker.exams.map((exam, i) => (
                      <div key={i} className={`bg-surface-container-low border ${exam.status === 'EXPIRED' ? 'border-error-container' : 'border-surface-variant'} rounded-DEFAULT p-unit flex justify-between items-center shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)] pl-3 relative overflow-hidden`}>
                        <div className={`absolute left-0 top-0 bottom-0 w-1 ${exam.status === 'EXPIRED' ? 'bg-error' : 'bg-secondary-fixed-dim'}`}></div>
                        <div className="flex items-center gap-3">
                          <span className={`material-symbols-outlined ${exam.status === 'EXPIRED' ? 'text-error' : 'text-secondary'}`}>{exam.icon}</span>
                          <div>
                            <p className="font-table-cell text-table-cell font-semibold text-on-surface">{exam.name}</p>
                            <p className="font-label-caps text-label-caps text-on-surface-variant">{exam.status === 'EXPIRED' ? 'Due: ' : 'Next Due: '} {exam.due}</p>
                          </div>
                        </div>
                        <span className={`${exam.status === 'EXPIRED' ? 'bg-error text-on-error' : 'bg-secondary-fixed text-on-secondary-fixed border border-secondary-fixed-dim/50'} font-label-caps text-label-caps px-2 py-1 rounded-DEFAULT`}>
                          {exam.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex justify-end">
                    <button className="bg-primary-container text-on-primary-container font-table-cell text-table-cell px-4 py-2 rounded-DEFAULT font-semibold shadow-sm hover:opacity-90 transition-opacity">Schedule Exam</button>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <div key={worker.id} onClick={() => setExpandedId(worker.id)} className="bg-surface-container-lowest border border-outline-variant rounded-lg p-container-padding flex justify-between items-center shadow-sm hover:bg-surface transition-colors cursor-pointer">
              <div className="flex gap-container-padding items-center">
                <img alt={worker.name} className="w-12 h-12 rounded-full border border-outline-variant object-cover" src={worker.image}/>
                <div>
                  <h2 className="font-headline-md text-headline-md text-on-surface text-[18px]">{worker.name}</h2>
                  <p className="font-table-cell text-table-cell text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]">badge</span> ID: {worker.id} • {worker.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <div className="bg-surface-container-highest text-on-surface-variant font-label-caps text-label-caps px-2 py-1 rounded-DEFAULT border border-outline-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  COMPLIANT
                </div>
                <span className="material-symbols-outlined text-outline-variant">expand_more</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkerRoster;
