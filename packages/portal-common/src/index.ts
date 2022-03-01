type Config = {
  initialPath?: any;
  onNavigate?: any;
  defaultHistory?: any;
  onSignIn?: () => void;
};

type MountResult = {
  onParentNavigate: any;
  unmount: any;
};

type MountFn = (el: any, cfg?: Config) => MountResult; // TODO get rid of all these any
