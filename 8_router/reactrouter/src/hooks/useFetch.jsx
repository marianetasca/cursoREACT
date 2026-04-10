import { useState, useEffect } from "react";

// 4- custom hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5- refatorando o post
  const [config, setConfig] = useState(null); // guarda as configurações da requisição (POST)
  const [method, setMethod] = useState(null); // guarda qual tipo de requisição
  const [callFetch, setCallFetch] = useState(false); // entrar

  // 6 - loading
  const [loading, setLoading] = useState(false);

  //   7 - tratando erros
  const [error, setError] = useState(null);

  //   8 - delete
  const [itemId, setItemID] = useState(null);

  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method);
      setItemID(data);
    }
  };

  useEffect(() => {
    // busca os dados
    const fetchData = async () => {
      // 6 - loading
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        console.log(error.message);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFetch]);

  //   refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        let fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;

        const res = await fetch(deleteUrl, config);

        json = await res.json();
      }

      setCallFetch(json); // faz o get rodar dnv
    };
    httpRequest();
  }, [config, method, url, itemId]);

  return { data, httpConfig, loading, error }; // para exportar
};
