"use client";

import React, { useEffect, useState } from "react";
import { Funnel } from "./types/Funnel";
import calculateScale from "./utils/calculateScale";
import FunnelNavigation from "./components/funnel/Navigation";
import LoadingUI from "./components/funnel/LoadingUI";
import ErrorMessage from "./components/common/ErrorMessage";
import FileUploaderUI from "./components/common/FileUploaderUI";
import UploadBtn from "./components/common/UploadBtn";
import Preview from "./components/funnel/Preview";
import MobileUI from "./components/funnel/MobileUI";

export default function Home() {
  const [funnelData, setFunnelData] = useState<Funnel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dataLoading, setDataLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [scale, setScale] = useState(1);

  // Constants for scaling and navigation
  const referenceWidth = 1610;
  const referenceHeight = 871;
  const pageNavigationButtonPosition = 136;

  /**
   * Calculate and update scale to fit the viewport
   */
  useEffect(() => {
    const updateScale = () => setScale(calculateScale(referenceWidth, referenceHeight));

    updateScale();
    window.addEventListener("resize", updateScale);

    return () => window.removeEventListener("resize", updateScale);
  }, []);

  /**
   * Display a loading animation briefly even for fast loads
   */
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (dataLoading) {
      setIsVisible(true);
    } else if (isVisible) {
      timeout = setTimeout(() => setIsVisible(false), 1000);
    }

    return () => clearTimeout(timeout);
  }, [dataLoading, isVisible]);

  /**
   * Handle file upload and parse funnel data
   */
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setDataLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target?.result as string) as Funnel;
        validateFunnelData(jsonData);
        setFunnelData(jsonData);
        setCurrentPage(0)
        setError(null);
      } catch {
        setError("Invalid JSON file. Please upload a valid funnel JSON.");
      } finally {
        setDataLoading(false);
      }
    };
    reader.readAsText(file);
  };

  /**
   * Validate the uploaded funnel data structure
   */
  const validateFunnelData = (data: Funnel) => {
    if (!data.name || !data.pages || !Array.isArray(data.pages)) {
      throw new Error("Invalid funnel structure.");
    }
  };

  /**
   * Handle pagination via keyboard navigation
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") handlePrevious();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentPage, funnelData]);

  /**
   * Navigate to the next page
   */
  const handleNext = () => {
    if (funnelData && currentPage < funnelData.pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  /**
   * Navigate to the previous page
   */
  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Upload Button */}
      <UploadBtn funnelLoaded={Boolean(funnelData)} />

      <div className="relative">
        {/* Scalable Page Navigation */}
        {funnelData && funnelData.pages.length > 1 && !error && (
          <div
            className="absolute w-full flex justify-between"
            style={{
              width: `calc(${scale > 1 ? 100 : scale * 100}% + ${pageNavigationButtonPosition * 2}px)`,
              left: `${scale > 1 ? -pageNavigationButtonPosition : scale * -pageNavigationButtonPosition}px`,
              top: "40%",
            }}
          >
            <FunnelNavigation
              currentPage={currentPage}
              totalPages={funnelData.pages.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />
          </div>
        )}

        {/* Scalable Phone UI + Funnel Preview */}
        <div
          className="relative my-6 mt-12"
          style={{
            transform: `scale(${scale > 1 ? 1 : scale})`,
            transformOrigin: "top center",
          }}
        >
          <MobileUI
            bgColor={funnelData?.bgColor}
            error={Boolean(error)}
            currentPage={currentPage}
            totalOfPages={funnelData?.pages.length}
          >
            {funnelData ? (
              <Preview funnel={funnelData} currentPage={currentPage} />
            ) : (
              <FileUploaderUI />
            )}
            {isVisible && <LoadingUI />}
            {error && <ErrorMessage error={error} />}
          </MobileUI>
        </div>
      </div>

      {/* Hidden File Input */}
      <input
        id="file-input"
        type="file"
        accept=".json"
        onChange={handleFileUpload}
        className="hidden"
      />
    </div>
  );
}
