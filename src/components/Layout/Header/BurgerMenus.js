import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'next/link';

class BurgerMenus extends React.Component {
  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  render() {
    const openMobileMenu = (menu) => {
      document.querySelector('.sub-menu').classList.remove('menu-item-open');
      document.querySelector('.sub-menu.' + menu).classList.toggle('menu-item-open');
    };

    return (
      <Menu>
        <ul>
          <li className="has-droupdown">
            <span
              onClick={() => {
                openMobileMenu('home');
              }}
            >
              Home
            </span>
            <ul className="sub-menu home">
              <li>
                <Link href="/" as="/">
                  <a>Home 1</a>
                </Link>
              </li>
              <li>
                <Link href="/home-2" as="/home-2">
                  <a>Home 2</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/about" as="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="has-droupdown">
            <span
              onClick={() => {
                openMobileMenu('service');
              }}
            >
              Service
            </span>
            <ul className="sub-menu service">
              <li>
                <Link href="/service-1" as="/service-1">
                  <a>Service One</a>
                </Link>
              </li>
              <li>
                <Link href="/service-2" as="/service-2">
                  <a>Service Two</a>
                </Link>
              </li>
              <li>
                <Link href="/service-3" as="/service-3">
                  <a>Service Three</a>
                </Link>
              </li>
              <li>
                <Link href="/service-manage" as="/service-manage">
                  <a>Service Manage</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <span
              onClick={() => {
                openMobileMenu('blog');
              }}
            >
              Blog
            </span>
            <ul className="sub-menu blog">
              <li>
                <Link href="/blog" as="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link
                  href="/monthly-web-development-to-update-react-hooks-cons-wether-says-1"
                  as="/monthly-web-development-to-update-react-hooks-cons-wether-says-1"
                >
                  <a>blog details</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="has-droupdown">
            <span
              onClick={() => {
                openMobileMenu('pages');
              }}
            >
              Pages
            </span>
            <ul className="sub-menu pages">
              <li>
                <Link href="/case-1" as="/case-1">
                  <a>Case One</a>
                </Link>
              </li>
              <li>
                <Link href="/case-2" as="/case-2">
                  <a>Case Two</a>
                </Link>
              </li>
              <li>
                <Link href="/case-3" as="/case-3">
                  <a>Case Three</a>
                </Link>
              </li>
              <li>
                <Link href="/case-details" as="/case-details">
                  <a>Case Details</a>
                </Link>
              </li>
              <li>
                <Link href="/career" as="/career">
                  <a>Career</a>
                </Link>
              </li>
              <li>
                <Link href="/faq" as="/faq">
                  <a>Faq</a>
                </Link>
              </li>
              <li>
                <Link href="/goals" as="/goals">
                  <a>Goals</a>
                </Link>
              </li>
              <li>
                <Link href="/price" as="/price">
                  <a>Price</a>
                </Link>
              </li>
              <li>
                <Link href="/team" as="/team">
                  <a>Team</a>
                </Link>
              </li>
              <li>
                <Link href="/team-details" as="/team-details">
                  <a>Team Single</a>
                </Link>
              </li>
              <li>
                <Link href="/shop" as="/shop">
                  <a>Shop</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" as="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" as="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </Menu>
    );
  }
}

export default BurgerMenus;
