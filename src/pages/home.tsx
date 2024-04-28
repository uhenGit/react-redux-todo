import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { store } from "../state/store";
import { fetchTodos } from "../state/todos/todosSlice";
import Navigation from '../components/Navigation/Navigation';
import ActiveTab from "../components/Tab/ActiveTab";
import './home.scss';

type AppDispatch = typeof store.dispatch;

const Home = () => {
  const [activeTab, setActiveTab] = useState('active');
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const  handleTabChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setActiveTab(evt.currentTarget.value);
  }

  return (
    <>
      <Navigation />
      <div className="flex tab-selector-wrapper">
          <div className='tab-selector'>
            <input
              id='active'
              type='radio'
              name='tab'
              value='active'
              checked={activeTab === 'active'}
              onChange={handleTabChange}
            />
            <label htmlFor='active'>
              Active todos
            </label>
          </div>
          <div className='tab-selector'>
            <input
              id='inactive'
              type='radio'
              name='tab'
              value='inactive'
              checked={activeTab === 'inactive'}
              onChange={handleTabChange}
            />
            <label htmlFor='inactive'>
              Inactive todos
            </label>
          </div>
        </div>
        <ActiveTab todoStatus={activeTab}/>
    </>
  )
}

export default Home;