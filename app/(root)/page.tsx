import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const HomePage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest arrival"
        limit={4}
      />
    </>
  );
};

export default HomePage;
