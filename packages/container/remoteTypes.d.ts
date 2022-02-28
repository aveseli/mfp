///<reference types="react" />

type Config = {
  initialPath?: any;
  onNavigate?: any;
  defaultHistory?: any;
  onSignIn?: () => void,
};

type ReturnType = {
  onParentNavigate: any;
  unmount: any;
};

type MountFn = (el: any, cfg?: Config) => ReturnType; // TODO get rid of all these any

declare module "marketing/MarketingApp" {
  export const mount: any;
}

declare module "dashboard/DashboardApp" {
  export const mount: any;
}

declare module "auth/AuthApp" {
  export const mount: any;
}
