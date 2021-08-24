import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(true);
  const [items, setItems] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItems(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 1000);
  }, []);

  const saveItems = (newItems) => {
    try {
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItems);
    } catch (error) {
      setError(true);
    }
  };

  return {
    items,
    saveItems,
    loading,
    error,
  };
}

export { useLocalStorage };
