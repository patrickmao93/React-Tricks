import React, { Suspense, useState, useEffect } from "react";

import { createResource } from "./PersonApi";
import Person from "./Person";
import ErrorBoundary from "../ErrorBoundaryDemo";

function SuspenseDemo() {
  const [resource, setResource] = useState(createResource());

  const loadResource = () => setResource(createResource());

  useEffect(() => loadResource(), []);

  const renderErrorState = (error, resetErrorState) => {
    const retry = () => {
      loadResource();
      resetErrorState();
    };
    return (
      <div>
        Failed to load resource <button onClick={retry}>Retry</button>
      </div>
    );
  };

  return (
    <div>
      <p>Requests a person from PersonAPI, has a 50% failure chance. Can retry loading if failed.</p>
      <ErrorBoundary renderErrorState={renderErrorState}>
        <Suspense fallback={<div>Loading...</div>}>
          <Person resource={resource} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default SuspenseDemo;
