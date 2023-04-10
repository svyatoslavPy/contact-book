import { useState } from "react";
import axios from 'axios';

export const useAddRecords = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const addRecord = (newUser) => {
    setLoading(true);
    axios.post('records/', newUser).then((resp) => {
      setData(resp);
      setLoading(false);
      setError(undefined);
    });
  }

  return { addRecord, data, loading, error };
};

