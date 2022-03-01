import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { withRouter, RouteComponentProps } from "react-router";

type Props = {
  history: any;
} & RouteComponentProps<{}>;

type State = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };

    // reset the error state when user navigates to another location!
    const { history } = this.props;
    history.listen((location: any, action: any) => {
      if (this.state.hasError) {
        this.setState({
          hasError: false,
        });
      }
    });
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    return {
      hasError: error ? true : false,
    };
  }

  reloadPage = () => {
    console.log("reload page!!");
    this.props.history.go(0);
  };

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <React.Fragment>
          <Typography variant="h6" color="inherit" noWrap>
            Oooops ... something went wrong while loading required app!!! Try to
            reload the page!
          </Typography>
          <Button color="primary" variant="outlined" onClick={this.reloadPage}>
            Reload
          </Button>
        </React.Fragment>
      );
    }

    return this.props.children;
  }
}

const ErrorBoundaryWithRouter = withRouter(ErrorBoundary);

export default ErrorBoundaryWithRouter;
