// export default async function () {
//   const imports = (await import(
//     "@medusajs/medusa/dist/api/routes/store/products/index"
//   )) as any

  
//   const customAttributes = [
//     "wine_collection",
//     "grape_variety",
//     "vintage",
//     "region",
//     "alcohol_content",
//     "tasting_notes",
//     "serving_temperature",
//   ]

//   imports.allowedStoreProductsFields = [
//     ...imports.allowedStoreProductsFields,
//     ...customAttributes,
//   ]
//   imports.defaultStoreProductsFields = [
//     ...imports.defaultStoreProductsFields,
//     ...customAttributes,
//   ]
// }