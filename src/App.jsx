import { Suspense } from "react";
import RouteComponent from "./Routes";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouteComponent />
      </Suspense>
    </>
  );
}

export default App;
