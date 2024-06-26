import { FC } from "react";

export type Tenant = {
  id: string;
  name: string;
  localizedName: string;
  isActive : boolean;
};
export type Roles = {
  id: string;
  name: string;
};
export type Collection = {
  id: number;
  type: string;
  name: string;
  localizedName: string;
  price: number;
  subCategoryName: string;
  description: string;
  pic: string;
  isActive: boolean;
};
export type Category = {
  id: number;
  name: string;
  localizedName: string;
  description: string;
  pic: string;
  isActive: boolean;
};
export type SubCategory = {
  id: number;
  name: string;
  localizedName: string;
  pic: string;
};
export type Item = {
  id: number;
  name: string;
  localizedName: string;
  price: number;
  subCategoryName: string;
  pic: string;
};
export type AdOnCategory = {
  id: number;
  addonName: string;
  localizedName: string;
  parentAddonId : number;
  maxSelection : number;
  itemsType : string;
};
export type AdOnItem = {
  id: number;
  name: string;
  localizedName: string;
  nextMoveId : number;
  price : number;
};
export type ClientPreference = {
  id: number;
  name: string;
  theme: string;
  language: string;
  logo: string;
  address: string;
  phone: string;
};
export type OrderDetails = {
  totalPrice: number;
  pic: string;
};
export type OrderItem = {
  itemId: number;
  itemName: string;
  price: number;
  quantity: number;
  adOnItems : AdOnItem[];
};
export type OrderData = {
  tableNumber: string;
  status: string;
  paymentType: string;
  deliveryType: string;
  customer: Customer;
  orderDetails: OrderItem[];
  discount: number;
  serviceCharges: number;
  note: string;
};
export type Customer = {
  id: number;
  name: string;
  localizedName: string;
  phone: string;
  homeNumber: string;
  postCode: string;
  street: string;
  town: string;
  email: string;
};
export type Coupon = {
  id: string;
  couponValue: string;
  type: string;
  couponFor: string;
  appliesTo: string;
  categories: string;
  codeLimit: number;
  perCustomerLimit: number;
  minimumOrderAmount: number;
};
export type Floor = {
  id: string;
  name: string;
};
export type Table = {
  id: string;
  name: string;
  floorId: number;
};
export type SideNavItem = {
  id: number;
  title: string;
  path: string;
  icon?: FC;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
};
