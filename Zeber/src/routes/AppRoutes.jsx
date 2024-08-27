import EventList from "../pages/EventList/EventList";
import EventDetails from "../pages/EventDetails/EventDetails";
import FilterEvents from "../pages/FilterEvents/FilterEvents";

export const AppRoutes = [
  { path: "/", element: <EventList /> },
  { path: "/filter-events", element: <FilterEvents /> },
  { path: "/event/:id", element: <EventDetails /> },
];
