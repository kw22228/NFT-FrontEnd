import DataTable from './js/DataTable';

const url = 'https://kw22228.github.io/Json/data.json';

const dataTable = new DataTable(url, 'root', 8);
dataTable.init();
