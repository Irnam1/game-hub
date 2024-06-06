import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ sortOrder, onSelectSortOrder }: Props) => {
  const sortOrders = [
    {
      label: "Relevance",
      value: "",
    },
    {
      label: "Date added",
      value: "-added",
    },
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Release date",
      value: "-released",
    },
    {
      label: "Popularity",
      value: "-metacritic",
    },
    {
      label: "Average rating",
      value: "-rating",
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => {
              onSelectSortOrder(order.value);
            }}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
