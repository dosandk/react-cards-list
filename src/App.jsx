import Card from './components/card';
import Pagination from './components/pagination';
import {useCallback, useEffect, useState} from "react";
import CardsList from "./components/cards-list";

const url = new URL('products', 'https://online-store.bootcamp.place/api/');

const App = () => {
  const pageSize = 9;
  const totalPages = 12;
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const onPageChanged = useCallback((pageIndex) => {
    setPagination(pageIndex);

    if (loading === false) {
      loadData(url);
    }
  }, []);

  const setPagination = useCallback(pageIndex => {
    const start = pageIndex * pageSize;
    const end = start + pageSize;

    url.searchParams.set('_start', start);
    url.searchParams.set('_end', end);
  }, []);

  useEffect(() => {
    setPagination(0);
    loadData(url);
  }, []);

  const loadData = useCallback(async (url) => {
    try {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      setList(data);
      setLoading(false);
    } catch (error) {
      console.error('error', error.message);
    }
  }, []);

  return (
    <div className="App">
      <CardsList data={list} getCard={props => <Card {...props} />} />
      <Pagination activePage={1} totalPages={totalPages} onPageChanged={onPageChanged} />
    </div>
  );
}

export default App;
