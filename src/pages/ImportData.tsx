import React from 'react';

const ImportData: React.FC = () => {
  return (
    <div className="flex-1 w-full max-w-3xl mx-auto px-4 py-8 md:px-8 pb-32">
      <div className="mb-section-margin">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-2">Import Data</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Upload bulk records securely to maintain compliance standards.</p>
      </div>

      <div className="space-y-element-gap flex flex-col gap-element-gap">
        {/* Step 1: Download Template Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg p-container-padding flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0 border border-outline-variant/30">
              <span className="material-symbols-outlined filled">table_chart</span>
            </div>
            <div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-1">1. Download Template</h3>
              <p className="font-table-cell text-table-cell text-on-surface-variant max-w-md">Ensure accurate mapping by using the official OSHA-formatted CSV/Excel template before uploading your data.</p>
            </div>
          </div>
          <button className="shrink-0 bg-primary-container text-on-primary-container hover:bg-primary-fixed-dim transition-colors px-4 py-2 rounded font-label-caps text-label-caps flex items-center justify-center gap-2 shadow-sm border border-primary-fixed shadow-inner uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">download</span>
            Get Template
          </button>
        </div>

        {/* Step 2: Select Data Types Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="p-4 border-b border-surface-variant bg-surface-bright flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">category</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">2. Select Data Type</h3>
          </div>
          <div className="p-container-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <label className="flex items-center gap-3 p-3 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors bg-surface-container-lowest">
                <input defaultChecked className="form-radio text-primary border-outline focus:ring-primary h-4 w-4" name="importType" type="radio" value="workplaces" />
                <span className="font-table-cell text-table-cell text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">factory</span> Workplaces</span>
              </label>

              <label className="flex items-center gap-3 p-3 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors bg-surface-container-lowest">
                <input className="form-radio text-primary border-outline focus:ring-primary h-4 w-4" name="importType" type="radio" value="workers" />
                <span className="font-table-cell text-table-cell text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">badge</span> Workers</span>
              </label>

              <label className="flex items-center gap-3 p-3 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors bg-surface-container-lowest">
                <input className="form-radio text-primary border-outline focus:ring-primary h-4 w-4" name="importType" type="radio" value="trainings" />
                <span className="font-table-cell text-table-cell text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">school</span> Trainings</span>
              </label>

              <label className="flex items-center gap-3 p-3 border border-outline-variant rounded hover:bg-surface-container-low cursor-pointer transition-colors bg-surface-container-lowest">
                <input className="form-radio text-primary border-outline focus:ring-primary h-4 w-4" name="importType" type="radio" value="incidents" />
                <span className="font-table-cell text-table-cell text-on-surface flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary">assignment_late</span> Incidents</span>
              </label>
            </div>
          </div>
        </div>

        {/* Step 3: Upload Area Card */}
        <div className="bg-surface-container-lowest border border-outline-variant rounded-lg overflow-hidden shadow-sm flex flex-col">
          <div className="p-4 border-b border-surface-variant bg-surface-bright flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">upload_file</span>
            <h3 className="font-headline-md text-headline-md text-on-surface">3. Upload File</h3>
          </div>
          <div className="p-container-padding">
            {/* Dropzone */}
            <div className="border-2 border-dashed border-outline-variant rounded-lg p-8 flex flex-col items-center justify-center text-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer min-h-[200px]">
              <div className="h-16 w-16 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center mb-4 shadow-inner">
                <span className="material-symbols-outlined text-3xl filled">cloud_upload</span>
              </div>
              <p className="font-headline-md text-headline-md text-on-surface mb-1">Drag and drop your file here</p>
              <p className="font-table-cell text-table-cell text-on-surface-variant mb-4">or click to browse from your computer</p>
              <div className="font-label-caps text-label-caps text-secondary uppercase bg-surface-variant px-3 py-1 rounded inline-block">
                Supported: .CSV, .XLSX (Max 10MB)
              </div>
            </div>
          </div>
        </div>

        {/* Action Area */}
        <div className="pt-4 flex justify-end gap-4">
          <button className="px-6 py-2 rounded font-label-caps text-label-caps text-on-surface-variant border border-outline-variant hover:bg-surface-container-low transition-colors uppercase tracking-wider">
            Cancel
          </button>
          <button disabled className="px-6 py-2 rounded font-label-caps text-label-caps bg-surface-variant text-outline border border-outline-variant/50 cursor-not-allowed uppercase tracking-wider flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">play_arrow</span>
            Start Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImportData;
