export default function ProductDetails2( { 
    params
}: {
    params: { 
        productId : string;
        detailId : string;
    };
} ) {
    return <h1>Details about product {params.productId} are {params.detailId}</h1>
}

// http://localhost:3000/products/1/details/1