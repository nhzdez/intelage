jest.mock("react-router", () => ({
  useNavigate: jest.fn(),
  BrowserRouter: (props) => (
    <div data-testid="browser-router">{props.children}</div>
  ),
  Route: (props) => (
    <div data-testid={`route-${props.path}`}>{props.children}</div>
  ),
  Routes: (props) => <div data-testid="routes">{props.children}</div>,
}));
