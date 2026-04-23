import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';

const TrainingLog: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'completed' | 'scheduled'>('completed');
  const { trainings, loadInitialData } = useStore();

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  return (
    <div className="flex-1 px-container-padding py-section-margin flex flex-col gap-section-margin w-full max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col gap-element-gap">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="font-headline-lg text-headline-lg text-on-surface">Training Log</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Centralized record of safety sessions.</p>
          </div>
          <button className="bg-primary text-on-primary font-table-cell text-table-cell font-semibold px-4 py-2 rounded flex items-center gap-2 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:bg-surface-tint transition-colors">
            <span className="material-symbols-outlined text-[20px]">add</span>
            <span className="hidden sm:inline">Log Training</span>
          </button>
        </div>

        {/* Segmented Filter Control */}
        <div className="bg-surface-container-high p-1 rounded-lg inline-flex w-full sm:w-auto mt-2">
          <button
            onClick={() => setActiveTab('completed')}
            className={`flex-1 sm:w-32 py-1.5 text-center font-table-cell text-table-cell rounded transition-all ${
              activeTab === 'completed'
                ? 'bg-surface-container-lowest text-primary font-semibold shadow-sm border border-outline-variant/30'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setActiveTab('scheduled')}
            className={`flex-1 sm:w-32 py-1.5 text-center font-table-cell text-table-cell rounded transition-all ${
              activeTab === 'scheduled'
                ? 'bg-surface-container-lowest text-primary font-semibold shadow-sm border border-outline-variant/30'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Scheduled
          </button>
        </div>
      </div>

      {/* Training List (High Density Cards) */}
      <div className="flex flex-col gap-element-gap">
        {trainings.map((training, i) => (
          <article key={i} className="bg-surface-container-lowest border border-outline-variant rounded p-element-gap flex flex-col gap-unit hover:bg-surface-container-low transition-colors group cursor-pointer relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
            <div className="flex justify-between items-start ml-2">
              <h2 className="font-headline-md text-headline-md text-on-surface line-clamp-1">{training.title}</h2>
              <span className="font-label-caps text-label-caps bg-secondary-container text-on-secondary-container px-2 py-0.5 rounded whitespace-nowrap ml-2">
                {training.status}
              </span>
            </div>
            <div className="ml-2 grid grid-cols-1 sm:grid-cols-3 gap-unit text-on-surface-variant font-table-cell text-table-cell mt-1">
              <div className="flex items-center gap-2 bg-surface-container-low/50 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px] text-outline">calendar_today</span>
                <span>{training.date}</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low/50 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px] text-outline">person</span>
                <span>{training.instructor}</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-container-low/50 px-2 py-1 rounded">
                <span className="material-symbols-outlined text-[16px] text-outline">groups</span>
                <span>{training.attendees}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TrainingLog;
