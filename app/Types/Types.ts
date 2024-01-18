export type MostOrderedDataType = {
  name: string;
  amount: number;
};
export type CircleDataType = {
  type: "Dine In" | "To Go" | "Delivery";
  amount: number;
};
export type OrderReportDataType = {
  pfpBg: string;
  name: string;
  menu: string;
  totalPayment: number;
  status: "Completed" | "Preparing" | "Pending";
};
export type OngoingDeliveryPropsType = {
  selectOrder: (index: number) => void;
  deliveryIndex: number;
};
export type DeliveryDataType = {
  shipmentNumber: string;
  startAddressPartOne: string;
  startAddressPartTwo: string;
  endAddressPartOne: string;
  endAddressPartTwo: string;
  clientName: string;
  clientAddress: string;
  messageRecieved: "yes" | "no";
};
export type TrackOrderPropsType = {
  deliveryIndex: number;
};

export type SidebarLayoutProps = {
  children: React.ReactNode;
};
