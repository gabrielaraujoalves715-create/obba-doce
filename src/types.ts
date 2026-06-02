/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Category {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
