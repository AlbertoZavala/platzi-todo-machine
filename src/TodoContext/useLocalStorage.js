import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
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
        debugger;
        setError(true);
      }
    }, 6000);
  }, []);

  const saveItems = (newItems) => {
    try {
      const stringifiedItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifiedItems);
      setItems(newItems);
    } catch (error) {
      debugger;
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
