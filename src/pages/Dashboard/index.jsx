import { useEffect } from "react";
import {
  // Leader,
  Profile,
  Goals,
  // CalendarView,
  Clock,
  Pomodoro,
  QuickNotes,
} from "../../components/Dashboard/";
import { useTitle } from "../../hooks";
import { useDispatch } from "react-redux";
import { fetchNotes } from "../../redux/slices/notesSlice";

export function Dashboard() {
  const dispatch = useDispatch();
  useTitle("Dashboard - LifeUnity");

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  // xl:grid-rows-[1fr_400px]
  return (
    <div className="grid gap-y-4 md:gap-4 grid-cols-1 grid-rows-1 xl:grid-cols-[500px_1fr_1fr] xl:grid-rows-[450px_auto] pb-24 md:pb-0 hover:overflow-auto">
      {/* <Leader /> */}
      <Profile />
      {/* <CalendarView /> */}
      <Pomodoro />
      <Clock />
      <Goals />
      <QuickNotes />
    </div>
  );
}
