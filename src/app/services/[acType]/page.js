"use client";

import { useState, useRef, useEffect, useTransition, useMemo } from "react";
import { useParams } from "next/navigation";
import { ac_types, service_types, all_services, service_features } from "../../../data/AcData";

// Import internal components
import {
  ServiceGroupSkeleton,
  ACSelectorMobile,
  ACSelectorDesktop,
  ServiceSelectorMobile,
  ServiceSelectorDesktop,
  ServiceGroup,
  EmptyState,
  LoadingOverlay
} from "../../../components/ServiceCard";

export default function ServicesByTypePage() {
  const params = useParams();
  const acTypeParam = params?.acType;

  // Loading state for data - AC and service selectors load immediately (priority)
  // Services content loads with skeleton
  const [isLoadingServices, setIsLoadingServices] = useState(true);

  // Find AC type from URL - use memo to avoid recalculation
  const selectedAc = useMemo(() => {
    if (!acTypeParam) return ac_types[0];

    const found = ac_types.find(
      (ac) => ac.name.toLowerCase().replace(/\s+/g, "-") === acTypeParam.toString().toLowerCase()
    );
    return found || ac_types[0];
  }, [acTypeParam]);

  // Simulate loading for services content (keep AC and service selectors visible)
  useEffect(() => {
    // Reset loading state when AC type changes
    setIsLoadingServices(true);
    // Small delay to show skeleton loading for better UX
    const timer = setTimeout(() => {
      setIsLoadingServices(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [selectedAc.ac_id]);

  const [selectedService, setSelectedService] = useState(null);
  const [isPending, startTransition] = useTransition();
  const serviceRefs = useRef({});

  // Filter services for selected AC - memoized for performance
  const filteredServices = useMemo(() =>
    all_services.filter((service) => service.ac_id === selectedAc.ac_id),
    [selectedAc.ac_id]
  );

  // Group services by service_type_id - memoized
  const groupedServices = useMemo(() =>
    service_types
      .map((serviceType) => ({
        ...serviceType,
        services: filteredServices.filter(
          (service) => service.service_type_id === serviceType.service_type_id
        ),
      }))
      .filter((group) => group.services.length > 0),
    [filteredServices]
  );

  const handleServiceSelect = (serviceTypeId) => {
    setSelectedService(serviceTypeId);
    const element = serviceRefs.current[serviceTypeId];
    if (element) {
      const isMobile = window.innerWidth < 768;
      const navbarHeight = isMobile ? 180 : 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Get features for a specific service - memoized
  const getServiceFeatures = (serviceId) =>
    service_features.filter((feature) => feature.service_id === serviceId);

  // Handle AC type change with Link for better performance
  const handleAcChange = (ac) => {
    const acSlug = ac.name.toLowerCase().replace(/\s+/g, "-");
    setSelectedService(null);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="px-4 sm:px-6 lg:px-16 py-8">
        {/* Mobile: AC Selector - Priority loaded */}
        <ACSelectorMobile
          acTypes={ac_types}
          selectedAc={selectedAc}
          onSelect={handleAcChange}
        />

        {/* Mobile: Sticky Service Selector as Dropdown - Priority loaded */}
        <ServiceSelectorMobile
          selectedAc={selectedAc}
          serviceTypes={service_types}
          filteredServices={filteredServices}
          selectedService={selectedService}
          onSelect={handleServiceSelect}
        />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Sidebar - Priority loaded */}
          <ServiceSelectorDesktop
            selectedAc={selectedAc}
            serviceTypes={service_types}
            filteredServices={filteredServices}
            selectedService={selectedService}
            onSelect={handleServiceSelect}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Desktop: AC Selector - Priority loaded */}
            <ACSelectorDesktop
              acTypes={ac_types}
              selectedAc={selectedAc}
              onSelect={handleAcChange}
            />

            {/* Loading Overlay */}
            <LoadingOverlay isPending={isPending} />

            {/* Services Content with Skeleton Loading */}
            {isLoadingServices ? (
              <>
                <ServiceGroupSkeleton />
                <ServiceGroupSkeleton />
              </>
            ) : (
              <>
                {groupedServices.map((serviceGroup) => (
                  <ServiceGroup
                    key={serviceGroup.service_type_id}
                    serviceGroup={serviceGroup}
                    serviceRefs={serviceRefs}
                    getServiceFeatures={getServiceFeatures}
                  />
                ))}
              </>
            )}

            {!isLoadingServices && groupedServices.length === 0 && (
              <EmptyState acName={selectedAc.name} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
