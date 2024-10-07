import FilterProduct from "@/components/product/FilterProduct";
import ProductList from "@/components/product/ProductList";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-5 py-10 container">
      <FilterProduct />
      <ProductList />
    </div>
  );
}
