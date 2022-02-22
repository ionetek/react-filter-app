import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { useSelector} from "react-redux";
import { useDispatch} from "react-redux";
import { selectFilters } from './../store/filter/filters-selectors';
import { clearFilter, removeFilter, addSearchQuery } from './../store/filter/filters-actions';




const FilterPanel = () => {

  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();




  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          { filters.params.map( filter => (
              <Badge key={filter} variant="clearable" onClear={ () => { dispatch(removeFilter(filter)) }}>{ filter }</Badge>
              )
          )}
        </Stack>

        <button className='link' onClick={ () => { dispatch(clearFilter()) } }>Clear</button>
      </div>
      <hr/>
      <div className="p1">
        <input type="text" value={ filters.searchQuery} placeholder="Search" className="form-control" onChange={ e => { dispatch(addSearchQuery(e.target.value)) } }/>
      </div>

    </Card>
  )
}

export {FilterPanel};
