"use client"

import { StoreGetProductsParams } from "@medusajs/medusa"
import InfiniteProducts from "@modules/products/components/infinite-products"
import RefinementList from "./refinement-list"
import { useState } from "react"
import { SortOptions } from "./refinement-list/sort-products"
import FilteredProductList from "@modules/products/components/apparel-products"

const StoreTemplate = () => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at")

  return (
    <div className="flex flex-col small:flex-row small:items-start xl:py-24">
      <RefinementList
        refinementList={params}
        setRefinementList={setParams}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <FilteredProductList params={params} sortBy={sortBy} />
    </div>
  )
}

export default StoreTemplate
