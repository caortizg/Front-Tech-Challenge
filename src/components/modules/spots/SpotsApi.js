import { fetchService, list } from "../../../utils/dataAccess";

const minColumns = ['id', 'name', 'city_id', 'square_space', 'is_public', 'location', 'spot_type_id', 'term'];
const fullColumns = [...minColumns, 'phone', 'reference', 'street', 'alias', 'description'];

const normalize = (row, _completeData = true) => {
    row.square_space = parseFloat(row.square_space);
    row._completeData = _completeData;
    return row;
}

export async function getAllSpots(columns = minColumns) {
    const fields = columns.join(',');
    let currentPage = await list('spots', { fields, page: 1 });
    let spots = currentPage.data.spots;

    for (let page = 2; page <= currentPage.meta.last_page; page++) {
        currentPage = await list('spots', { fields, page });
        spots = [...spots, ...currentPage.data.spots]
    }

    return spots.map(row => normalize(row, false));
}

export async function getSpot(spotId, columns = fullColumns) {
    const fields = columns.join(',');
    const res = await fetchService(`spots/${spotId}`, { fields });
    
    res.data && normalize(res.data, true);

    return res;
}