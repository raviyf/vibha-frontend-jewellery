import { getProductsList } from "@lib/data"
import usePreviews from "@lib/hooks/use-previews"
import getNumberOfSkeletons from "@lib/util/get-number-of-skeletons"
import repeat from "@lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview2 from "app/Apparel/product"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import { useCart, useCollection } from "medusa-react"
import { useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { SortCollectionFilterProps } from "app/Apparel/Store/refinement-list/collection-filter"
import { RefinementList } from "react-instantsearch-hooks-web/dist/es/ui/RefinementList"
import { any } from "cypress/types/bluebird"

export type InfiniteProductsType = {
  params: StoreGetProductsParams
  sortBy?: SortOptions
  filter: StoreGetProductsParams
}
// setRefinementList: (refinementList: StoreGetProductsParams) => void
const FilteredProductList = ({
  params,
  sortBy,
  filter,
}: InfiniteProductsType) => {
  const { cart } = useCart()
  const collection = ["Apparel"]
  const { ref, inView } = useInView()

  const queryParams = useMemo(() => {
    const p: StoreGetProductsParams = {}

    if (cart?.id) {
      p.cart_id = cart.id
    }

    if (cart?.region?.currency_code) {
      p.currency_code = cart.region.currency_code
    }

    p.is_giftcard = false

    // if (collection?.id == "Apparel") {
    //   p.id = [collection.products.]
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps

    return {
      ...p,
      ...params,
    }
  }, [cart?.id, cart?.region, params])

  const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
    useInfiniteQuery(
      [`infinite-products-store`, queryParams, cart],
      ({ pageParam }) => getProductsList({ pageParam, queryParams }),
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    )

  const previews = usePreviews({
    pages: data?.pages,
    region: cart?.region,
    sortBy,
    //collection_id: collection,
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, hasNextPage])
  //   console.log(queryParams.collection_id)

  //   if (queryParams.collection_id == collection)
  return (
    <div className="flex-1 content-container">
      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-3 gap-x-6 gap-y-8 flex-1">
        {previews.map((p) => (
          <li key={p.id}>
            <ProductPreview2 {...p} />
          </li>
        ))}
        {isLoading &&
          !previews.length &&
          repeat(8).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
        {isFetchingNextPage &&
          repeat(getNumberOfSkeletons(data?.pages)).map((index) => (
            <li key={index}>
              <SkeletonProductPreview />
            </li>
          ))}
      </ul>
      <div
        className="py-16 flex justify-center items-center text-small-regular text-gray-700"
        ref={ref}
      >
        <span ref={ref}></span>
      </div>
    </div>
  )
}

export default FilteredProductList
