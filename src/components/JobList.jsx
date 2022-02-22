import { JobPosition } from './JobPosition';
import { useSelector} from "react-redux";
import { selectPositions } from './../store/positions/position-selectors'

import {selectFilters} from "../store/filter/filters-selectors";


const JobList = () => {

  const filters = useSelector(selectFilters);
  const positions = useSelector(selectPositions);

  return (
    <div className='job-list'>
      { positions.length > 0
        ? (
            positions.map(item => (
                <JobPosition key={item.id} {...item} />
            ))
            )
        : (
              <div>Positions not found :(</div>
          )
      }


    </div>
  )
}

export {JobList};
