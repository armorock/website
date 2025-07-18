import { Suspense } from 'react';
import LocofyOurProductsPage from "./locofy-our-products-page";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocofyOurProductsPage />
    </Suspense>
  );
}
