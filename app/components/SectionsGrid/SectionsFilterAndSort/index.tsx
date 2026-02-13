import { CallbackEvent } from "@shopify/polaris-types";
import { ChangeEvent, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router";
import { useDebounce } from "use-debounce";
import { SortBySelect } from "./styled";

const SectionsFilterAndSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useDebounce("", 1000);

  const changeSort = useCallback(
    (sortProperty: string, newValue: string) => {
      searchParams.set(sortProperty, newValue);
      searchParams.set("page", "1");
      setSearchParams(searchParams);
    },
    [searchParams, setSearchParams],
  );

  const onSortBy = (event: ChangeEvent<HTMLSelectElement>) => {
    event.stopPropagation();
    changeSort("sortBy", event.target.value);
  };

  const onDirChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.stopPropagation();
    changeSort("dir", event.target.value);
  };

  const onSearchChange = (event: CallbackEvent<"s-search-field">) => {
    event.stopPropagation();
    setSearchValue(event.currentTarget.value);
  };

  useEffect(() => {
    if (searchParams.get("name") !== searchValue) {
      changeSort("name", searchValue);
    }
  }, [changeSort, searchParams, searchValue]);

  return (
    <s-stack direction="inline" gap="base">
      <SortBySelect defaultValue="desc" onChange={onDirChange}>
        <option value="asc">Aschending</option>
        <option value="desc">Descending</option>
      </SortBySelect>
      <SortBySelect defaultValue="createdAt" onChange={onSortBy}>
        <option value="createdAt">Creation Date</option>
        <option value="updatedAt">Update Date</option>
        <option value="name">Name</option>
      </SortBySelect>
      <div style={{ width: "150px" }}>
        <s-search-field value={searchValue} onInput={onSearchChange} />
      </div>
    </s-stack>
  );
};

export default SectionsFilterAndSort;
