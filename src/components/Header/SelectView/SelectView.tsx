import { ReactComponent as GridIcon } from './images/grid-icon.svg'
import { ReactComponent as LinesIcon } from './images/burger-icon.svg'
import { useAppDispatch, useAppSelector } from '../../../store/store'
import { toggleView } from '../../../store/songSlice/songSlice'
import cn from 'classnames'

import './SelectView.scss'

export const VIEW_TYPES = {
  GRID: 'GRID',
  ROW: 'ROW',
}

const SelectView = () => {
  const currentView = useAppSelector((state) => state.songSlice.view)
  const dispatch = useAppDispatch()

  const handleSwitchView = (viewType: string) => {
    dispatch(toggleView(viewType))
    localStorage.setItem('viewType', viewType)
  }

  return (
    <div className='select-view'>
      <label
        className={cn(
          'select-view__container',
          currentView === VIEW_TYPES.GRID && 'select-view__container--active'
        )}
      >
        <GridIcon className='select-view__icon' />
        <input
          className='select-view__input'
          type='radio'
          name='view'
          value={VIEW_TYPES.GRID}
          checked={currentView === VIEW_TYPES.GRID}
          onChange={() => handleSwitchView(VIEW_TYPES.GRID)}
        />
      </label>
      <label
        className={cn(
          'select-view__container',
          currentView === VIEW_TYPES.ROW && 'select-view__container--active'
        )}
      >
        <LinesIcon className='select-view__icon' />
        <input
          className='select-view__input'
          type='radio'
          name='view'
          value={VIEW_TYPES.ROW}
          checked={currentView === VIEW_TYPES.ROW}
          onChange={() => handleSwitchView(VIEW_TYPES.ROW)}
        />
      </label>
    </div>
  )
}

export default SelectView
