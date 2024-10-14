import { connect, useSelector } from 'react-redux';
import { AppDispatch } from './store';
import TimeListPageLayout from './timeList/TimeListPageLayout';
import { addNewTimeItem } from './timeList/timeListSlices';
import EditableTimeList from './timeList/EditableTimeList';
import GenericErrorsBanner from './formErrors/GenericErrorsBanner';
import { updateTimeListThunk } from './thunks/updateTimeListThunk';

interface TimeListPageCallbacks {
  onAdd: () => void;
}

function TimeListPage({ onAdd, }: TimeListPageCallbacks) {
  const s = useSelector(s => s)
  console.log(s)
  const onSave = () => {

  }

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
