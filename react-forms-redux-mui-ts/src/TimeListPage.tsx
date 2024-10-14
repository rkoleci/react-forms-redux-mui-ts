import { connect, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import TimeListPageLayout from './timeList/TimeListPageLayout';
import { addNewTimeItem } from './timeList/timeListSlices';
import EditableTimeList from './timeList/EditableTimeList';
import GenericErrorsBanner from './formErrors/GenericErrorsBanner';
import { updateTimeListThunk } from './thunks/updateTimeListThunk';

interface TimeListPageCallbacks {
  onAdd: () => void;
  onSave: () => void;
}

function TimeListPage({ onAdd, onSave}: TimeListPageCallbacks) {
 
  return (
    <TimeListPageLayout
      title={'Time List'}
      header={<></>}
      OnSave={onSave}
      onAdd={onAdd}
    >
      <GenericErrorsBanner />
      <EditableTimeList />
    </TimeListPageLayout>
  );
}

const mapDispatchToProps = (dispatch: AppDispatch) => {

  return {
    onAdd: () => {
      dispatch(addNewTimeItem())
    },
    onSave: () => {
      dispatch(updateTimeListThunk())
    }
  }
}

export default connect(null, mapDispatchToProps)(TimeListPage)
