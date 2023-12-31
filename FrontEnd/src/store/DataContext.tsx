import React, { createContext, useContext, useState } from "react";

// 데이터 타입 정의
interface Data {
  youtubeLink: string;
  setYouTubeLink: React.Dispatch<React.SetStateAction<string>>;
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  isAudioEnabled: boolean;
  setIsAudioEnabled: (enabled: boolean) => void;
  isVideoEnabled: boolean;
  setIsVideoEnabled: (enabled: boolean) => void;
  currentPage: number;
  tempPage: number;
}

// DataContext 생성
const DataContext = createContext<Data | undefined>(undefined);

// DataProvider 컴포넌트 생성
export function DataProvider({ children }: { children: React.ReactNode }) {
  const [youtubeLink, setYouTubeLink] = useState("");

  const nickname = localStorage.getItem("nickname");
  const [userName, setUserName] = useState(
    nickname ? nickname : `부기${Math.floor(Math.random() * 100)}`
  );
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [tempPage] = useState(0);
  const [currentPage] = useState(0);

  const data: Data = {
    youtubeLink,
    setYouTubeLink,
    userName,
    setUserName,
    isAudioEnabled,
    setIsAudioEnabled,
    isVideoEnabled,
    setIsVideoEnabled,
    tempPage,
    currentPage,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// 커스텀 훅 생성
export function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
}
