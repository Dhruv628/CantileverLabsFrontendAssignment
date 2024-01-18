import {
  CircleDataType,
  DeliveryDataType,
  MostOrderedDataType,
  OrderReportDataType,
} from "../Types/Types";
import Bookmark from "@/public/assets/Bookmark";
import Coin from "@/public/assets/Coin";
import TwoUser from "@/public/assets/TwoUser";
import ArrowUp from "@/public/assets/ArrowUp";
import ArrowDown from "@/public/assets/ArrowDown";

export const MostOrderedData: MostOrderedDataType[] = [
  { name: "Spicy seasoned seafood noodles", amount: 200 },
  { name: "Salted pasta with mushroom sauce", amount: 120 },
  { name: "Beef dumpling in hot and sour soup", amount: 80 },
];

export const CircleData: CircleDataType[] = [
  { type: "Dine In", amount: 200 },
  { type: "To Go", amount: 122 },
  { type: "Delivery", amount: 264 },
];
export const OrderReportData: OrderReportDataType[] = [
  {
    pfpBg: "#FFB572",
    name: "Eren Yeager",
    menu: "Spicy seasoned seafood noodles",
    totalPayment: 125,
    status: "Completed",
  },
  {
    pfpBg: "#9290FE",
    name: "Falco Grice",
    menu: "Salted Pasta with mushroom sauce",
    totalPayment: 100,
    status: "Preparing",
  },
  {
    pfpBg: "#FF7CA3",
    name: "Armin Arlert",
    menu: "Beef dumpling in hot and sour soup",
    totalPayment: 140,
    status: "Pending",
  },
  {
    pfpBg: "#50D1AA",
    name: "Mikasa Ackermann",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 45,
    status: "Completed",
  },
  {
    pfpBg: "#9290FE",
    name: "Levi Ackermann",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 145,
    status: "Completed",
  },
  {
    pfpBg: "#FF7CA3",
    name: "Zeke Yeager",
    menu: "Spicy seasoned seafood noodles",
    totalPayment: 110,
    status: "Pending",
  },
  {
    pfpBg: "#50D1AA",
    name: "Bertold Hoover",
    menu: "Salted Pasta with mushroom sauce",
    totalPayment: 110,
    status: "Preparing",
  },
  {
    pfpBg: "#9290FE",
    name: "Reiner Braun",
    menu: "Beef dumpling in hot and sour soup",
    totalPayment: 120,
    status: "Completed",
  },
  {
    pfpBg: "#FF7CA3",
    name: "Annie Leonhart",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 150,
    status: "Pending",
  },
  {
    pfpBg: "#FFB572",
    name: "Historia Reiss",
    menu: "Salted Pasta with mushroom sauce",
    totalPayment: 100,
    status: "Preparing",
  },
  {
    pfpBg: "#9290FE",
    name: "Erwin Smith",
    menu: "Hot spicy fried rice with omelet",
    totalPayment: 135,
    status: "Completed",
  },
];

export const SummaryCards = [
  {
    icon: <Coin height={20} width={20} />,
    percentage: 32.4,
    arrow: <ArrowUp width={12} height={12} />,
    value: "$10,243.00",
    text: "Total Revenue",
    gain: "profit",
  },
  {
    icon: <Bookmark height={20} width={20} />,
    percentage: 12.4,
    arrow: <ArrowDown width={12} height={12} />,
    value: "23,456",
    text: "Total Dish Ordered",
    gain: "loss",
  },
  {
    icon: <TwoUser height={20} width={20} />,
    percentage: 2.4,
    arrow: <ArrowUp width={12} height={12} />,
    value: "1,234",
    text: "Total Customer",
    gain: "profit",
  },
];

export const DeliveryData: DeliveryDataType[] = [
  {
    shipmentNumber: "EV-2017002346",
    startAddressPartOne: "2972 Westheimer",
    startAddressPartTwo: "Rd. Santa Ana, Illinois 85486 ",
    endAddressPartOne: "8502 Preston ",
    endAddressPartTwo: "Rd. Inglewood, Maine 98380",
    clientName: "Darrell Steward",
    clientAddress: "Mariene, LTD",
    messageRecieved: "yes",
  },
  {
    shipmentNumber: "EV-2017003323",
    startAddressPartOne: "2972 Augustia ",
    startAddressPartTwo: "Rd. St Peters, Illinois 85486 ",
    endAddressPartOne: "8502 Preston ",
    endAddressPartTwo: "Rd. Westwood, Maine 98380",
    clientName: "Jenny Wilson",
    clientAddress: "Food State, LTD",
    messageRecieved: "no",
  },
  {
    shipmentNumber: "EV-2017002453",
    startAddressPartOne: "2972 Yokohama ",
    startAddressPartTwo: "Rd. Santa Ana, Tokyo 85486 ",
    endAddressPartOne: "8502 Preston ",
    endAddressPartTwo: "Rd. Akihabara, Yokyo 98380",
    clientName: "Mokey D. Luffy",
    clientAddress: "Mariene, LTD",
    messageRecieved: "no",
  },
];
