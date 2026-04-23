import { create } from 'zustand';
import localforage from 'localforage';

localforage.config({
  name: 'osha-compliance-app'
});

export interface Worker {
  id: string;
  name: string;
  role: string;
  image: string;
  status: 'COMPLIANT' | 'ACTION_REQUIRED';
  exams: any[];
}

export interface Training {
  title: string;
  date: string;
  instructor: string;
  attendees: string;
  status: 'COMPLETED' | 'SCHEDULED';
}

interface AppState {
  workers: Worker[];
  trainings: Training[];
  setWorkers: (workers: Worker[]) => void;
  setTrainings: (trainings: Training[]) => void;
  loadInitialData: () => Promise<void>;
}

const mockWorkers: Worker[] = [
  {
    id: 'W-8492',
    name: 'Jane Doe',
    role: 'Welder',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmDXH4I9NWn3NawRnBbrL_vNTkQANIQ9mFr_5-Czxv7vrbf424UuNOkr-72PpvV0YooiVYyBNp1NwBMhLGTYlRWwwNOiY5zdrQA7iYVxplUH9AMUSROzhTzVGDXNg-hHfy40xXV3yOzSDWoR5OtfAwHIUNVwJY1HFMTQtfn2ckgl9a4OBK-0fggEmHUbIDMjUz4nSpHtcj9nPbCdPyf-uSJCE-Ozg-dd8vmKhblSCpinubHl3Dd74gSyWE_qH8y8tvU6kh0tEwwj0m',
    status: 'ACTION_REQUIRED',
    exams: [
      { name: 'Respirator Fit Test', due: 'Oct 12, 2023', status: 'EXPIRED', icon: 'masks' },
      { name: 'Audiometric Testing', due: 'Mar 15, 2025', status: 'UP TO DATE', icon: 'hearing' },
      { name: 'Blood Lead Level', due: 'Jan 05, 2024', status: 'UP TO DATE', icon: 'bloodtype' },
    ]
  },
  {
    id: 'W-9102',
    name: 'Robert Chen',
    role: 'Forklift Operator',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeyFU-bkP6VcePhVtxns6u8XMDEdPW-j-BanSxceUEI84ZFFTytQ5WqLkkH_0P_n_e7thclxaM7vEZu2M0Hjq7kHVGKMSNGJ30eB-pNsPcZjcFFYRfbNu-Vyvchvq5fbcpL6Qp1TYObeTlaPQ_yvIEYrs-SuPHqCYnXkYh1fbNFfxTui5ONYEBVVihiqHFEAQ-hPVAxhCU62ToABEP2XIJG1szljc8eDCi-V-FoSswgny3PFeXE566Sn1zoqOG4MgUq9dC_52iX1HY',
    status: 'COMPLIANT',
    exams: []
  },
  {
    id: 'W-3381',
    name: 'Sarah Jenkins',
    role: 'Lab Technician',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR1m1SisJng1U_tTX83oSj1Pc87fH6S71sA0xb78XQC5JUrXFvJgsl5Fuu-FivvwrMI6FuLgurNfJHMMi1PfdwFs0D345n8LvMzWj-Qx-BmReqEwHTqiAqYU78NJNZTFU05AWzPa5wYEl6XrjZ9NwwSuyxSHjEwW3x45fEx_o88TWtbcoTyx54gxi7scsXc-yqsHdvX_I2LyRtQvdLvUO8ZFzHKWKYWXIc7p_JiPt9gj6L6KH42JVsK2pTq1rzkYw-j6TRw-mTnGip',
    status: 'COMPLIANT',
    exams: []
  }
];

const mockTrainings: Training[] = [
  {
    title: 'Fall Protection Safety Basics',
    date: 'Oct 24, 2023',
    instructor: 'Sarah Jenkins',
    attendees: '18/20 Attendees',
    status: 'COMPLETED'
  },
  {
    title: 'Hazard Communication Standard (HCS)',
    date: 'Oct 15, 2023',
    instructor: 'Mark Torres',
    attendees: '42 Attendees',
    status: 'COMPLETED'
  },
  {
    title: 'Forklift Operator Certification Renewal',
    date: 'Sep 28, 2023',
    instructor: 'Ext. Vendor',
    attendees: '8 Attendees',
    status: 'COMPLETED'
  },
  {
    title: 'Personal Protective Equipment (PPE) Selection',
    date: 'Sep 12, 2023',
    instructor: 'Sarah Jenkins',
    attendees: '15 Attendees',
    status: 'COMPLETED'
  }
];

export const useStore = create<AppState>((set) => ({
  workers: [],
  trainings: [],
  setWorkers: (workers) => set({ workers }),
  setTrainings: (trainings) => set({ trainings }),
  loadInitialData: async () => {
    try {
      const storedWorkers = await localforage.getItem<Worker[]>('workers');
      const storedTrainings = await localforage.getItem<Training[]>('trainings');

      if (storedWorkers && storedWorkers.length > 0) {
        set({ workers: storedWorkers });
      } else {
        await localforage.setItem('workers', mockWorkers);
        set({ workers: mockWorkers });
      }

      if (storedTrainings && storedTrainings.length > 0) {
        set({ trainings: storedTrainings });
      } else {
        await localforage.setItem('trainings', mockTrainings);
        set({ trainings: mockTrainings });
      }
    } catch (e) {
      console.error("Error loading data from localforage:", e);
      set({ workers: mockWorkers, trainings: mockTrainings });
    }
  }
}));
