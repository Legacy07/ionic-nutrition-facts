export interface ISideBarItem {
  Title: string;
  Url: string;
  Icon: string;
}

export class SideBarItem implements ISideBarItem {
  constructor(public Title: string, public Url: string, public Icon: string) {}

  public defaultInstance(): SideBarItem {
    return new SideBarItem(undefined, undefined, undefined);
  }
}
